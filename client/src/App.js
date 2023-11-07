import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/Navbar";
import RouterComponent from "./components/RouterComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
    
      <RouterComponent />
    </div>
  );
}

export default App;
