"use client";

// import Image from "next/image";
import React from "react";
import { PineconeIcon } from "./icons/PineconeIcon";
import { NextArrow } from "./icons/NextArrow";
``;
export default function SignUpForm() {
  return (
    // Background & Container
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-[400px] p-8">
        <PineconeIcon />
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-1.5">
            Join Us! <span>😎</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Please provide all current information accurately.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* First Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue=" "
              className="w-full h-11 px-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue=" "
              className="w-full h-11 px-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue=" "
              className="w-full h-11 px-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Continue Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-11 bg-[#212121] hover:bg-black text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition"
            >
              <span>Continue 1/3</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <NextArrow />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// <body class="bg-custom-bg font-sans flex items-center justify-center p-4">
//   <div class="H-655px w-480px bg-white/50 border border-gray-3px rounded">
//     <h1 className="flex items-center justify-center h-screen text-red-900 dark:text-white text-6xl">
//       Title
//     </h1>
//   </div>
// </body>
