import { useAuth, useData } from "../contexts";
import {
  getAllPlaylistsFromServer,
  addPlaylistToServer,
  addVideoToPlaylistInServer,
  removeVideoFromPlaylistInServer,
  deletePlaylistInServer,
} from "../services/index";
import { useVideoOperations } from "./useVideoOperations";

function usePlaylistOperations() {
  const { state, dispatch, currentVideo } = useData();
  const { authToken } = useAuth();
  const { resetFunction } = useVideoOperations();

  const getAllPlaylists = async () => {
    try {
      const response = await getAllPlaylistsFromServer(authToken);
      dispatch({
        type: "SET_PLAYLISTS",
        payload: { playlists: response.playlists },
      });
    } catch (e) {
      resetFunction();
      // console.log(e);
    }
  };

  const addPlaylist = async (name, setDisable) => {
    setDisable(true);
    try {
      const playlist = { name };
      const response = await addPlaylistToServer(authToken, playlist);
      dispatch({
        type: "SET_PLAYLISTS",
        payload: { playlists: response.playlists },
      });
      return response.playlists[response.playlists.length - 1];
    } catch (e) {
      console.log(e);
    } finally {
      setDisable(false);
    }
  };

  const addVideoToPlaylist = async (playlistId, setDisable) => {
    setDisable(true);
    try {
      const response = await addVideoToPlaylistInServer(
        authToken,
        playlistId,
        currentVideo
      );
      const newPlaylists = state.playlists.reduce(
        (acc, currentPlaylist) =>
          currentPlaylist._id === response.playlist._id
            ? [...acc, response.playlist]
            : [...acc, currentPlaylist],
        []
      );
      dispatch({
        type: "SET_PLAYLISTS",
        payload: { playlists: newPlaylists },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setDisable(false);
    }
  };

  const removeVideoFromPlaylist = async (
    e,
    playlistId,
    setDisable,
    currVideoId
  ) => {
    e.preventDefault();
    setDisable(true);
    let response;
    try {
      if (currVideoId)
        response = await removeVideoFromPlaylistInServer(
          authToken,
          playlistId,
          currVideoId
        );
      else
        response = await removeVideoFromPlaylistInServer(
          authToken,
          playlistId,
          currentVideo._id
        );
      const newPlaylists = state.playlists.reduce(
        (acc, currentPlaylist) =>
          currentPlaylist._id === response.playlist._id
            ? [...acc, response.playlist]
            : [...acc, currentPlaylist],
        []
      );
      dispatch({
        type: "SET_PLAYLISTS",
        payload: { playlists: newPlaylists },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setDisable(false);
    }
  };

  const deletePlaylist = async (e, playlistId, setDisable) => {
    e.preventDefault();
    setDisable(true);
    try {
      const response = await deletePlaylistInServer(authToken, playlistId);
      dispatch({
        type: "SET_PLAYLISTS",
        payload: { playlists: response.playlists },
      });
    } catch (e) {
      console.log(e);
    } finally {
      setDisable(false);
    }
  };

  return {
    getAllPlaylists,
    addPlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
  };
}

export { usePlaylistOperations };
