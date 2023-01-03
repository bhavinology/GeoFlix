import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSignupHandler } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar } from "../shared/Sidebar";
import "./auth.css";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { formData, formDispatch, errorData, errorDispatch, signupHandler } =
    useSignupHandler();
  const location = useLocation();
  const [disableSignup, setDisableSignup] = useState(false);
  return (
    <>
      <div className="middle-content">
        <Sidebar />
        <div className="flex-column-center auth-container">
          <h4 className="heading4">SIGN UP</h4>
          <form className="form-auth">
            <div className="form-input">
              <label htmlFor="firstName" className="input-lable">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                className="input-primary"
                value={formData.firstName}
                onChange={(e) =>
                  formDispatch({
                    type: "INPUT_FIRST_NAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  errorDispatch({
                    type: "ERROR_FIRST_NAME",
                    payload: "",
                  })
                }
                required
              />
            </div>
            {errorData.firstName.length > 0 && (
              <div className="error">
                <FontAwesomeIcon
                  className="error-icon"
                  icon="exclamation-circle"
                />
                <div>{errorData.firstName}</div>
              </div>
            )}
            <div className="form-input">
              <label htmlFor="lastName" className="input-lable">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                className="input-primary"
                value={formData.lastName}
                onChange={(e) =>
                  formDispatch({
                    type: "INPUT_LAST_NAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  errorDispatch({
                    type: "ERROR_LAST_NAME",
                    payload: "",
                  })
                }
                required
              />
            </div>
            {errorData.lastName.length > 0 && (
              <div className="error">
                <FontAwesomeIcon
                  className="error-icon"
                  icon="exclamation-circle"
                />
                <div>{errorData.lastName}</div>
              </div>
            )}
            <div className="form-input">
              <label htmlFor="email" className="input-lable">
                Email *
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="input-primary"
                value={formData.email}
                onChange={(e) =>
                  formDispatch({
                    type: "INPUT_EMAIL",
                    payload: e.target.value,
                  })
                }
                onFocus={() =>
                  errorDispatch({
                    type: "ERROR_EMAIL",
                    payload: "",
                  })
                }
                required
              />
            </div>
            {errorData.email.length > 0 && (
              <div className="error">
                <FontAwesomeIcon
                  className="error-icon"
                  icon="exclamation-circle"
                />
                {"   "}
                <div>{errorData.email}</div>
              </div>
            )}
            <div className="form-input">
              <label htmlFor="password" className="input-lable">
                Password *
              </label>
              <div className="input-primary input-icon-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter Password"
                  className="input-no-outline"
                  value={formData.password}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                  onFocus={() =>
                    errorDispatch({
                      type: "ERROR_PASSWORD",
                      payload: "",
                    })
                  }
                  required
                />
                <button
                  type="button"
                  className="btn-no-decoration text-white cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={disableSignup}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? "eye" : "eye-slash"}
                    className="input-icon-style"
                  />
                </button>
              </div>
            </div>
            {errorData.password.length > 0 && (
              <div className="error">
                <FontAwesomeIcon
                  className="error-icon"
                  icon="exclamation-circle"
                />
                <div>{errorData.password}</div>
              </div>
            )}
            <div className="form-input">
              <label htmlFor="confPass" className="input-lable">
                Confirm Password *
              </label>
              <div className="input-primary input-icon-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confPass"
                  placeholder="Confirm Password"
                  className="input-no-outline"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    formDispatch({
                      type: "INPUT_CONFIRM_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                  onFocus={() =>
                    errorDispatch({
                      type: "ERROR_CONFIRM_PASSWORD",
                      payload: "",
                    })
                  }
                  required
                />
                <button
                  type="button"
                  className="btn-no-decoration text-white cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={disableSignup}
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? "eye" : "eye-slash"}
                    className="input-icon-style"
                  />
                </button>
              </div>
            </div>
            {errorData.confirmPassword.length > 0 && (
              <div className="error">
                <FontAwesomeIcon
                  className="error-icon"
                  icon="exclamation-circle"
                />
                <div>{errorData.confirmPassword}</div>
              </div>
            )}
            <button
              className="btn btn-primary btn-auth"
              disabled={disableSignup}
              onClick={(e) => signupHandler(e, location, setDisableSignup)}
            >
              Sign Up
            </button>
            <div className="flex-row-center margin-top-5">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="btn-link btn-link-primary"
                state={location.state}
              >
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
