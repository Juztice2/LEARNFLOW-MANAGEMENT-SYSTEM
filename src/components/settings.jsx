import { Pencil } from "lucide-react";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";

export default function Setting() {
  return (
    <div className=" font-poppins">
          <div className="flex bg-[#F5F5F5]  justify-between p-2 sticky top-0 z-50">
            <Dashboard1 />
            <Profile />
            </div>
    <div className="min-h-screen bg-[#F8F8F8] flex  font-poppins pr-1 mt-2 lg:w-[82%] justify-self-end">
      <div className=" bg-white rounded-lg shadow-sm overflow-hidden">

        {/* Header */}
        <div className=" grid gap-2 justify-self-center relative items-center ">

          {/* Profile */}
          <div className="">
            <div className="">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt=""
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
              <span className="absolute top-0 left-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
           
            {/* Name */}
        <div className="pt-1 text-center justify-self-center">
          <h2 className="font-semibold">Nneka Eze</h2>
          <p className="text-gray-500 text-sm">Student</p>
        </div>
        </div>
         <button className=" gap-2 text-sm text-gray-700 justify-self-center flex mt-4 hover:text-red-400">
            Change Profile Picture
            <Pencil size={14} />
          </button>
        {/* Tabs */}
        <div className="grid gap-4 items-center px-4 mt-8 md:flex justify-between ">

          <div className="flex gap-1 justify-between lg:gap-3 ">
            <button className="px-5 py-2 rounded-full bg-black text-white text-sm">
              Profile
            </button>

            <button className="px-5 py-2 rounded-full border text-gray-500 text-sm">
              Notifications
            </button>

            <button className="px-5 py-2 rounded-full border text-gray-500 text-sm">
              Subscription
            </button>
          </div>

          <button className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100">
            Save changes
          </button>

        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-12 p-5">

          {/* Left */}

          <div className="space-y-8">

            <div >
              <div className="flex justify-around mb-4">
                <h3 className="font-medium text-sm">Profile Name</h3>
                <Pencil size={15} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500">
                    First Name
                  </label>

                  <input
                    type="text"
                    defaultValue="Nneka"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500">
                    Last Name
                  </label>

                  <input
                    type="text"
                    defaultValue="Eze"
                    className="mt-1 w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-around mb-4">
                <h3 className="font-medium text-sm">
                  Residential Address
                </h3>

                <Pencil size={15} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500">
                    Residential Address
                  </label>

                  <input
                    defaultValue="Abuja Nigeria"
                    className="mt-1 w-full border rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500">
                    Street Address
                  </label>

                  <input
                    defaultValue="No 23 Uzoma enye street, wuse 2"
                    className="mt-1 w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right */}

          <div className="space-y-8">

            <div>
              <div className="flex justify-between mb-4">
                <h3 className="font-medium text-sm">Employment Status</h3>
              </div>

              <label className="text-xs text-gray-500">
                Choose from dropdown
              </label>

              <select className="mt-1 w-full border rounded-md px-3 py-2">
                <option>Student</option>
                <option>Employed</option>
                <option>Self Employed</option>
                <option>Unemployed</option>
              </select>
            </div>

            <div>
              <h3 className="font-medium text-sm mb-4">
                Contact Address
              </h3>

              <label className="text-xs text-gray-500">
                Phone number
              </label>

              <div className="flex mt-1">
                <select className="border rounded-l-md px-2">
                  <option>🇳🇬 +234</option>
                </select>

                <input
                  defaultValue="806 3020 29"
                  className="border border-l-0 rounded-r-md px-3 py-2 flex-1"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
   </div> 
  );
}