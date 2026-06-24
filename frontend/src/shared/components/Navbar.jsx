import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BoltIcon from "@mui/icons-material/Bolt";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const navigate = useNavigate();

  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);

  const handleMobileOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Main Navbar */}
      <Box
        sx={{
          height: "60px",
          borderBottom: "1px solid #e5e7eb",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1280px",
            mx: "auto",
            px: 3,
          }}
        >
          <Box
            sx={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              onClick={() => navigate("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <img
                src="/media/NewLogo.png"
                alt="CodeChronicles"
                style={{
                  height: window.innerWidth < 600 ? "28px" : "34px",
                  objectFit: "contain",
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
                flex: 1,
              }}
            >
              {/* Divider */}
              <Box
                sx={{
                  width: "1px",
                  height: "16px",
                  background: "#e5e7eb",
                  display: { xs: "none", md: "block" },
                }}
              />

              {/* Search */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  flex: 1,
                  minWidth: "250px",
                  maxWidth: "450px",
                  position: "relative",
                  mx: 2,
                }}
              >
                <SearchIcon
                  sx={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#9ca3af",
                    fontSize: "18px",
                  }}
                />

                <input
                  placeholder="Search articles..."
                  style={{
                    width: "100%",
                    padding: "8px 12px 8px 40px",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    background: "#f9fafb",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </Box>

              {/* Push Right */}
              {/* <Box sx={{ flexGrow: 1 }} /> */}

              {/* Why */}
              <Button
                onClick={() => navigate("/why")}
                startIcon={<HelpOutlinedIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: "#6b7280",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  minWidth: "auto",
                }}
              >
                Why
              </Button>

              {/* Help */}
              <Button
                onClick={() => navigate("/help")}
                sx={{
                  color: "#6b7280",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  minWidth: "auto",
                }}
              >
                Help
              </Button>

              {/* Divider */}
              <Box
                sx={{
                  width: "1px",
                  height: "16px",
                  background: "#e5e7eb",
                }}
              />

              {/* Dark Mode */}
              <IconButton
                size="small"
                sx={{
                  color: "#6b7280",
                }}
              >
                <DarkModeOutlinedIcon sx={{ fontSize: 18 }} />
              </IconButton>

              {/* Bookmark */}
              <IconButton
                onClick={() => navigate("/bookmarks")}
                size="small"
                sx={{
                  color: "#6b7280",
                }}
              >
                <BookmarkBorderIcon sx={{ fontSize: 18 }} />
              </IconButton>

              {/* Divider */}
              <Box
                sx={{
                  width: "1px",
                  height: "16px",
                  background: "#e5e7eb",
                }}
              />

              {/* Subscribe */}
              <Button
                startIcon={<BoltIcon />}
                onClick={() => navigate("/subscribe")}
                sx={{
                  background: "#111827",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  borderRadius: "8px",
                  px: 8,
                  py: 0.8,
                  minHeight: "36px",

                  "&:hover": {
                    background: "#1f2937",
                  },
                }}
              >
                Subscribe
              </Button>

              {/* Profile */}
              <Box
                onClick={handleMenuOpen}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  ml: 0.5,
                  px: 1,
                  py: 0.5,
                  borderRadius: "12px",

                  "&:hover": {
                    background: "#f3f4f6",
                  },
                }}
              >
                <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
                  <MenuItem
                    onClick={() => {
                      navigate("/profile");
                      handleMenuClose();
                    }}
                  >
                    Profile
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      navigate("/my-articles");
                      handleMenuClose();
                    }}
                  >
                    My Articles
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      navigate("/becomeAuthor");
                      handleMenuClose();
                    }}
                  >
                    Become Author
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      navigate("/settings");
                      handleMenuClose();
                    }}
                  >
                    Settings
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      navigate("/help");
                      handleMenuClose();
                    }}
                  >
                    Help Center
                  </MenuItem>

                  <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>

                <Avatar
                  src="/media/avatar.jpg"
                  sx={{
                    width: 28,
                    height: 28,
                    border: "2px solid #e5e7eb",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#374151",
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  Techie.
                </Typography>

                <KeyboardArrowDownIcon
                  sx={{
                    fontSize: "16px",
                    color: "#9ca3af",
                    display: { xs: "none", lg: "block" },
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleMobileOpen}>
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={mobileAnchorEl}
                open={Boolean(mobileAnchorEl)}
                onClose={handleMobileClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/why");
                    handleMobileClose();
                  }}
                >
                  Why Stackeroa
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/help");
                    handleMobileClose();
                  }}
                >
                  Help Center
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/subscribe");
                    handleMobileClose();
                  }}
                >
                  Subscribe
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    handleMobileClose();
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    navigate("/settings");
                    handleMobileClose();
                  }}
                >
                  Settings
                </MenuItem>

                <MenuItem onClick={handleMobileClose}>Logout</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
