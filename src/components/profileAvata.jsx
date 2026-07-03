import {Link, NavLink} from "react-router-dom";
import {
  Settings,
  User,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useState } from "react";
export default function Profile() {
 const[open, setOpen] =useState(false)
 let profile;
 if(open){
 profile = <div className="absolute mt-8 bg-white right-5 p-4 rounded-md font-semibold grid gap-4 justify-start w-[30%]">
  <Link to="/profile">
   <div className="flex gap-2 items-center  hover:text-purple-500 ">
    <User size={16}/>
   Profile
  </div>
  </Link>
  <div className="flex gap-2 items-center  hover:text-purple-500">
    <Settings size={16}/>
    Settings
  </div>
   <div className="flex gap-2 items-center  hover:text-purple-500">
    <CreditCard size={16}/>
    Bill
  </div>
  <hr></hr>
   <div className="flex gap-2 items-center text-red-400  hover:text-red-600">
    <LogOut size={16}/>
    Logout
  </div>
  </div>
 }
  return(
    <div>
       <div className="flex items-center gap-4">
            <div className="text-right">
              <h3 className="font-semibold text-[16px]">Amarachi</h3>
              <p className="text-gray-500 text-sm">Learner</p>
            </div>
            <button onClick={() => setOpen(!open)}>
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="w-12 h-12 rounded-full"
            />
             {profile}
            </button>
          
              
              
        
          </div>
    </div>
  )
}