import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import propertiesData from "../data/properties.json";
import FavouriteList from "../components/FavouriteList";
import "./SearchPage.css"; // import external CSS

function SearchPage() {
  const [results, setResults] = useState([]);

  const handleSearch = (criteria) => {
    const filteredProperties = propertiesData.properties.filter((property) => {
      if (criteria.type && property.type !== criteria.type) return false;

      if (
        property.price < criteria.price[0] ||
        property.price > criteria.price[1]
      )
        return false;

      if (
        criteria.bedrooms &&
        property.bedrooms < Number(criteria.bedrooms)
      )
        return false;

      if (criteria.dateAdded) {
        if (new Date(property.added) < criteria.dateAdded) return false;
      }

      if (
        criteria.postcode &&
        !property.postcode.startsWith(criteria.postcode)
      )
        return false;

      return true;
    });

    setResults(filteredProperties);
  };

  return (
    <div className="search-page">
      <div className="search-page-main">
        <SearchForm onSearch={handleSearch} />
        <PropertyList properties={results} />
      </div>

      <div className="search-page-sidebar">
        <FavouriteList />
      </div>
    </div>
  );
}

export default SearchPage;
