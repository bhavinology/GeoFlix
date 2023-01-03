import "./playlists.css";
import { useData } from "../../contexts/index";
import { Link, useParams } from "react-router-dom";
import CommonVideocard from "../shared/CommonVideocard";
import { Sidebar } from "../shared/Sidebar";

function SinglePlaylist() {
  const { state } = useData();
  const param = useParams();
  const playlist = state.playlists.filter(
    (playlist) => playlist._id === param.playlistId
  )[0];

  return (
    <>
      <div className="middle-content">
        <Sidebar />
        <div className="flex-column">
          <div className="flex-column-start">
            <div className="large-font-size">{playlist.name}</div>
            <div>{`${playlist.videos.length} video(s)`}</div>
          </div>
          <div className="flex-row-center">
            <div className="videos-container">
              {playlist.videos.map((video) => (
                <CommonVideocard
                  video={video}
                  playlistCategory={playlist._id}
                  key={video._id}
                ></CommonVideocard>
              ))}
            </div>
          </div>
        </div>
        {playlist.videos.length === 0 && (
          <div className="flex-column-center margin-container no-playlist-container">
            <div>There are no videos added in this playlist.</div>
            <Link
              to="/videos"
              className="btn btn-primary no-link-decoration inline-flex-center"
            >
              Explore
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default SinglePlaylist;
