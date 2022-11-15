import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
function App() {
  return (
    <Home />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/admin" element={<Admin />} />
    // </Routes>
  );
}

export default App;
