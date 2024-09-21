import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-[#9ad0ff] shadow-md rounded-lg overflow-hidden w-80 h-40 mx-auto flex flex-row justify-start items-center p-4">
      <img
        className="w-1/3 h-full object-cover"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <div className="p-4 flex-grow">
        <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokemonCard;
