import express from "express";

import {
  addBookmark,
  removeBookmark,
  getBookmarks,
} from "./bookmarks.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/:postId", authMiddleware, addBookmark);

router.delete("/:postId", authMiddleware, removeBookmark);

router.get("/", authMiddleware, getBookmarks);

export default router;