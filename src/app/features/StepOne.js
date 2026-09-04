import { PineconeIcon } from "../icons/PineconeIcon";
import { NextArrow } from "../icons/NextArrow";

export const StepOne = ({ handleNextStep, formData, updateFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm w-full max-w-[440px] p-8">
      <PineconeIcon />

      <div className="mb-6 mt-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-1.5">
          Join Us! <span>😎</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Please provide all current information accurately.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-semibold text-gray-900 mb-1">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName || ""}
            onChange={handleChange}
            placeholder="Placeholder"
            className="w-full h-11 px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-900 mb-1">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName || ""}
            onChange={handleChange}
            placeholder="Placeholder"
            className="w-full h-11 px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-900 mb-1">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            required
            value={formData.username || ""}
            onChange={handleChange}
            placeholder="Placeholder"
            className="w-full h-11 px-3 text-sm text-gray-900 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition placeholder:text-gray-400"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-11 bg-[#212121] hover:bg-black text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition"
          >
            <span>Continue 1/3</span>
            <NextArrow />
          </button>
        </div>
      </form>
    </div>
  );
};
