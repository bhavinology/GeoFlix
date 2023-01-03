import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useData } from "../../contexts/index";
import { VideoCard } from "./VideoCard";
import { Sidebar } from "../shared/Sidebar";
import "./videos.css";

function Videos() {
  const { state, dispatch } = useData();
  const dispatchHandler = (category) => {
    dispatch({ type: "CATEGORY", payload: { category: category } });
  };
  function getFilteredVideos() {
    if (state.category === "All") return state.videos;
    else
      return state.videos.filter(
        (perVideo) => perVideo.category === state.category
      );
  }
  return (
    <>
      <div className="middle-content">
        <Sidebar />
        <div>
          <div className="categories">
            {state.categories.map((category) => (
              <span
                className={`chip category-chip ${
                  category.categoryName === state.category
                    ? "active-category"
                    : null
                }`}
                key={category._id}
                onClick={() => dispatchHandler(category.categoryName)}
              >
                {category.categoryName}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-row-center">
          <div className="videos-container">
            {getFilteredVideos().map((video) => (
              <VideoCard video={video} key={video._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
