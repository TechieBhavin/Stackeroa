import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

              <div className="footer-newsletter">
                <h4>Join 10,000+ developers</h4>

                <p>Receive engineering articles directly in your inbox.</p>

                <button
                  onClick={() => navigate("/subscribe")}
                  className="footer-subscribe-btn"
                >
                  Subscribe Free
                </button>
              </div>
            </Box>

            {/* Right Section */}
            <Box className="footer-right">
              <Box>
                <Typography className="footer-heading">RESOURCES</Typography>

                <Link to="/categories">Categories</Link>
                <Link to="/my-articles">Articles</Link>
                <Link to="/subscribe">Newsletter</Link>
                <Link to="/becomeAuthor">Become Author</Link>
              </Box>

              <Box>
                <Typography className="footer-heading">PRODUCT</Typography>

                <Link to="/help">Help Center</Link>
                <Link to="/why">Why Stackeora</Link>
                <Link to="/profile">Profile</Link>
              </Box>

              <Box>
                <Typography className="footer-heading">COMPANY</Typography>

                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className="footer-social">
        <IconButton>
          <GitHubIcon />
        </IconButton>

        <IconButton>
          <LinkedInIcon />
        </IconButton>

        <IconButton>
          <TwitterIcon />
        </IconButton>
      </Box>

      <Divider />
      <Box className="footer-bottom">
        <Container maxWidth="lg">
          <Box className="footer-bottom-content">
            <Typography variant="body2" className="footer-copyright">
              © {new Date().getFullYear()} Stackeora.in · All rights reserved
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
