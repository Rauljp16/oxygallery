import { useState } from "react";
import "./Search.css";
import searchSvg from "../../svg/search.svg";
import { fetchSearchImgThunk } from "../../features/imagesApi/imagesThunk";
import { fetchImagesThunk } from "../../features/imagesApi/imagesThunk";
import { useDispatch } from "react-redux";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.length > 0) {
      dispatch(fetchSearchImgThunk(inputValue));
    } else {
      dispatch(fetchImagesThunk());
    }
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const deleteInput = () => {
    setInputValue("");
    dispatch(fetchImagesThunk());
  };

  return (
    <>
      <section className="search">
        <input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
          className="searchInput"
          placeholder="  Search"
        />
        <p className="deleteInput" onClick={deleteInput}>
          Clear search
        </p>

        <div className="containerButton">
          <img
            src={searchSvg}
            className="searchButton"
            onClick={handleSearch}
          />
        </div>
      </section>
    </>
  );
}

export default Search;
