import { apiResponse } from "../../utils/apiResponse.js";
import {
  getUserProfileService,
  getUserPostsService,
} from "./user.service.js";

export const getUserProfile = async (req, res) => {
  try {
    const user = await getUserProfileService(req.user.id);

    return apiResponse(res, 200, true, "User profile fetched", user);
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const posts = await getUserPostsService(req.user.id);

    return apiResponse(res, 200, true, "User posts fetched", posts);
  } catch (error) {
    return apiResponse(res, 400, false, error.message);
  }
};