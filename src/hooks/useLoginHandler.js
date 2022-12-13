import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../contexts";
import { postLoginData } from "../services";

function useLoginHandler() {
  const { setAuthToken, setAuthUser } = useAuth();
  const navigate = useNavigate();
  const { dispatch } = useData();

  const loginHandler = async (
    e,
    loginData,
    setLogindata,
    setErrorData,
    setDisableLogin,
    location
  ) => {
    if (setDisableLogin) setDisableLogin(true);
    if (e) e.preventDefault();
    try {
      let response;
      if (e && e.target.innerText === "Login as Guest") {
        setLogindata({
          email: "adarshbalika@gmail.com",
          password: "adarshBalika123",
        });
        response = await postLoginData(
          "adarshbalika@gmail.com",
          "adarshBalika123"
        );
      } else
        response = await postLoginData(loginData.email, loginData.password);
      const userResponse = response.foundUser;
      const tokenResponse = response.encodedToken;
      setAuthToken(tokenResponse);
      setAuthUser(userResponse);
      localStorage.setItem("authToken", tokenResponse);
      localStorage.setItem("authUser", JSON.stringify(userResponse));
      dispatch({
        type: "SET_PLAYLISTS",
        payload: { playlists: response.playlists },
      });

      // if (location.state) navigate(location.state?.from?.pathname);
      navigate("/videos");
    } catch (e) {
      console.log("loginHandler: Error in Login", e);
      setErrorData(true);
    } finally {
      if (setDisableLogin) setDisableLogin(false);
    }
  };

  return { loginHandler };
}

export { useLoginHandler };
