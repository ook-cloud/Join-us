import { PineconeIcon } from "../icons/PineconeIcon";
import { PrevArrow } from "../icons/PrevArrow";
import { NextArrow } from "../icons/NextArrow";
import { ImageIcon } from "../icons/ImageIcon";

export const StepThree = (props) => {
  return (
    <div className="absolute w-[480px] h-[655px] top-[182px] left-[480px] rounded-lg flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-sm">
      <div className="flex flex-col gap-7">
        <PineconeIcon />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">Join Us! 😎</h1>
          <p className="text-gray-500 text-sm">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full h-11 px-3 border border-[#CBD5E1] focus:border-[#3b82f6] rounded-lg text-gray-700 shadow-sm outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-800">
              Profile image <span className="text-red-500">*</span>
            </label>

            <div className="w-full h-[180px] min-h-[80px] rounded-lg p-4 gap-2 bg-[#7F7F800D] flex items-center justify-center flex-col border border-dashed border-[#CBD5E1] cursor-pointer hover:bg-gray-100 transition-colors">
              <ImageIcon />
              <span className="text-sm font-semibold text-gray-800">
                Add image
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleBackButtonn}
          className="flex items-center justify-center w-32 h-11 rounded-md gap-2 border border-[#CBD5E1] bg-white transition-colors hover:bg-gray-50"
        >
          <PrevArrow />
          <span className="text-sm font-medium text-gray-800">Back</span>
        </button>
        <button
          onClick={handleStep}
          className="flex flex-1 items-center justify-center h-11 gap-2 bg-[#111111] text-white rounded-md hover:bg-black transition-colors"
        >
          <span className="text-sm font-medium">Continue 3/3</span>
          <NextArrow />
        </button>
      </div>
    </div>
  );
};
