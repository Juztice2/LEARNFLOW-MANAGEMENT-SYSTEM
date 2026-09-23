import React from "react"
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Home"
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import ProfileData from "./Profile";
import Signup from "./signup";
import Explore from "./Explore";
import Setting from "./Settings";
import ProtectedRoute from "./protectedRoute";
import { useAuth } from "../Context/authcontext";
import Status from "./Status";
import AdminDashboard from "./AdminDashboard";
import Createcourse from "./Createcourse";
import Insign from "./Insign";
import Upsign from "./Upsign";



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
        <Route path="/Upsign" element={currentUser ? <Navigate to="/Dashboard" replace /> : <Upsign/>} />
         <Route path="/Insign" element={currentUser ? <Navigate to="/Dashboard" replace /> : <Insign />} />
        
          <Route path="/Status" element={currentUser ? <Navigate  to="/Dashboard" replace /> : <Status/>} />
           <Route path="/Courses" element={<Courses/>} />
           <Route path="/Profile" element={<ProfileData/>} />
           <Route path="/Explore" element={<Explore/>} />
           <Route path="/Settings" element={<Setting/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard/>} />
          <Route path="/Createcourse" element={<Createcourse />} />
           <Route path="/Dashboard" element={
               <ProtectedRoute>
                <Dashboard />
             </ProtectedRoute>} />

      </Routes>
    </div>
  )
}
export default App