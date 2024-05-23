import "./ImagesComponent.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "../../features/imagesApi/imagesThunk";
import heartSvg from "../../svg/heart.svg";
import heartFavSvg from "../../svg/heartFav.svg";

function ImagesComponent() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [favoriteImages, setFavoriteImages] = useState({});
  const dispatch = useDispatch();
  const imagesStatus = useSelector((state) => state.image.status);
  const imagesData = useSelector((state) => state.image.data);
  const imagesError = useSelector((state) => state.image.error);

  useEffect(() => {
    if (imagesStatus === "idle") {
      dispatch(fetchImagesThunk());
    } else if (imagesStatus === "fulfilled") {
      setImages(imagesData);
      setLoading(false);
    } else if (imagesStatus === "rejected") {
      setLoading(false);
      alert("error imagesData");
      alert(imagesError);
    }
  }, [imagesStatus, dispatch, imagesData, imagesError]);

  const toggleFavorite = (imageId) => {
    setFavoriteImages((prevFavorites) => ({
      ...prevFavorites,
      [imageId]: !prevFavorites[imageId],
    }));
  };
  console.log(favoriteImages);
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
                src={favoriteImages[image.id] ? heartFavSvg : heartSvg}
                className="heartSvg"
                alt="heart icon"
                onClick={() => toggleFavorite(image.id)}
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default ImagesComponent;
