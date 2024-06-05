import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import React, { useState, type ChangeEvent } from 'react';

import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from '../../@/components/ui/card';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchPokemon = async (): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=50'
    );

    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

const PokemonList: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const {
    error,
    isLoading,
    data: pokemonList,
  } = useQuery<Pokemon[]>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon,
    staleTime: 3600000, // Cache for 1 hour
  });

  if (isLoading)
    return <div className="flex justify-center items-center">Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center items-center">Error loading data</div>
    );

  const filteredPokemon = pokemonList?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Input
        type="text"
        value={filter}
        placeholder="Search Pokemon"
        className="mb-4 w-50 bg-white"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon?.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

interface PokemonCard {
  name: string;
}

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const {
    data: pokemon,
    error,
    isLoading,
  } = useQuery<PokemonDetail>({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <Card className="shadow-lg hover:shadow-2xl rounded-xl bg-gray-50 p-4">
      <CardHeader className="flex justify-center">
        <img
          alt={pokemon?.name}
          className="w-28 h-28"
          src={pokemon?.sprites.front_default}
        />
      </CardHeader>
      <CardContent className="text-center">
        <h3 className="text-lg font-bold">{pokemon?.name}</h3>
        <p className="text-gray-600">
          Type:{' '}
          {pokemon?.types.map((typeInfo) => typeInfo.type.name).join(', ')}
        </p>
      </CardContent>
    </Card>
  );
};

export default PokemonList;
