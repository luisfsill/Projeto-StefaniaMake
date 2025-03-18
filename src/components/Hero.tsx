import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="bg-white shadow-lg pt-16" id="inicio">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-48 h-48 relative mb-4">
          <img
            src="/images/Logo.png"
            alt="Stefânia Carvalho Make up Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-5xl font-great-vibes text-center text-pink-600 mt-4">
          Stefânia Carvalho Make Up
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Realçando sua beleza natural
        </p>
      </div>
    </header>
  );
};

export default Hero; 