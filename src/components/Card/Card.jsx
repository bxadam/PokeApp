import "./Card.css";
import trainer from "../../assets/trainerB.png";

function Card({ currentPokemon }) {
  const handleReset = () => {
    console.log("Reset button clicked");
    window.location.reload();
  };

  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__header-title">
          {currentPokemon?.name === undefined
            ? "Brandon Adam"
            : currentPokemon?.name.toUpperCase()}
        </h2>
        <p className="card__header-id">
          {currentPokemon?.id === undefined ? "" : `#${currentPokemon?.id}`}
        </p>
      </div>
      <img
        src={
          currentPokemon?.sprites?.front_default
            ? currentPokemon?.sprites.front_default
            : `${trainer}`
        }
        alt="sprite"
        className="card__image"
      />
      <div className="card__stats">
        <p className="card__stat-ability">
          Ability:
          {currentPokemon?.abilities === undefined
            ? " HTML, CSS, Javascript, React, NPM, Webpack, Nginx, RestAPI"
            : ` ${currentPokemon?.abilities[0].ability.name},
                ${currentPokemon?.abilities[1].ability.name}`}
        </p>
        <p className="card__stat-metrics">
          Stats: Height:
          {currentPokemon?.height === undefined
            ? " 6'0"
            : ` ${currentPokemon?.height}`}{" "}
          ft - Weight:
          {currentPokemon?.weight === undefined
            ? " 155"
            : ` ${currentPokemon?.weight}`}{" "}
          lbs
        </p>
      </div>
      <div className="card__description">
        <p className="card__description-xp">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base XP: ${currentPokemon?.base_experience}`}
        </p>
        <p className="card__description-hp">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base HP: ${currentPokemon?.stats[0].base_stat}`}
        </p>
        <p className="card__description-attack">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base Attack: ${currentPokemon?.stats[1].base_stat}`}
        </p>
        <p className="card__description-defense">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base Defense: ${currentPokemon?.stats[2].base_stat}`}
        </p>
        <p className="card__description-special-attack">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base SP Attack: ${currentPokemon?.stats[3].base_stat}`}
        </p>
        <p className="card__description-special-defense">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base SP Defense: ${currentPokemon?.stats[4].base_stat}`}
        </p>
        <p className="card__description-speed">
          {currentPokemon?.base_experience === undefined
            ? ""
            : `Base Speed: ${currentPokemon?.stats[5].base_stat}`}
        </p>
      </div>
      <button onClick={handleReset} className="card__btn-reset">
        Reset
      </button>
    </div>
  );
}

export default Card;
