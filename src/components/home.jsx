import React from "react";
import teamimage from "../assets/assets_learn_flow/teamimage.png";
import homepage2 from "../assets/assets_learn_flow/betterhomepage2.png";
import logo from "../assets/assets_learn_flow/logo slide.png"
import row1 from "../assets/assets_learn_flow/row.png";
import row2 from "../assets/assets_learn_flow/row2.png";
import row3 from "../assets/assets_learn_flow/row3.png";
import collab1 from "../assets/assets_learn_flow/collab1.png";
import collab2 from "../assets/assets_learn_flow/collab2.png";
import commments from "../assets/assets_learn_flow/commments.png"
import yellow from "../assets/assets_learn_flow/yellowimage.png"
import { Link, useNavigate } from "react-router-dom"
import Header from "./header";
import Dashboard from "./dashboard";

const teampic = teamimage;
const homepage = homepage2;
const logoslide = logo



export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="overflow-hidden bg-[#1E1E1E]">
     <div className="fixed z-50 top-0 w-full">
      <Header/>
     </div>
      
      <div className="justify-self-center p-4">
      <h1 className="text-white justify-self-center mt-16 font-poppins font-semibold leading-13 space-x-2 tracking-wide text-4xl md:text-4xl lg:text-6xl scale-y-90 ">The free, fun, and effective <br></br><span className=" p-4">way to learn a language</span></h1>
      <p className="text-zinc-400 justify-self-center font-figtree  mt-6 font-semibold scale-y-95">Learn at your own pace with lifetime access on mobile and desktop.</p>
      </div>
      <div className="justify-self-center mt-8">
        <Link to="/signup">
     <button className=" bg-yellow-400 p-2 rounded-2xl px-4 text-sm font-inter  font-semi-bold hover:bg-yellow-600 active:bg-yellow-100">Start a new course!</button>
     </Link>
     <img src={teampic} className="mt-3 ml-8"/>
    </div>
    <p className="text-zinc-400  font-poppins mt-3 font-semibold scale-y-95 justify-self-center ">Join thousands of students to start coding now</p>
   <img src={homepage} className="mt-6" />
   <img src ={logo} />
   <div className="justify-items-center bg-white pt-6">
   <h1 className="text-[#383737] justify-self-center p-4 font-bebas font-semibold  text-xl md:text-4xl lg:text-5xl scale-y-90 ">Special features that make our <br></br><span className=" p-4">online course the best</span></h1>

   <div className="grid gap-4 lg:flex items-center">
      <img src={row1} />
       <img src={row2} />
        <img src={row3} />
        <hr></hr>
   </div>
   </div>

   <div className="bg-white pt-30 p-20 lg:flex gap-14">
    <img src={collab1} className="justify-self-center"/>
    <div className="justify-self-center pl-6">
      <h1 className=" scale-y-90 text-5xl font-bold font-lato mt-8 ">Collaborate & learn with <br></br> our platform</h1>
      <p className=" scale-y-100  font-lato mt-6 text-2xl text-[#524f4f]" >We offer a wide range of language courses taugth by <br></br> experienced and qualified instructors, who are <br></br> passionate about teaching and dedicated to helping <br></br> you achieve your language goals.</p>
      <Link to="/signup">
      <button className="bg-yellow-400 mt-10 p-3 px-12 rounded-2xl font-semi-bold font-poppins text-lg hover:bg-yellow-600 active:bg-yellow-200">Get started</button>
      </Link>
    </div>
   </div>

   <div className="justify-items-center bg-white p-20 lg:flex gap-14">
    <div className="justify-self-center pl-8">
      <h1 className=" scale-y-90 text-5xl font-bold font-lato mt-8 ">Propel your career &<br></br>expand your knowledge <br></br> at any level</h1>
      <p className=" scale-y-100  font-lato mt-6 text-2xl text-[#524f4f]" >Learnflow is an online course class that provides <br></br> various categories of programming courses.</p>
      <Link to="/signup">
      <button className="bg-yellow-400 mt-10 mb-8 p-3 px-12 rounded-2xl font-semi-bold font-poppins text-lg hover:bg-yellow-600 active:bg-yellow-200">Get started</button>
      </Link>
    </div>
     <img src={collab2} className="justify-self-center"/>
   </div>

   <div className="justify-self-center p-10">
      <h1 className="text-white leading-snug tracking-wide scale-y-90 text-3xl font-bold font-poppins mt-8 justify-self-center lg:text-5xl">Leaners like you achieve their <span className=""></span>goals through our courses</h1>
      <p className="text-lg scale-y-95  font-poppins mt-6  text-[#b4acac] justify-self-center mb-8 lg:text-2xl" >We believe everyone has something to give. Share your skills & <br></br> <span className="">experience with students around the world by teaching free or paid.</span></p>
     <img src={commments} />
    </div>
