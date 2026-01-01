import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [bedroomsMin, setBedroomsMin] = useState("");
  const [bedroomsMax, setBedroomsMax] = useState("");
  const [dateAddedFrom, setDateAddedFrom] = useState(null);
  const [dateAddedTo, setDateAddedTo] = useState(null);
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send all search criteria to parent
    onSearch({
      type,
      priceMin,
      priceMax,
      bedroomsMin,
      bedroomsMax,
      dateAddedFrom,
      dateAddedTo,
      postcode,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="search-form">
      <Typography className="search-form-title">
        Search Properties
      </Typography>

      {/* Property Type */}
      <TextField
        select
        label="Property Type"
        fullWidth
        margin="dense"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <MenuItem value="">Any</MenuItem>
        <MenuItem value="House">House</MenuItem>
        <MenuItem value="Flat">Flat</MenuItem>
      </TextField>

      {/* Price Min / Max */}
      <Box className="two-inputs">
        <TextField
          label="Min Price (£)"
          type="number"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
          fullWidth
        />
        <TextField
          label="Max Price (£)"
          type="number"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
          fullWidth
        />
      </Box>

      {/* Bedrooms Min / Max */}
      <Box className="two-inputs">
        <TextField
          label="Min Bedrooms"
          type="number"
          value={bedroomsMin}
          onChange={(e) => setBedroomsMin(e.target.value)}
          fullWidth
        />
        <TextField
          label="Max Bedrooms"
          type="number"
          value={bedroomsMax}
          onChange={(e) => setBedroomsMax(e.target.value)}
          fullWidth
        />
      </Box>

      {/* Date Added */}
      <Box className="two-inputs date-picker-container">
        <DatePicker
          selected={dateAddedFrom}
          onChange={(date) => setDateAddedFrom(date)}
          placeholderText="Date From"
          dateFormat="yyyy-MM-dd"
          className="date-input"
        />
        <DatePicker
          selected={dateAddedTo}
          onChange={(date) => setDateAddedTo(date)}
          placeholderText="Date To"
          dateFormat="yyyy-MM-dd"
          className="date-input"
        />
      </Box>

      {/* Postcode */}
      <TextField
        label="Postcode Area"
        value={postcode}
        onChange={(e) =>
          setPostcode(e.target.value.toUpperCase().slice(0, 3))
        }
        placeholder="e.g. BR1"
        fullWidth
        margin="dense"
      />

      {/* Search Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="search-button"
        fullWidth
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchForm;
