import "./App.css";
import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RouterComponent from "./components/RouterComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./components/Cart";
import { dataContext } from "./contextProvider/DataContextProvider";

function App({}) {
  const { isCartVisible } = useContext(dataContext);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />

      {isCartVisible && (
        <div className="popup-cart active">
          <div className="popup-content-cart">
            <Cart />
          </div>
        </div>
      )}

      <RouterComponent />
    </div>
  );
}

export default App;
