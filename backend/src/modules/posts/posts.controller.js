import { apiResponse } from "../../utils/apiResponse.js";
import {
  createPostService,
  getAllPostsService,
  getPostByIdService,
  deletePostService,
  getPostBySlugService,
  incrementPostViewsService,
  getRelatedPostsService
} from "./posts.service.js";
import cloudinary from "../../config/cloudinary.js";
import streamifier from "streamifier";


const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "stackeroa" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

export const createPost = async (req, res) => {
  try {
    console.log("FILE RECEIVED:", req.file); 
    let imageUrl = "";

    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer);
      imageUrl = result.secure_url;
    }

    const post = await createPostService(
      {
        ...req.body,
        image: imageUrl,
      },
      req.user.id
    );

    return apiResponse(res, 201, true, "Post created", post);
  } catch (error) {
    console.log("UPLOAD ERROR:", error);

    return apiResponse(res, 400, false, error.message);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const result = await getAllPostsService(req.query);

    return apiResponse(res, 200, true, "Posts fetched", result);
  } catch (error) {
    return apiResponse(res, 400, false, error.message);
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await getPostByIdService(req.params.id);

    return apiResponse(res, 200, true, "Post fetched", post);
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    await deletePostService(req.params.id, req.user.id);

    return apiResponse(res, 200, true, "Post deleted successfully");
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};

export const getPostBySlug = async (req, res) => {
  try {
    const post = await getPostBySlugService(req.params.slug);

    return apiResponse(
      res,
      200,
      true,
      "Post fetched successfully",
      post
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
export const incrementPostViews = async (req, res) => {
  try {
    const post = await incrementPostViewsService(req.params.slug);

    return apiResponse(
      res,
      200,
      true,
      "Views updated successfully",
      {
        views: post.views,
      }
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

export const getRelatedPosts = async (req, res) => {
  try {
    const posts = await getRelatedPostsService(req.params.slug);

    return apiResponse(
      res,
      200,
      true,
      "Related posts fetched successfully",
      posts
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

