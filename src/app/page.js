"use client";

import { useState } from "react";

import { StepOne } from "./features/StepOne";
import { StepTwo } from "./features/StepTwo";
import { StepThree } from "./features/StepThree";
import { StepFour } from "./features/StepFour";
import { PineconeIcon } from "./icons/PineconeIcon";

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

function checkLocal() {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

export default function Home() {
  const [steps, setSteps] = useState(getStepsFromLocal());

  // const StepOne = steps === 1;
  // const StepTwo = steps === 2;
  // const StepThree = steps === 3;
  // const StepFour = steps === 4;
  const handleNextStep = () => {
    if (steps < 4) {
      setSteps(steps + 1);
    }
  };

  const handleBackButton = () => {
    if (steps > 1) {
      setSteps(steps - 1);
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
      {StepOne === 1 && (
        <StepOne handleNextStep={handleNextStep} steps={steps} />
      )}
      {StepTwo === 2 && (
        <StepTwo
          handleNextStep={handleNextStep}
          handleBackButton={handleBackButton}
          steps={steps}
        />
      )}

      {StepThree === 3 && (
        <StepThree
          handleBackButton={handleBackButton}
          handleNextStep={handleNextStep}
          steps={steps}
        />
      )}
      {StepFour === 4 && <StepFour />}
    </div>
  );
}
