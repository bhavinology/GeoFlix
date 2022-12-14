import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { usePlaylistOperations, useVideoOperations } from "../../hooks/index";
import "../../components/playlists/playlists.css";
import { useState } from "react";

function CommonVideocard({ video, playlistCategory, uploaded }) {
  const { removeVideoFromPlaylist } = usePlaylistOperations();
  const {
    deleteVideoFromHistory,
    deleteVideoFromLikedVideos,
    deleteVideoFromWatchLaterVideos,
  } = useVideoOperations();
  const [disable, setDisable] = useState(false);

  const onClickDeleteHandler = (e) => {
    if (playlistCategory === "likedVideo")
      deleteVideoFromLikedVideos(e, video._id, setDisable);
    else if (playlistCategory === "watchHistory")
      deleteVideoFromHistory(e, video._id, setDisable);
    else if (playlistCategory === "watchLater")
      deleteVideoFromWatchLaterVideos(e, video._id);
    else removeVideoFromPlaylist(e, playlistCategory, setDisable, video._id);
  };
  return (
    <div className="video-card playlist-card">
      <Link to={`/videos/${video._id}`} className="no-link-decoration">
        <div className="video-img-container">
          <img
            src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
            className="video-thumbnail"
            alt="video-thumbnail"
          />
        </div>
      </Link>
      <div className="title-and-options playlist-title">
        <span>{video.title}</span>
        {!uploaded && (
          <button
            className="btn-no-decoration error-color"
            onClick={(e) => onClickDeleteHandler(e)}
            disabled={disable}
          >
            <FontAwesomeIcon
              icon="trash"
              className="large-font-size delete-icon"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default CommonVideocard;
