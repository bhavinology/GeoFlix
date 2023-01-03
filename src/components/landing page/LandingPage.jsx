import { Link } from "react-router-dom";
import { useData } from "../../contexts/index";
import "./landingpage.css";

function LandingPage() {
  const { state, dispatch } = useData();

  return (
    <div className="flex-column middle-content">
      <div className="hero-section flex-row-center">
        <div className="hero-text-container flex-column">
          <div className="hero-text flex-column">
            <p className="hero-para">Grasp Geo-politics!</p>
            <p>
              Do you want to know how geo-politics is evolving as of now? You
              are at the right place.Understand geo-politics by watching
              GeoFlix!
            </p>
          </div>
          <Link
            className="btn btn-primary no-link-decoration inline-flex-center hero-btn"
            to="/videos"
            onClick={() => {
              dispatch({
                type: "CATEGORY",
                payload: { category: "All" },
              });
            }}
          >
            Explore Now
          </Link>
        </div>
        <div className="hero-img-container">
          <img
            src="https://res.cloudinary.com/dpcteokzf/image/upload/v1672726601/geoflix/geo_q5sig1.webp"
            className="hero-img"
            alt="hero-img"
          />
        </div>
      </div>

      <div className="categories-container flex-column-center">
        {state.categories.slice(1).map((category, index) => (
          <div key={category._id}>
            <div
              className={`flex-row-center category-container ${
                index % 2 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="category-img-container ">
                <img
                  src={category.imgUrl}
                  className="hero-img"
                  alt="category-img"
                />
              </div>
              <div className="flex-column category-text">
                <p className="category-para">{category.title}</p>
                <Link
                  className="btn btn-primary no-link-decoration inline-flex-center category-btn"
                  to="/videos"
                  onClick={() => {
                    dispatch({
                      type: "CATEGORY",
                      payload: { category: category.categoryName },
                    });
                  }}
                >
                  Check Now
                </Link>
              </div>
            </div>
            {index !== 4 && <hr className="section-line"></hr>}
          </div>
        ))}
      </div>
    </div>
  );
}

export { LandingPage };
