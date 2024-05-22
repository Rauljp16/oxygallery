import { useState } from "react";
import "./Search.css";
import searchSvg from "../../svg/search.svg";

function Search() {
  const [order, setOrder] = useState("");

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <section className="search">
        <input className="searchInput" placeholder="Buscar img"></input>
        <img src={searchSvg} className="searchButton" />
        <select
          id="select"
          className="searchSelect"
          value={order}
          label="Order"
          onChange={handleChange}
        >
          <option value="">filtrar por...</option>
          <option value={"width"}>width</option>
          <option value={"height"}>height </option>
          <option value={"likes"}>likes</option>
        </select>
      </section>
    </>
  );
}

export default Search;
