import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./auth.css";

function SignupForm() {
  return (
    <>
      <div className="flex-column-center auth-container">
        <h4 className="heading4">SIGN UP</h4>
        <form className="form-auth">
          <div className="form-input">
            <lable htmlFor="firstName" className="input-lable">
              First Name *
            </lable>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              className="input-primary"
              required
            />
          </div>
          <div className="form-input">
            <lable htmlFor="lastName" className="input-lable">
              Last Name *
            </lable>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              className="input-primary"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="email" className="input-lable">
              Email *
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="input-primary"
              required
            />
          </div>
          <div className="form-input">
            <lable htmlFor="password" className="input-lable">
              Password *
            </lable>
            <div className="input-primary input-icon-container">
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="input-no-outline"
                required
              />
              <button
                type="button"
                className="btn-no-decoration text-white cursor-pointer"
              >
                <FontAwesomeIcon
                  icon="eye-slash"
                  className="input-icon-style"
                />
              </button>
            </div>
          </div>
          <div className="form-input">
            <lable htmlFor="confPass" className="input-lable">
              Confirm Password *
            </lable>
            <div className="input-primary input-icon-container">
              <input
                type="password"
                id="confPass"
                placeholder="Confirm Password"
                className="input-no-outline"
                required
              />
              <button
                type="button"
                className="btn-no-decoration text-white cursor-pointer"
              >
                <FontAwesomeIcon
                  icon="eye-slash"
                  className="input-icon-style"
                />
              </button>
            </div>
          </div>
          <button className="btn btn-primary btn-auth">Sign Up</button>
          <div className="flex-row-center margin-top-5">
            <span>Already have an account?</span>
            <Link to="/login" className="btn-link btn-link-primary">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupForm;
