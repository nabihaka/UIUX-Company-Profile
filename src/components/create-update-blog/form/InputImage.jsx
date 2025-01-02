import * as React from "react";
import { RxCross2 } from "react-icons/rx";
import { BiImageAdd } from "react-icons/bi";

export const InputImage = ({
  imageChange,
  removeImage,
  onDragOver,
  onDragLeave,
  onDrop,
  isDragging,
  preview,
  inputRef,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="featured_image" className="w-max space-y-2">
        <div className="flex gap-4 items-baseline">
          <p className="font-medium text-lg tracking-negative-2">
            Featured image<span className="text-custom-purple">*</span>
          </p>
          {preview && (
            <p className="font-normal text-base text-custom-silver tracking-negative-2">
              (Image preview)
            </p>
          )}
        </div>
      </label>
      <label htmlFor="featured_image">
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`w-full h-[300px] flex-col gap-2 justify-center items-center rounded-xl border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-100 hover:border-gray-300 active:bg-gray-200 transition duration-100 ease-in-out ${
            isDragging ? "bg-gray-100 border-gray-300" : ""
          } ${preview ? "hidden" : "flex"}`}
        >
          <BiImageAdd className="text-6xl text-custom-purple" />
          <h4 className="font-bold text-base text-custom-purple">
            Click to upload{" "}
            <span className="font-normal text-base text-gray-500">
              or drag and drop
            </span>
          </h4>
          <p className="font-normal text-sm text-gray-500">
            PNG, SVG, JPG, or JPEG
          </p>
        </div>
        <input
          id="featured_image"
          type="file"
          accept="image/*"
          disabled={preview}
          ref={inputRef}
          onChange={imageChange}
          className="hidden"
        />
      </label>
      {preview && (
        <div
          className="relative w-[360px] h-[500px] -mt-2 rounded-2xl bg-cover"
          style={{ backgroundImage: `url(${preview})` }}
        >
          <div
            onClick={removeImage}
            className="group absolute -right-10 -top-5 bg-custom-light w-8 h-8 flex rounded-full cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition duration-200 ease-in-out"
          >
            <RxCross2 className="mx-auto my-auto text-red-500" />
            <span className="bg-white absolute top-10 w-max px-2 py-1 font-normal text-xs tracking-negative-2 border border-black rounded-md scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-700 transition-opacity">
              Delete image
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
