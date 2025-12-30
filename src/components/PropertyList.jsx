import { Grid } from "@mui/material";
import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {properties.map((property) => (
        <Grid item xs={12} sm={6} md={4} key={property.id}>
          <PropertyCard property={property} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PropertyList;
