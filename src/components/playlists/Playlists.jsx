import { useData } from "../../contexts/index";
import "./playlists.css";

function Playlists() {
  //   const { state } = useData();
  return (
    <div className="flex-column">
      <div className="flex-column-start">
        <div className="large-font-size">1 Playlists</div>
      </div>
      <div className="flex-row-center">
        <div className="videos-container"></div>
      </div>
    </div>
  );
}

export default Playlists;
