import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search"
        onChange={e => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full max-w-md"
      />
    </div>
  );
}

export default SearchBar;
