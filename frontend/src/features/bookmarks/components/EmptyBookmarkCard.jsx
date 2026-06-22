import React from "react";

function EmptyBookmarkCard() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h2>No bookmarks yet 📚</h2>

      <p>
        Save articles and they'll appear here.
      </p>
    </div>
  );
}

export default EmptyBookmarkCard;