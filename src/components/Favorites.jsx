import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import "./Favorites.css";

function Favorites({ favourites, onRemove, onClear, onDrop }) {
  // Allow drop into favourites
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  // Drop property into favourites
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("property");
    if (data) {
      const property = JSON.parse(data);
      onDrop(property);
    }
  };

  // Drag start from favourites (to remove on drag-out)
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("remove-id", id);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="favorites-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Typography variant="h5" className="favorites-title">
        Favourites ({favourites.length})
      </Typography>

      {favourites.length > 0 && (
        <Button
          size="small"
          color="secondary"
          className="clear-btn"
          onClick={onClear}
          style={{ marginBottom: "10px" }}
        >
          Clear All
        </Button>
      )}

      {favourites.length === 0 && (
        <Typography variant="body2" className="no-favourites">
          Drag a property here or click ❤️ to add
        </Typography>
      )}

      {favourites.map((property) => (
        <Card
          key={property.id}
          className="favorite-card"
          draggable
          onDragStart={(e) => handleDragStart(e, property.id)}
        >
          <CardMedia
            component="img"
            height="120"
            image={property.images[0]}
            alt={property.type}
          />

          <CardContent className="favorite-card-content">
            <Typography variant="subtitle2" className="favorite-type">
              {property.type} · {property.bedrooms} Beds
            </Typography>

            <Typography variant="body1" className="favorite-price">
              £{property.price.toLocaleString()}
            </Typography>

            <Button
              size="small"
              color="error"
              className="remove-button"
              onClick={() => onRemove(property.id)}
            >
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Favorites;
