import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Genre from "./pages/Genre";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>HI</>} />
        <Route path="/register" element={<Register />} />
        <Route path="/category" element={<Genre/>} />
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
    </>
  );
}

export default App;
