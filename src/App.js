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
import { useAuth } from "./contexts";
import Playlists from "./components/playlists/Playlists";
import PlaylistModal from "./components/videolisting/PlaylistModal";
import SinglePlaylist from "./components/playlists/SinglePlaylist";
import WatchLater from "./components/watchlater/WatchLater";
// import { Videos } from "./components/videolisting/Videos";

// import Footer from "./components/shared/Footer";

function App() {
  const { authToken } = useAuth();

  return (
    <div className="App pagewrapper">
      <Navigation />
      <PlaylistModal />
      <ToastContainer theme="dark" position="bottom-right" autoClose={500} />
      <div className="middle-content">
        <Sidebar />

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/account" element={<ProfileDetail />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlists/:playlistId" element={<SinglePlaylist />} />
          {authToken && <Route path="/profile" element={<ProfileDetail />} />}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
