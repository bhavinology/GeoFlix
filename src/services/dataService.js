import axios from "axios";

const getVideos = async () => {
  try {
    const response = await axios.get("/api/videos");
    if (response.status === 200) return response.data;
    else throw new Error();
    // console.log(response.data);
  } catch (e) {
    console.error("getVideos : Error in fetching videos", e);
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get("/api/categories");
    if (response.status === 200) return response.data;
    else throw new Error();
  } catch (e) {
    console.error("getCategories : Error in fetching categories", e);
  }
};

export { getVideos, getCategories };
