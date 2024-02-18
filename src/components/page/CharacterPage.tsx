// MainComponent.tsx

import React, { useEffect, useState } from "react";
import CharacterCard from "../common/CharacterCard";
import { fetchCharacter } from "../../services/apiService";
import Pagination from "../Pagination";
import SearchFiled from "../common/SearchFiled";
import NotFound from "../common/NotFound";
import { APIResponse } from "../../types/profile";
import { debounce } from "../../utils";
const MainComponent: React.FC = () => {
  const defaultPage = 1;
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [data, setData] = useState<APIResponse>();
  const [searchCharacter, setSearchCharacter] = useState("");
  const params = searchCharacter
    ? `page=${currentPage}&name=${searchCharacter}`
    : `page=${currentPage}`;

  // Fetch character profiles function
  const fetchData = () => {
    if (searchCharacter) {
      // Debounce the fetchCharacter function with a delay of 700ms
      debounce(() => fetchCharacter(params).then((data)=>{
        setData(data)
      }), 700)();
    } else {
      fetchCharacter(params).then((data)=>{
        setData(data)
      });
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts or when searchCharacter or currentPage changes
    // Scrolls to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPage,params,searchCharacter]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto flex-grow p-4 overflow-y-scroll">
      <SearchFiled
        searchCharacter={searchCharacter}
        setSearchCharacter={setSearchCharacter}
      />
      {(data as APIResponse)?.results?.length > 0 ? (
        <>
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
            totalPages={(data as APIResponse)?.info?.page}
            onPageChange={(pageNumber) => {
              handlePageChange(pageNumber);
            }}
          />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default MainComponent;
