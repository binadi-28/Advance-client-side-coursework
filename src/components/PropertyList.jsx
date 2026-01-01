import { Box } from "@mui/material";
import PropertyCard from "./PropertyCard";
import "./PropertyList.css";

function PropertyList({ properties }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 cards per row
        gap: 3,
        mt: 2,
      }}
    >
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </Box>
  );
}

export default PropertyList;
