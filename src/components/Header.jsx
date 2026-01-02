import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
