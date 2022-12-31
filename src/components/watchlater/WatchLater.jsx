import { Link } from "react-router-dom";
import { useData } from "../../contexts/index";
import CommonVideocard from "../../components/shared/CommonVideocard";

function WatchLater() {
  const { state } = useData();
  return (
    <>
      <div className="flex-column">
        <div className="flex-column-start">
          <div className="large-font-size">Watch Later</div>
          <div>{`${state.watchLater.length} video(s)`}</div>
        </div>

        <div className="flex-row-center">
          <div className="videos-container">
            {state.watchLater.map((video) => (
              <CommonVideocard
                video={video}
                playlistCategory="watchLater"
                key={video._id}
              ></CommonVideocard>
            ))}
          </div>
        </div>
      </div>
      {!state.watchLater.length && (
        <div className="flex-column-center margin-container no-playlist-container">
          <div>No saved videos.</div>
          <Link
            className="btn btn-primary no-link-decoration inline-flex-center"
            to="/videos"
          >
            Explore
          </Link>
        </div>
      )}
    </>
  );
}

export default WatchLater;
