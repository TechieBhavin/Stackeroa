import React from "react";
import { Container } from "@mui/material";

import "../styles/ProfilePage.css";

import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function ProfilePage() {
  const articles = [
    {
      title: "Understanding React Hooks",
      excerpt:
        "Learn how React Hooks changed modern React development and simplify state management.",
      readTime: "6 min read",
      date: "May 12, 2026",
    },

    {
      title: "System Design Fundamentals",
      excerpt:
        "A beginner friendly guide to scalability, caching, databases and load balancing.",
      readTime: "10 min read",
      date: "May 8, 2026",
    },

    {
      title: "MongoDB Schema Design Guide",
      excerpt:
        "Learn how to design scalable schemas and avoid common database mistakes.",
      readTime: "8 min read",
      date: "May 5, 2026",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="profile-page">
      <Container maxWidth="lg">

        <ProfileHeader />

        <ProfileStats />

        <div className="profile-section">
          <h2>Published Articles</h2>

          <div className="articles-list">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                article={article}
              />
            ))}
          </div>
        </div>

      </Container>
    </div>
    <Footer />
    </>
  );
}

export default ProfilePage;