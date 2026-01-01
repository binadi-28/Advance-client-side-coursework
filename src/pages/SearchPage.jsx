import { useState } from "react";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import propertiesData from "../data/properties.json";
import FavouriteList from "../components/FavouriteList";
import "./SearchPage.css";

function SearchPage() {
  // IMPORTANT: start with all properties
  const [results, setResults] = useState(propertiesData.properties);

  const handleSearch = (criteria) => {
    const filteredProperties = propertiesData.properties.filter((property) => {

      // TYPE
      if (criteria.type && property.type !== criteria.type) return false;

      // PRICE
      if (
        criteria.priceMin &&
        property.price < Number(criteria.priceMin)
      )
        return false;

      if (
        criteria.priceMax &&
        property.price > Number(criteria.priceMax)
      )
        return false;

      // BEDROOMS
      if (
        criteria.bedroomsMin &&
        property.bedrooms < Number(criteria.bedroomsMin)
      )
        return false;

      if (
        criteria.bedroomsMax &&
        property.bedrooms > Number(criteria.bedroomsMax)
      )
        return false;

      // DATE FROM
      if (
        criteria.dateAddedFrom &&
        new Date(property.added) < criteria.dateAddedFrom
      )
        return false;

      // DATE TO
      if (
        criteria.dateAddedTo &&
        new Date(property.added) > criteria.dateAddedTo
      )
        return false;

      // POSTCODE
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
