import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import Favorites from "../components/Favorites";
import propertiesData from "../data/properties.json";
import "./SearchPage.css";

function SearchPage() {
  const [results, setResults] = useState(propertiesData.properties);
  const [favourites, setFavourites] = useState([]);

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

  const addFavourite = (property) => {
    if (!favourites.find((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  return (
    <div className="search-page">
      <div className="search-page-main">
        <SearchForm onSearch={handleSearch} />
        <PropertyList properties={results} onFavourite={addFavourite} />
      </div>

      <div className="search-page-sidebar">
        <Favorites
          favourites={favourites}
          onRemove={removeFavourite}
          onClear={clearFavourites}
          onDrop={addFavourite}
        />
      </div>
    </div>
  );
}

export default SearchPage;
