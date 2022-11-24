import React, { useState } from "react";
import { useLoginHandler } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./auth.css";
import { Link, useLocation } from "react-router-dom";

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorData, setErrorData] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const [disableLogin, setDisableLogin] = useState(false);
  const { location } = useLocation();
  const { loginHandler } = useLoginHandler();

  return (
    <div className="auth-container flex-column-center">
      <h4 className="heading4">LOGIN</h4>
      <form className="form-auth">
        <div className="form-input">
          <label htmlFor="email" className="input-lable">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="input-primary border-box"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((loginData) => ({
                ...loginData,
                email: e.target.value,
              }))
            }
            onFocus={() => setErrorData(false)}
          ></input>
        </div>
        <div className="form-input">
          <label htmlFor="password" className="input-lable">
            Password *
          </label>
          <div className="input-primary input-icon-container border-box">
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              className="input-no-outline"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((loginData) => ({
                  ...loginData,
                  password: e.target.value,
                }))
              }
              onFocus={() => setErrorData(false)}
              required
            ></input>
            <button
              className="btn-no-decoration cursor-pointer text-white"
              type="button"
              disabled={disableLogin}
              onClick={() => setShowPassword(!showpassword)}
            >
              <FontAwesomeIcon
                icon={showpassword ? "eye" : "eye-slash"}
                className="input-icon-style"
              />
            </button>
          </div>
        </div>
        <button
          className="btn btn-primary btn-auth"
          disabled={disableLogin}
          onClick={(e) =>
            loginHandler(
              e,
              loginData,
              setLoginData,
              setErrorData,
              setDisableLogin,
              location
            )
          }
        >
          Login
        </button>
        <button
          className="btn btn-outline-primary btn-auth guest-button"
          disabled={disableLogin}
          onClick={(e) =>
            loginHandler(
              e,
              null,
              setLoginData,
              setErrorData,
              setDisableLogin,
              location
            )
          }
        >
          Login as Guest
        </button>
        {errorData && (
          <div className="error-login">
            <FontAwesomeIcon icon="circle-exclamation" className="error-icon" />{" "}
            <div>Email or Password is incorrect.</div>
          </div>
        )}
        <div className="flex-row-center">
          <span>Don't have an account?</span>
          <Link to="/signup" className="btn-link btn-link-primary">
            Create one
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
