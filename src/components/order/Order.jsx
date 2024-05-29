import { useState } from "react";
import "./Order.css";
import { useDispatch } from "react-redux";
import { setOrder } from "../../features/searchImg/searchImgSlice";

function Order() {
  const [selectorValue, setSelectorValue] = useState("");
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const value = event.target.value;
    setSelectorValue(event.target.value);
    dispatch(setOrder(value));
  };
  return (
    <div className="containerOrder">
      <select
        id="select"
        className="searchSelect"
        value={selectorValue}
        label="Order"
        onChange={handleOrder}
      >
        <option value="default">Order by...</option>
        <option value="width">width</option>
        <option value="height">height</option>
        <option value="likes">likes</option>
      </select>
    </div>
  );
}

export default Order;
