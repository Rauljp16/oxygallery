import { useState } from "react";
import "./Order.css";

function Order() {
  const [order, setOrder] = useState("");

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <div className="containerOrder">
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
    </div>
  );
}

export default Order;
