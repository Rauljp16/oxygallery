// Favorite.jsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tags from "../components/tags/Tags";
import "./Favorite.css";
import downloadSvg from "../svg/download.svg";
import deleteSvg from "../svg/delete.svg";
import editSvg from "../svg/edit.svg";
import Order from "../components/order/Order";
import searchSvg from "../svg/search.svg";
import { useDispatch } from "react-redux";
import { setOrder } from "../features/searchImg/searchImgSlice";
import close from "../svg/close.svg";

function Favorite() {
  const [favoriteImages, setFavoriteImages] = useState([]);
  const orderValue = useSelector((state) => state.search.order);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [imgPopup, setImgPopup] = useState({});

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteImages")) || [];
    dispatch(setOrder("default"));
    setFavoriteImages(storedFavorites);
  }, []);

  useEffect(() => {
    if (orderValue) {
      orderBy();
    }
  }, [orderValue]);

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
    switch (orderValue) {
      case "width":
        imagesCopy.sort((a, b) => b.width - a.width);
        break;
      case "height":
        imagesCopy.sort((a, b) => b.height - a.height);
        break;
      case "likes":
        imagesCopy.sort((a, b) => b.likes - a.likes);
        break;
      default:
        imagesCopy = JSON.parse(localStorage.getItem("favoriteImages")) || [];
        break;
    }
    setFavoriteImages(imagesCopy);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteImages")) || [];
    if (inputValue.length > 0) {
      const filteredFavorites = storedFavorites.filter((image) =>
        image.alt_description.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (filteredFavorites.length === 0) {
        alert("No hay coincidencias.");
        setFavoriteImages(storedFavorites);
        setInputValue("");
      } else {
        setFavoriteImages(filteredFavorites);
      }
    } else {
      setFavoriteImages(storedFavorites);
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const clear = () => {
    if (inputValue != "") {
      orderBy();
      setInputValue("");
    }
  };
  const togglePopup = (image) => {
    setImgPopup(image);
    setIsOpen(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <section className="containerFilters">
        <input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
          className="searchInput"
          placeholder="  Search"
        />
        <p className="clear" onClick={clear}>
          X
        </p>
        <div className="containerButton">
          <img
            src={searchSvg}
            className="searchButton"
            onClick={handleSearch}
          />
        </div>
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
                onClick={() => togglePopup(image)}
              />
              <section className="iconsSvg">
                <img
                  src={downloadSvg}
                  className="download"
                  alt="download Svg"
                  onClick={() => console.log("Downloading...")}
                />
                <img src={editSvg} className="edit" alt="edit Svg" />
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
        {isOpen && (
          <section className="popup">
            <div className="popup__Info">
              <img
                className="popup__Img"
                src={imgPopup.urls.small}
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
                <p className="popup__dates__p">
                  DATE ADDED: {imgPopup.addedAt}
                </p>
                <p className="popup__dates__description">
                  DESCRIPTION: {imgPopup.alt_description}
                </p>
              </div>
            </div>
          </section>
        )}
      </section>
    </>
  );
}

export default Favorite;
