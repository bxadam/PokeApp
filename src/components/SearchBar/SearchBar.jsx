import React, { useState } from "react";
import "./SearchBar.css";
import { getPokemon } from "../../utils/pokeapi";

const SearchBar = (
  { placeholder = "Search by Pokémon name or Number ID..." },
  pokemonData
) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  function lowerName(input) {
    return input.toLowerCase();
  }

  const handleSearch = () => {
    //search for pokemon by API
    return getPokemon(lowerName(input))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
