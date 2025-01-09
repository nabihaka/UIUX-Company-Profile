import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { InputImage } from "./InputImage";
import { InputTitle } from "./InputTitle";
import { InputTags } from "./InputTags";
import { InputCategory } from "./InputCategory";
import { ButtonSubmit } from "./ButtonSubmit";
import { showUpdateBlog } from "@/helpers/axiosShowUpdateBlog";
import { updateBlog } from "@/helpers/axiosUpdateBlog";
import CKEditorComponent from "@/components/ckeditor/CKEditorComponent.jsx";
import LoadingImg from "@/assets/svg/loading.svg";

export const FormUpdateBlog = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const blogId = localStorage.getItem("blogId");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const [dataUpdateBlog, setDataUpdateBlog] = useState({
    image: null,
    title: "",
    tags: [],
    message: "",
    category: "",
  });

  console.log(dataUpdateBlog);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }

    const getBlogData = async () => {
      const blogData = await showUpdateBlog(blogId);
      if (blogData) {
        setDataUpdateBlog({
          image: blogData.imageurl || null,
          title: blogData.title,
          tags: blogData.tags || [],
          message: blogData.message || "",
          category: blogData.category || "",
        });
        if (blogData.imageurl) {
          setPreview(blogData.imageurl);
        }
      }
    };

    getBlogData();
  }, [token, navigate]);

  useEffect(() => {
    if (window.location.pathname !== "/update-blog") {
      localStorage.removeItem("blogId");
    }
  }, [location.pathname]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setDataUpdateBlog((prev) => ({ ...prev, image: file }));
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    setImage(null);
    setDataUpdateBlog((prev) => ({ ...prev, image: null }));
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
      setDataUpdateBlog((prev) => ({ ...prev, image: file }));
    }
  };

  const handleUpdateBlog = async () => {
    const formData = new FormData();

    formData.append("id", blogId);
    if (image) {
      formData.append("image", image);
    } else {
      formData.append("image", dataUpdateBlog.image);
    }
    // formData.append("image", image);
    formData.append("title", dataUpdateBlog.title);
    formData.append("message", dataUpdateBlog.message);
    formData.append("category", dataUpdateBlog.category);

    await updateBlog(formData, setLoading);
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
            value={dataUpdateBlog.title}
            onChange={(e) =>
              setDataUpdateBlog((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div className="w-1/2 space-y-6">
          <InputTags
            tags={dataUpdateBlog.tags}
            setTags={(newTags) =>
              setDataUpdateBlog((prev) => ({ ...prev, tags: newTags }))
            }
          />
          <InputCategory
            value={dataUpdateBlog.category}
            setCategory={(category) =>
              setDataUpdateBlog((prev) => ({ ...prev, category }))
            }
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="w-max font-medium text-lg tracking-negative-2">
          Content<span className="text-custom-purple">*</span>
        </label>
        <CKEditorComponent
          value={dataUpdateBlog.message}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDataUpdateBlog((prev) => ({ ...prev, message: data }));
          }}
        />
      </div>
      <div className="flex justify-end">
        <ButtonSubmit
          text="Update"
          isLoading={loading}
          loadingImage={LoadingImg}
          onClick={handleUpdateBlog}
        />
      </div>
    </div>
  );
};
