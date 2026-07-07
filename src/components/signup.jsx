import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BookOpen,
  MailIcon,
  EyeOff
  
} from "lucide-react";
import smallteam from "../assets/assets_learn_flow/small-team.png"
import { useState } from "react";
import { useAuth } from "../Context/authcontext.jsx";


 function Signup (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [msg, setMsg] = useState("");

  const {signup} = useAuth();
  const navigate = useNavigate()

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if(!email || !password || !passwordConfirm){
    return setError("Please fill in all fields");
  }
   if(password !== passwordConfirm){
    return setError("Password do not match");
  }

   if(password.length < 6){
    return setError("Password must be at least 6 characters");
  }
  try{
    setLoading(true)
    await signup(email, password);
    navigate('/dashboard');
  }catch (err){
     setError(`Failed to create account:` + (err.message || `Please try again`))
  }finally {
   setLoading(false)
  }
 }
  return(
 <div className="overflow-hidden bg-[#F5F5F5] font-poppins lg:flex">
  <form className="bg-white w-[90%] justify-self-center mt-10 px-10 py-4 rounded-md justify-items-start mb-5 lg:w-[60]">
     <div className="flex items-center gap-1">
    <BookOpen size={30} />
   <Link to="/" className="font-poppins text-purple-800  hover:text-slate-400 cursor-pointer active:text-slate-50">LearnFlow</Link>
   </div>
   <h1 className="text-2xl mt-5 font-semibold">Sign up</h1>
   <p className="font-extralight mb-6">PLease enter ur details.</p>
    {
      error && (
        <div className="bg-red-600 text-white">
          {error}
        </div>
      )
      }
     <label for="email">Email</label>
    <div className="mt-3 gap-2 font-poppins border border-neutral-800 flex items-center rounded-md p-3 justify-between mb-8">
   <input placeholder="Enter your email" id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
    required 
    className="outline-none focus:outline-none focus:ring-0 w-[70%]"></input>
    <MailIcon  size={18}/>
   </div>
   
    <label for="password" className="">Password</label>
    <div className="mt-3 gap-2 font-poppins  border border-neutral-800 flex items-center rounded-md p-3 justify-between mb-8">
   <input placeholder="Enter Password" id="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
    required 
    className="outline-none focus:outline-none focus:ring-0 w-[70%]"></input>
    <EyeOff  size={18}/>
   </div>

   <label for="confirm-password" className="">Confirm Password</label>
    <div className="mt-3 gap-2 font-poppins  border border-neutral-800 flex items-center rounded-md p-3 justify-between mb-8">
   <input placeholder="Confirm Paswword" id="confirm-password" type="password" value={passwordConfirm} onChange={(e)=> setPasswordConfirm(e.target.value)}
    required 
    className="outline-none focus:outline-none focus:ring-0 w-[70%]"></input>
    <EyeOff  size={18}/>
   </div>
   <button disabled={loading} type="submit" className="bg-purple-800 text-white p-4 w-full mt-6 rounded-lg  font-poppins hover:bg-slate-400 active:bg-white">
    {loading ? "..." : 'Create your free Account'} 
    </button>
    <p className=" font-poppins justify-self-center mt-3 mb-4  text-stone-500 text-sm ">Already have an Account ? <Link to="/signin" className="text-black font-bold hover:cursor-pointer">Login</Link></p>
  </form>
   <div>
   <img src={smallteam} className="hidden md:block mt-20 w-full"/>
   </div>
 </div>
  )
}
export default Signup