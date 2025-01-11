import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({
  placeholder = "Search by Pokémon name or ID...",
  onSearch,
}) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    //search for pokemon by API
  };

  return (
    <div className="search__bar">
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
        value={input}
        onChange={handleInputChange}
      />
      <button className="search__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
