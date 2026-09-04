"use client";

import { useState, useEffect } from "react";
import { StepOne } from "./features/StepOne";
import { StepTwo } from "./features/StepTwo";
import { StepThree } from "./features/StepThree";
import { StepFour } from "./features/StepFour";

export default function Home() {
  const [steps, setSteps] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: null,
  });

  useEffect(() => {
    setIsMounted(true);
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep) {
      const stepNum = Number(savedStep);
      setSteps(stepNum === 4 ? 1 : stepNum);
    }

    const savedData = localStorage.getItem("userData");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Parse error", e);
      }
    }
  }, []);

  const updateFormData = (newData) => {
    setFormData((prev) => {
      const updated = { ...prev, ...newData };
      localStorage.setItem("userData", JSON.stringify(updated));
      return updated;
    });
  };

  const handleNextStep = () => {
    if (steps < 4) {
      const next = steps + 1;
      setSteps(next);
      localStorage.setItem("currentStep", next);
    }
  };

  const handleBackButton = () => {
    if (steps > 1) {
      const prev = steps - 1;
      setSteps(prev);
      localStorage.setItem("currentStep", prev);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      {steps === 1 && (
        <StepOne
          handleNextStep={handleNextStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {steps === 2 && (
        <StepTwo
          handleNextStep={handleNextStep}
          handleBackButton={handleBackButton}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {steps === 3 && (
        <StepThree
          handleBackButton={handleBackButton}
          handleNextStep={handleNextStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {steps === 4 && <StepFour />}
    </div>
  );
}
