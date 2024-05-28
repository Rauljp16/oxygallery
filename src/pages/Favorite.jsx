import { useEffect, useState } from "react";
import Search from "../components/search/Search";
import Tags from "../components/tags/Tags";
import "./Favorite.css";
import downloadSvg from "../svg/download.svg";
import deleteSvg from "../svg/delete.svg";
import editSvg from "../svg/edit.svg";
import Order from "../components/order/Order";

function Favorite() {
  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteImages")) || [];
    setFavoriteImages(storedFavorites);
  }, []);

  const toggleDelete = (imageDelete) => {
    if (favoriteImages.some((favImage) => favImage.id === imageDelete.id)) {
      const updatedFavorites = favoriteImages.filter(
        (favImage) => favImage.id !== imageDelete.id
      );
      setFavoriteImages(updatedFavorites);
      localStorage.setItem("favoriteImages", JSON.stringify(updatedFavorites));
    }
  };

  const orderBy = () => {
    let imagesCopy = [...favoriteImages];
    const orderBy = imagesCopy.sort((a, b) => a.width - b.width);
    setFavoriteImages(orderBy);
    console.log(orderBy);
  };

  return (
    <>
      <section className="containerFilters">
        <Search className="searchFav" />
        <Order />
      </section>
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
              <section className="iconsSvg">
                <img
                  src={downloadSvg}
                  className="download"
                  alt="download Svg"
                  onClick={() => orderBy()}
                />
                <img
                  src={editSvg}
                  className="edit"
                  alt="download Svg"
                  // onClick={() => toggleFavorite(image)}
                />
                <img
                  src={deleteSvg}
                  className="delete"
                  alt="delete Svg"
                  onClick={() => toggleDelete(image)}
                />
              </section>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default Favorite;
