import { likePost, unlikePost } from "./likes.repository.js";
import { AppError } from "../../utils/appError.js";

export const likePostService = async (postId, userId) => {
  if (!postId) throw new AppError("PostId required", 400);

  return await likePost(postId, userId);
};

export const unlikePostService = async (postId, userId) => {
  if (!postId) throw new AppError("PostId required", 400);

  return await unlikePost(postId, userId);
};