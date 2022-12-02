import { useReducer } from "react";
import { postSignupData } from "../services";
import { useLoginHandler } from "./useLoginHandler";

function useSignupHandler() {
  const { loginHandler } = useLoginHandler();
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialErrorState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };

      case "INPUT_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };

      case "INPUT_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "INPUT_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      case "INPUT_CONFIRM_PASSWORD":
        return {
          ...state,
          confirmPassword: action.payload,
        };
      default:
        throw new Error(`unknown action type ${action.type}`);
    }
  };

  const errorReducer = (state, action) => {
    switch (action.type) {
      case "ERROR_FIRST_NAME":
        return {
          ...state,
          firstName: action.payload,
        };

      case "ERROR_LAST_NAME":
        return {
          ...state,
          lastName: action.payload,
        };

      case "ERROR_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "ERROR_PASSWORD":
        return {
          ...state,
          password: action.payload,
        };
      case "ERROR_CONFIRM_PASSWORD":
        return {
          ...state,
          confirmPassword: action.payload,
        };
      default:
        throw new Error(`unknown action type ${action.type}`);
    }
  };

  const [formData, formDispatch] = useReducer(formReducer, initialFormState);
  const [errorData, errorDispatch] = useReducer(
    errorReducer,
    initialErrorState
  );

  const checkValidation = () => {
    let signupFlag = true;

    if (!new RegExp("[A-Za-z]+").test(formData.firstName)) {
      errorDispatch({
        type: "ERROR_FIRST_NAME",
        payload: "first name should have only letters",
      });
      signupFlag = false;
    }

    if (!new RegExp("[A-Za-z]+").test(formData.lastName)) {
      errorDispatch({
        type: "ERROR_LAST_NAME",
        payload: "Last Name should have only letters",
      });
      signupFlag = false;
    }

    if (!new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(formData.email)) {
      errorDispatch({
        type: "ERROR_EMAIL",
        payload: " Please enter valid email",
      });
      signupFlag = false;
    }

    if (
      !new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}"
      ).test(formData.password)
    ) {
      errorDispatch({
        type: "ERROR_PASSWORD",
        payload:
          "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 digit and 1 special character",
      });
      signupFlag = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errorDispatch({
        type: "ERROR_CONFIRM_PASSWORD",
        payload: "Both the passwords should match",
      });
      signupFlag = false;
    }

    return signupFlag;
  };

  const signupHandler = async (e, location, setDisableSignup) => {
    e.preventDefault();
    setDisableSignup(true);
    try {
      if (checkValidation()) {
        const response = await postSignupData(formData);
        loginHandler(
          null,
          {
            email: formData.email,
            password: formData.password,
          },
          null,
          null,
          null,
          location
        );
      }
    } catch (e) {
      console.log("error in signupHandler", e);
    } finally {
      setDisableSignup(false);
    }
  };

  return { formData, formDispatch, errorData, errorDispatch, signupHandler };
}

export { useSignupHandler };
