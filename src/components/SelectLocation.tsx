import React from "react";
import { useFetchLocationQuery } from "../redux/apiSlice";
interface SelectDropdownProps {
  selectedOption: string;
  setSelectedOption: (str: string) => void;
}

const SelecLocation = ({
  selectedOption,
  setSelectedOption,
}: SelectDropdownProps) => {
 const {data} =   useFetchLocationQuery("location")
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
 
  return (
    <div className="w-64">
      <h3>Filter by Location</h3>
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-gray-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="1">Select a Location </option>
        {data?.results?.map((v: any) => (
          <option value={v.id}>{v?.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelecLocation;
