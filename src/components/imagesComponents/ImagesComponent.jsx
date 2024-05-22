import "./ImagesComponent.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesThunk } from "../../features/imagesApi/imagesThunk";

function ImagesComponent() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
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
  }, [imagesStatus]);

  console.log(imagesData);
  return (
    <>
      {loading ? (
        <p style={{ color: "white" }}>LOADING</p>
      ) : (
        <div className="containerImages">
          {images.map((image) => (
            <img
              className="containerImages__img"
              key={image.id}
              src={image.urls.small}
              alt={`Image ${image.id}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ImagesComponent;
