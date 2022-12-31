import axios from "axios";
import { toast } from "react-toastify";

const getAllVideosInHistoryFromServer = async (authorization) => {
  try {
    const response = await axios.get("/api/user/history", {
      headers: { authorization },
    });
    if (response.status === 200) return response.data;
    else throw new Error();
  } catch (e) {
    console.error(
      "getAllVideosInHistoryFromServer : Error in fetching history details",
      e
    );
  }
};

const addVideoToHistoryInServer = async (authorization, video) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      { headers: { authorization } }
    );
    if (response.status === 201) return response.data;
    else throw new Error();
  } catch (e) {
    console.error(
      "addVideoInHistoryInServer : Error in adding video to History",
      e
    );
  }
};

const deleteVideoFromHistoryInServer = async (authorization, videoId) => {
  try {
    const response = await axios.delete(`/api/user/history/${videoId}`, {
      headers: { authorization },
    });
    if (response.status === 200) {
      toast.success("Video deleted from history");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't delete video! Try again.`);
    console.error(
      "deleteVideoFromHistoryInServer : Error in deleting video from History",
      e
    );
  }
};

const deleteAllVideosFromHistoryInServer = async (authorization) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: { authorization },
    });
    if (response.status === 200) {
      toast.success("History cleared!");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't clear history`);
    console.error(
      "deleteVideoFromHistoryInServer : Error in deleting videos from History",
      e
    );
  }
};

const getAllLikedVideosFromServer = async (authorization) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: { authorization },
    });
    if (response.status === 200) return response.data;
    else throw new Error();
  } catch (e) {
    console.error(
      "getAllLikedVideosFromServer : Error in fetching liked videos.",
      e
    );
  }
};

const addVideoToLikedVideosInServer = async (authorization, video) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: { authorization },
      }
    );
    if (response.status === 201) {
      toast.success("Added to Liked Videos");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't add video to liked videos! Try again.`);
    console.error(
      "addVideoToLikedVideosInServer : Error in adding video to liked videos",
      e
    );
  }
};

const deleteVideoFromLikedVideosInServer = async (authorization, videoId) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, {
      headers: { authorization },
    });
    if (response.status === 200) {
      toast.success("Removed from Liked Videos");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't update liked videos! Try again.`);
    console.error(
      "deleteVideoFromLikedVideosInServer : Error in deleting video from liked videos",
      e
    );
  }
};

const getWatchLaterVideosFromServer = async (authorization) => {
  try {
    const response = await axios.get("/api/user/watchlater", {
      headers: { authorization },
    });
    if (response.status === 200) return response.data;
    else throw new Error();
  } catch (e) {
    console.error(
      "getWatchLaterVideosFromServer : Error in fetching watch later videos.",
      e
    );
  }
};

const addVideoToWatchLaterVideosInServer = async (authorization, video) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: { authorization },
      }
    );
    if (response.status === 201) {
      toast.success("Added to Watch Later");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't add video in watch later! Try again.`);
    console.error(
      "addVideoToWatchLaterVideosInServer : Error in adding video to Watch Later",
      e
    );
  }
};

const deleteVideoFromWatchLaterVideosInServer = async (
  authorization,
  videoId
) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
      headers: { authorization },
    });
    if (response.status === 200) {
      toast.success("Removed from Watch Later");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't update playlist! Try again.`);
    console.error(
      "deleteVideoFromWatchLaterVideosInServer : Error in deleting video from Watch Later",
      e
    );
  }
};

export {
  getAllVideosInHistoryFromServer,
  addVideoToHistoryInServer,
  deleteVideoFromHistoryInServer,
  deleteAllVideosFromHistoryInServer,
  getAllLikedVideosFromServer,
  addVideoToLikedVideosInServer,
  deleteVideoFromLikedVideosInServer,
  getWatchLaterVideosFromServer,
  addVideoToWatchLaterVideosInServer,
  deleteVideoFromWatchLaterVideosInServer,
};
