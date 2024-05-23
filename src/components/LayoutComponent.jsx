import { Outlet } from "react-router-dom";
import Navbar from "../components/navbarComponents/Navbar";
import FooterComponent from "./footer/FooterComponent";
import ImagesComponent from "./imagesComponents/ImagesComponent";

function LayoutComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ImagesComponent />
      <FooterComponent />
    </div>
  );
}

export default LayoutComponent;
