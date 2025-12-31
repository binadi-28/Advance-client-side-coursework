import PropertyCard from "./PropertyCard";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <div className="property-grid">
      {properties.map((property) => (
        <div key={property.id} className="property-card-wrapper">
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
