import { useState } from "react";
import "./ImageGallery.css";

function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="image-gallery">
      {/* Main Image */}
      <img src={mainImage} alt="Property" className="main-image" />

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`thumbnail-img ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
