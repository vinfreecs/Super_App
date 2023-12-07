import { Navigate,Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Genre from "./pages/Genre";
import Homepage from "./pages/Homepage";
import Browse from "./pages/Browse";
function App() {
  const data = JSON.parse(localStorage.getItem("userData"))
  const hasCategories = data && ("categories" in data)
  return (
    <>
      <Routes>
        <Route path="/" element={(data && hasCategories)?<Navigate to="/homepage"/>:<Navigate to="/register"/>} />
        <Route path="/register" element={(data && hasCategories)?<Navigate to="/homepage"/>:<Register/>} />
        <Route path="/category" element={<Genre/>} />
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
    </>
  );
}

export default App;



