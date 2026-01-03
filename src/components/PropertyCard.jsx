import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property, addFavourite }) {
  const shortDescription =
    property.description.length > 90
      ? property.description.slice(0, 90) + "..."
      : property.description;

  // Trigger drag start
  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property));
  };

  return (
    <Card
      className="property-card"
      draggable
      onDragStart={handleDragStart}
    >
      <CardMedia
        component="img"
        height="180"
        image={property.images[0]}
        alt={property.type}
      />

      <CardContent className="property-card-content">
        <Typography variant="subtitle2" className="property-card-type">
          {property.type} · {property.bedrooms} Bedrooms
        </Typography>

        <Typography variant="h6" className="property-card-price">
          £{property.price.toLocaleString()}
        </Typography>

        <Typography variant="body2" className="property-card-description">
          {shortDescription}
        </Typography>

        <div className="property-card-buttons">
          <Button
            variant="contained"
            size="small"
            className="favourite-btn"
            onClick={() => addFavourite(property)}
          >
            ❤️ Favourite
          </Button>

          <Button
            component={Link}
            to={`/property/${property.id}`}
            variant="outlined"
            size="small"
            className="view-btn"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
