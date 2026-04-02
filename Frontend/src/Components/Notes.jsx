import React, { useState } from "react";
import { FiEdit, FiTrash2, FiCheck, FiClock } from "react-icons/fi";

export default function Notes({
  title,
  description,
  initialStatus = "pending",
  onEdit,
  onDelete,
}) {
  const [status, setStatus] = useState(initialStatus);
  const isCompleted = status === "completed";


  const handleToggle = () => {
    setStatus(isCompleted ? "pending" : "completed");
  };


  const descriptionPoints = description
    ? description.split("\n").filter((line) => line.trim() !== "")
    : [];

  return (
    <div
      className={`group relative flex flex-col my-4 w-full md:max-w-sm rounded-2xl border transition-all duration-300 shadow-sm ${
        isCompleted
          ? "bg-slate-50/50 border-slate-200 opacity-75"
          : "bg-white border-slate-200 hover:shadow-md hover:border-orange-200"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between items-center mb-4">
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              isCompleted
                ? "bg-green-100 text-green-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {isCompleted ? <FiCheck size={12} /> : <FiClock size={12} />}
            {status}
          </div>

          <button
            onClick={handleToggle}
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${
              isCompleted
                ? "bg-green-500 border-green-500 text-white"
                : "bg-white border-gray-300 text-gray-400"
            }`}
            title={isCompleted ? "Mark as Pending" : "Mark as Complete"}
          >
            <FiCheck size={16} strokeWidth={3} />
          </button>
        </div>

        <div className="space-y-2">
          <h5
            className={`text-xl font-bold tracking-tight transition-all ${
              isCompleted ? "text-slate-400 line-through" : "text-slate-900"
            }`}
          >
            {title}
          </h5>

          <ul
            className={`text-sm leading-relaxed list-disc list-inside ${
              isCompleted ? "text-slate-400 line-through" : "text-slate-600"
            }`}
          >
            {descriptionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 mt-6 pt-4 border-t border-slate-100">
          <button
            onClick={onEdit}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
            type="button"
          >
            <FiEdit size={18} />
          </button>
          <button
            onClick={onDelete}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600 hover:bg-red-600 hover:text-white transition-colors"
            type="button"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}