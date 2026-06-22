import React from "react";
import "../styles/BookmarkCard.css";

function BookmarkCard({ blog, onRemove }) {
  return (
    <div className="bookmark-card">
      <img
        src={blog.image}
        alt={blog.title}
      />

      <div className="bookmark-content">

        <span className="bookmark-category">
          {blog.category?.name}
        </span>

        <h3>{blog.title}</h3>

        <div className="bookmark-meta">

          <span>
            {blog.author?.name}
          </span>

          <span>
            {blog.readingTime} min read
          </span>

        </div>

        <button
          className="remove-btn"
          onClick={() => onRemove(blog._id)}
        >
          Remove Bookmark
        </button>

      </div>
    </div>
  );
}

export default BookmarkCard;