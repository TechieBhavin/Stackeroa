import { User } from "../../models/user.model.js";
import { Post } from "../../models/post.model.js";

export const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

export const getUserPosts = async (userId) => {
  return await Post.find({ author: userId })
    .sort({ createdAt: -1 })
    .populate("author", "name email");
};