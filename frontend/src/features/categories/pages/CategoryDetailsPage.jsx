import React from "react";
import { useParams } from "react-router-dom";

import "./../styles/CategoryDetailsPage.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";
import BlogCard from "../../blogs/components/BlogCard";

import { blogs } from "../../../data/blogs.js";


const CategoryDetailsPage = () => {
  const { slug } = useParams();

  // normalize category slug
  const category = slug.toLowerCase();

  // filter blogs by category
  const filteredBlogs = blogs.filter(
    (blog) => blog.category === category
  );

  return (
    <>
      <Navbar />

      <div className="category-details-page">

        <div className="category-details-header">
          <h1>{category.toUpperCase()}</h1>

          <p>
            Explore articles, tutorials and resources related to {category}.
          </p>

          <div className="category-stats">
            <div className="stat-card">
              <h3>245</h3>
              <span>Articles</span>
            </div>

            <div className="stat-card">
              <h3>32k+</h3>
              <span>Readers</span>
            </div>

            <div className="stat-card">
              <h3>120</h3>
              <span>Authors</span>
            </div>
          </div>
        </div>

        <div className="category-search">
          <input
            type="text"
            placeholder={`Search articles in ${category}...`}
          />
        </div>

        <div className="category-filters">
          <button className="filter-btn active">Latest</button>
          <button className="filter-btn">Popular</button>
          <button className="filter-btn">Trending</button>
        </div>

        <div className="blogs-list">

          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))
          ) : (
            <p style={{ marginTop: "40px", color: "#6b7280" }}>
              No blogs found for this category.
            </p>
          )}

        </div>

      </div>

      <Footer />
    </>
  );
};

export default CategoryDetailsPage;