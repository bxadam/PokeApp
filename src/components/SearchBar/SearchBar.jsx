import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({
  placeholder = "Search by Pokémon name or Number ID...",
  handleSearch,
}) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search__bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(input);
          setInput("");
        }}
        className="search__bar-form"
      >
        <input
          type="text"
          required
          className="search__input"
          placeholder={placeholder}
          value={input}
          onChange={handleInputChange}
        />
        <button className="search__button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
