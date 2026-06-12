import React from "react";
import { Container, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "../styles/HelpPage.css";
import Footer from "../../../shared/components/Footer";
import Navbar from "../../../shared/components/Navbar";

function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description:
        "Learn how to explore articles, categories and use Stackeroa.",
    },
    {
      title: "Author Program",
      description:
        "Become an author and publish technical content.",
    },
    {
      title: "Account & Profile",
      description:
        "Manage your profile, settings and preferences.",
    },
    {
      title: "Bookmarks",
      description:
        "Save articles and access them later.",
    },
    {
      title: "Subscriptions",
      description:
        "Manage newsletter and premium subscriptions.",
    },
    {
      title: "Support",
      description:
        "Contact us, report issues and share feedback.",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="help-page">

      {/* HERO */}
      <section className="help-hero">
        <Container maxWidth="md">

          <Typography className="help-title">
            How can we help?
          </Typography>

          <Typography className="help-subtitle">
            Find answers, guides and resources to get the most
            out of Stackeroa.
          </Typography>

          <div className="search-box">
            <SearchIcon className="search-icon" />

            <input
              type="text"
              placeholder="Search help articles..."
            />
          </div>

        </Container>
      </section>

      {/* CATEGORIES */}

      <section className="help-categories">
        <Container maxWidth="lg">

          <Typography className="section-title">
            Browse Help Topics
          </Typography>

          <div className="help-grid">

            {helpCategories.map((item, index) => (
              <div key={index} className="help-card">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* FAQ */}

      <section className="faq-section">
        <Container maxWidth="md">

          <Typography className="section-title">
            Frequently Asked Questions
          </Typography>

          <div className="faq-item">
            <h4>How do I become an author?</h4>
            <p>
              Click on "Become Author" from the homepage and
              complete the author application process.
            </p>
          </div>

          <div className="faq-item">
            <h4>Can I bookmark articles?</h4>
            <p>
              Yes. Bookmarked articles are available inside
              your profile.
            </p>
          </div>

          <div className="faq-item">
            <h4>Do I need an account to read articles?</h4>
            <p>
              No. Anyone can browse public content without
              signing in.
            </p>
          </div>

        </Container>
      </section>

      {/* CONTACT */}

      <section className="contact-section">
        <Container maxWidth="sm">

          <Typography className="contact-title">
            Still need help?
          </Typography>

          <Typography className="contact-text">
            Reach out to our support team and we'll get back
            to you as soon as possible.
          </Typography>

          <button className="contact-btn">
            Contact Support
          </button>

        </Container>
      </section>

    </div>
    <Footer />
    </>
  );
}

export default HelpPage;