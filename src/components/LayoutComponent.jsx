import { Outlet } from "react-router-dom";
import Navbar from "../components/navbarComponents/Navbar";
import ImagesComponent from "./imagesComponents/ImagesComponent";

function LayoutComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ImagesComponent />
    </div>
  );
}

export default LayoutComponent;
