import React from "react";
import trainer from "../../assets/trainerB.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__trainer">
        <p className="footer__trainer-text">
          Trainer Brandon would like to develop!
        </p>
        <button className="footer__trainer-btn">ACCEPT</button>
      </div>
      <img className="footer__image" src={trainer} alt="trainer sprite" />
    </div>
  );
}

export default Footer;
