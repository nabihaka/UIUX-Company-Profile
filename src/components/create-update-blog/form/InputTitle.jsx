import * as React from "react";

export const InputTitle = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="title"
        className="w-max font-medium text-lg tracking-negative-2"
      >
        Title<span className="text-custom-purple">*</span>
      </label>
      <input
        id="title"
        type="text"
        value={value}
        placeholder="E.g. President Prabowo's Visit to America"
        onChange={onChange}
        className="bg-white p-2 py-4 font-normal text-base tracking-negative-2 border border-custom-outline-gray rounded-xl placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-custom-purple"
      />
    </div>
  );
};
