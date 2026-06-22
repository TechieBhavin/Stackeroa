import Category from "../../models/category.model.js";
import { Post } from "../../models/post.model.js";

export const createCategory = async (data) => {
  return await Category.create(data);
};

export const findCategoryBySlug = async (slug) => {
  return await Category.findOne({ slug });
};

export const getAllCategories = async () => {
  return await Category.find();
};

export const findCategoryById = async (id) => {
  return await Category.findById(id);
};

export const getPostsByCategory = async (categoryId) => {
  return await Post.find({ category: categoryId })
    .populate("author", "name")
    .populate("category", "name slug icon")
    .sort({ createdAt: -1 });
};