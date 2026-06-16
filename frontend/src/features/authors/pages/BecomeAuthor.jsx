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
          <>
            <div className="author-hero">
              <span className="author-badge">Become a Publisher</span>

              <h1>Share Your Knowledge With Developers</h1>

              <p>
                Join Stackeroa as an author and publish articles on React, Java,
                System Design, DevOps, DSA, Backend Engineering and more.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>✍️ Publish Articles</h3>
                <p>Share tutorials, guides and engineering insights.</p>
              </div>

              <div className="benefit-card">
                <h3>🚀 Grow Your Audience</h3>
                <p>Reach thousands of developers worldwide.</p>
              </div>

              <div className="benefit-card">
                <h3>🏆 Build Authority</h3>
                <p>Strengthen your professional developer profile.</p>
              </div>

              <div className="benefit-card">
                <h3>⭐ Featured Authors</h3>
                <p>Top authors get featured across the platform.</p>
              </div>
            </div>

            <Paper className="author-wrapper" elevation={0}>
              <Typography className="form-title">Author Application</Typography>

              <Typography className="form-subtitle">
                Tell us a little about yourself.
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
                  label="Email Address"
                  name="email"
                  fullWidth
                  onChange={handleChange}
                  required
                />

                <TextField
                  label="Short Bio"
                  name="bio"
                  multiline
                  rows={4}
                  fullWidth
                  onChange={handleChange}
                  required
                />

                <TextField
                  label="Expertise"
                  name="expertise"
                  fullWidth
                  onChange={handleChange}
                  placeholder="React, Java, DevOps..."
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
                  Apply For Author Access
                </Button>
              </Box>

              <div className="author-footer-note">
                Applications are usually reviewed within 48 hours.
              </div>
            </Paper>
          </>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default BecomeAuthor;
