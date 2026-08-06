import { PineconeIcon } from "../icons/PineconeIcon";
import { PrevArrow } from "../icons/PrevArrow";
import { NextArrow } from "../icons/NextArrow";
import { ImageIcon } from "../icons/ImageIcon";

export const StepThree = (props) => {
  return (
    <div className="absolute w-[480px] h-[655px] top-[182px] left-[480px] rounded-lg flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-sm">
      <div className="flex flex-col gap-7">
        <Pineconelogo />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">
            You&apos;re All Set! 🔥
          </h1>
          <p className="text-gray-500 text-sm">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
