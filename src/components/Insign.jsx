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

 function Insign (){
  
   const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMsg('');
  if(!email || !password){
   return setMsg("Please provide your details")
  }
  try{
    await signInWithEmailAndPassword(auth, email, password);
    setMsg('Login successful! You are now signed login')
  }catch (err){
    setMsg(err.message)
  }finally {
    setLoading(false)
  }
 }
  return(
  <div className="overflow-hidden bg-[#F5F5F5] font-poppins lg:flex">
  <form onSubmit={handleSubmit} className="bg-white w-[90%] justify-self-center mt-10 px-10 py-4 rounded-md justify-items-start mb-5 lg:w-[60]">
     <div className="flex items-center gap-1">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-purple-800  hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <h1 className="text-2xl mt-5 font-semibold">Sign in</h1>
   <p className="font-extralight mb-6">Welcome back!. PLease enter ur details.</p>
    {
      msg && (
        <div className="bg-red-600 text-white">
          {msg}
        </div>
      )
      }
     <label for="email">Email</label>
    <div className="mt-3 gap-2 font-poppins  border border-neutral-800 flex items-center rounded-md p-3 justify-between mb-8">
   <input placeholder="Enter your email" id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
    required 
    className="outline-none focus:outline-none w-[70%]"></input>
    <MailIcon  size={18}/>
   </div>
   
    <label for="password" className="">Password</label>
    <div className="mt-3 gap-2 font-poppins  border border-neutral-800 flex items-center rounded-md p-3 justify-between mb-8">
   <input placeholder="Enter Password" id="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
    required 
    className="outline-none focus:outline-none focus:ring-0 w-[70%]"></input>
    <EyeOff  size={18}/>
   </div>
   <button disabled={loading} type="submit" className="bg-purple-800 text-white p-4 w-full mt-6 rounded-lg  font-poppins hover:bg-slate-400 active:bg-white">
    {loading ? "..." : 'Log in'} 
    </button>
    <p className=" font-poppins justify-self-center mt-3 mb-4  text-stone-500 text-sm ">Don't have an Account ? <Link to="/signup" className="text-black font-bold hover:cursor-pointer">Signup</Link></p>
  </form>
   <div>
     <img src={smallteam} className="hidden lg:block justify-self-center mt-32 w-[35%]"/>
   </div>
 </div>
  )
}
export default Insign




  
   </div> 
  */}
