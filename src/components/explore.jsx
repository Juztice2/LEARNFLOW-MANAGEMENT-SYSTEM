import { useState } from "react";
import {
  BookOpen,
  TimerIcon,
  HeartIcon
} from "lucide-react";
import SearchFilter from "./searchFilter";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";
import courses from "./data";



export default function Explore() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");


  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || course.category === activeFilter ;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="font-poppins">
     <div className="flex bg-[#F5F5F5]  justify-between p-2 sticky top-0 z-50 font-poppins">
            <Dashboard1 />
            <Profile />
          </div>
    <div className="p-6 w-[100%] lg:w-[80%] justify-self-end overflow-hidden">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <h1 className="text-2xl font-semibold mt-10 mb-3">Trending Courses</h1>

      <div className="overflow-hidden grid font-poppins  md:grid-cols-3 gap-6 mt-8">
        {filteredCourses.map((course, index) => (
          <div key={index} className=" rounded-xl  shadow-sm p-2 border">
            <img src={course.img} className="w-full rounded-lg hover:opacity-80" />
            <h2 className="font-semibold text-lg mt-4">{course.title}</h2>
            <p className="text-gray-500 text-sm">{course.category}</p>
            <div className="flex gap-2 items-center mt-3"><BookOpen size={18}/><span>{course.courses} Courses</span>
            </div>
             <div className="flex gap-2 items-center"><TimerIcon size={18}/><span>{course.duration} Months</span>
            </div>
             <div className="flex gap-2 items-center"><HeartIcon size={18} className="text-yellow-400 fill-yellow-600"/><span>{course.rating} ratings </span>
            </div>
            <button className="w-full bg-black text-white p-3 rounded-full mt-5 font-bold hover:bg-slate-600 active:bg-slate-200">Enroll for ${course.price}</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}