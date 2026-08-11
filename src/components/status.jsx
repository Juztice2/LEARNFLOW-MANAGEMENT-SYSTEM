import { Link, NavLink } from "react-router-dom";
import {auth} from "../firebase.js"
import { signInWithEmailAndPassword } from "firebase/auth";
import smallteam from "../assets/assets_learn_flow/small-team.png"
import { useState } from "react";
import {
  BookOpen,
  MailIcon,
  EyeOff
  
} from "lucide-react";

 function Status (){
  
   const [student, setStudent] = useState("");
  const [tutor, setTutor] = useState("");
  const [msg, setMsg] = useState("")

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMsg('');

 }
  return(
  <div className="overflow-hidden bg-[#F5F5F5] font-poppins ">
  <form onSubmit={handleSubmit} className="bg-white justify-center mt-10 px-10 py-4 rounded-md justify-items-start mb-5">
    <div className="justify-self-center">
     <div className="flex items-center gap-1">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-purple-800  hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <h1 className="text-2xl mt-5 font-semibold">Choose Carreer</h1>
   <p className="font-extralight mb-6">Welcome back!..</p>
    {
      msg && (
        <div className="bg-red-600 text-white">
          {msg}
        </div>
      )
      }
  <div className="grid gap-2">
   <button className="p-3 px-7 rounded-md  text-purple-800 bg-[#F5F5F5] hover:bg-slate-300 active:bg-white">
    Student
   </button>
    <button className="p-3 px-7 rounded-md text-red-800 bg-[#F5F5F5] hover:bg-slate-300 active:bg-white">
    Tutor
   </button>
   </div>
   </div>

  </form>
 </div>
  )
}
export default Status

