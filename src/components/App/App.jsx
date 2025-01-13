import { useState, React, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

import { getPokemon } from "../../utils/pokeapi";

function App() {
  const [fade, setFade] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  function lowerName(input) {
    return input.toLowerCase();
  }

  const handleSearch = (input) => {
    return getPokemon(lowerName(input))
      .then((res) => {
        setCurrentPokemon(res);
        console.log(currentPokemon);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <div
      style={{
        opacity: fade ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
      className="app"
    >
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Card currentPokemon={currentPokemon} />
      <Footer />
    </div>
  );
}

export default App;
