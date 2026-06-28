import React from 'react';
import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-md" />
          <div className="font-semibold text-lg">RealEstatePro</div>
        </div>

       
        <div className="space-x-4 flex items-center">
          <a className="text-sm hover:underline" href="/">Buy</a>
          <a className="text-sm hover:underline" href="#">Rent</a>
          <a className="text-sm hover:underline" href="#">Agents</a>
          <a className="text-sm hover:underline" href="/about">About</a>
          <a className="text-sm hover:underline" href="#">Contact</a>

         
          {user ? (
            <button
              onClick={signOut}
              className="ml-2 px-3 py-1 rounded bg-red-500 text-white text-sm"
            >
              Sign Out ({user.email})
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="ml-2 px-3 py-1 rounded bg-indigo-600 text-white text-sm"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
