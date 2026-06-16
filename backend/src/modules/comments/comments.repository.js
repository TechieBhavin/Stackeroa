import { Comment } from "../../models/comment.model.js";

export const createComment = async (data) => {
  return await Comment.create(data);
};

export const getCommentsByPostId = async (postId) => {
  return await Comment.find({ post: postId })
    .populate("author", "name email")
    .sort({ createdAt: -1 });
};

export const getCommentById = async (id) => {
  return await Comment.findById(id);
};

export const deleteCommentById = async (id) => {
  return await Comment.findByIdAndDelete(id);
};