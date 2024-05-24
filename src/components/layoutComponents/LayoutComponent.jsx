import { Outlet } from "react-router-dom";
import Navbar from "../navbarComponents/Navbar";
import FooterComponent from "../footer/FooterComponent";
import "./LayoutComponent.css";

function LayoutComponent() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
        <FooterComponent />
      </div>
    </>
  );
}

export default LayoutComponent;
