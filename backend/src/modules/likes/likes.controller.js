import { apiResponse } from "../../utils/apiResponse.js";
import {
  likePostService,
  unlikePostService,
} from "./likes.service.js";

export const likePost = async (req, res) => {
  try {
    const post = await likePostService(req.params.postId, req.user.id);

    return apiResponse(res, 200, true, "Post liked", post);
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};

export const unlikePost = async (req, res) => {
  try {
    const post = await unlikePostService(req.params.postId, req.user.id);

    return apiResponse(res, 200, true, "Post unliked", post);
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};