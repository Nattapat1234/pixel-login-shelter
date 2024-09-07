import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ExerciseCategories from '../components/ExerciseCategories';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <ExerciseCategories />
      </main>
    </div>
  );
};

export default Index;