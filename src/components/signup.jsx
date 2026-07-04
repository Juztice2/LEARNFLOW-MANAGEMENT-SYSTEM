import { Link, NavLink } from "react-router-dom";
import {auth} from "../firebase.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import smallteam from "../assets/assets_learn_flow/small-team.png"
import { BookOpen } from "lucide-react";
import { useState } from "react";

 function Signup (){
  
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
    await createUserWithEmailAndPassword(auth, email, password);
    setMsg('Account created! You are now signed up')
  }catch (err){
setMsg('err.message');
  }finally {
    setLoading(false)
  }
 }
  return(
   <div className="overflow-hidden bg-[#F5F5F5]">
       <div className="flex gap-2 justify-self-center items-center mt-8 mb-8">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-3xl   hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <div className="m-2 md:flex">
    <div className=" mb-8 lg:w-[70%]">
    <form onSubmit={handleSubmit} className="bg-white/95 rounded-lg p-3  shadow-md shadow-black justify-self-center">
   <h2 className=" font-poppins text-purple-700 justify-self-center">< BookOpen size={50}/></h2>
   <h3 className="text-4xl font-dm  mt-5  ">Sign up to</h3>
     <p className="text-lg font-poppins">LearnFlow University</p>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="email">Email</label>
   <input placeholder="Enter your email" id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
    required 
    className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>

   {/*<div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="name">User name</label>
   <input placeholder="Enter your user name" id="name" type="text" value={user} onChange={(e)=> setUser(e.target.value)} required   className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>*/}

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="password">Password</label>
   <input placeholder="Enter your user password" id="password" type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} required  className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>

   <div className="mt-8 grid gap-2 font-poppins font-semibold">
   <label for="comfirm-password">Comfirm Password</label>
   <input placeholder="Comfirm your password" id="comfirm-password" className="border border-neutral-800 p-4 rounded-lg"></input>
   </div>
   <button disabled={loading} type="submit" className="bg-black text-white p-4 w-full mt-6 rounded-lg font-bold font-poppins hover:bg-slate-400 active:bg-white">
    {loading ? "..." : 'Create your free Account'} 
    </button>
   </form>
   {msg && <p className="font-poppins p-2 bg-green-400 text-white mt-3 justify-self-center rounded-md">{msg}</p>}
    <p className=" font-poppins justify-self-center mt-3 mb-4 text-lg text-stone-500 ">Already have an Account ? <Link to="/signin" className="text-black font-bold hover:cursor-pointer">Login</Link></p>
    </div>
   <img src={smallteam} className="hidden md:block w-[40%]"/>
   </div>
   </div>
  )
}
export default Signup

