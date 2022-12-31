import CommonVideocard from "../shared/CommonVideocard";
import { useState } from "react";
import { useData } from "../../contexts";
import { useVideoOperations } from "../../hooks";

function History() {
  const { state } = useData();
  const { deleteAllVideosFromHistory } = useVideoOperations();
  const [disable, setDisable] = useState(false);
  return (
    <div className="flex-column">
      <div className="flex-row-justify-space-between">
        <div className="flex-column-start">
          <div className="large-font-size">History</div>
          <div>{`${state.history.length} Videos`}</div>
        </div>
        {state.history.length > 0 && (
          <button
            className="btn btn-link btn-link-error btn-fit-content no-link-decoration"
            disabled={disable}
            onClick={() => deleteAllVideosFromHistory(setDisable)}
          >
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
