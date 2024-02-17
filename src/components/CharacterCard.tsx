// CharacterCard.tsx

import React from "react";
import { Link } from "react-router-dom";
interface Character {
  id?:number
  image: string;
  name: string;
  type: string;
  totalEpisodes: number;
  location: string;
}

const CharacterCard: React.FC<Character> = ({
  id,
  image,
  name,
  type,
  totalEpisodes,
  location,

}) => {
  return (
    <Link to={`/character/${id}`}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">Type: {type}</p>
        <p className="text-gray-700 text-base mb-2">
          Total Episodes: {totalEpisodes}
        </p>
        <p className="text-gray-700 text-base mb-2">Location: {location}</p>
      </div>
    </div>
    </Link>
  );
};

export default CharacterCard;