<div className="bg-white pt-24 pb-24 lg:px-10">
    <div className="bg-[#f8ca34] justify-self-center rounded-lg md:flex ">
       <div className="justify-self-center pl-8">
      <h1 className=" scale-y-90 font-bold font-poppins mt-8 text-3xl pt-8 lg:text-5xl ">Expand your skills &<br></br>knowledge at any level</h1>
      <p className=" scale-y-100  font-poppins mt-6 text-lg text-[#524f4f]" >Learn at your own pace with lifetime access on <br></br> mobile and desktop.</p>
      <button className="bg-black text-white mt-10 mb-8 p-3 px-12 rounded-2xl font-semi-bold font-poppins text-lg hover:bg-yellow-600 active:bg-yellow-200">Get started</button>
    </div>
     <img src={yellow} className="justify-self-center rounded-lg  object-contain lg:w-auto"/>
    </div>
    </div>

    <div className=" p-5 mt-14 lg:flex justify-around gap-40 items-start">
      <div className="  justify-self-center lg:flex flex-col gap-8">
    <div className="justify-self-center  flex items-center text-[#fffefe]">
        <i class='bx bx-book-content bx-md'></i>
        <p className="text-2xl font-poppins font-semibold ">LearnFlow</p>
    </div>
    <p className="text-xl text-[#bebaba]  font-poppins font-semibold mt-4">Top learning experiences that create more <br></br> talent in the world</p>
    </div>
    <div className="justify-self-center flex gap-16 leading-snug text-xl text-[#bebaba] mt-12 lg:mt-0">
    <div className="flex flex-col gap-8 font-poppins ">
      <p className="text-3xl text-white font-semibold ">Links</p>
      <p className="hover:text-white cursor-pointer">About Us</p>
      <p className="hover:text-white cursor-pointer">Programs</p>
      <p className="hover:text-white cursor-pointer">Contact</p>
      <p className="hover:text-white cursor-pointer">FAQs</p>
    </div>
    <div className="flex flex-col gap-8 font-fig-tree">
      <p className="text-3xl text-white font-semibold">Social</p>
      <p className="hover:text-white cursor-pointer">Twitter</p>
      <p className="hover:text-white cursor-pointer">Linkedln</p>
      <p className="hover:text-white cursor-pointer">Facebook</p>
    </div>
    <div className="flex flex-col gap-8 font-fig-tree">
      <p className="text-3xl text-white font-semibold">Legal</p>
      <p className="hover:text-white cursor-pointer">Terms</p>
      <p className="hover:text-white cursor-pointer">Privacy</p>
    </div>
    </div>
    </div>
    <hr></hr>
     <div className=" mb-8 justify-items-center mt-9 px-8 leading-loose md:flex justify-between">
    <p className="text-[#dad4d4] text-xl font-source">&copy; 2026 The programmers University. All rights reserved</p>
    <div className="text-white bx-md flex gap-4">
      <i class='bx bxl-facebook-circle'></i>
      <i class='bx bxl-twitter'></i>
      <i class='bx bxl-instagram'></i>
      <i class='bx bxl-reddit'></i>
      <i class='bx bxl-github'></i>
    </div>
     </div>
    </div>
  )
} 