import { useState } from "react";
import "./Search.css";
import searchSvg from "../../svg/search.svg";
import { fetchSearchImgThunk } from "../../features/imagesApi/imagesThunk";
import { fetchImagesThunk } from "../../features/imagesApi/imagesThunk";
import { useDispatch } from "react-redux";

function Search() {
  const [order, setOrder] = useState("");
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.length > 0) {
      dispatch(fetchSearchImgThunk(inputValue));
    } else {
      dispatch(fetchImagesThunk());
      console.log("input vacio");
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <section className="search">
        <input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
          className="searchInput"
          placeholder="Search img"
        />
        <img src={searchSvg} className="searchButton" onClick={handleSearch} />
        <select
          id="select"
          className="searchSelect"
          value={order}
          label="Order"
          onChange={handleOrder}
        >
          <option value="">filter by...</option>
          <option value="width">width</option>
          <option value="height">height</option>
          <option value="likes">likes</option>
        </select>
      </section>
    </>
  );
}

export default Search;
