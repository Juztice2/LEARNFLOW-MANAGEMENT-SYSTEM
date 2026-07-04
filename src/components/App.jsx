import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home"
import Signup from "./signup";
import Signin from "./signin";
import Dashboard from "./dashboard";
import Courses from "./courses";
import ProfileData from "./profile";
import Explore from "./explore";
import Setting from "./settings";
export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/courses" element={<Courses/>} />
           <Route path="/profile" element={<ProfileData/>} />
           <Route path="/explore" element={<Explore/>} />
           <Route path="/settings" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}