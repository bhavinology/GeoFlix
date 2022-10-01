import "./App.css";
import Navigation from "./components/shared/Navigation";
import Sidebar from "./components/shared/Sidebar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
