import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useData } from "../../contexts";
import "./profile.css";

function ProfileDetail() {
  const { setAuthToken, authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const { dispatch } = useData();

  function logoutHandler() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    toast.success("Logged out successfully");
    setAuthToken("");
    setAuthUser(null);
    dispatch({ type: "SET_PLAYLISTS", payload: { playlists: [] } });
    dispatch({ type: "SET_LIKED_VIDEOS", payload: { likes: [] } });
    dispatch({ type: "SET_WATCH_LATER", payload: { watchLater: [] } });
    dispatch({ type: "SET_HISTORY", payload: { history: [] } });
    navigate("/videos");
  }
  return (
    <div className="flex-row-center">
      <div className="logout-container flex-column-center">
        <h4 className="heading4">Account Details</h4>
        <div className="flex-row-center profile-detail">
          {" "}
          <div className="flex-column-center profile-column">
            <p>Name</p>
            <p>Email</p>
          </div>
          <div className="flex-column-center profile-column">
            <p>{`${authUser.firstName} ${authUser.lastName}`}</p>
            <p>{`${authUser.email}`}</p>
          </div>
        </div>

        <button
          className="btn btn-outline-primary logout-btn"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDetail;
