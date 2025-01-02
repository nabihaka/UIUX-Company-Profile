import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { InputImage } from "./InputImage";
import { InputTitle } from "./InputTitle";
import { InputTags } from "./InputTags";
import { InputCategory } from "./InputCategory";
import { ButtonSubmit } from "./ButtonSubmit";
import CKEditorComponent from "@/components/ckeditor/CKEditorComponent.jsx";

export const FormUpdateBlog = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [dataUpdateBlog, setDataUpdateBlog] = useState({
    image: null,
    title: "",
    tags: [],
    message: "",
    category: "",
  });

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="bg-white px-4 py-8 space-y-6 rounded-xl">
      <div className="flex gap-10">
        <div className="w-1/2 space-y-6">
          <InputImage />
          <InputTitle
            onChange={(e) =>
              setDataUpdateBlog((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="w-1/2 space-y-6">
          <InputTags />
          <InputCategory />
        </div>
      </div>
      <div className="space-y-2">
        <label className="w-max font-medium text-lg tracking-negative-2">
          Content<span className="text-custom-purple">*</span>
        </label>
        <CKEditorComponent />
      </div>
      <div className="flex justify-end">
        <ButtonSubmit text="Update" />
      </div>
    </div>
  );
};
