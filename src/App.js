import Register from "./pages/regisiter/register";
import "./app.css";
import Home from "./pages/home/home";
import NavBar from "./components/navbar/navbar";
import ChiTiet from "./pages/chitiet/chitiet";
import { Route, Routes } from "react-router";
import Watch from "./pages/waching/watching";
function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/chitiet/:slug" element={<ChiTiet />}></Route>
        <Route path="/movie/chitietphim/watch/:slug" element={<Watch />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
