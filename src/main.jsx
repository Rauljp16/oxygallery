import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import LayoutComponent from "./components/layoutComponents/LayoutComponent.jsx";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutComponent />}>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
