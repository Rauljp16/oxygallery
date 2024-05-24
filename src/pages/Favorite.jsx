import { useEffect, useState } from "react";
import Search from "../components/search/Search";
import Tags from "../components/tags/Tags";
import "./Favorite.css";

function Favorite() {
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteImages")) || [];
    setFavoriteImages(storedFavorites);
  }, []);
  return (
    <div>
      <Search />
      <Tags />
      <section className="favoriteImages">
        {favoriteImages.length === 0 ? (
          <p className="alert">AÑADE IMAGENES A FAVORITOS</p>
        ) : (
          favoriteImages.map((image) => (
            <div key={image.id} className="container">
              <img
                className="images"
                src={image.urls.small}
                alt={`Favorite Image ${image.id}`}
              />
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Favorite;
