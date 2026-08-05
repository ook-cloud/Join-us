"use client";

// import Image from "next/image";
import React from "react";
import { PineconeIcon } from "./icons/PineconeIcon";
import { NextArrow } from "./icons/NextArrow";

const getStepsFromLocal = () => {
  const savedStep =
    typeof window !== "undefined" ? localStorage?.getItem("currentStep") : null;
  if (savedStep) {
    const step = Number(savedStep);
    if (step === 4) return 1;
    return step;
  } else {
    return 1;
  }
};

export default function SignUpForm() {
  const [steps, setSteps] = useState(getStepsFromLocal());

  const firstStep = steps === 1;
  const secondStep = steps === 2;
  const thirdStep = steps === 3;
  const final = steps === 4;
  const handleStep = () => {
    const nextStep = steps + 1;
    setSteps(nextStep);

    if (typeof window !== "undefined") {
      if (nextStep === 4) {
        localStorage.setItem("currentStep", 1);
      } else {
        localStorage.setItem("currentStep", nextStep);
      }
    }
  };

  const handleBackButtonn = () => {
    const prevStep = steps - 1;
    setSteps(prevStep);
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", prevStep);
    }
  };

  const handleReset = () => {
    setSteps(1);
    if (typeof window !== "undefined") {
      localStorage.setItem("currentStep", 1);
    }
  };

  return (
    // Container
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
              defaultValue="Placeholder "
              className="w-full h-11 px-3 text-sm text-gray-500 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Placeholder "
              className="w-full h-11 px-3 text-sm text-gray-500 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-xs font-semibold text-gray-900 mb-1">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Placeholder "
              className="w-full h-11 px-3 text-sm text-gray-500 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition"
            />
          </div>

          {/* Continue Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-11 bg-[#212121] hover:bg-black text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition"
            >
              <span>Continue 1/3</span>
              <NextArrow />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
