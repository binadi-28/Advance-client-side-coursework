import { useState } from "react";
import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import TabsSection from "../components/TabsSection";
import "./PropertyPage.css";

function PropertyPage() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  const [mainImage, setMainImage] = useState(
    property?.images?.[0] || ""
  );

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="property-page">
      {/* TOP SECTION */}
      <div className="property-top-section">
        {/* LEFT: IMAGES */}
        <div className="property-left">
          <div className="property-images">
            <div className="main-image-box">
              <img
                src={mainImage}
                alt="Main Property"
                className="main-image"
              />
            </div>

            <div className="thumbnail-images">
              {property.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail-img ${
                    mainImage === img ? "active" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: DETAILS + TABS */}
        <div className="property-right">
          <h2 className="property-type">{property.type}</h2>
          <h3 className="property-price">
            £{property.price.toLocaleString()}
          </h3>

          <div className="property-meta">
            <span>🛏 {property.bedrooms} Bedrooms</span>
            <span>📍 {property.postcode}</span>
            <span>📅 {property.added}</span>
          </div>

          {/* TABS SECTION (CRITICAL FOR MARKS) */}
          <TabsSection
            description={property.description}
            floorPlan={property.floorPlan}
            mapUrl={property.mapUrl}
          />

          <button className="contact-button">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
