import CommonVideocard from "../shared/CommonVideocard";
import { useData } from "../../contexts";

function History() {
  const { state } = useData();
  return (
    <div className="flex-column">
      <div className="flex-row-justify-space-between">
        <div className="flex-column-start">
          <div className="large-font-size">History</div>
          <div>{`${state.history.length} Videos`}</div>
        </div>
        {state.history.length > 0 && (
          <button className="btn btn-link btn-link-error btn-fit-content no-link-decoration">
            Clear History
          </button>
        )}
      </div>
      <div className="flex-row-center">
        <div className="videos-container">
          {state.history.map((video) => (
            <CommonVideocard
              video={video}
              playlistCategory="watchHistory"
              key={video._id}
            ></CommonVideocard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
