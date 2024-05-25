import "./ImagesComponent.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "../../features/imagesApi/imagesThunk";
import heartSvg from "../../svg/heart.svg";
import heartFavSvg from "../../svg/heartFav.svg";
import downloadSvg from "../../svg/download.svg";

function ImagesComponent() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [favoriteImages, setFavoriteImages] = useState([]);
  const dispatch = useDispatch();
  const imagesStatus = useSelector((state) => state.image.status);
  const imagesData = useSelector((state) => state.image.data);
  const imagesError = useSelector((state) => state.image.error);

  useEffect(() => {
    if (imagesStatus === "idle") {
      dispatch(fetchImagesThunk());
    } else if (imagesStatus === "fulfilled") {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favoriteImages")) || [];
      setFavoriteImages(storedFavorites);
      setImages(imagesData);
      setLoading(false);
    } else if (imagesStatus === "rejected") {
      setLoading(false);
      alert("Error loading images data");
      alert(imagesError);
    }
  }, [imagesStatus, dispatch, imagesData, imagesError]);

  const toggleFavorite = (image) => {
    const isFavorite = favoriteImages.some(
      (favImage) => favImage.id === image.id
    );
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favoriteImages.filter(
        (favImage) => favImage.id !== image.id
      );
    } else {
      updatedFavorites = [...favoriteImages, image];
    }

    setFavoriteImages(updatedFavorites);
    localStorage.setItem("favoriteImages", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      {loading ? (
        <p style={{ color: "white" }}>LOADING</p>
      ) : (
        <section className="imagesApi">
          {images.map((image) => (
            <div key={image.id} className="container">
              <img
                className="images"
                src={image.urls.small}
                alt={`Image ${image.id}`}
              />
              <img
                src={
                  favoriteImages.some((favImage) => favImage.id === image.id)
                    ? heartFavSvg
                    : heartSvg
                }
                className="heartSvg"
                alt="heart icon"
                onClick={() => toggleFavorite(image)}
              />
              <section className="iconsSvg">
                <img
                  src={downloadSvg}
                  className="downloadImg"
                  alt="download Svg"
                  // onClick={() => toggleFavorite(image)}
                />
              </section>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default ImagesComponent;
