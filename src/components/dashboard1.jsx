import {
  LayoutDashboard,
  BookOpen,
  FileEdit,
  Settings,
  LogOut,
  GlobeIcon
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Dashboard1() {
  const [open, setOpen] = useState(false);
  let hambugger; 
   if(open) {
   hambugger = <i class=' bx bx-x bx-md hover:text-gray-400'></i>
   }else if(!open){
   hambugger = <i class='lg:hidden bx bx-menu bx-md hover:cursor-pointer'></i>
   }
  return (
    <div className="flex  bg-[#F5F5F5] font-poppins ">
      
      {/* Sidebar */}
    <aside className="hidden lg:block w-[230px] bg-white border-r border-gray-200 top-0 h-screen fixed left-0 pt-10">
      {/* Logo */}
      <Link to="/">
       <div className="px-8 py-10 flex items-center gap-3">
          <BookOpen className=" w-8 h-8" />
          <h1 className="text-[18px] font-bold">LearnFlow</h1>
        </div>
        </Link>
      <div className="px-4">
          <p className="text-xs text-gray-500 mb-4 uppercase">Menu</p>

          <nav className="space-y-2">
            <Link to="/dashboard">
            <button className="w-full h-11 bg-[#2C2C2C] text-white rounded-md flex items-center px-5 gap-4 ">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>
            </Link>
            <Link to="/courses">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <BookOpen size={18} />
              <span>All courses</span>
            </button>
            </Link>

             <Link to="/explore">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <GlobeIcon size={18} />
              <span>Explore</span>
            </button>
            </Link>

            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <FileEdit size={18} />
              <span>Course Builder</span>
            </button>
           <Link to="/settings">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings size={18} />
              <span>Settings</span>
            </button>
            </Link>

            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <LogOut size={18} />
              <span>Log out</span>
            </button>
          </nav>
        </div>

    </aside>

    {/*main*/}
    <div className="">
    <header className="h-[68px] bg-white border-b border-gray-200 flex justify-end items-center ">

             <button
           onClick={() => setOpen(!open)}
             className="lg:hidden fixed top-3 left-4 z-50 p-1 text-white rounded bg-black"
            >
              {hambugger}
              </button>
              {open  && (
               <aside className=" w-[230px] bg-white border-r border-gray-200 fixed left-0 bottom-0 h-screen pt-8">
        {/* Logo */}
        <Link to="/">
        <div className="px-8 py-10 flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-[18px] font-bold">LearnFlow</h1>
        </div>
        </Link>

        <div className="px-4">
          <p className="text-xs text-gray-500 mb-4 uppercase">Menu</p>

          <nav className="space-y-2">
            <Link to="/dashboard">
            <button className="w-full h-11 bg-[#2C2C2C] text-white rounded-md flex items-center px-5 gap-4 ">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </button>
            </Link>
           <Link to="/courses">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 mt-1 hover:bg-gray-100 rounded-md">
              <BookOpen size={18} />
              <span>All courses</span>
            </button>
            </Link>

            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <FileEdit size={18} />
              <span>Course Builder</span>
            </button>
            
             <Link to="/explore">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <GlobeIcon size={18} />
              <span>Explore</span>
            </button>
            </Link>
            <Link to="/settings">
            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <Settings size={18} />
              <span>Settings</span>
            </button>
            </Link>

            <button className="w-full h-11 flex items-center px-5 gap-4 text-gray-700 hover:bg-gray-100 rounded-md">
              <LogOut size={18} />
              <span>Log out</span>
            </button>
          </nav>
        </div>
      </aside> 
)}

        </header>
    </div>
    </div>
  )
}



