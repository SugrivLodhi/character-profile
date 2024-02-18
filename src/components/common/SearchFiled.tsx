import React from "react";

interface SearchProps {
  setSearchCharacter: (str: string) => void;
  searchCharacter: string;
}

const SearchFiled: React.FC<SearchProps> = ({
  setSearchCharacter,
  searchCharacter,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(e.target.value);
  };
  return (
    <div className="ml-4 w-full mb-7">
      <input
        type="text"
        placeholder="Search..."
        value={searchCharacter}
        onChange={handleChange}
        className="px-2 py-1 text-black rounded border"
      />
    </div>
  );
};

export default SearchFiled;
