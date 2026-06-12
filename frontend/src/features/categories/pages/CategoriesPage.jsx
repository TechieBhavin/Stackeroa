import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/CategoriesPage.css";

const categories = [
  {
    name: "React",
    slug: "react",
    icon: "⚛️",
    count: "245 Articles",
  },
  {
    name: "Java",
    slug: "java",
    icon: "☕",
    count: "310 Articles",
  },
  {
    name: "DSA",
    slug: "dsa",
    icon: "🧠",
    count: "180 Articles",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    icon: "🟨",
    count: "290 Articles",
  },
  {
    name: "System Design",
    slug: "system-design",
    icon: "🏗️",
    count: "140 Articles",
  },
  {
    name: "DevOps",
    slug: "devops",
    icon: "🚀",
    count: "120 Articles",
  },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Explore Categories</h1>
        <p>
          Discover articles, tutorials and roadmaps across different tech
          domains.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="category-card"
            onClick={() => navigate(`/categories/${category.slug}`)}
          >
            <div className="category-icon">{category.icon}</div>

            <h3>{category.name}</h3>

            <span>{category.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
