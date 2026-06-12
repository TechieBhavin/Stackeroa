import React from "react";

import {
  Avatar,
  Button,
} from "@mui/material";

function ProfileHeader() {
  return (
    <div className="profile-header">

      <div className="profile-cover" />

      <div className="profile-info">

        <Avatar
          src="/media/avatar.jpg"
          className="profile-avatar"
        />

        <div className="profile-details">

          <h1>Bhavin Patel</h1>

          <p className="profile-role">
            Software Engineer • Technical Writer
          </p>

          <p className="profile-bio">
            Passionate about React, Backend Development,
            System Design and building products that
            developers love.
          </p>

          <div className="profile-actions">
            <Button variant="contained">
              Edit Profile
            </Button>

            <Button variant="outlined">
              Share Profile
            </Button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfileHeader;