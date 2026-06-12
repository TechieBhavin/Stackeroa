import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Box className="footer-main">
        <Container maxWidth="lg">
          <Box className="footer-content">
            {/* Left Section */}
            <Box className="footer-left">
              <Typography className="footer-logo">
                
                <img
          src="/media/NewLogo.png"
          alt="CodeChronicles Logo"
          className="footer-logo-image"
        />
              </Typography>

              <Typography className="footer-description">
                Deep-dive engineering articles on system design, software
                architecture, and backend engineering written for engineers who
                want to level up.
              </Typography>
            </Box>

            {/* Right Section */}
            <Box className="footer-right">
              <Box>
                <Typography className="footer-heading">SITE</Typography>

                <Link to="/">Home</Link>
                <Link to="/about">Why Stackeroa</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/help">Help</Link>
                <Link to="/support">Support</Link>
              </Box>

              <Box>
                <Typography className="footer-heading">PLATFORM</Typography>

                <Link to="/">Articles</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Divider />
      <Box className="footer-bottom">
        <Container maxWidth="lg">
          <Box className="footer-bottom-content">
            <Typography variant="body2" className="footer-copyright">
              © {new Date().getFullYear()} Stackeroa.in · All rights
              reserved
            </Typography>
            <Box className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="divider">·</span>
              <a href="#terms">Terms of Service</a>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
