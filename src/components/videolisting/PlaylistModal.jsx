import "./playlistModal.css";
import { useData, useAuth } from "../../contexts/index";
import {
  usePlaylistOperations,
  useVideoOperations,
} from "../../hooks/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { faL } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

function PlaylistModal() {
  const { authToken } = useAuth();
  const { state, playlistModal, setPlaylistModal, currentVideo } = useData();
  const { addPlaylist, addVideoToPlaylist, removeVideoFromPlaylist } =
    usePlaylistOperations();
  const {
    inWatchLater,
    addVideoToWatchLaterVideos,
    deleteVideoFromWatchLaterVideos,
  } = useVideoOperations();

  const [newPlaylist, setNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [watchLaterOption, setWatchLaterOption] = useState(false);
  const [disableWatchLater, setDisableWatchLater] = useState(false);
  const [disableCheckbox, setDisableCheckbox] = useState(false);
  const [disableCreate, setDisableCreate] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/videos"
      ? setWatchLaterOption(true)
      : setWatchLaterOption(false);
  }, [location]);

  const createPlaylistHandler = (e) => {
    e.preventDefault();
    const filteredPlaylists = state.playlists.filter(
      (playlist) => playlist.name === playlistName
    );

    if (filteredPlaylists.length === 0) {
      addPlaylist(playlistName, setDisableCreate);
      setNewPlaylist(false);
    } else toast.info("Playlist already exists!");
  };

  const isVideoInPlaylist = (playlist) => {
    const filteredVideos = playlist.videos.filter(
      (playlistVideo) => playlistVideo._id === currentVideo._id
    );

    return filteredVideos.length === 1;
  };

  const videoInPlaylistHandler = (e, playlist) => {
    isVideoInPlaylist(playlist)
      ? removeVideoFromPlaylist(e, playlist._id, setDisableCheckbox)
      : addVideoToPlaylist(playlist._id, setDisableCheckbox);
  };

  return (
    <div
      className={`modal-wrapper ${
        playlistModal ? "display-block" : "display-none"
      }`}
    >
      <div className="playlist-modal">
        <div className="flex-row-spacebetween">
          <div className="playlist playlist-header">Save To...</div>
          <FontAwesomeIcon
            icon="close"
            className="close-btn"
            onClick={() => {
              setPlaylistModal(false);
              setNewPlaylist(false);
            }}
          />
        </div>

        <div className="playlists-container">
          {watchLaterOption && (
            <>
              <input
                id="watchLater"
                type="checkbox"
                className="p-right-5"
                checked={inWatchLater(currentVideo._id)}
                disabled={disableWatchLater}
                onChange={(e) =>
                  inWatchLater(currentVideo._id)
                    ? deleteVideoFromWatchLaterVideos(
                        e,
                        currentVideo._id,
                        setDisableWatchLater
                      )
                    : addVideoToWatchLaterVideos(
                        e,
                        currentVideo,
                        setDisableWatchLater
                      )
                }
              />
              <label htmlFor="watchLater" className="checkbox-label">
                Watch Later
              </label>
            </>
          )}

          {state.playlists.map((playlist) => (
            <div className="playlist" key={playlist._id}>
              <input
                id={playlist._id}
                className="p-right-5"
                type="checkbox"
                checked={isVideoInPlaylist(playlist)}
                disabled={disableCheckbox}
                onChange={(e) => videoInPlaylistHandler(e, playlist)}
              />
              <label htmlFor={playlist._id} className="checkbox-label">
                {playlist.name}{" "}
              </label>
            </div>
          ))}
        </div>

        {newPlaylist ? (
          <form onSubmit={(e) => createPlaylistHandler(e)}>
            <div className="new-playlist-container">
              <label htmlFor="new-playlist-name">Name</label>
              <input
                type="text"
                id="new-playlist-name"
                className="input-primary input-full-width"
                placeholder="Enter Playlist name"
                onChange={(e) => setPlaylistName(e.target.value.trim())}
              />
              <button
                type="submit"
                className={`btn btn-primary btn-dark-theme btn-color ${
                  playlistName === "" ? "disabled-cursor" : ""
                }`}
                disabled={playlistName === "" || disableCreate}
              >
                Create
              </button>
            </div>
          </form>
        ) : (
          <div
            className="playlist create-playlist"
            onClick={() => {
              if (authToken) {
                setNewPlaylist(true);
              } else {
                setPlaylistModal(false);
                navigate("/login");
              }
            }}
          >
            <span className="p-right-5">
              <FontAwesomeIcon icon="plus" />
            </span>
            Create Playlist
          </div>
        )}

        {/* End */}
      </div>
    </div>
  );
}

export default PlaylistModal;
