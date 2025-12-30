import { Typography } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Typography className="footer-text">
        © {new Date().getFullYear()} MyPropertyApp. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
