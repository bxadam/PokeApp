import { useState, React } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
