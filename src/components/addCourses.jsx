import {
  PlusCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";
import { addDoc} from "firebase/firestore"
import { adminDashboard } from "./AdminDashboard";
import { storage } from "../firebase";
import { ref,uploadBytes } from "firebase/storage";


export default function CreateCourse() {
  const navigate = useNavigate()
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [tutor, setTutor] = useState("")

  const submitCourse =async () =>{
    if(files == null)return null;
    const fileRef = ref(storage, `${files.name}`);
    try {
        await addDoc(adminDashboard,{
    title:title,
    tutor:tutor
   }) 
   uploadBytes(fileRef,files);
   alert('succesfull')
  } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className=" bg-[#F5F5F5] font-poppins h-screen">
      <div className="flex bg-white justify-between p-2  sticky top-0 z-50">
        <Dashboard1 />
        <Profile />
      </div>

       <div className="px-12 py-12 top-0 ">
          <h1 className="text-3xl mb-2 font-bold text-black lg:justify-self-center">
            Create a new course
          </h1>
          <hr></hr>
        </div>
        <div className="grid gap-2 justify-self-center lg:justify-self-center">
          <input placeholder="Title" type="text" className="p-4" onChange={(e) =>setTitle(e.target.value)}></input>
          <input placeholder="Tutor" type="text" className="p-4" onChange={(e) =>setTutor(e.target.value)}></input>
          <input type="file" onChange={(e) => setFiles(e.target.files[0])} className="p-4 bg-slate-100 text-red-500"></input>
          <button onClick={submitCourse} className="bg-lime-700 p-4 rounded-md font-bold text-white text-lg hover:bg-lime-400 active:bg-lime-200">Create Course</button>
          </div>       
    </div>
  )
}



