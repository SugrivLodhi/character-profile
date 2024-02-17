// MainComponent.tsx

import React, { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Layout from "./components/common/Layout";
import useGetCharacterProfile from "./hooks/useGetProfile";
import { fetchCharacter } from "./services/apiService";
import { APIResponse } from "./types/profile";
import Pagination from "./components/Pagination";
import Loader from "./components/common/Loader";

const MainComponent: React.FC = () => {
  const defaultPage = 1;
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const { data, isLoading } = useGetCharacterProfile(
    () => fetchCharacter(currentPage),
    currentPage
  );
  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto flex-grow p-4 overflow-y-scroll">
      <div className="grid grid-cols-4 gap-4">
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
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={(pageNumber) => {
          setCurrentPage(pageNumber);
        }}
      />
    </div>
  );
};

export default MainComponent;
