import {
  Play,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Dashboard1 from "./dashboard1";
import Profile from "./profileAvata";
import data from "./data";
import css from "../assets/assets_learn_flow/CSS.png"
import robot from "../assets/assets_learn_flow/robot.png"
import JavaScript from "../assets/assets_learn_flow/javascript.png"
import html from "../assets/assets_learn_flow/html.png"

export default function Dashboard() {
  return (
    <div className=" bg-[#F5F5F5] font-poppins">
      <div className="flex bg-white justify-between p-2 sticky top-0 z-50">
        <Dashboard1 />
        <Profile />
      </div>
          <div className=" px-12 py-12 top-0 lg:w-[80%] justify-self-end">
          <h1 className="text-3xl font-bold text-black">
            Welcome to Learnflow
          </h1>

          <p className="mt-4 text-[20px] text-gray-600">
            Learn at your own pace with lifetime access on mobile and desktop.
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

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              
                <div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={css}
                    alt=""
                    className="w-full h-54 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg">
                      Introduction to CSS Language 
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm mb-8">
                     Learn the basics of CSS, and its usefulness in the programming world
                    </p>
                    <hr></hr>
                    <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg">
                      Enroll
                    </button>
                  </div>
                </div>
              
              <div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={robot}
                    alt=""
                    className="w-full h-54 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg">
                      Introduction to Python Language 
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm mb-8">
                     Learn the basics of python, and its usefulness in the programming world
                    </p>
                    <hr></hr>
                    <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg">
                      Enroll
                    </button>
                  </div>
                </div>

                <div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={JavaScript}
                    alt=""
                    className="w-full h-54 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg">
                      Introduction to JavaScript Language 
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm mb-8">
                     Learn the basics of JavaScript, and its usefulness in the programming world
                    </p>
                    <hr></hr>
                    <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg">
                      Enroll
                    </button>
                  </div>
                </div>

                <div
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={html}
                    alt=""
                    className="w-full h-54 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="font-semibold text-lg">
                      Introduction to Html Language 
                    </h3>

                    <p className="text-gray-500 mt-2 text-sm mb-8">
                     Learn the basics of Html, and its usefulness in the programming world
                    </p>
                    <hr></hr>
                    <button className="mt-5 bg-black text-white px-5 py-2 rounded-lg">
                      Enroll
                    </button>
                  </div>
                </div>
            </div>
          </section>
        </div>    
    </div>
  )
}



