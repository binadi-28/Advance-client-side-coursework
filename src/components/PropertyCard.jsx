import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const { addFavourite } = useFavourites();

  // Short description (first 90 characters)
  const shortDescription =
    property.description.length > 90
      ? property.description.slice(0, 90) + "..."
      : property.description;

  return (
    <Card
      className="property-card"
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData("property", JSON.stringify(property))
      }
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={property.images[0]}
        alt={property.type}
      />

      {/* CONTENT */}
      <CardContent className="property-card-content">
        {/* TYPE + BEDROOMS */}
        <Typography variant="subtitle2" className="property-card-subtitle">
          {property.type} · {property.bedrooms} Bedrooms
        </Typography>

        {/* PRICE */}
        <Typography variant="h6" className="property-card-title">
          £{property.price.toLocaleString()}
        </Typography>

        {/* DESCRIPTION */}
        <Typography variant="body2" className="property-card-subtitle">
          {shortDescription}
        </Typography>

        {/* BUTTONS */}
        <div className="property-card-buttons">
          <Button
            variant="contained"
            size="small"
            className="property-card-button"
            onClick={() => addFavourite(property)}
          >
            ❤️ Favourite
          </Button>

          <Button
            component={Link}
            to={`/property/${property.id}`}
            variant="outlined"
            size="small"
            className="property-card-button"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
