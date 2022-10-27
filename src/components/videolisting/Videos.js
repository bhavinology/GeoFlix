import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../contexts/index";
import { VideoCard } from "./VideoCard";
import "./videos.css";

function Videos() {
  const { state, dispatch } = useData();
  return (
    <>
      <div>
        <div className="categories">
          {state.categories.map((category) => (
            <span
              className={`chip category-chip ${
                category.categoryName === state.category
                  ? "active-category"
                  : null
              }`}
              key={category.id}
            >
              {category.categoryName}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-row-center">
        <div className="videos-container">
          {state.videos.map((video) => (
            <VideoCard video={video} key={video._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Videos;
