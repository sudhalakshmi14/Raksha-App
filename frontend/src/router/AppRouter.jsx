import { Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import Welcome from "../pages/welcome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SOS from "../pages/SOS";
import Profile from "../pages/Profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sos" element={<SOS />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}


