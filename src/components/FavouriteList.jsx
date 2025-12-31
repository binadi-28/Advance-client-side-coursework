import { useFavourites } from "../context/FavouritesContext";
import { Button } from "@mui/material";
import "./FavouriteList.css"; // import the CSS file

function FavouriteList() {
  const {
    favourites,
    addFavourite,
    removeFavourite,
    clearFavourites,
  } = useFavourites();

  return (
    <div
      className="favourite-list"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const data = JSON.parse(e.dataTransfer.getData("property"));
        addFavourite(data);
      }}
    >
      <h3>Favourites</h3>

      {favourites.length === 0 && <p>No favourites yet</p>}

      <ul>
        {favourites.map((property) => (
          <li key={property.id}>
            £{property.price.toLocaleString()} – {property.type}
            <Button
              size="small"
              color="error"
              onClick={() => removeFavourite(property.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      {favourites.length > 0 && (
        <Button variant="outlined" color="error" onClick={clearFavourites}>
          Clear All
        </Button>
      )}
    </div>
  );
}

export default FavouriteList;

