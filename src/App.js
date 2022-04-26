import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Admin from "./Component/Pages/Admin/Admin";
import Orders from "./Component/Pages/Orders/Orders";
import Login from "./Component/Register/Login/Login";
import SignUp from "./Component/Register/SignUp/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sigh-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/order" element={<Orders />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;
