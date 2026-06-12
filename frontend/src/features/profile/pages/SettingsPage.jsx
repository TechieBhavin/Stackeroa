import React from "react";
import "./../styles/SettingsPage.css";
import Navbar from "../../../shared/components/Navbar";
import Footer from "../../../shared/components/Footer";

function SettingsPage() {
  return (
    <>
      <Navbar />
      <div className="settings-page">

      <div className="settings-header">
        <h1>Settings</h1>
        <p>
          Manage your account information and profile preferences.
        </p>
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

    </div>
      <Footer />
    </>
    
  );
}

export default SettingsPage;