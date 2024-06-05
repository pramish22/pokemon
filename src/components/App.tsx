import type React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import PokemonList from './PokemonList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
