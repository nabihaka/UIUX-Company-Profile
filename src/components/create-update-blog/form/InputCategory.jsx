import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CATEGORY_LISTS } from "@/models/blog-admin/listCategory";

export const InputCategory = ({ value, setCategory }) => {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    containerRef.current?.focus();
    setIsOpen(!isOpen);
  };

  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setCategory(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (value !== selectedOption) {
      setSelectedOption(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !containerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="space-y-2">
      <label
        htmlFor="category"
        className="w-max font-medium text-lg tracking-negative-2"
      >
        Category<span className="text-custom-purple">*</span>
      </label>
      <div className="relative space-y-2">
        <div
          ref={containerRef}
          tabIndex="0"
          onClick={toggling}
          // onBlur={() => setIsOpen(false)}
          className="group bg-white w-full px-2 py-4 font-normal text-base tracking-negative-2 border border-custom-outline-gray rounded-xl focus:outline-none focus:ring-1 focus:ring-custom-purple"
        >
          <span onClick={handleClick}>
            {selectedOption || (
              <span className="text-gray-400">Select Category</span>
            )}
          </span>
          <div onClick={handleClick} className="absolute right-3 top-5">
            <IoIosArrowDown
              className={`text-md text-custom-purple cursor-pointer transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute z-10 bg-white w-full px-2 py-4 flex flex-col border border-custom-outline-gray ring-1 ring-custom-purple rounded-xl"
          >
            <div className="grid grid-cols-3 gap-2">
              {CATEGORY_LISTS.map((list) => (
                <button
                  key={list.id}
                  type="button"
                  onClick={() => onOptionClicked(list.name)}
                  className="w-max p-2 rounded-lg hover:bg-custom-light"
                >
                  {list.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

{
  /* <div
          className={`absolute z-10 bg-white w-full flex flex-col border border-custom-outline-gray ring-1 ring-custom-purple rounded-xl transition ${
            isOpen ? "px-2 py-4" : "w-0 h-0 p-0"
          }`}
        >
          <div className="grid grid-cols-3 gap-2">
            {CATEGORY_LISTS.map((list) => (
              <button
                key={list.id}
                type="button"
                onClick={() => onOptionClicked(list.name)}
                className="w-max p-2 rounded-lg hover:bg-custom-light"
              >
                {list.name}
              </button>
            ))}
          </div>
        </div> */
}

// const handleClickOutside = (event) => {
//   if (containerRef.current && !containerRef.current.contains(event.target)) {
//     setIsOpen(false);
//   }
// };

// useEffect(() => {
//   if (isOpen) {
//     document.addEventListener("mousedown", handleClickOutside);
//   } else {
//     document.removeEventListener("mousedown", handleClickOutside);
//   }
//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [isOpen]);
