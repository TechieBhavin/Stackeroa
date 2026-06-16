import { apiResponse } from "../../utils/apiResponse.js";
import {
  createCommentService,
  getCommentsService,
  deleteCommentService,
} from "./comments.service.js";

export const createComment = async (req, res) => {
  try {
    const comment = await createCommentService(req.body, req.user.id);

    return apiResponse(res, 201, true, "Comment added", comment);
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await getCommentsService(req.params.postId);

    return apiResponse(res, 200, true, "Comments fetched", comments);
  } catch (error) {
    return apiResponse(res, 400, false, error.message);
  }
};

export const deleteComment = async (req, res) => {
  try {
    await deleteCommentService(req.params.id, req.user.id);

    return apiResponse(res, 200, true, "Comment deleted");
  } catch (error) {
    return apiResponse(res, error.statusCode || 400, false, error.message);
  }
};