import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../../contexts";
import "./videos.css";

function VideoCard({ video }) {
  const { setPlaylistModal, setCurrentVideo } = useData();
  const location = useLocation;
  const [ellipsisIcon, setEllipsisIcon] = useState(false);

  useEffect(() => {
    if (location.pathname === "/videos") setEllipsisIcon(true);
  }, [location]);

  return (
    <div className="video-card">
      <div className="video-img-container">
        <img
          src={`https://i.ytimg.com/vi/${video._id}/0.jpg`}
          alt="video-thumbnail"
          className="video-thumbnail"
        />
      </div>
      <div className="title-and-options">
        <span className="video-title">{video.title}</span>
        {ellipsisIcon && (
          <FontAwesomeIcon
            icon="ellipsis-vertical"
            className="options-icon"
            onClick={(e) => {
              e.preventDefault();
              setPlaylistModal(true);
              setCurrentVideo(video);
            }}
          />
        )}
      </div>
      <div className="video-category">{video.category}</div>
    </div>
  );
}

export { VideoCard };
