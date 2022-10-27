import "./App.css";
// import { VideoListingPage } from "./components/pages/videoListing";
import Navigation from "./components/shared/Navigation";
import Videos from "./components/videolisting/Videos";
// import { DataProvider } from "./contexts";
import { Sidebar } from "./components/shared/Sidebar.jsx";
// import { Videos } from "./components/videolisting/Videos";

// import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App pagewrapper">
      <Navigation />
      <div className="middle-content">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
}

export default App;
