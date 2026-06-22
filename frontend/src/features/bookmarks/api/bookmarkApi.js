import axios from "axios";

const API_URL = "http://localhost:5001/api/bookmarks";

export const getBookmarks = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const addBookmark = async (postId, token) => {
  const response = await axios.post(
    `${API_URL}/${postId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const removeBookmark = async (postId, token) => {
  const response = await axios.delete(
    `${API_URL}/${postId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};