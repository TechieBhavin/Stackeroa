import express from "express";
import {
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
} from "./posts.controller.js";
import { upload } from "../../middlewares/upload.middleware.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// PUBLIC
router.get("/", getAllPosts);
router.get("/:id", getPostById);

// PROTECTED
router.post("/", authMiddleware, upload.single("image"), createPost);
router.delete("/:id", authMiddleware, deletePost);

export default router;