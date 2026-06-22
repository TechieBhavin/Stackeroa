import {
  createPost,
  getAllPosts,
  getPostById,
  deletePostById,
  getPostBySlug,
  incrementPostViews,
  getRelatedPosts
} from "./posts.repository.js";

import { AppError } from "../../utils/appError.js";

export const createPostService = async (data, userId) => {
  if (!data.title || !data.content) {
    throw new AppError("Title and content are required", 400);
  }

  if (!data.category) {
    throw new AppError("Category is required", 400);
  }

  // Generate slug
  const slug = data.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");

  // Generate excerpt
  const excerpt = data.content.substring(0, 150);

  // Calculate reading time
  const words = data.content.split(" ").length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  // Handle tags
  let tags = [];

  if (data.tags) {
    tags = data.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return await createPost({
    title: data.title,
    slug,
    content: data.content,
    excerpt,
    tags,
    image: data.image,
    category: data.category,
    readingTime,
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

export const getPostBySlugService = async (slug) => {
  const post = await getPostBySlug(slug);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  return post;
};

export const incrementPostViewsService = async (slug) => {
  const post = await incrementPostViews(slug);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  return post;
};

export const getRelatedPostsService = async (slug) => {
  const currentPost = await getPostBySlug(slug);

  if (!currentPost) {
    throw new AppError("Post not found", 404);
  }

  return await getRelatedPosts(
    currentPost._id,
    currentPost.category._id
  );
};