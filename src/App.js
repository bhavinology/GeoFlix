import "./App.css";
import Navigation from "./components/shared/Navigation";
import Videos from "./components/videolisting/Videos";
import { Sidebar } from "./components/shared/Sidebar.jsx";
import Footer from "./components/shared/Footer";
import LoginForm from "./components/authentication/LoginForm";
import SignupForm from "./components/authentication/SignupForm";
import ProfileDetail from "./components/profile/ProfileDetail";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Playlists from "./components/playlists/Playlists";
import PlaylistModal from "./components/videolisting/PlaylistModal";
import SinglePlaylist from "./components/playlists/SinglePlaylist";
import WatchLater from "./components/watchlater/WatchLater";
import LikedVideos from "./components/likedvideos/LikedVideos";
import { PrivateRoute } from "./components/authentication/PrivateRoutes";
import History from "./components/history/History";
import SingleVideo from "./components/single-video/SingleVideo";
import { LandingPage } from "./components/landing page/LandingPage";
// import { Videos } from "./components/videolisting/Videos";

// import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App pagewrapper">
      <Navigation />
      <PlaylistModal />
      <ToastContainer theme="dark" position="bottom-right" autoClose={500} />
      <div className="middle-content">
        {/* <Sidebar /> */}

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/videos/:videoId" element={<SingleVideo />} />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <ProfileDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlists"
            element={
              <PrivateRoute>
                <Playlists />
              </PrivateRoute>
            }
          />
          <Route
            path="/playlists/:playlistId"
            element={
              <PrivateRoute>
                <SinglePlaylist />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/liked"
            element={
              <PrivateRoute>
                <LikedVideos />
              </PrivateRoute>
            }
          />
          <Route
            path="/watchlater"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
