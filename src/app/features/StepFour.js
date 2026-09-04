import { PineconeIcon } from "../icons/PineconeIcon";

export const StepFour = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full max-w-[440px] p-8 flex flex-col gap-6">
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
  );
};
