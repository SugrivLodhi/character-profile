import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-23 w-23 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;
