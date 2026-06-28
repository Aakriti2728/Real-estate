import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/SignUp';
import { AuthProvider } from './components/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen flex flex-col">
                <main className="flex-grow">
                  <Hero />
                  <div className="max-w-6xl mx-auto px-4 py-8">
                    <Listings />
                  </div>
                </main>
                <Footer />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* ✅ New Sign Up route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
