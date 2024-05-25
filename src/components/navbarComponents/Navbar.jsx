import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <p className="shortLogo">OX</p>
      <p className="logo">OXYGALLERY </p>

      <div className="linkNavbar">
        {location.pathname === "/" ? (
          <p>
            <Link to="/Favorite">GO TO FAVORITE</Link>
          </p>
        ) : (
          <p>
            <Link to="/">GO TO HOME</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Navbar;
