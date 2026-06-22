import { apiResponse } from "../../utils/apiResponse.js";

import {
  createCategoryService,
  getAllCategoriesService,
  getCategoryBySlugService,
  getCategoryPostsService,
} from "./categories.service.js";

export const createCategory = async (req, res) => {
  try {
    const category = await createCategoryService(req.body);

    return apiResponse(
      res,
      201,
      true,
      "Category created successfully",
      category
    );
  } catch (error) {
    return apiResponse(
      res,
      error.statusCode || 400,
      false,
      error.message
    );
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await getAllCategoriesService();

    return apiResponse(
      res,
      200,
      true,
      "Categories fetched successfully",
      categories
    );
  } catch (error) {
    return apiResponse(
      res,
      error.statusCode || 400,
      false,
      error.message
    );
  }
};

export const getCategoryBySlug = async (req, res) => {
  try {
    const category = await getCategoryBySlugService(req.params.slug);

    return apiResponse(
      res,
      200,
      true,
      "Category fetched successfully",
      category
    );
  } catch (error) {
    return apiResponse(
      res,
      error.statusCode || 400,
      false,
      error.message
    );
  }
};

export const getCategoryPosts = async (req, res) => {
  try {
    const result = await getCategoryPostsService(req.params.slug);

    return apiResponse(
      res,
      200,
      true,
      "Category posts fetched successfully",
      result
    );
  } catch (error) {
    return apiResponse(
      res,
      error.statusCode || 400,
      false,
      error.message
    );
  }
};