import { Box } from "@mui/material";
import PropertyCard from "./PropertyCard";
import "./PropertyList.css";

function PropertyList({ properties, onFavourite }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 3,
        mt: 2,
      }}
    >
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          addFavourite={onFavourite} // works with both click & drag
        />
      ))}
    </Box>
  );
}

export default PropertyList;
