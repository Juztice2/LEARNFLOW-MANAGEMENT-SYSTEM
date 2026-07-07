import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileEdit,
  LogIn,
} from "lucide-react";
import { useState } from "react";
export default function Header() {
   const [open, setOpen] = useState(false);
   let hambugger; 
   if(open) {
   hambugger = <i class=' bx bx-x bx-md hover:text-gray-400'></i>
   }else if(!open){
   hambugger = <i class='lg:hidden bx bx-menu bx-md hover:cursor-pointer'></i>
   }
  return (
    <div className="flex justify-between p-4 text-white font-sans items-center sticky top-0 z-50  shadow-slate-600 shadow-sm bg-[#1E1E1E]">
      <div className="flex gap-2 items-center">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-lg font-bold  hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <div className="hidden lg:flex items-center gap-14">
   <div className="flex gap-5 text-sm text-slate-200 font-poppins ">
     <NavLink to="/pricing" className=" hover:text-slate-400 cursor-pointer active:text-slate-50">Features</NavLink>
    <NavLink to="/pricing" className=" hover:text-slate-400 cursor-pointer active:text-slate-50">Pricing</NavLink>
     <NavLink to="/signup" className="hover:text-slate-400 cursor-pointer active:text-slate-50">Signup</NavLink>
     <NavLink to="/contact" className="hover:text-slate-400 cursor-pointer active:text-slate-50">Contact-Us</NavLink>
   </div>
   <Link to="/signup">
   <button className="border-2 text-yellow-400  font-poppins border-yellow-400 rounded-full p-1 px-3 hover:text-yellow-200 active:text-slate-50">Lets start your learning journey</button>
   </Link>
   </div>
  <div>
   <button onClick={() => setOpen(!open)}
  >
 {hambugger}
   </button>
   </div>
   {open && (
          <aside className="font-poppins w-[230px] text-black  bg-white border-r border-gray-200 fixed left-0 bottom-0 h-screen pt-8 lg:hidden">
        {/* Logo */}
        <div className="px-8 py-10 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-[18px] font-bold">LearnFlow</h1>
        </div>

        <div className="px-4">
          <p className="text-xs text-gray-500 mb-4 uppercase">Menu</p>

          <nav className="space-y-2">
            <Link to="/contact">
            <button className="w-full h-11 bg-[#2C2C2C] text-white rounded-md flex items-center px-5 gap-4">
              <LayoutDashboard size={18} />
              <span>Contact-Us</span>
            </button>
            </Link>
            <Link to="/">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <BookOpen size={18} />
              <span>Courses</span>
            </button>
            </Link>

            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <FileEdit size={18} />
              <span>Features</span>
            </button>

            <Link to="/signup">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <LogIn size={18} />
              <span>Signup</span>
            </button>
            </Link>
          </nav>
        </div>
      </aside> 
      )}
   
    </div>
  )
}




