import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "../styles/HomePage.css";

function Home() {
  const navigate = useNavigate();

  const articles = [
    {
      title: "How Netflix Scales To Millions Of Users",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      excerpt:
        "A deep dive into architecture patterns used by large scale systems.",
    },
    {
      title: "System Design Interview Roadmap",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      excerpt: "Everything you need to crack modern system design interviews.",
    },
    {
      title: "Database Indexing Explained Simply",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      excerpt: "Understand indexing, B-Trees and query optimization visually.",
    },
  ];

  return (
    <div className="home">
      {/* HERO */}

      <section className="hero">
        <Container maxWidth="md">
          <Typography className="hero-title">
            Engineering knowledge that compounds.
          </Typography>

          <Typography className="hero-subtitle">
            Read practical articles on backend engineering, system design,
            databases and software architecture.
          </Typography>

          <Box className="hero-buttons">
            <Button className="start-reading-btn" variant="contained" onClick={() => navigate("/categories")}>
              Start Reading
            </Button>

            <Button
              className="become-author-btn"
              variant="outlined"
              onClick={() => navigate("/becomeAuthor")}
            >
              Become Author
            </Button>
          </Box>
        </Container>
      </section>

      {/* FEATURED */}

      <section className="featured">
        <Container maxWidth="md">
          <Typography className="section-heading">Featured Article</Typography>

          <Box className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt=""
            />

            <Box>
              <Typography className="featured-title">
                Building Scalable Systems: A Practical Guide
              </Typography>

              <Typography className="featured-desc">
                Learn architecture patterns, caching strategies, scaling
                techniques and real-world lessons from production systems.
              </Typography>

              <Button endIcon={<ArrowForwardIcon />}>Read Article</Button>
            </Box>
          </Box>
        </Container>
      </section>

      {/* ARTICLES */}

      <section className="articles">
        <Container maxWidth="md">
          <Typography className="section-heading">Latest Articles</Typography>

          {articles.map((article, index) => (
            <Box key={index} className="article-card">
              <img src={article.image} alt="" />

              <Box>
                <Typography className="article-title">
                  {article.title}
                </Typography>

                <Typography className="article-excerpt">
                  {article.excerpt}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </section>

      {/* CATEGORIES */}

      <section className="categories">
        <Container maxWidth="md">
          <Typography className="section-heading">
            Popular Categories
          </Typography>

          <Box className="categories-grid">
            {[
              "dsa",
              "system-design",
              "backend",
              "java",
              "spring-boot",
              "database",
            ].map((cat) => (
              <Box
                key={cat}
                className="category-pill"
                onClick={() => navigate(`/categories/${cat}`)}
                sx={{ cursor: "pointer" }}
              >
                {cat}
              </Box>
            ))}
          </Box>
        </Container>
      </section>

      {/* NEWSLETTER */}

      <section className="newsletter">
        <Container maxWidth="sm">
          <Typography className="newsletter-title">
            Weekly Engineering Digest
          </Typography>

          <Typography className="newsletter-text">
            Get the best engineering articles delivered weekly.
          </Typography>

          <Button variant="contained">Subscribe</Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;
