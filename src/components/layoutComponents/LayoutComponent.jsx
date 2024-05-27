import { Outlet } from "react-router-dom";
import Navbar from "../navbarComponents/Navbar";
import "./LayoutComponent.css";

function LayoutComponent() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default LayoutComponent;
