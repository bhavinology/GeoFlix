import "./profile.css";

function ProfileDetail() {
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
            <p>Bhavin Patel</p>
            <p>bhavinpatel9624@gmail.com</p>
          </div>
        </div>

        <button className="btn btn-outline-primary logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default ProfileDetail;
