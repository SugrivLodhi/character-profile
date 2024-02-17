// MainComponent.tsx

import React from "react";
import CharacterCard from "./components/CharacterCard";
import Layout from "./components/Layout";
import useGetCharacterProfile from "./hooks/useGetProfile";
import { fetchCharacter } from "./services/apiService";
import { APIResponse } from "./types/profile";

const MainComponent: React.FC = () => {
  const { data, isLoading } = useGetCharacterProfile(fetchCharacter);

  if (isLoading) return <div>Loading..</div>;

  // if(error) return <div>error is</div>

  return (
    <Layout>
      <div className="container mx-auto flex-grow p-4 overflow-y-scroll">
        <div className="grid grid-cols-3 gap-4">
          {(data as APIResponse)?.results?.map((character, index) => (
            <CharacterCard
              key={index}
              id={character.id}
              image={character.image}
              name={character.name}
              type={character.type}
              totalEpisodes={character.episode.length}
              location={character.name}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MainComponent;
