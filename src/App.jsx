import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>HI</>} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </>
  );
}

export default App;
