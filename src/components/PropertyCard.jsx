import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const { addFavourite } = useFavourites();

  return (
    <Card
      className="property-card"
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData("property", JSON.stringify(property))
      }
    >
      <CardMedia
        component="img"
        height="180"
        image={property.images[0]}
        alt={property.type}
      />

      <CardContent className="property-card-content">
        <Typography variant="h6" className="property-card-title">
          £{property.price.toLocaleString()}
        </Typography>

        <Typography variant="body2" className="property-card-subtitle">
          {property.type} · {property.bedrooms} bedrooms
        </Typography>

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
