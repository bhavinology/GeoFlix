import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts";
import "./profile.css";

function ProfileDetail() {
  const { setAuthToken, authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.authUser) setAuthUser(JSON.parse(localStorage.authUser));
  }, []);

  function logoutHandler() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    toast.success("Logged ou successfully");
    setAuthToken("");
    setAuthUser(null);
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
