import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <p className="shortLogo">OX</p>
      <p className="logo">OXYGALLERY </p>

      <div className="linkNavbar">
        <p>
          <Link to="/">HOME</Link>
        </p>
        <p>
          <Link to="/Favorite">FAVORITOS</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
