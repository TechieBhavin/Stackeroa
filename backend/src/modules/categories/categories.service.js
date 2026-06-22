import {
  createCategory,
  findCategoryBySlug,
  getAllCategories,
  getPostsByCategory,
} from "./categories.repository.js";

import { AppError } from "../../utils/appError.js";

export const createCategoryService = async (data) => {
  const existingCategory = await findCategoryBySlug(data.slug);

  if (existingCategory) {
    throw new AppError("Category already exists", 400);
  }

  return await createCategory(data);
};

export const getAllCategoriesService = async () => {
  return await getAllCategories();
};

export const getCategoryBySlugService = async (slug) => {
  const category = await findCategoryBySlug(slug);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export const getCategoryPostsService = async (slug) => {
  const category = await findCategoryBySlug(slug);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const posts = await getPostsByCategory(category._id);

  const uniqueAuthors = new Set(
    posts.map((post) => post.author._id.toString())
  );

  return {
    category,
    stats: {
      articles: posts.length,
      authors: uniqueAuthors.size,
    },
    posts,
  };
};