import axios from "axios";
import { toast } from "react-toastify";

const getAllPlaylistsFromServer = async (authorization) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: { authorization },
    });
    if (response.status === 200) return response.data;
    else throw new Error();
  } catch (e) {
    console.log(
      "getAllPlaylistsFromServer: Error in fetching playlist detail",
      e
    );
  }
};

const addPlaylistToServer = async (authorization, playlist) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      { playlist },
      {
        headers: { authorization },
      }
    );
    if (response.status === 201) {
      toast.success("Playlist added successfully");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't add Playlist! Try again.`);
    console.log("addPlaylistToServer: Error in adding playlist", e);
  }
};

const addVideoToPlaylistInServer = async (authorization, playlistId, video) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: { authorization },
      }
    );
    if (response.status === 201) {
      toast.success("Video added in playlist");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't add video in Playlist! Pls try again`);
    console.log(
      "addVideoToPlaylistInServer: Error in adding video to playlist",
      e
    );
  }
};

const removeVideoFromPlaylistInServer = async (
  authorization,
  playlistId,
  videoId
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: { authorization },
      }
    );
    if (response.status === 200) {
      toast.success("Video removed from playlist");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't remove video from playlist! Try again.`);
    console.log("removeVideoFromPlaylistInServer: Error in removing video", e);
  }
};

const deletePlaylistInServer = async (authorization, playlistId) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization },
    });
    if (response.status === 200) {
      toast.success("Playlist removed successfully");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't remove playlist!`);
    console.log("deletePlaylistInServer: Error in deleting Playlist", e);
  }
};

export {
  getAllPlaylistsFromServer,
  addPlaylistToServer,
  addVideoToPlaylistInServer,
  removeVideoFromPlaylistInServer,
  deletePlaylistInServer,
};
