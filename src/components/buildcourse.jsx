import {
  PlusCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";


export default function SubjectsBuilder() {
  const [courses, setCourses] = useState([]);
  const coursesCollection = collection(db ,"Courses")
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
    <div className=" bg-[#F5F5F5] font-poppins h-screen">
      <div className="flex bg-white justify-between p-2  sticky top-0 z-50">
        <Dashboard1 />
        <Profile />
      </div>

       <div className="px-12 py-12 top-0 ">
          <h1 className="text-3xl mb-2 font-bold text-black lg:justify-self-center">
            Create a new course
          </h1>
          <hr></hr>
        </div>
        

          {/* Courses */}
          <div className="bg-white h-56 w-64 rounded-md justify-self-center ">
            <Link to="/addCourses">
            <div className="justify-self-center pt-20 hover:cursor-pointer active:text-[#F5F5F5]">
           < PlusCircle size={40}/>
           </div>
           </Link>
          </div>
          <div className="justify-self-center mt-4">
         {courses.map((course) => (
          <div>
          <h1> Language: {course.Language}</h1>
          <h1>Title: {course.Title}</h1>
          <h1>Tutor: {course.Tutor}</h1>
          </div>
         ))}
          </div>
              
    </div>
  )
}



