// CharacterDetailsPage.tsx

import React from "react";
import useGetCharacterProfile from "../hooks/useGetProfile";
import { fetchSingleCharacter } from "../services/apiService";
import { useParams } from "react-router-dom";
import { Character } from "../types/profile";
import Loader from "./common/Loader";

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCharacterProfile(() =>
    fetchSingleCharacter(id)
  );
  const character = data as Character;

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-7">
        <div className="w-auto">
          <img src={character?.image} alt={character?.name} className="mb-4" />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{character?.name}</h1>
          <p>Status: {character?.status}</p>
          <p>Origin: {character?.origin.name}</p>
          <p>Location: {character?.location.name}</p>
          <p>Gender: {character?.gender}</p>
          <h2 className="text-xl font-semibold mt-4">Episodes:</h2>
          <ul>
            {character?.episode?.map((episode, index) => (
              <li key={episode}>{episode}</li>
            ))}
          </ul>
          <p>
            URL:{" "}
            <a href={character?.url} target="_blank" rel="noopener noreferrer">
              {character?.url}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
