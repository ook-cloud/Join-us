"use client";

// import Image from "next/image";
import React from "react";

import { StepOne } from "./features/StepOne";
import { StepTwo } from "./features/StepTwo";
import { StepThree } from "./features/StepThree";
import { StepFour } from "./features/StepFour";

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

  const StepOne = steps === 1;
  const StepTwo = steps === 2;
  const StepThree = steps === 3;
  const StepFour = steps === 4;
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
