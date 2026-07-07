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

 function Signin (){
  
   const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMsg('');
  try{
    await signInWithEmailAndPassword(auth, email, password);
    setMsg('Login successful! You are now signed login')
  }catch (err){
setMsg('err.message');
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
   <img src={smallteam} className="hidden md:block mt-20 w-full"/>
   </div>
 </div>
  )
}
export default Signin

{/*
   <div className="overflow-hidden bg-[#F5F5F5]">
       <div className="flex gap-2 justify-self-center items-center mt-8 mb-8">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-3xl   hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <div className="m-2 md:flex">
    <div className=" mb-8 lg:w-[70%]">
    <form onSubmit={handleSubmit} className="bg-white/95 rounded-lg p-3  shadow-md shadow-black justify-self-center ">
   <h2 className=" font-poppins text-purple-700 justify-self-center">< BookOpen size={50}/></h2>
   <h3 className="text-4xl font-dm  mt-5  ">Sign in to</h3>
     <p className="text-lg font-poppins">LearnFlow University</p>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="email">Email</label>
   <input placeholder="Enter your email" id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
    required 
    className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>
   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="password">Password</label>
   <input placeholder="Enter your user password" id="password" type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} required  className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="comfirm-password">Comfirm Password</label>
   <input placeholder="Comfirm your password" id="comfirm-password" className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>
   <button disabled={loading} type="submit" className="bg-black text-white p-4 w-full mt-6 rounded-lg font-bold font-poppins hover:bg-slate-400 active:bg-white">
    {loading ? "..." : 'Log In'} 
    </button>
   </form>
   {msg && <p className="font-poppins p-2 bg-green-400 text-white mt-3 justify-self-center rounded-md">{msg}</p>}
    <p className=" font-poppins justify-self-center mt-3 mb-4 text-lg text-stone-500 ">Don't have an Account ? <Link to="/signup" className="text-black font-bold hover:cursor-pointer">Create a free account</Link></p>
    </div>
   <img src={smallteam} className="hidden md:block w-[40%]"/>
   </div>
   </div> 
  */}