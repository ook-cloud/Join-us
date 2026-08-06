import { PineconeIcon } from "../icons/PineconeIcon";

export const StepFour = (props) => {
  return (
    <div className="absolute w-[480px] h-[655px] top-[182px] left-[480px] rounded-lg flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-sm">
      <div className="flex flex-col gap-7">
        <PineconeIcon />

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
