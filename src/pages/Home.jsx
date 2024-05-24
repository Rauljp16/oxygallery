import ImagesComponent from "../components/imagesComponents/ImagesComponent";
import Search from "../components/search/Search";
import Tags from "../components/tags/Tags";

function Home() {
  return (
    <div>
      <Search />
      <Tags />
      <ImagesComponent />
    </div>
  );
}

export default Home;
