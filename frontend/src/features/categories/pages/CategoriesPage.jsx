import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/CategoriesPage.css";

const categories = [
  {
    name: "React",
    slug: "react",
    icon: "⚛️",
    count: "245 Articles",
    description: "Hooks, State Management, Routing and Performance."
  },
  {
    name: "Java",
    slug: "java",
    icon: "☕",
    count: "310 Articles",
    description: "Core Java, OOP, Collections and Multithreading."
  },
  {
    name: "DSA",
    slug: "dsa",
    icon: "🧠",
    count: "180 Articles",
    description: "Arrays, Trees, Graphs and Interview Preparation."
  },
  {
    name: "JavaScript",
    slug: "javascript",
    icon: "🟨",
    count: "290 Articles",
    description: "ES6+, Async Programming and Browser APIs."
  },
  {
    name: "System Design",
    slug: "system-design",
    icon: "🏗️",
    count: "140 Articles",
    description: "Scalability, Databases, Caching and Architecture."
  },
  {
    name: "DevOps",
    slug: "devops",
    icon: "🚀",
    count: "120 Articles",
    description: "Docker, Kubernetes, CI/CD and Cloud."
  },
];

function CategoryPage() {
  const navigate = useNavigate();

  return (
    <div className="category-page">

      {/* HERO */}

      <section className="category-hero">

        <span className="category-badge">
          📚 Knowledge Hub
        </span>

        <h1>
          Explore Engineering Categories
        </h1>

        <p>
          Dive into carefully curated articles, roadmaps,
          tutorials and engineering insights across modern
          software development domains.
        </p>

        <div className="category-search">
          <input
            type="text"
            placeholder="Search categories..."
          />
        </div>

      </section>

      {/* STATS */}

      <div className="category-stats">

        <div className="stat-box">
          <h2>1,200+</h2>
          <p>Articles</p>
        </div>

        <div className="stat-box">
          <h2>25+</h2>
          <p>Topics</p>
        </div>

        <div className="stat-box">
          <h2>50K+</h2>
          <p>Readers</p>
        </div>

      </div>

      {/* GRID */}

      <div className="category-grid">

        {categories.map((category) => (
          <div
            key={category.slug}
            className="category-card"
            onClick={() =>
              navigate(`/categories/${category.slug}`)
            }
          >
            <div className="category-top">

              <div className="category-icon">
                {category.icon}
              </div>

              <span className="article-count">
                {category.count}
              </span>

            </div>

            <h3>{category.name}</h3>

            <p>{category.description}</p>

            <div className="explore-link">
              Explore →
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default CategoryPage;