import { useAuth, useData } from "../contexts";
import { useNavigate } from "react-router-dom";
import { getAllVideosInHistoryFromServer } from "../services/index.js";
import { fas } from "@fortawesome/free-solid-svg-icons";

function useVideoOperations() {
  const { authToken, setAuthToken, setAuthUser } = useAuth();
  const { state, dispatch, setPlaylistModal } = useData();
  const navigate = useNavigate();

  function resetFunction() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setAuthToken("");
    setAuthUser(null);
    navigate("/login");
  }

  const getAllVideosInHistory = async () => {
    try {
      const response = await getAllVideosInHistoryFromServer(authToken);
      dispatch({
        type: "SET_HISTORY",
        payload: { history: response.history },
      });
    } catch (e) {
      resetFunction();
    }
  };

  const addVideoToHistory = async (video) => {
    const inHistory = state.history.filter(
      (historyVideo) => historyVideo._id === video._id
    );
    if (inHistory.length === 0) {
      try {
        const response = await addVideoToHistoryInServer(authToken, video);
        dispatch({
          type: "SET_HISTORY",
          payload: { history: response.history },
        });
      } catch (e) {
        resetFunction();
      }
    }
  };

  const deleteVideoFromHistory = async (e, videoId, setDisable) => {
    e.preventDefault();
    setDisable(true);
    try {
      const response = await deleteVideoFromHistoryInServer(authToken, videoId);
      dispatch({
        type: "SET_HISTORY",
        payload: { history: response.history },
      });
    } catch (e) {
      setDisable(false);
      resetFunction();
    }
  };

  const deleteAllVideosFromHistory = async (setDisable) => {
    setDisable(true);
    try {
      const response = await deleteAllVideosFromHistoryInServer(authToken);
      dispatch({
        type: "SET_HISTORY",
        payload: { history: response.history },
      });
    } catch (e) {
      resetFunction();
    } finally {
      setDisable(false);
    }
  };
}
