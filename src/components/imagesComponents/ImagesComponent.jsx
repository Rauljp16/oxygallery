import "./ImagesComponent.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "../../features/imagesApi/imagesThunk";
import heartSvg from "../../svg/heart.svg";
import heartFavSvg from "../../svg/heartFav.svg";
import downloadSvg from "../../svg/download.svg";
import close from "../../svg/close.svg";
import FileSaver from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ImagesComponent() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [favoriteImages, setFavoriteImages] = useState([]);
  const [imgPopup, setImgPopup] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const imagesStatus = useSelector((state) => state.image.status);
  const imagesData = useSelector((state) => state.image.data);
  const imagesError = useSelector((state) => state.image.error);
  const searchStatus = useSelector((state) => state.search.status);
  const searchData = useSelector((state) => state.search.data);
  const searchError = useSelector((state) => state.search.error);

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

  useEffect(() => {
    if (searchStatus === "fulfilled") {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favoriteImages")) || [];
      setFavoriteImages(storedFavorites);
      setImages(searchData);
      setLoading(false);
    } else if (searchStatus === "rejected") {
      setLoading(false);
      alert("Error loading images data");
      alert(searchError);
    }
  }, [dispatch, searchData, searchError, searchStatus]);

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
      const date = new Date();
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const addDate = {
        ...image,
        addedAt: formattedDate,
      };
      updatedFavorites = [...favoriteImages, addDate];
    }

    setFavoriteImages(updatedFavorites);
    localStorage.setItem("favoriteImages", JSON.stringify(updatedFavorites));
  };

  const togglePopup = (image) => {
    setImgPopup(image);
    setIsOpen(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };
  const downloadImg = (image) => {
    FileSaver.saveAs(image.urls.full, "Image.jpg");
    toast.success("imagen descargada!", {
      position: "top-center",
      autoClose: 2001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: false,
    });
  };
  return (
    <>
      {loading ? (
        <p className="alert">LOADING</p>
      ) : (
        <section className="imagesApi">
          {images.map((image) => (
            <div key={image.id} className="container">
              <img
                className="images"
                src={image.urls.thumb}
                alt={`Image ${image.id}`}
                onClick={() => togglePopup(image)}
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
                  onClick={() => downloadImg(image)}
                />
              </section>
            </div>
          ))}
          {isOpen && (
            <section className="popup">
              <div className="popup__Info">
                <img
                  className="popup__Img"
                  src={imgPopup.urls.regular}
                  alt={`Image ${imgPopup.id}`}
                />
                <img
                  src={close}
                  className="popup__close"
                  alt="close Svg"
                  onClick={() => toggleClose()}
                />

                <div className="popup__dates">
                  <p className="popup__dates__p">WIDTH: {imgPopup.width}</p>
                  <p className="popup__dates__p">HEIGHT: {imgPopup.height}</p>
                  <p className="popup__dates__p">LIKES: {imgPopup.likes}</p>
                </div>
              </div>
            </section>
          )}
        </section>
      )}
      <ToastContainer />
    </>
  );
}

export default ImagesComponent;
