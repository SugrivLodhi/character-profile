import React from "react";
import { useFetchEpisodeQuery } from "../redux/apiSlice";
interface SelectDropdownProps {
  selectedOption: string;
  setSelectedOption: (str: string) => void;
}

const SelectEpisode = ({
  selectedOption,
  setSelectedOption,
}: SelectDropdownProps) => {
  const {data} = useFetchEpisodeQuery("episode")
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
 
  return (
    <div className="w-64">
      <h3>Filter by Episode</h3>
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-gray-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="1">Select an Episode</option>
        {data?.results?.map((v: any) => (
          <option value={v.id}>{v?.episode}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectEpisode;
