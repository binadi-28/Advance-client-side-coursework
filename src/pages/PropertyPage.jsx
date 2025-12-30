import { useParams } from "react-router-dom";
import propertiesData from "../data/properties.json";
import { Typography, Card, CardMedia, Button } from "@mui/material";
import "./PropertyPage.css";

function PropertyPage() {
  const { id } = useParams();

  // Find the property by ID
  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="property-page">
      <Typography variant="h4" className="property-title">
        {property.type} - £{property.price.toLocaleString()}
      </Typography>

      <Typography variant="subtitle1" className="property-subtitle">
        {property.bedrooms} bedrooms · {property.postcode}
      </Typography>

      {/* Images */}
      <div className="property-images">
        {property.images.map((img, index) => (
          <Card key={index} className="property-image-card">
            <CardMedia
              component="img"
              height="140"
              image={img}
              alt={`${property.type} ${index + 1}`}
            />
          </Card>
        ))}
      </div>

      {/* Description */}
      <Typography variant="body1" gutterBottom>
        {property.description}
      </Typography>

      {/* Floor Plan */}
      {property.floorPlan && (
        <div className="property-floorplan">
          <Typography variant="h6">Floor Plan</Typography>
          <Card className="floorplan-card">
            <CardMedia component="img" image={property.floorPlan} alt="Floor Plan" />
          </Card>
        </div>
      )}

      {/* Map */}
      {property.mapUrl && (
        <div className="property-map">
          <Typography variant="h6">Location</Typography>
          <iframe
            src={property.mapUrl}
            allowFullScreen=""
            loading="lazy"
            title="Property Map"
          ></iframe>
        </div>
      )}

      <Button variant="contained" className="contact-button">
        Contact Agent
      </Button>
    </div>
  );
}

export default PropertyPage;
