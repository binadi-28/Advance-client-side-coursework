import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const { addFavourite } = useFavourites();

  // short description (first 90 characters)
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
        height="180"
        image={property.images[0]}
        alt={property.type}
      />

      <CardContent className="property-card-content">
        {/* TYPE + BEDROOMS */}
        <Typography variant="subtitle2" className="property-card-type">
          {property.type} · {property.bedrooms} Bedrooms
        </Typography>

        {/* PRICE */}
        <Typography variant="h6" className="property-card-price">
          £{property.price.toLocaleString()}
        </Typography>

        {/* SHORT DESCRIPTION */}
        <Typography variant="body2" className="property-card-description">
          {shortDescription}
        </Typography>

        {/* BUTTONS */}
        <div className="property-card-buttons">
          <Button
            variant="contained"
            size="small"
            onClick={() => addFavourite(property)}
          >
            ❤️ Favourite
          </Button>

          <Button
            component={Link}
            to={`/property/${property.id}`}
            variant="outlined"
            size="small"
          >
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
