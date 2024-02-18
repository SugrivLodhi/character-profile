// CharacterCard.tsx

import React from "react";
import { Link } from "react-router-dom";
interface Character {
  id?: number;
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
      <div className="max-w-sm rounded overflow-hidden card-shadow h-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-70">
        <img
          className="w-full transition duration-700 ease-in-out"
          title={name}
          src={image}
          alt={name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 font-semibold text-sm mb-2">
            Type:{" "}
            <span className="text-gray-700 font-normal text-sm">{type}</span>
          </p>
          <p className="text-gray-700 font-semibold text-sm mb-2">
            Total Episodes:{" "}
            <span className="text-gray-700 font-normal text-sm">
              {totalEpisodes}
            </span>
          </p>
          <p className="text-gray-700 font-semibold text-sm mb-2">
            Location:{" "}
            <span className="text-gray-700 font-normal text-sm">
              {location}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
