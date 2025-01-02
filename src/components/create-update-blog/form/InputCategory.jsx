import * as React from "react";

export const InputCategory = () => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="category"
        className="w-max font-medium text-lg tracking-negative-2"
      >
        Category<span className="text-custom-purple">*</span>
      </label>
      <input
        id="category"
        placeholder="E.g. Nature"
        className="bg-white w-full px-2 py-4 font-normal text-base tracking-negative-2 border border-custom-outline-gray rounded-xl focus:outline-none focus:ring-1 focus:ring-custom-purple"
      />
    </div>
  );
};
