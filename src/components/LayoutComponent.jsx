import { Outlet } from "react-router-dom";
import Navbar from "../components/navbarComponents/Navbar";

function LayoutComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default LayoutComponent;
