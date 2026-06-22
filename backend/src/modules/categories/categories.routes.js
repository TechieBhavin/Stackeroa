import express from "express";

import {
  createCategory,
  getAllCategories,
  getCategoryBySlug,
  getCategoryPosts,
} from "./categories.controller.js";

const router = express.Router();

router.post("/", createCategory);

router.get("/", getAllCategories);

router.get("/:slug/posts", getCategoryPosts);

router.get("/:slug", getCategoryBySlug);

export default router;