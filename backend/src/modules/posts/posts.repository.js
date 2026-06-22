import { Post } from "../../models/post.model.js";

export const createPost = async (data) => {
  return await Post.create(data);
};

export const getAllPosts = async (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const search = query.search || "";

  const skip = (page - 1) * limit;

  const filter = search
    ? {
        title: { $regex: search, $options: "i" },
      }
    : {};

  const posts = await Post.find(filter)
    .populate("author", "name email")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const total = await Post.countDocuments(filter);

  return {
    posts,
    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getPostById = async (id) => {
  return await Post.findById(id).populate("author", "name email");
};

export const deletePostById = async (id) => {
  return await Post.findByIdAndDelete(id);
};

export const getPostBySlug = async (slug) => {
  return await Post.findOne({ slug })
    .populate("author", "name email")
    .populate("category", "name slug icon");
};

export const incrementPostViews = async (slug) => {
  return await Post.findOneAndUpdate(
    { slug },
    { $inc: { views: 1 } },
    { new: true }
  );
};

export const getRelatedPosts = async (postId, categoryId) => {
  return await Post.find({
    _id: { $ne: postId },
    category: categoryId,
  })
    .populate("author", "name")
    .populate("category", "name slug icon")
    .sort({ createdAt: -1 })
    .limit(4);
};