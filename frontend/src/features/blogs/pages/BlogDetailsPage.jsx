import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

import { getBlogBySlug } from "../../../data/blogs";

import AuthorCard from "../components/AuthorCard";
import RelatedBlogs from "../components/RelatedBlogs";

import "../styles/BlogDetailsPage.css";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="blog-details-page">
          <h2>Blog not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="blog-details-page">
        <div className="blog-container">

          <span className="blog-category">
            {blog.category}
          </span>

          <h1 className="blog-title">
            {blog.title}
          </h1>

          <div className="blog-meta">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
            <span>•</span>
            <span>{blog.date}</span>
          </div>

          <img
            className="blog-cover"
            src={blog.image}
            alt={blog.title}
          />

          <div className="blog-content">
            {blog.content.map((item, index) => {
              switch (item.type) {
                case "h2":
                  return <h2 key={index}>{item.text}</h2>;

                case "p":
                  return <p key={index}>{item.text}</p>;

                case "blockquote":
                  return (
                    <blockquote key={index}>
                      {item.text}
                    </blockquote>
                  );

                case "code":
                  return (
                    <pre key={index}>
                      <code>{item.text}</code>
                    </pre>
                  );

                default:
                  return null;
              }
            })}
          </div>

          <AuthorCard />
          <RelatedBlogs />

        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetailsPage;