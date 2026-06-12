import React, { useState } from "react";
import "../styles/SubscribePage.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function SubscribePage() {
  const [frequency, setFrequency] = useState("weekly");

  return (
    <>
    <Navbar />
    <div className="subscribe-page">
      <div className="subscribe-hero">
        <span className="subscribe-badge">
          🚀 Engineering Newsletter
        </span>

        <h1>
          Stay Ahead With Stackeroa
        </h1>

        <p>
          Get high-quality engineering articles,
          system design insights, backend tutorials,
          and developer resources directly in your inbox.
        </p>

      </div>

      <div className="stats-row">
  <div className="stat-box">
    <h3>50K+</h3>
    <p>Monthly Readers</p>
  </div>

  <div className="stat-box">
    <h3>500+</h3>
    <p>Articles Published</p>
  </div>

  <div className="stat-box">
    <h3>6</h3>
    <p>Engineering Categories</p>
  </div>
</div>

      {/* Benefits */}

      <div className="benefits-section">

        <div className="benefit-card">
          <h3>📚 Quality Articles</h3>
          <p>
            Curated content on React, Backend,
            System Design, DevOps and DSA.
          </p>
        </div>

        <div className="benefit-card">
          <h3>⚡ No Spam</h3>
          <p>
            Only valuable engineering content.
            No unnecessary promotional emails.
          </p>
        </div>

        <div className="benefit-card">
          <h3>🎯 Stay Updated</h3>
          <p>
            Never miss important technical
            articles and platform updates.
          </p>
        </div>

      </div>

      <div className="receive-section">
  <h2>What You'll Receive</h2>

  <div className="receive-grid">
    <div className="receive-card">
      <h3>New Blog Alerts</h3>
      <p>Get notified whenever a new article is published.</p>
    </div>

    <div className="receive-card">
      <h3>Weekly Digest</h3>
      <p>Top engineering articles delivered every week.</p>
    </div>

    <div className="receive-card">
      <h3>Interview Prep</h3>
      <p>DSA and System Design resources for career growth.</p>
    </div>

    <div className="receive-card">
      <h3>DevOps Updates</h3>
      <p>Latest tools, cloud practices and deployment guides.</p>
    </div>
  </div>
</div>

      {/* Subscribe Form */}

      <div className="subscription-card">

        <h2>Subscribe Now</h2>

        <div className="frequency-options">

          <label>
            <input
              type="radio"
              name="frequency"
              checked={frequency === "weekly"}
              onChange={() => setFrequency("weekly")}
            />
            Weekly Digest
          </label>

          <label>
            <input
              type="radio"
              name="frequency"
              checked={frequency === "instant"}
              onChange={() => setFrequency("instant")}
            />
            Instant Updates
          </label>

        </div>

        <input
          type="email"
          placeholder="Enter your email address"
          className="email-input"
        />

        <button className="subscribe-btn">
          Subscribe
        </button>

      </div>

      <div className="topics-section">
  <h2>Select Topics You Love</h2>

  <div className="topics-grid">
    <label><input type="checkbox" /> React</label>
    <label><input type="checkbox" /> JavaScript</label>
    <label><input type="checkbox" /> Backend</label>
    <label><input type="checkbox" /> DevOps</label>
    <label><input type="checkbox" /> System Design</label>
    <label><input type="checkbox" /> DSA</label>
    <label><input type="checkbox" /> Java</label>
    <label><input type="checkbox" /> Spring Boot</label>
  </div>
</div>

      {/* Preview */}

      <div className="newsletter-preview">

        <h2>Example Newsletter</h2>

        <div className="preview-card">

          <h3>Stackeroa Weekly Digest</h3>

          <ul>
            <li>Complete Guide to React Hooks</li>
            <li>JWT Authentication in Node.js</li>
            <li>System Design Fundamentals</li>
            <li>Caching Strategies Explained</li>
          </ul>

          <p>
            Delivered every week directly to your inbox.
          </p>

        </div>

      </div>

      <div className="archive-section">

  <h2>Recent Newsletters</h2>

  <div className="archive-grid">

    <div className="archive-card">
      <h3>Weekly Digest #21</h3>
      <p>React Performance, MongoDB Design, JWT Authentication.</p>
    </div>

    <div className="archive-card">
      <h3>Weekly Digest #20</h3>
      <p>System Design Fundamentals and Caching Strategies.</p>
    </div>

    <div className="archive-card">
      <h3>Weekly Digest #19</h3>
      <p>Spring Boot Security and DevOps Best Practices.</p>
    </div>

  </div>

</div>

<div className="testimonial-section">

  <h2>What Developers Say</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        Stackeroa helps me stay updated without wasting time
        searching for quality content.
      </p>
      <h4>Software Engineer</h4>
    </div>

    <div className="testimonial-card">
      <p>
        The weekly digest is one of the few newsletters
        I actually read.
      </p>
      <h4>Backend Developer</h4>
    </div>

    <div className="testimonial-card">
      <p>
        Great technical content and practical examples.
      </p>
      <h4>Full Stack Developer</h4>
    </div>

  </div>

</div>

<div className="faq-section">

  <h2>Frequently Asked Questions</h2>

  <div className="faq-item">
    <h3>Is it free?</h3>
    <p>Yes. The newsletter is completely free.</p>
  </div>

  <div className="faq-item">
    <h3>How often will I receive emails?</h3>
    <p>Weekly Digest or Instant Updates based on your preference.</p>
  </div>

  <div className="faq-item">
    <h3>Can I unsubscribe anytime?</h3>
    <p>Yes. Every email contains an unsubscribe link.</p>
  </div>

  <div className="faq-item">
    <h3>Do you share my email?</h3>
    <p>No. Your information remains private.</p>
  </div>

</div>

<div className="final-cta">

  <h2>
    Ready to level up your engineering knowledge?
  </h2>

  <p>
    Join thousands of developers already learning with Stackeroa.
  </p>

  <button className="subscribe-btn">
    Subscribe Free
  </button>

</div>
    </div>
    <Footer />
    </>
  );
}

export default SubscribePage;