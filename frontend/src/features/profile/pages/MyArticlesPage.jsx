import React from "react";
import "./../styles/MyArticlesPage.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function MyArticlesPage() {
  const publishedArticles = [
  {
    title: "Complete Guide to React Hooks",
    views: "1.2k",
    likes: 84,
    date: "May 12, 2026",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
  },

  {
    title: "System Design Fundamentals",
    views: "980",
    likes: 61,
    date: "May 10, 2026",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  },

  {
    title: "MongoDB Schema Design Guide",
    views: "756",
    likes: 43,
    date: "May 8, 2026",
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600",
  },
];

  const draftArticles = [
    {
      title: "Redis Caching Explained",
      lastEdited: "2 days ago",
    },

    {
      title: "Spring Boot Security",
      lastEdited: "5 days ago",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="my-articles-page">
        <div className="articles-hero">
  <div>
    <span className="hero-badge">
      Author Dashboard
    </span>

    <h1>Welcome back, Bhavin 👋</h1>

    <p>
      Track your articles, monitor performance,
      and continue creating valuable content.
    </p>
  </div>

  <button className="new-article-btn">
    + New Article
  </button>
</div>

{/* Stats */}

<div className="articles-stats">

  <div className="stats-card">
    <span>Total Articles</span>
    <h2>12</h2>
    <p>+2 this month</p>
  </div>

  <div className="stats-card">
    <span>Total Views</span>
    <h2>4.2K</h2>
    <p>Growing steadily</p>
  </div>

  <div className="stats-card">
    <span>Total Likes</span>
    <h2>328</h2>
    <p>Readers love your content</p>
  </div>

</div>

{/* Published */}

<div className="section">

  <h2>Published Articles</h2>

  {publishedArticles.map((article, index) => (
    <div
      key={index}
      className="article-card"
    >

      <img
        src={article.image}
        alt={article.title}
        className="article-image"
      />

      <div className="article-content">

        <div className="article-top">

          <h3>{article.title}</h3>

          <span className="status-pill">
            {article.status}
          </span>

        </div>

        <div className="article-meta">
          <span>{article.date}</span>
          <span>{article.views} views</span>
          <span>{article.likes} likes</span>
        </div>

        <div className="article-actions">
          <button>View</button>
          <button>Edit</button>
          <button>Analytics</button>
        </div>

      </div>

    </div>
  ))}

</div>

{/* Drafts */}

<div className="section">

  <h2>Draft Articles</h2>

  {draftArticles.map((draft, index) => (
    <div
      key={index}
      className="draft-card"
    >

      <div>

        <div className="draft-top">
          <h3>{draft.title}</h3>

          <span className="draft-pill">
            Draft
          </span>
        </div>

        <p>
          Last edited {draft.lastEdited}
        </p>

      </div>

      <button className="continue-btn">
        Continue Writing
      </button>

    </div>
  ))}

</div>
      </div>
      <Footer />
    </>
  );
}

export default MyArticlesPage;
