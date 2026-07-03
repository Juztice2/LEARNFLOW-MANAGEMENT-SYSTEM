import { Link, NavLink } from "react-router-dom";
import smallteam from "../assets/assets_learn_flow/small-team.png"
import { BookOpen } from "lucide-react";
export default function Signup (){
  return(
   <div className="overflow-hidden bg-[#F5F5F5]">
       <div className="flex gap-2 justify-self-center items-center mt-8 mb-8">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-3xl   hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <div className=" md:flex px-10">
    <form className="bg-white/95 rounded-lg p-7 shadow-md shadow-black justify-self-center w-[70%] mb-8 lg:w-[60%]">
   <h2 className="text-3xl font-poppins font-light">Welcome !</h2>
   <h3 className="text-4xl font-dm  mt-5  ">Sign up to</h3>
     <p className="text-lg font-poppins">LearnFlow University</p>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="email">Email</label>
   <input placeholder="Enter your email" id="email" className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="name">User name</label>
   <input placeholder="Enter your user name" id="name"  className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="password">Password</label>
   <input placeholder="Enter your user password" id="password" className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="comfirm-password">Comfirm Password</label>
   <input placeholder="Comfirm your password" id="comfirm-password" className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>
   <button className="bg-black text-white p-4 w-full mt-6 rounded-lg font-bold font-poppins hover:bg-slate-400 active:bg-white">Register</button>
    <p className=" font-poppins justify-self-center mt-3 mb-4 text-lg text-stone-500 ">Already have an Account ? <Link to="/signin" className="text-black font-bold hover:cursor-pointer">Login</Link></p>
   </form>
   <img src={smallteam} className="hidden md:block"/>
   </div>
   </div>
  )
}

