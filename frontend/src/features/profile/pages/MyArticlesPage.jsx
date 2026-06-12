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
    },

    {
      title: "System Design Fundamentals",
      views: "980",
      likes: 61,
      date: "May 10, 2026",
      status: "Published",
    },

    {
      title: "MongoDB Schema Design Guide",
      views: "756",
      likes: 43,
      date: "May 8, 2026",
      status: "Published",
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

      <div className="articles-header">
        <h1>My Articles</h1>

        <p>
          Manage your published articles and drafts.
        </p>
      </div>

      {/* Stats */}

      <div className="articles-stats">

        <div className="stats-card">
          <h2>12</h2>
          <p>Total Articles</p>
        </div>

        <div className="stats-card">
          <h2>4.2K</h2>
          <p>Total Views</p>
        </div>

        <div className="stats-card">
          <h2>328</h2>
          <p>Total Likes</p>
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
            <div>
              <h3>{article.title}</h3>

              <div className="article-meta">
                <span>{article.date}</span>
                <span>{article.views} views</span>
                <span>{article.likes} likes</span>
              </div>
            </div>

            <button className="edit-btn">
              Edit
            </button>
          </div>
        ))}

      </div>

      {/* Drafts */}

      <div className="section">

        <h2>Drafts</h2>

        {draftArticles.map((draft, index) => (
          <div
            key={index}
            className="draft-card"
          >
            <div>
              <h3>{draft.title}</h3>

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