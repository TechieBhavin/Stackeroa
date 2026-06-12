import React from "react";
import BlogCard from "../../blogs/components/BlogCard";
import "../styles/RelatedBlogs.css";

const RelatedBlogs = () => {
  const relatedBlogs = [
    {
      slug: "react-hooks-guide",
      title: "Complete Guide to React Hooks",
      excerpt: "Learn useState, useEffect and more...",
      author: "Bhavin Patel",
      readTime: "6 min read",
      date: "May 12, 2026",
      tags: ["React", "Frontend"],
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    },
    {
      slug: "nodejs-authentication",
      title: "Building Authentication with Node.js",
      excerpt: "JWT authentication explained...",
      author: "Sarah Johnson",
      readTime: "8 min read",
      date: "May 10, 2026",
      tags: ["Node.js"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    },
    {
      slug: "system-design-basics",
      title: "System Design Fundamentals",
      excerpt: "Learn scalability and caching...",
      author: "Alex Kim",
      readTime: "10 min read",
      date: "May 8, 2026",
      tags: ["System Design"],
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    },
  ];

  return (
    <div className="related-blogs">

      <h2>Related Articles</h2>

      <div className="related-grid">
        {relatedBlogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>

    </div>
  );
};

export default RelatedBlogs;