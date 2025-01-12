import { useState, React, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../Card/Card";

function App() {
  const [fade, setFade] = useState(false);

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
      <SearchBar></SearchBar>
      <Card />
    </div>
  );
}

export default App;
