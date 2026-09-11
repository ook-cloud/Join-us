import { useState } from "react";
import { PineconeIcon } from "../icons/PineconeIcon";
import { PrevArrow } from "../icons/PrevArrow";
import { NextArrow } from "../icons/NextArrow";
import { Eye } from "../icons/Eye";
import { EyeOff } from "../icons/EyeOff";

export const StepTwo = ({
  handleNextStep,
  handleBackButton,
  formData,
  updateFormData,
}) => {
  const [errors, setErrors] = useState({});
  const [shakingField, setShakingField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    }

    if (!formData.phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{8}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 8 digits.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = "Please enter a password.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, including uppercase, lowercase, numbers, and special characters (!@#$%^&*).";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setShakingField(true);
      setTimeout(() => setShakingField(false), 500);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleNextStep();
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 8) {
      updateFormData({ phone: value });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm w-full max-w-[440px] p-8">
      <style>{`
        @keyframes textShake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }
        .animate-text-shake {
          animation: textShake 0.4s ease-in-out;
        }
      `}</style>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <PineconeIcon />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">Join Us! 😎</h1>
          <p className="text-gray-500 text-sm">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Your email address"
              className={`w-full h-11 px-3 border rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 ${
                errors.email
                  ? "border-red-500"
                  : "border-[#CBD5E1] focus:border-black"
              }`}
            />
            {errors.email && (
              <span
                className={`text-xs text-red-500 font-medium inline-block ${
                  shakingField ? "animate-text-shake" : ""
                }`}
              >
                ⚠️ {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone || ""}
              onChange={handlePhoneChange}
              placeholder="Your phone number"
              className={`w-full h-11 px-3 border rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 ${
                errors.phone
                  ? "border-red-500"
                  : "border-[#CBD5E1] focus:border-black"
              }`}
            />
            {errors.phone && (
              <span
                className={`text-xs text-red-500 font-medium inline-block ${
                  shakingField ? "animate-text-shake" : ""
                }`}
              >
                ⚠️ {errors.phone}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                placeholder="Create a password"
                className={`w-full h-11 pl-3 pr-10 border rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 ${
                  errors.password
                    ? "border-red-500"
                    : "border-[#CBD5E1] focus:border-black"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.password && (
              <span
                className={`text-xs text-red-500 font-medium inline-block ${
                  shakingField ? "animate-text-shake" : ""
                }`}
              >
                ⚠️ {errors.password}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Confirm password <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword || ""}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full h-11 pl-3 pr-10 border rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-[#CBD5E1] focus:border-black"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span
                className={`text-xs text-red-500 font-medium inline-block ${
                  shakingField ? "animate-text-shake" : ""
                }`}
              >
                ⚠️ {errors.confirmPassword}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            type="button"
            onClick={handleBackButton}
            className="flex items-center justify-center w-32 h-11 rounded-lg gap-2 border border-[#CBD5E1] bg-white transition-colors hover:bg-gray-50"
          >
            <PrevArrow />
            <span className="text-sm font-medium text-gray-800">Back</span>
          </button>
          <button
            type="submit"
            className="flex flex-1 items-center justify-center h-11 gap-2 bg-[#111111] text-white rounded-lg hover:bg-black transition-colors"
          >
            <span className="text-sm font-medium">Continue 2/3</span>
            <NextArrow />
          </button>
        </div>
      </form>
    </div>
  );
};
