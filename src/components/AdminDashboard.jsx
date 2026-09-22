import {
  PlusCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard1 from "./Dashboard1.jsx";
import Profile from "./ProfileAvata.jsx";
import { db } from "../firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { useAuth } from "../Context/authcontext.jsx";

export  const coursesCollection = collection(db ,"Courses")
export default function adminDashboard() {
  const [courses, setCourses] = useState([]);
  useEffect(() =>{
    const getCourses = async () => {
    try {
      const data =await getDocs(coursesCollection);
      const allCourses = data.docs.map((course) =>({
        ...course.data(),
        id: course.id
      }));
    setCourses(allCourses)
    } catch (error) {
      console.error(error)
    }
  }
  getCourses()
  },[])
  return (
    <div className=" bg-[#F5F5F5] font-poppins h-auto">
      <div className="flex bg-white justify-between p-2  sticky top-0 z-50">
        <Dashboard1 />
        <Profile />
      </div>

       <div className="px-12 py-12 top-0 ">
          <h1 className="text-3xl mb-2 font-bold text-black lg:justify-self-center">
            Admin Dashboard
          </h1>
          <hr></hr>
        </div>
        

          {/* Courses */}
        
          {courses.map((course) => (
            <div className="">
          <h1>Title: {course.id.title}</h1>
          <h1>Tutor: {course.tutor}</h1>
          </div>
         ))}
  </div>
  )
}



