import "./playlists.css";
import { useData } from "../../contexts/index";
import { useParams } from "react-router-dom";

function SinglePlaylist() {
  const { state } = useData();
  const param = useParams();
  console.log(param);
  const playlist = state.playlists.filter(
    (playlist) => playlist._id === param.playlistId
  )[0];

  return (
    <div className="flex-column">
      <div className="flex-column-start">
        <div className="large-font-size">{playlist.name}</div>
        <div>{`${playlist.videos.length} video(s)`}</div>
      </div>
      <div className="flex-row-center">
        <div className="videos-container"></div>
      </div>
    </div>
  );
}

export default SinglePlaylist;
