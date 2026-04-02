import React, { useState, useEffect } from "react";

export default function EditSidebar({ card, isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({ title: "", description: "" });

  useEffect(() => {
    if (card) {
      setTitle(card.title);
      setDescription(card.description);
      setErrors({ title: "", description: "" }); // reset errors
    }
  }, [card]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = { title: "", description: "" };
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ ...card, title, description });
    }
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-neutral-800 shadow-lg z-50 p-5 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Edit Card
        </h2>
        <button
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 font-bold"
        >
          X
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col space-y-4 flex-1">
        {/* Title Field */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded-md dark:bg-neutral-700 dark:text-white ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Description Field */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-2 border rounded-md dark:bg-neutral-700 dark:text-white ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter description"
            rows={5}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
      </div>

      {/* Footer Button */}
      <div className="pt-4">
        <button
          onClick={handleSave}
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14m-7-7h14"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}