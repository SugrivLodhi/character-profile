import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (pageNumber: number | string) => {
    if (pageNumber !== "..." && pageNumber !== currentPage) {
      onPageChange(pageNumber as number);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 7; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 5) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = 1; i <= 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        for (let i = totalPages - 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers.map((number, index) => (
      <span
        key={index}
        className={`cursor-pointer w-10 h-10 rounded-full flex items-center justify-center ${
          number === currentPage ? "bg-blue-500 text-white font-bold" : ""
        }`}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </span>
    ));
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center"
      >
        &gt;
      </button>
    </div>
  );
}
