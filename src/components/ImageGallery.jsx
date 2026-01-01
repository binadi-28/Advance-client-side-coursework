import { useState } from "react";
import "./ImageGallery.css";

function ImageGallery({ images = [] }) {
  // Initialize mainImage directly from the first image
  const [mainImage, setMainImage] = useState(images[0] || "");

  return (
    <div className="image-gallery">
      {/* MAIN IMAGE */}
      <div className="main-image-wrapper">
        {mainImage && (
          <img src={mainImage} alt="Property" className="main-image" />
        )}
      </div>

      {/* THUMBNAILS */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail-img ${mainImage === img ? "active" : ""}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
