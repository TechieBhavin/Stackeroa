import {
  addBookmark,
  removeBookmark,
  getBookmarks,
} from "./bookmarks.repository.js";

export const addBookmarkService = async (userId, postId) => {
  return await addBookmark(userId, postId);
};

export const removeBookmarkService = async (userId, postId) => {
  return await removeBookmark(userId, postId);
};

export const getBookmarksService = async (userId) => {
  const user = await getBookmarks(userId);

  return user.bookmarks;
};