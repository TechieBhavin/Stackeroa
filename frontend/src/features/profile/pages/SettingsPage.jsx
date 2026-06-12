import React from "react";
import "./../styles/SettingsPage.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function SettingsPage() {
  return (
    <>
      <Navbar />
      <div className="settings-page">

      <div className="settings-hero">

  <div>

    <span className="settings-badge">
      Account Settings
    </span>

    <h1>
      Manage Your Profile
    </h1>

    <p>
      Customize your public profile,
      social presence and writing preferences.
    </p>

  </div>

  <div className="profile-completion">

    <span>Profile Completion</span>

    <h2>85%</h2>

  </div>

</div>

<div className="avatar-card">

  <img
    src="/media/avatar.jpg"
    alt=""
    className="settings-avatar"
  />

  <div>

    <h3>Profile Picture</h3>

    <p>
      Upload a professional photo.
    </p>

  </div>

  <button>
    Change Photo
  </button>

</div>

      {/* Profile Information */}

      <div className="settings-card">
        <h2>Profile Information</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              defaultValue="Bhavin Patel"
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              defaultValue="techiebhavin"
            />
          </div>

          <div className="form-group full-width">
            <label>Email Address</label>
            <input
              type="email"
              defaultValue="bhavin@example.com"
            />
          </div>

          <div className="form-group full-width">
            <label>Bio</label>
            <textarea
              rows="5"
              defaultValue="Passionate about React, Backend Development, System Design and sharing engineering knowledge."
            />
          </div>

        </div>
      </div>

      {/* Social Links */}

      <div className="settings-card">
        <h2>Social Links</h2>

        <div className="form-grid">

          <div className="form-group full-width">
            <label>GitHub</label>
            <input
              type="text"
              placeholder="https://github.com/username"
            />
          </div>

          <div className="form-group full-width">
            <label>LinkedIn</label>
            <input
              type="text"
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div className="form-group full-width">
            <label>Portfolio Website</label>
            <input
              type="text"
              placeholder="https://yourwebsite.com"
            />
          </div>

        </div>
      </div>

      <div className="settings-card">

  <h2>Writing Preferences</h2>

  <div className="preferences-list">

    <label>
      <input type="checkbox" defaultChecked />
      Weekly Newsletter Updates
    </label>

    <label>
      <input type="checkbox" defaultChecked />
      Featured Article Notifications
    </label>

    <label>
      <input type="checkbox" />
      Marketing Emails
    </label>

  </div>

</div>

      {/* Password */}

      <div className="settings-card">
        <h2>Password</h2>

        <div className="form-grid">

          <div className="form-group full-width">
            <label>Current Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" />
          </div>

        </div>
      </div>

      {/* Actions */}

      <div className="settings-actions">
        <button className="cancel-btn">
          Cancel
        </button>

        <button className="save-btn">
          Save Changes
        </button>
      </div>

      <div className="danger-zone">

  <h2>Danger Zone</h2>

  <p>
    Permanently remove your account and content.
  </p>

  <button>
    Delete Account
  </button>

</div>

    </div>
      <Footer />
    </>
    
  );
}

export default SettingsPage;