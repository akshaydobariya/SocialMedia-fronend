import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
