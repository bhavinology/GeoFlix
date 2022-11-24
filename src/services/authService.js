import axios from "axios";
import { toast } from "react-toastify";

const postLoginData = async (email, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    if (response.status === 200) {
      toast.success("Login Successfully");
      return response.data;
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't login!Please try again.`);
    console.log("error in postLoginData", e);
  }
};

const postSignupData = async (formData, navigate) => {
  try {
    const response = await axios.post("/api/auth/signup", formData);
    if (response.status === 201) {
      toast.success("Signed up Successfully");
      navigate("/login");
    } else throw new Error();
  } catch (e) {
    toast.error(`Couldn't sign up.Please try again`);
    console.log("error in postSignupData", e);
  }
};

export { postLoginData, postSignupData };
