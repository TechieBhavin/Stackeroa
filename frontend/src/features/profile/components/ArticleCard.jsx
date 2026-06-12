import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="article-item">

      <h3>{article.title}</h3>

      <p>{article.excerpt}</p>

      <div className="article-meta">
        <span>{article.date}</span>
        <span>{article.readTime}</span>
      </div>

    </div>
  );
}

export default ArticleCard;