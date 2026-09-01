import {
  PlusCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";

export default function CreateCourse() {
 
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
        <form className="grid gap-2 justify-self-center lg:justify-self-center">
          <input placeholder="Subject" type="text" className="p-4"></input>
          <input placeholder="Language" type="text" className="p-4"></input>
          <input placeholder="Title" type="text" className="p-4"></input>
          <input type="file" className="p-4 bg-slate-100 text-red-500"></input>
          </form>       
    </div>
  )
}



