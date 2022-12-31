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
export {
  getAllVideosInHistoryFromServer,
  addVideoToHistoryInServer,
  deleteVideoFromHistoryInServer,
  deleteAllVideosFromHistoryInServer,
};
