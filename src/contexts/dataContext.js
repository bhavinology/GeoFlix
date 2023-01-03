import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { reducer } from "../reducer/index";
import { getVideos, getCategories } from "../services/dataService";

const initialState = {
  videos: [],
  categories: [],
  category: "All",
  playlists: [],
  history: [],
  likes: [],
  watchLater: [],
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [playlistModal, setPlaylistModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({});
  const [searchBarText, setSearchBarText] = useState("");

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
    <DataContext.Provider
      value={{
        state,
        dispatch,
        playlistModal,
        setPlaylistModal,
        currentVideo,
        setCurrentVideo,
        searchBarText,
        setSearchBarText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
