import { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import "./Header.css";

function Header() {
  const [firstPropertyId, setFirstPropertyId] = useState("");

  useEffect(() => {
    if (propertiesData.properties.length > 0) {
      setFirstPropertyId(propertiesData.properties[0].id);
    }
  }, []);

  return (
    <AppBar position="static">
      <Toolbar className="header-toolbar">
        <Typography variant="h6" className="header-title">
          MyPropertyApp
        </Typography>

        <div className="header-buttons">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          {firstPropertyId && (
            <Button
              color="inherit"
              component={Link}
              to={`/property/${firstPropertyId}`}
            >
              Sample Property
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
