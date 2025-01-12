import React from "react";
import "./Card.css";

function Card() {
  const handleReset = () => {
    console.log("Reset button clicked");
    window.location.reload();
  };

  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__header-title">Wooper</h2>
        <p className="card__header-id">#29</p>
      </div>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//194.png"
        alt="Wooper"
        className="card__image"
      />
      <div className="card__stats">
        <p className="card__stat-ability">
          Ability: Damp, Water Absord, Unaware
        </p>
        <p className="card__stat-metrics">
          Stats: Height 0.4 m (1′04″) Weight 8.5 kg (18.7 lbs)
        </p>
      </div>
      <p className="card__description">
        Wooper is a small Pokémon with a large head and beady black eyes with
        white pupils. It has no arms, stubby feet with no legs, a comparatively
        long tail, and spiky antennae jutting out from its head, on which are
        four branches that function as gills. Most of its body is a pale blue,
        including its tail, feet, and head - its eyes, gills, the patterns on
        its stomach, and the inside of its mouth are the sole exceptions.
      </p>
      <button onClick={handleReset} className="card__btn-reset">
        Reset
      </button>
    </div>
  );
}

export default Card;
