import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { InputImage } from "./InputImage";
import { InputTitle } from "./InputTitle";
import { InputTags } from "./InputTags";
import { InputCategory } from "./InputCategory";
import { ButtonSubmit } from "./ButtonSubmit";
import { createNewBlog } from "@/helpers/axiosCreateNewBlog";
import CKEditorComponent from "@/components/ckeditor/CKEditorComponent.jsx";
// import { Title } from "ckeditor5";

export const FormCreateBlog = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  const [dataCreateNewBlog, setDataCreateNewBlog] = useState({
    image: null,
    title: "",
    tags: [],
    message: "",
    category: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setDataCreateNewBlog((prev) => ({ ...prev, image: file }));
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setImage(null);
    setDataCreateNewBlog((prev) => ({ ...prev, image: null }));
    if (fileInputRef) {
      fileInputRef.current.value = null;
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setDataCreateNewBlog((prev) => ({ ...prev, image: file }));
    }
  };

  // const handleSetTags = (newTags) => {
  //   setDataCreateNewBlog((prev) => ({ ...prev, tags: newTags }));
  // };

  const [loading, setLoading] = useState(false);
  const handleCreateNewBlog = async () => {
    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", dataCreateNewBlog.title);
    formData.append("tags", dataCreateNewBlog.tags);
    formData.append("message", dataCreateNewBlog.message);
    formData.append("category", dataCreateNewBlog.category);

    await createNewBlog(setLoading, formData);
  };

  return (
    <div className="bg-white px-4 py-8 space-y-6 rounded-xl">
      <div className="flex gap-10">
        <div className="w-1/2 space-y-6">
          <InputImage
            imageChange={handleImageChange}
            removeImage={handleRemoveImage}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            isDragging={isDragging}
            preview={preview}
            inputRef={fileInputRef}
          />
          <InputTitle
            onChange={(e) =>
              setDataCreateNewBlog((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="w-1/2 space-y-6">
          <InputTags
            tags={dataCreateNewBlog.tags}
            setTags={(newTags) =>
              setDataCreateNewBlog((prev) => ({ ...prev, tags: newTags }))
            }
          />
          <InputCategory />
        </div>
      </div>
      <div className="space-y-2">
        <label className="w-max font-medium text-lg tracking-negative-2">
          Content<span className="text-custom-purple">*</span>
        </label>
        <CKEditorComponent
          onChange={
            (data = setDataCreateNewBlog((prev) => ({
              ...prev,
              message: data,
            })))
          }
        />
      </div>
      <div className="flex justify-end">
        <ButtonSubmit text="Posting" />
      </div>
    </div>
  );
};
