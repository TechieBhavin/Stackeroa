import {
  createComment,
  getCommentsByPostId,
  getCommentById,
  deleteCommentById,
} from "./comments.repository.js";

import { AppError } from "../../utils/appError.js";

export const createCommentService = async (data, userId) => {
  if (!data.content || !data.postId) {
    throw new AppError("Content and postId are required", 400);
  }

  return await createComment({
    content: data.content,
    post: data.postId,
    author: userId,
  });
};

export const getCommentsService = async (postId) => {
  return await getCommentsByPostId(postId);
};

export const deleteCommentService = async (commentId, userId) => {
  const comment = await getCommentById(commentId);

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.author.toString() !== userId) {
    throw new AppError("Not authorized to delete this comment", 403);
  }

  await deleteCommentById(commentId);

  return true;
};