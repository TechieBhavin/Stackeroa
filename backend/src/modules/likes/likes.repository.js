import { Post } from "../../models/post.model.js";

export const likePost = async (postId, userId) => {
  return await Post.findByIdAndUpdate(
    postId,
    { $addToSet: { likes: userId } },
    { new: true }
  );
};

export const unlikePost = async (postId, userId) => {
  return await Post.findByIdAndUpdate(
    postId,
    { $pull: { likes: userId } },
    { new: true }
  );
};