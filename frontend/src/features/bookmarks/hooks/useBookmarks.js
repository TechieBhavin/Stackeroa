import { useEffect, useState } from "react";
import {
  getBookmarks,
  removeBookmark
} from "../api/bookmarkApi";

export const useBookmarks = () => {

  const token = localStorage.getItem("token");

  const [bookmarks,setBookmarks] = useState([]);
  const [loading,setLoading] = useState(true);

  const fetchBookmarks = async () => {

    try {

      const response = await getBookmarks(token);

      setBookmarks(response.data);

    }
    catch(error){
      console.log(error);
    }
    finally{
      setLoading(false);
    }

  };

  const handleRemove = async (postId) => {

    try{

      await removeBookmark(postId,token);

      fetchBookmarks();

    }
    catch(error){
      console.log(error);
    }

  };

  useEffect(()=>{

    fetchBookmarks();

  },[]);

  return {
    bookmarks,
    loading,
    handleRemove
  };

};