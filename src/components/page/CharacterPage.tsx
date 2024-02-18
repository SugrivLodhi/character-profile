// MainComponent.tsx

import React, { useEffect, useState } from "react";
import CharacterCard from "../common/CharacterCard";
import useGetCharacterProfile from "../../hooks/useGetProfile";
import { fetchCharacter } from "../../services/apiService";
import { APIResponse } from "../../types/profile";
import Pagination from "../Pagination";
import Loader from "../common/Loader";
import SearchFiled from "../common/SearchFiled";

const MainComponent: React.FC = () => {
  const defaultPage = 1;
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [searchCharacter, setSearchCharacter] = useState("");
  const params = `page=${currentPage}&name=${searchCharacter}`;
  const { data, isLoading } = useGetCharacterProfile(
    () => fetchCharacter(params),
    params
  );

  useEffect(() => {
    // Scrolls to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (isLoading) return <Loader />;
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto flex-grow p-4 overflow-y-scroll">
      <SearchFiled
        searchCharacter={searchCharacter}
        setSearchCharacter={setSearchCharacter}
      />
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
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
          handlePageChange(pageNumber);
        }}
      />
    </div>
  );
};

export default MainComponent;
