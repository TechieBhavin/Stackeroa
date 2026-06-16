import express from "express";
import {
  createComment,
  getComments,
  deleteComment,
} from "./comments.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

// PUBLIC
router.get("/:postId", getComments);

// PROTECTED
router.post("/", authMiddleware, createComment);
router.delete("/:id", authMiddleware, deleteComment);

export default router;