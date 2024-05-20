import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <p>OXYGALLERY</p>

      <p>
        <Link to="/Favoritos">FAVORITOS</Link>
      </p>
      <p>
        <Link to="/">HOME</Link>
      </p>
    </>
  );
}

export default Navbar;
