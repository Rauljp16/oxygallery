import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <p className="shortLogo">OX</p>
      <p className="logo">OXYGALLERY </p>

      <a>
        <Link to="/">HOME</Link>
      </a>
      <a>
        <Link to="/Favoritos">FAVORITOS</Link>
      </a>
    </div>
  );
}

export default Navbar;
