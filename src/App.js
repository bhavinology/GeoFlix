import "./App.css";
import Navigation from "./components/shared/Navigation";
import Videos from "./components/videolisting/Videos";
import { Sidebar } from "./components/shared/Sidebar.jsx";
import Footer from "./components/shared/Footer";
import LoginForm from "./components/authentication/LoginForm";
import SignupForm from "./components/authentication/SignupForm";
import ProfileDetail from "./components/profile/ProfileDetail";
import { Route, Routes } from "react-router-dom";
// import { Videos } from "./components/videolisting/Videos";

// import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App pagewrapper">
      <Navigation />
      <div className="middle-content">
        <Sidebar />

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
