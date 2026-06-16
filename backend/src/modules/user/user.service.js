import { getUserById, getUserPosts } from "./user.repository.js";
import { AppError } from "../../utils/appError.js";

export const getUserProfileService = async (userId) => {
  const user = await getUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const getUserPostsService = async (userId) => {
  return await getUserPosts(userId);
};