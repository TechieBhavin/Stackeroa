import {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
} from "./posts.repository.js";

import { AppError } from "../../utils/appError.js";

export const createPostService = async (data, userId) => {
  if (!data.title || !data.content) {
    throw new AppError("Title and content are required", 400);
  }

  return await createPost({
    title: data.title,
    content: data.content,
    image: data.image,
    author: userId,
  });
};

export const getAllPostsService = async (query) => {
  return await getAllPosts(query);
};

export const getPostByIdService = async (id) => {
  const post = await getPostById(id);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  return post;
};

export const deletePostService = async (id, userId) => {
  const post = await getPostById(id);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  if (post.author._id.toString() !== userId) {
    throw new AppError("Not authorized to delete this post", 403);
  }

  await deletePostById(id);

  return true;
};