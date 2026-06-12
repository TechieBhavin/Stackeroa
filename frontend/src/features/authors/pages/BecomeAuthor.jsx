import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
} from "@mui/material";

import "../styles/BecomeAuthor.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function BecomeAuthor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    bio: "",
    expertise: "",
    portfolio: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
    navigate("/categories");
  };

  return (
    <>
      <Navbar />
      <div className="become-author">
      <Container maxWidth="md">
        <Paper className="author-wrapper" elevation={0}>
          
          {/* LEFT INFO PANEL */}
          <Box className="author-left">
            <Typography className="brand"><img
                src="/media/NewLogo.png"
                alt="CodeChronicles"
                style={{
                  height: "34px",
                  objectFit: "contain",
                }}
              /></Typography>

            <Typography className="headline">
              Share your knowledge with the developer community
            </Typography>

            <Typography className="subtext">
              Become a verified author and publish articles on React,
              DSA, System Design, Backend and more.
            </Typography>

            <Box className="benefits">
              <p>✔ Publish technical blogs</p>
              <p>✔ Build your developer profile</p>
              <p>✔ Reach thousands of readers</p>
              <p>✔ Get featured articles</p>
            </Box>
          </Box>

          {/* RIGHT FORM PANEL */}
          <Box className="author-right">
            <Typography className="form-title">
              Become an Author
            </Typography>

            <Box component="form" onSubmit={handleSubmit} className="form">
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                onChange={handleChange}
                required
              />

              <TextField
                label="Email"
                name="email"
                fullWidth
                onChange={handleChange}
                required
              />

              <TextField
                label="Short Bio"
                name="bio"
                fullWidth
                multiline
                rows={3}
                onChange={handleChange}
                required
              />

              <TextField
                label="Expertise (React, DSA, Backend...)"
                name="expertise"
                fullWidth
                onChange={handleChange}
                required
              />

              <TextField
                label="GitHub / Portfolio"
                name="portfolio"
                fullWidth
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="submit-btn"
              >
                Apply for Author Access
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
      <Footer />
    </>
  );
}

export default BecomeAuthor;