import React, { useEffect, useState } from "react";
import CharacterCard from "../common/CharacterCard";
import SelecLocation from "../SelectLocation";
import NotFound from "../common/NotFound";
import { useFetchLocationBynameQuery } from "../../redux/apiSlice";

const LocationPage = () => {
  const defaultOption = "1";
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [data, setData] = useState<any>([]);
 const { data:locationByname } = useFetchLocationBynameQuery(selectedOption ||"locationByname")
 
  useEffect(() => {
    const fetchAllData = async () => {
      let result = await Promise.all(
        locationByname?.residents?.map((v: any) => {
          return fetch(v).then((res) => res.json());
        })
      );
      setData(result);
    };
    fetchAllData();
  }, [selectedOption]);

  return (
    <div className="flex gap-6 flex-col flex-grow p-4 overflow-y-scroll">
      <SelecLocation
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

export default LocationPage;
