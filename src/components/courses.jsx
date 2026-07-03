import {
  Play,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";
import subjects from "./subjects";


export default function Courses() {
  return (
    <div className=" bg-[#F5F5F5] font-poppins">
      <div className="flex bg-white justify-between p-2  sticky top-0 z-50">
        <Dashboard1 />
        <Profile />
      </div>

       <div className=" px-12 py-12 top-0 lg:w-[85%] justify-self-end">
          <h1 className="text-3xl font-bold text-black">
            Courses
          </h1>

          <p className="mt-4 text-[17px] text-gray-600">
            Unlock the world of web development effortlessly with our innovative e-learning courses. Elevate your skills, build a dynamic portfolio, and launch your web development or no-code career with our industry-aligned certifications and dedicated job
          </p>

          <div className="border-b border-gray-300 mt-10"></div>

          {/* Continue Learning */}
          <section className="mt-8">
            <h2 className="font-semibold text-[18px] mb-6">
              Let's continue Learning!
            </h2>

            <div className="grid lg:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl overflow-hidden flex shadow-sm">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1535378620166-273708d44e4c"
                    className="w-[120px] h-full object-cover"
                    alt=""
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/40 backdrop-blur flex items-center justify-center">
                      <Play
                        size={16}
                        fill="white"
                        className="text-white ml-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="p-6">
                    <p className="text-xs text-gray-500">
                      Introduction to CSS language
                    </p>

                    <h3 className="font-medium mt-2 text-[15px] leading-6">
                      Learn different programming languages and its usefulness
                    </h3>
                  </div>

                  <div className="h-2 bg-gray-200">
                    <div className="h-full bg-yellow-400 w-[18%]"></div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl overflow-hidden flex shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                  className="w-[120px] object-cover"
                  alt=""
                />

                <div className="flex-1">
                  <div className="p-6">
                    <p className="text-xs text-gray-500">
                      Introduction to JavaScript language
                    </p>

                    <h3 className="font-medium mt-2 text-[15px] leading-6">
                      Learn different programming languages and its usefulness
                    </h3>
                  </div>

                  <div className="h-2 bg-gray-200">
                    <div className="h-full bg-yellow-400 w-[15%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Courses */}
          <section className="mt-16">
            <h2 className="text-[36px] font-bold">
              Language Courses
            </h2>

            <p className="text-gray-600 mt-2 text-[18px]">
              Choose from one over many of course and learn with industry
              leading experts.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {subjects.map((item, index) =>(
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm">
                      {item.category}.
                    </p>

                    <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg hover:bg-slate-400 active:bg-slate-200">
                      Enroll
                    </button>
                  </div>
                </div>

              ))}
            </div>
          </section>
        </div>       
    </div>
  )
}



