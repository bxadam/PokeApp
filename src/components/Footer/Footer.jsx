import "./Footer.css";

function Footer({ handleAccept }) {
  return (
    <div className="footer">
      <p className="footer__trainer-text">
        Trainer Brandon would like to develop!
      </p>
      <button onClick={handleAccept} className="footer__trainer-btn">
        ACCEPT
      </button>
    </div>
  );
}

export default Footer;
