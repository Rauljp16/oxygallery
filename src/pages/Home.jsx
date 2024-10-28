import ImagesComponent from "../components/imagesComponents/ImagesComponent";
import Search from "../components/search/Search";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="containerSearch">
        <Search />
      </div>
      <ImagesComponent />
    </div>
  );
}

export default Home;
