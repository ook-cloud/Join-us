import { useState } from "react";
import { PineconeIcon } from "../icons/PineconeIcon";
import { PrevArrow } from "../icons/PrevArrow";
import { NextArrow } from "../icons/NextArrow";
import { ImageIcon } from "../icons/ImageIcon";

export const StepThree = ({
  handleNextStep,
  handleBackButton,
  formData,
  updateFormData,
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Төрсөн өдрөө сонгоно уу.";
    }

    if (!formData.profileImage) {
      newErrors.profileImage = "Зураг оруулна уу.";
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFormData({ profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    updateFormData({ profileImage: null });
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
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.dateOfBirth || ""}
              onChange={(e) => updateFormData({ dateOfBirth: e.target.value })}
              className={`w-full h-11 px-3 border rounded-lg text-sm text-gray-700 outline-none transition-colors ${
                errors.dateOfBirth
                  ? "border-red-500"
                  : "border-[#CBD5E1] focus:border-black"
              }`}
            />
            {errors.dateOfBirth && (
              <span className="text-xs text-red-500">{errors.dateOfBirth}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Profile image <span className="text-red-500">*</span>
            </label>

            <label
              className={`w-full h-52 rounded-xl p-4 bg-[#F8FAFC] flex items-center justify-center flex-col border-2 border-dashed cursor-pointer hover:bg-gray-100 transition-all relative overflow-hidden ${
                errors.profileImage ? "border-red-500" : "border-[#CBD5E1]"
              }`}
            >
              {formData.profileImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={formData.profileImage}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-black/60 hover:bg-black text-white p-1.5 rounded-full text-xs transition"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <ImageIcon />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    Add image
                  </span>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {errors.profileImage && (
              <span className="text-xs text-red-500">
                {errors.profileImage}
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
            <span className="text-sm font-medium">Continue 3/3</span>
            <NextArrow />
          </button>
        </div>
      </form>
    </div>
  );
};
