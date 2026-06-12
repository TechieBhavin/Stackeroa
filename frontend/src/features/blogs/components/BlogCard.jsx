import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`} className="blog-card-link">
      <div className="blog-card">
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          <h2>{blog.title}</h2>

          <p>{blog.excerpt}</p>

          <div className="blog-card-footer">
            <div className="blog-tags">
              {blog.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <span className="blog-date">{blog.date}</span>
          </div>
        </div>

        <div className="blog-card-image">
          <img src={blog.image} alt={blog.title} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
