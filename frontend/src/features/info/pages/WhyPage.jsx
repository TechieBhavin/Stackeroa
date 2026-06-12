import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import "./../styles/WhyPage.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function WhyPage() {
  return (
    <>
    <Navbar />
    <div className="why-page">

      {/* HERO */}
      <section className="why-hero">
        <Container maxWidth="lg">
          <Typography className="why-badge">
            WHY STACKEROA
          </Typography>

          <Typography className="why-title">
            Learn faster. Share knowledge.
            Build your developer reputation.
          </Typography>

          <Typography className="why-subtitle">
            Stackeroa is a modern engineering publication platform
            where developers can learn practical skills, publish
            technical content, and grow their professional presence.
          </Typography>

          <Button
            variant="contained"
            className="why-btn"
          >
            Start Exploring
          </Button>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="why-features">
        <Container maxWidth="lg">

          <Typography className="section-title">
            Everything developers need
          </Typography>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>📚 Learn</h3>

              <p>
                Discover practical content covering React,
                Java, Spring Boot, System Design, DevOps,
                Databases and more.
              </p>
            </div>

            <div className="feature-card">
              <h3>✍️ Write</h3>

              <p>
                Publish engineering articles, tutorials,
                case studies and project breakdowns.
              </p>
            </div>

            <div className="feature-card">
              <h3>🚀 Grow</h3>

              <p>
                Build credibility, showcase expertise
                and become a recognized contributor.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* MISSION */}
      <section className="why-mission">
        <Container maxWidth="md">

          <Typography className="section-title">
            Our Mission
          </Typography>

          <Typography className="mission-text">
            Most technical knowledge is scattered across blogs,
            videos, documentation and social media posts.
            Stackeroa aims to organize that knowledge into a
            platform where developers can both learn and teach.
          </Typography>

        </Container>
      </section>

      {/* STATS */}
      <section className="why-stats">
        <Container maxWidth="lg">

          <div className="stats-grid">

            <div className="stat-card">
              <h2>100+</h2>
              <p>Technical Articles</p>
            </div>

            <div className="stat-card">
              <h2>20+</h2>
              <p>Engineering Categories</p>
            </div>

            <div className="stat-card">
              <h2>50+</h2>
              <p>Future Contributors</p>
            </div>

          </div>

        </Container>
      </section>

      {/* CTA */}
      <section className="why-cta">
        <Container maxWidth="md">

          <Typography className="cta-title">
            Ready to start your journey?
          </Typography>

          <Typography className="cta-subtitle">
            Explore articles or become a contributor today.
          </Typography>

          <div className="cta-buttons">
            <Button variant="contained">
              Start Reading
            </Button>

            <Button variant="outlined">
              Become Author
            </Button>
          </div>

        </Container>
      </section>

    </div>
    <Footer />
    </>
  );
}

export default WhyPage;