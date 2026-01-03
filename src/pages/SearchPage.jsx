import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import Favorites from "../components/Favorites";
import propertiesData from "../data/properties.json";
import "./SearchPage.css";

function SearchPage() {
  const [results, setResults] = useState(propertiesData.properties);
  const [favourites, setFavourites] = useState([]);

  // Filter properties
  const handleSearch = (criteria) => {
    const filteredProperties = propertiesData.properties.filter((property) => {
      if (criteria.type && property.type !== criteria.type) return false;
      if (criteria.priceMin && property.price < Number(criteria.priceMin))
        return false;
      if (criteria.priceMax && property.price > Number(criteria.priceMax))
        return false;
      if (criteria.bedroomsMin && property.bedrooms < Number(criteria.bedroomsMin))
        return false;
      if (criteria.bedroomsMax && property.bedrooms > Number(criteria.bedroomsMax))
        return false;
      if (criteria.postcode && !property.postcode.startsWith(criteria.postcode))
        return false;
      return true;
    });
    setResults(filteredProperties);
  };

  // Add favourite (no duplicates)
  const addFavourite = (property) => {
    if (!favourites.find((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  // Remove favourite
  const removeFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  // Clear all favourites
  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <div className="search-page">
      <div className="search-page-main">
        <SearchForm onSearch={handleSearch} />
        <PropertyList
          properties={results}
          onFavourite={addFavourite} // click + drag works
        />
      </div>

      <div className="search-page-sidebar">
        <Favorites
          favourites={favourites}
          onRemove={removeFavourite}
          onClear={clearFavourites}
          onDrop={addFavourite} // drag-and-drop handler
        />
      </div>
    </div>
  );
}

export default SearchPage;
