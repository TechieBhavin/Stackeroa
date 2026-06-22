import React from "react";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

import BookmarkCard from "../components/BookmarkCard";
import EmptyBookmarkCard from "../components/EmptyBookmarkCard";

import { useBookmarks } from "../hooks/useBookmarks";

import "./../styles/BookmarkPage.css";

function BookmarkPage() {
  const {
    bookmarks,
    loading,
    handleRemove
  } = useBookmarks();

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="bookmark-page">
          <h1>Loading...</h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bookmark-page">

        {/* Header */}

        <div className="bookmark-header">

          <span className="bookmark-badge">
            🔖 Saved Articles
          </span>

          <h1>My Bookmarks</h1>

          <p>
            Quickly access your saved blogs and continue learning anytime.
          </p>

        </div>

        {/* Stats */}

        <div className="bookmark-stats">

          <div className="bookmark-stat-card">

            <h2>
              {bookmarks.length}
            </h2>

            <span>
              Saved Blogs
            </span>

          </div>

        </div>

        {/* Content */}

        {bookmarks.length === 0 ? (

          <EmptyBookmarkCard />

        ) : (

          <div className="bookmark-grid">

            {bookmarks.map((blog) => (

              <BookmarkCard
                key={blog._id}
                blog={blog}
                onRemove={handleRemove}
              />

            ))}

          </div>

        )}

      </div>

      <Footer />
    </>
  );
}

export default BookmarkPage;