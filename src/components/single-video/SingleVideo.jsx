import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { RiPlayListAddFill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { toast } from "react-toastify";
import { useData, useAuth } from "../../contexts/index";
import { useVideoOperations } from "../../hooks/index";
import { updateViewCount } from "../../services/dataService";
import { Sidebar } from "../shared/Sidebar";
import "./singlevideo.css";

function SingleVideo() {
  const params = useParams();
  const { state, setPlaylistModal, setCurrentVideo, dispatch } = useData();
  const [disableLike, setDisableLike] = useState(false);
  const [disableWatchLater, setDisableWatchLater] = useState(false);
  const { authToken } = useAuth();
  const {
    addVideoToHistory,
    isLiked,
    addVideoToLikedVideos,
    deleteVideoFromLikedVideos,
    addVideoToWatchLaterVideos,
    inWatchLater,
    deleteVideoFromWatchLaterVideos,
  } = useVideoOperations();
  const video = state.videos.find((video) => video._id === params.videoId);

  useEffect(() => {
    setCurrentVideo(video);
  }, [video]);

  const likeHandler = (e, video) =>
    authToken
      ? isLiked(video._id)
        ? deleteVideoFromLikedVideos(e, video._id, setDisableLike)
        : addVideoToLikedVideos(video, setDisableLike)
      : toast.info("Please login to continue");

  const watchLaterHandler = (e, video) =>
    authToken
      ? inWatchLater(video._id)
        ? deleteVideoFromWatchLaterVideos(e, video._id, setDisableWatchLater)
        : addVideoToWatchLaterVideos(e, video, setDisableWatchLater)
      : toast.info("Please login to continue");

  const copyHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.info("Link Copied");
  };

  const increaseViewCount = async (video) => {
    const response = await updateViewCount(video._id);
    const updatedVideoList = state.videos.map((eachVideo) =>
      eachVideo._id === video._id ? response.video : eachVideo
    );
    dispatch({
      type: "SET_VIDEOS",
      payload: { videos: updatedVideoList },
    });
  };

  return (
    <>
      <div className="middle-content">
        <Sidebar />
        {video && (
          <div className="flex-row-justify-space-around margin-container video-and-notes">
            <div className="video-content flex-column">
              <div className="single-video-container">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video._id}`}
                  controls
                  width="100%"
                  height="100%"
                  onStart={() => {
                    if (authToken) addVideoToHistory(video);
                    increaseViewCount(video);
                  }}
                />
              </div>
              <div className="video-description">
                <div className="keyword hashtag">{`#${video.category}`}</div>
                <div className="video-title">{video.title}</div>
                <div className="category-chip chip">
                  Views : {video?.viewCount}
                </div>
                <div className="video-buttons">
                  <span
                    className="chip category-chip"
                    style={{ pointerEvents: disableLike ? "none" : "auto" }}
                    onClick={(e) => !disableLike && likeHandler(e, video)}
                  >
                    {isLiked(video?._id) ? (
                      <FontAwesomeIcon
                        icon="thumbs-up"
                        className="p-right-5 keyword"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="p-right-5"
                      />
                    )}
                    Like
                  </span>
                  <span
                    className="chip category-chip"
                    onClick={(e) =>
                      !disableWatchLater && watchLaterHandler(e, video)
                    }
                  >
                    {inWatchLater(video?._id) ? (
                      <FontAwesomeIcon
                        icon="clock"
                        className="p-right-5 keyword"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faClock} className="p-right-5" />
                    )}
                    Watch Later
                  </span>
                  <span
                    className="chip category-chip icon-chip"
                    onClick={() => setPlaylistModal(true)}
                  >
                    <div className="icon-chip">
                      <RiPlayListAddFill />
                    </div>
                    <span className="p-left-5">Save</span>
                  </span>
                  <span className="chip category-chip" onClick={copyHandler}>
                    <FontAwesomeIcon icon="share-alt" className="p-right-5" />
                    Copy Link
                  </span>
                </div>
              </div>
            </div>
            <div className="add-note-container"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default SingleVideo;
