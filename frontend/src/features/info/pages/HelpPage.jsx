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

      <section className="resources-section">
  <Container maxWidth="lg">

    <Typography className="section-title">
      Popular Resources
    </Typography>

    <div className="resources-grid">

      <div className="resource-card">
        <h3>Writing Your First Article</h3>
        <p>
          Learn how to publish technical content on Stackeroa.
        </p>
      </div>

      <div className="resource-card">
        <h3>Author Guidelines</h3>
        <p>
          Best practices for creating high quality articles.
        </p>
      </div>

      <div className="resource-card">
        <h3>Profile Setup Guide</h3>
        <p>
          Complete your profile and build your author brand.
        </p>
      </div>

    </div>

  </Container>
</section>

      {/* CONTACT */}

      <section className="contact-section">
  <Container maxWidth="lg">

    <div className="contact-card">

      <Typography className="contact-title">
        Still Need Help?
      </Typography>

      <Typography className="contact-text">
        Our support team is ready to help you with account
        issues, author applications, subscriptions and more.
      </Typography>

      <button className="contact-btn">
        Contact Support
      </button>

    </div>

  </Container>
</section>

    </div>
    <Footer />
    </>
  );
}

export default HelpPage;