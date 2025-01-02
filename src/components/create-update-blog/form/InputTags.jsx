import * as React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export const InputTags = ({ tags, setTags }) => {
  // const [itemTags, setItemTags] = useState([]);
  const [itemTag, setItemTag] = useState("");

  const handleKeyDown = (e) => {
    const code = e.keyCode || e.which;
    const newTag = itemTag.trim();
    if ((code !== 13 && code !== 188) || newTag.length === 0) {
      return;
    }
    if (!tags.includes(newTag)) {
      // const newTags = [...tags, itemTag];
      // setItemTags(newTags);
      // setTags(newTags);
      setTags([...tags, newTag]);
      // console.log("Tag berhasil ditambahkan:", newTag);
      // setDataCreateNewBlog((prev) => ({ ...prev, tags: newTags }));
      // setItemTags([...tags, tag]);
    }
    setTimeout(() => {
      setItemTag("");
    }, 0);
  };

  const deleteTag = (index) => {
    // const dupTags = [...tags];
    // dupTags.splice(index, 1);
    // setTags(dupTags);
    const updateTags = tags.filter((_, i) => i !== index);
    setTags(updateTags);
    // console.log("Tag yang tersisa:", updateTags);
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="tags"
        className="w-max font-medium text-lg tracking-negative-2"
      >
        Tags<span className="text-custom-purple">*</span>
      </label>
      <div htmlFor="tags" className="space-y-4">
        <div className="group p-2 flex flex-wrap gap-3 border border-custom-outline-gray rounded-xl focus-within:ring-1 focus-within:ring-custom-purple">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-custom-light w-max px-3 py-2 flex gap-1 items-center border border-custom-outline-gray rounded-xl"
            >
              <span className="font-normal text-base tracking-negative-2">
                {tag}
              </span>
              <RxCross2
                onClick={() => deleteTag(index)}
                className="text-red-500 cursor-pointer"
              />
            </div>
          ))}
          <input
            id="tags"
            type="text"
            value={itemTag}
            maxLength={50}
            onChange={(e) => setItemTag(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type some tags here..."
            className="bg-white w-full py-2 font-normal text-base tracking-negative-2 focus:outline-none"
          />
        </div>
        <p className="font-normal text-sm text-custom-silver tracking-negative-2">
          Click <strong>Enter</strong> or comma (,) to add the tag
        </p>
      </div>
    </div>
  );
};
