import { Typography, Box, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Typography variant="h6" className="footer-title">
        MyPropertyApp
      </Typography>

      <Box className="footer-links">
        <Link href="/" className="footer-link">Home</Link>
        <Link href="/about" className="footer-link">About</Link>
        <Link href="/contact" className="footer-link">Contact</Link>
      </Box>

      <Box className="footer-socials">
        <IconButton
          component="a"
          href="https://github.com/binadi-28"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/binadi-laknara"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:binadi.20240153@gmail.com"
        >
          <EmailIcon />
        </IconButton>
      </Box>

      <Typography className="footer-text">
        © {new Date().getFullYear()} MyPropertyApp. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
