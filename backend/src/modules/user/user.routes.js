import express from "express";
import {
  getUserProfile,
  getUserPosts,
} from "./user.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile);
router.get("/posts", authMiddleware, getUserPosts);

export default router;