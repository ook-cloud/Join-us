import { useState } from "react";
import { PineconeIcon } from "../icons/PineconeIcon";
import { PrevArrow } from "../icons/PrevArrow";
import { NextArrow } from "../icons/NextArrow";

export const StepTwo = ({
  handleNextStep,
  handleBackButton,
  formData,
  updateFormData,
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Имэйл хаягаа оруулна уу.";
    }

    if (!formData.phone) {
      newErrors.phone = "Утасны дугаараа оруулна уу.";
    } else if (!/^\d{8}$/.test(formData.phone)) {
      newErrors.phone = "Утасны дугаар яг 8 оронтой тоо байх ёстой.";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!formData.password) {
      newErrors.password = "Нууц үгээ оруулна уу.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Нууц үг доод тал нь 8 оронтой, том, жижиг үсэг, тоо болон тусгай тэмдэгт (!@#$%^&*) агуулсан байх ёстой.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Нууц үгээ давтан оруулна уу.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Нууц үг зөрж байна.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <PineconeIcon />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">Join Us! 😎</h1>
          <p className="text-gray-500 text-sm">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="flex flex-col gap-4">
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
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>

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
              <span className="text-xs text-red-500">{errors.phone}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              placeholder="Create a password"
              className={`w-full h-11 px-3 border rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 ${
                errors.password
                  ? "border-red-500"
                  : "border-[#CBD5E1] focus:border-black"
              }`}
            />
            {errors.password && (
              <span className="text-xs text-red-500">{errors.password}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Confirm password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword || ""}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={`w-full h-11 px-3 border rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400 ${
                errors.confirmPassword
                  ? "border-red-500"
                  : "border-[#CBD5E1] focus:border-black"
              }`}
            />
            {errors.confirmPassword && (
              <span className="text-xs text-red-500">
                {errors.confirmPassword}
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
