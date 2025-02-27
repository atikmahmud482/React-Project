import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Home />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
