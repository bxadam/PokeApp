import Pokeball from "../../assets/Pokeball.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={Pokeball} alt="Pokeball" className="header__image" />
      <h1 className="header__title">Pokédex</h1>
      <img src={Pokeball} alt="Pokeball" className="header__image" />
    </div>
  );
}

export default Header;
