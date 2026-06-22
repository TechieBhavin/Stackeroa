import { User } from "../../models/user.model.js";

export const addBookmark = async (userId, postId) => {
  return await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: {
        bookmarks: postId,
      },
    },
    { new: true }
  );
};

export const removeBookmark = async (userId, postId) => {
  return await User.findByIdAndUpdate(
    userId,
    {
      $pull: {
        bookmarks: postId,
      },
    },
    { new: true }
  );
};

export const getBookmarks = async (userId) => {
  return await User.findById(userId)
    .populate({
      path: "bookmarks",
      populate: [
        {
          path: "author",
          select: "name",
        },
        {
          path: "category",
          select: "name slug icon",
        },
      ],
    });
};