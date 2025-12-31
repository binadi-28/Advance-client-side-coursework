import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Slider,
  Typography,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [type, setType] = useState("");
  const [price, setPrice] = useState([0, 1000000]);
  const [bedroomsMin, setBedroomsMin] = useState("");
  const [bedroomsMax, setBedroomsMax] = useState("");
  const [dateAddedFrom, setDateAddedFrom] = useState(null);
  const [dateAddedTo, setDateAddedTo] = useState(null);
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      type,
      price,
      bedroomsMin,
      bedroomsMax,
      dateAddedFrom,
      dateAddedTo,
      postcode,
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="search-form">
      <Typography variant="h6" className="search-form-title">
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

      {/* Price Range */}
      <Typography gutterBottom>Price Range (£)</Typography>
      <Slider
        value={price}
        onChange={(e, newValue) => setPrice(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={1000000}
        step={50000}
      />

      {/* Bedrooms Min/Max */}
      <Box display="flex" gap={1} mb={2}>
        <TextField
          select
          label="Min Bedrooms"
          fullWidth
          margin="dense"
          value={bedroomsMin}
          onChange={(e) => setBedroomsMin(e.target.value)}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="1">1+</MenuItem>
          <MenuItem value="2">2+</MenuItem>
          <MenuItem value="3">3+</MenuItem>
          <MenuItem value="4">4+</MenuItem>
        </TextField>
        <TextField
          select
          label="Max Bedrooms"
          fullWidth
          margin="dense"
          value={bedroomsMax}
          onChange={(e) => setBedroomsMax(e.target.value)}
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4+</MenuItem>
        </TextField>
      </Box>

      {/* Date Added (from and to) */}
      <Box display="flex" gap={1} mb={2} className="date-picker-container">
        <Box flex={1}>
          <Typography gutterBottom>Date From</Typography>
          <DatePicker
            selected={dateAddedFrom}
            onChange={(date) => setDateAddedFrom(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Start date"
            className="date-input"
          />
        </Box>
        <Box flex={1}>
          <Typography gutterBottom>Date To</Typography>
          <DatePicker
            selected={dateAddedTo}
            onChange={(date) => setDateAddedTo(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="End date"
            className="date-input"
          />
        </Box>
      </Box>

      {/* Postcode */}
      <TextField
        label="Postcode Area"
        fullWidth
        margin="dense"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value.toUpperCase().slice(0, 3))}
        placeholder="e.g. BR1"
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        className="search-button"
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchForm;
