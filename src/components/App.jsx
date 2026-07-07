import React from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./home"
import Signup from "./signup";
import Signin from "./signin";
import Dashboard from "./dashboard";
import Courses from "./courses";
import ProfileData from "./profile";
import Explore from "./explore";
import Setting from "./settings";
import ProtectedRoute from "./protectedRoute";
import { useAuth } from "../Context/authcontext";

function App() {
const {loading, currentUser} = useAuth();
if(loading){
 return(
  <div>
    <p>Loading</p>
  </div>
 ) 
}
  return (
    <div>
      <Routes>
        <Route path="/" element={currentUser ? <Navigate to="/dashboard" replace /> : <Home/>} />
        <Route path="/home" element={currentUser ? <Navigate to="/dashboard" replace /> : <Home/>} />
        <Route path="/signup" element= {currentUser ? <Navigate to="/dashboard" replace /> : < Signup />} />
         <Route path="/signin" element={currentUser ? <Navigate  to="/dashboard" replace /> : <Signin/>} />
           <Route path="/courses" element={<Courses/>} />
           <Route path="/profile" element={<ProfileData/>} />
           <Route path="/explore" element={<Explore/>} />
           <Route path="/settings" element={<Setting/>} />
             <Route path="/dashboard" element={
               <ProtectedRoute>
                <Dashboard />
             </ProtectedRoute>} />

      </Routes>
    </div>
  )
}
export default App