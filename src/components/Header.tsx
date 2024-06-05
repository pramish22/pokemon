import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-50 text-black p-4 border-b-2 sticky top-0">
      <nav className="container mx-auto flex justify-between items-center">
        <img
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer"
          src="https://assets.stickpng.com/images/612ce4761b9679000402af1c.png"
        />
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
