import React from 'react'

const SearchFiled:React.FC = () => {
  return (
    <div className="ml-4 w-full">
      <input
      type="search"
      placeholder="Search..."
      className="px-2 py-1 rounded w-9/12"
      // Add necessary event handlers and state to handle search functionality
    />
  </div>
  )
}

export default SearchFiled