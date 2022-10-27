import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer/index";
import { getVideos, getCategories } from "../services/dataService";

const initialState = {
  videos: [],
  categories: [],
  category: "All",
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const respVideos = await getVideos();
      dispatch({
        type: "SET_VIDEOS",
        payload: { videos: respVideos.videos },
      });
      const respCategories = await getCategories();
      dispatch({
        type: "SET_CATEGORIES",
        payload: { categories: respCategories.categories },
      });
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };