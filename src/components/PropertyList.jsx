import "./PropertyList.css";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties, onFavourite }) {
  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          addFavourite={onFavourite}
        />
      ))}
    </div>
  );
}

export default PropertyList;
