import ImagesComponent from "../components/imagesComponents/ImagesComponent";
import Search from "../components/search/Search";
import Tags from "../components/tags/Tags";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="containerSearch">
        <Search />
      </div>
      <Tags />
      <ImagesComponent />
    </div>
  );
}

export default Home;
