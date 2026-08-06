"use client";

// import Image from "next/image";
import React from "react";
import { PineconeIcon } from "./icons/PineconeIcon";
import { NextArrow } from "./icons/NextArrow";
import { StepOne } from "./features/StepOne";

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
      <StepOne handleStep={handleStep} />
    </div>
  );
}
