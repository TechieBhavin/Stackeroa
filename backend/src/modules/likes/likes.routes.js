import express from "express";
import { likePost, unlikePost } from "./likes.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/:postId", authMiddleware, likePost);
router.delete("/:postId", authMiddleware, unlikePost);

export default router;