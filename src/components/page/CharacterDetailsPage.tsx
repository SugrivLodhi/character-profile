import React from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../types/profile";
import Loader from "../common/Loader";
import { useFetchSingleCharaterQuery } from "../../redux/apiSlice";

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetchSingleCharaterQuery(id)
  const character = data as Character;
  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-7 flex-col md:flex-row ">
        <div className="w-auto">
          <img
            src={character?.image}
            alt={character?.name}
            className="mb-4 min-w-40"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{character?.name}</h1>
          <p>Status: {character?.status}</p>
          <p>Origin: {character?.origin?.name}</p>
          <p>Location: {character?.location?.name}</p>
          <p>Gender: {character?.gender}</p>
          <h2 className="text-xl font-semibold mt-4">Episodes:</h2>
          <ul className="divide-y divide-gray-200 flex flex-wrap">
            {character?.episode?.map((episode, index) => (
              <li key={episode} className="">
                <span className="block py-2 px-4 text-blue-600 hover:bg-gray-200">
                  {`Episode ${index + 1}`}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <span className="text-blue-500 hover:underline">
              Click URL Link
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
