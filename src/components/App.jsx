import React from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home"
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ProfileData from "./Profile";
import Signin from "./signin";
import Signup from "./signup";
import Explore from "./Explore";
import Setting from "./Settings";
import ProtectedRoute from "./protectedRoute";
import { useAuth } from "../Context/authcontext";
import Status from "./Status";
import AdminDashboard from "./AdminDashboard";
import AddCourses from "./addCourses";

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
        <Route path="/" element={currentUser ? <Navigate to="/Dashboard" replace /> : <Home/>} />
        <Route path="/Home" element={currentUser ? <Navigate to="/Dashboard" replace /> : <Home/>} />
        <Route path="/signup" element={currentUser ? <Navigate to="/Dashboard" replace /> : <Signup/>} />
         <Route path="/signin" element={currentUser ? <Navigate  to="/Dashboard" replace /> : <Signin/>} />
          <Route path="/Status" element={currentUser ? <Navigate  to="/Dashboard" replace /> : <Status/>} />
           <Route path="/Courses" element={<Courses/>} />
           <Route path="/Profile" element={<ProfileData/>} />
           <Route path="/Explore" element={<Explore/>} />
          <Route path="/AddCourses" element={<AddCourses/>} />
           <Route path="/Settings" element={<Setting/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
             <Route path="/AddCourses" element ={<AddCourses/>} />
             <Route path="/Dashboard" element={
               <ProtectedRoute>
                <Dashboard />
             </ProtectedRoute>} />

      </Routes>
    </div>
  )
}
export default App