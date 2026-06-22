import { apiResponse } from "../../utils/apiResponse.js";

import {
  addBookmarkService,
  removeBookmarkService,
  getBookmarksService,
} from "./bookmarks.service.js";

export const addBookmark = async (req, res) => {
  try {
    await addBookmarkService(req.user.id, req.params.postId);

    return apiResponse(
      res,
      200,
      true,
      "Bookmark added successfully"
    );
  } catch (error) {
    return apiResponse(
      res,
      400,
      false,
      error.message
    );
  }
};

export const removeBookmark = async (req, res) => {
  try {
    await removeBookmarkService(req.user.id, req.params.postId);

    return apiResponse(
      res,
      200,
      true,
      "Bookmark removed successfully"
    );
  } catch (error) {
    return apiResponse(
      res,
      400,
      false,
      error.message
    );
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await getBookmarksService(req.user.id);

    return apiResponse(
      res,
      200,
      true,
      "Bookmarks fetched successfully",
      bookmarks
    );
  } catch (error) {
    return apiResponse(
      res,
      400,
      false,
      error.message
    );
  }
};