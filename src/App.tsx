import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/search/SearchBar';
import { Destinations } from './components/Destinations';
import { UserProfile } from './components/auth/UserProfile';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto px-4 -mt-16 relative z-20">
          <SearchBar />
          {user && <UserProfile />}
        </div>
        <Destinations />
      </main>
    </div>
  );
}