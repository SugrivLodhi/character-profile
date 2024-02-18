import React, { useEffect, useState } from "react";
import SelectEpisode from "../SelectEpisode";
import CharacterCard from "../common/CharacterCard";
import { fetchEpisode } from "../../services/apiService";
import NotFound from "../common/NotFound";

const EpisodePage = () => {
  const defaultOption = "1";
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await fetchEpisode(selectedOption);

      let result = await Promise.all(
        data?.characters?.map((v: any) => {
          return fetch(v).then((res) => res.json());
        })
      );
      setData(result);
    };
    fetchAllData();
  }, [selectedOption]);

  return (
    <div className="flex gap-6 flex-grow p-4 overflow-y-scroll">
      <SelectEpisode
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data?.length > 0 ? (
          (data as any)?.map((character: any, index: any) => (
            <CharacterCard
              key={index}
              id={character.id}
              image={character.image}
              name={character.name}
              type={character.type}
              totalEpisodes={character.episode.length}
              location={character.name}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default EpisodePage;
