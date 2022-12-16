import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { RiPlayListAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/index";
import { usePlaylistOperations } from "../../hooks";
import "./playlists.css";

function Playlists() {
  const { state } = useData();
  const { deletePlaylist } = usePlaylistOperations();
  const [disable, setDisable] = useState(false);

  const getThumbnail = (playlist) =>
    playlist.videos.length === 0
      ? "https://i.ytimg.com/img/no_thumbnail.jpg"
      : `https://i.ytimg.com/vi/${playlist.videos[0]._id}/0.jpg`;

  return (
    <div className="flex-column">
      <div className="flex-column-start">
        <div className="large-font-size">
          {state.playlists.length} Playlist(s)
        </div>
      </div>
      <div className="flex-row-center">
        <div className="videos-container">
          {state.playlists.map((playlist) => (
            <div className="video-card playlist-card" key={playlist._id}>
              <Link
                to={`/playlists/${playlist._id}`}
                className="no-link-decoration"
              >
                <div className="video-img-container">
                  <img
                    src={getThumbnail(playlist)}
                    className="video-thumbnail"
                    alt="video-thumbnail"
                  />
                  <div className="video-count-container">
                    <div className="large-font-size no-link-decoration">
                      {playlist.videos.length === 0
                        ? ""
                        : playlist.videos.length}
                    </div>
                    <RiPlayListAddFill className="large-font-size no-link-decoration" />
                  </div>
                </div>
                <div className="title-and-options playlist-title">
                  <span className="large-font-size">{playlist.name}</span>
                  <button
                    className="btn-no-decoration error-color"
                    disabled={disable}
                    onClick={(e) => deletePlaylist(e, playlist._id, setDisable)}
                  >
                    <FontAwesomeIcon icon="trash" />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Playlists;
