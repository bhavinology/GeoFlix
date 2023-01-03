import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts";
import "./nav.css";

function Navigation() {
  const navigate = useNavigate();
  const { authToken } = useAuth();
  return (
    <nav className="nav-container">
      <div className="brand">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="GeoFlix Logo" className="logo" />
          </Link>
        </div>
        <Link to="/" className="brand-name">
          GeoFlix
        </Link>
      </div>
      <form className="searchbar-container">
        <input
          type="search"
          placeholder="search videos here"
          className="nav-search-field"
        />
        <button className="btn-no-decoration text-white" type="submit">
          <FontAwesomeIcon icon="magnifying-glass" className="search-icon" />
        </button>
      </form>
      <div className="flex-row-center nav-right-icons">
        <div
          className="profile-icon"
          onClick={() =>
            authToken ? navigate("/account") : navigate("/login")
          }
        >
          <FontAwesomeIcon icon="user" className="search-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
