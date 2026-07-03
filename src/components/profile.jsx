import {
  Settings,
  BellIcon,
  PersonStanding
} from "lucide-react";
import Dashboard1 from "./dashboard1"
import Profile from "./profileAvata";
export default function ProfileData() {
  return(
  <div className=" font-poppins">
      <div className="flex bg-[#F5F5F5]  justify-between p-2 sticky top-0 z-50">
        <Dashboard1 />
        <Profile />
      </div>
          <section className="w-[100%] px-12 py-12 top-0 lg:w-[80%] justify-self-end">
          <h1 className="text-2xl font-bold mb-6">Personal Informations</h1>
      <hr></hr>
      <div className="flex gap-3 mt-10 items-center text-sm">
         <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div className="flex gap-4">
            <button className="bg-yellow-300 p-3 font-semibold rounded-full hover:bg-yellow-100 active:bg-white">Upload your photo</button>
            <button className="border-2 border-red-500 p-3 font-semibold rounded-full hover:bg-red-100">Delete Image</button>
            </div>
      </div>
      <div className="lg:grid grid-cols-2 gap-5">
      <div className="mt-10">
        <p>First Name</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">Ogechi</p>
      </div>
      <div className="mt-10">
        <p>Last Name</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">William</p>
      </div>
      <div className="mt-10">
        <p>Email</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">Ogechi@gmail.com</p>
      </div>
      <div className="mt-10">
        <p>Phone Number (Optional)</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">+234 9036511680</p>
      </div>
      </div>
       <h1 className="text-2xl font-bold mb-10 mt-10">Personal Address</h1>
    
      <div className="lg:grid grid-cols-2 gap-5">
      <div className="mt-10">
        <p>Country or Region</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">United States</p>
      </div>
      <div className="mt-10">
        <p>City</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">Washington</p>
      </div>
      <div className="mt-10">
        <p>Address</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">4531 Washington Aven Manchester</p>
      </div>
      <div className="mt-10">
        <p>Postal Code</p>
        <p className="border-2 border-black p-2 rounded-md mt-2 bg-[#F5F5F5]">+234-951</p>
      </div>
      </div>
        <button className=" bg-yellow-300 p-3 font-semibold rounded-full mt-5 hover:bg-yellow-100 active:bg-white">Edit Profile</button>
        </section>    
    </div>
  )
}

       