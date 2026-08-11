import { PineconeIcon } from "../icons/PineconeIcon";
import { PrevArrow } from "../icons/PrevArrow";
import { NextArrow } from "../icons/NextArrow";

export const StepTwo = ({ handleNextStep, handleBackButton }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };
  z;
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full max-w-110 p-8">
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
              required
              placeholder="Your email address"
              className="w-full h-11 px-3 border border-[#CBD5E1] focus:border-black rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400"
            />
          </div>

          {/* Phone number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="Your phone number"
              className="w-full h-11 px-3 border border-[#CBD5E1] focus:border-black rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className="w-full h-11 px-3 border border-[#CBD5E1] focus:border-black rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400"
            />
          </div>

          {/* Confirm password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-800">
              Confirm password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Confirm your password"
              className="w-full h-11 px-3 border border-[#CBD5E1] focus:border-black rounded-lg text-sm text-gray-700 outline-none transition-colors placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Buttons */}
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
