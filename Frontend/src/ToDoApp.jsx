import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Notes from "./Components/Notes";
import NotesFilter from "./Components/filter";
import EditSidebar from "./Components/EditSideBar";
import axios from "axios";

// Use environment variable for API URL
const API_URL = "https://todo-mern-bc6a.onrender.com/api/todos";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCard, setEditingCard] = useState(null);
  const [isEditSidebarOpen, setIsEditSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setNotes(res.data);
      setFilteredNotes(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async () => {
    const newTask = {
      title: "New Card",
      description: "Description here...",
      completed: false,
    };
    try {
      const res = await axios.post(API_URL, newTask);
      setNotes((prev) => [res.data, ...prev]);
      setFilteredNotes((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Create error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      setFilteredNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleEdit = (card) => {
    setEditingCard(card);
    setIsEditSidebarOpen(true);
  };

  const handleUpdate = async (updatedCard) => {
    try {
      const res = await axios.put(`${API_URL}/${updatedCard._id}`, updatedCard);
      setNotes((prev) =>
        prev.map((n) => (n._id === updatedCard._id ? res.data : n))
      );
      setFilteredNotes((prev) =>
        prev.map((n) => (n._id === updatedCard._id ? res.data : n))
      );
      setIsEditSidebarOpen(false);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const toggleComplete = async (note) => {
    try {
      const updated = { ...note, completed: !note.completed };
      const res = await axios.put(`${API_URL}/${note._id}`, updated);
      setNotes((prev) =>
        prev.map((n) => (n._id === note._id ? res.data : n))
      );
      setFilteredNotes((prev) =>
        prev.map((n) => (n._id === note._id ? res.data : n))
      );
    } catch (err) {
      console.error("Toggle error:", err);
    }
  };

  const handleFilter = (newSearchTerm, newStatusFilter) => {
    setSearchTerm(newSearchTerm);
    setStatusFilter(newStatusFilter);
    let filtered = [...notes];
    if (newSearchTerm) {
      filtered = filtered.filter(
        (n) =>
          n.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
          n.description.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
    }
    if (newStatusFilter && newStatusFilter !== "all") {
      filtered = filtered.filter((n) =>
        newStatusFilter === "completed" ? n.completed : !n.completed
      );
    }
    setFilteredNotes(filtered);
  };

  return (
    <>
      <Sidebar onCreate={handleCreate} />
      <EditSidebar
        card={editingCard}
        isOpen={isEditSidebarOpen}
        onClose={() => setIsEditSidebarOpen(false)}
        onSave={handleUpdate}
      />
      <div className="pt-5">
        {!loading && (
          <NotesFilter
            onFilter={handleFilter}
            searchTerm={searchTerm}
            statusFilter={statusFilter}
          />
        )}
      </div>
      <main className="flex-1 p-6 mt-16 ml-64 mr-1 bg-gray-100 dark:bg-neutral-900 min-h-screen">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredNotes.map((note) => (
              <Notes
                key={note._id}
                title={note.title}
                description={note.description}
                initialStatus={note.completed ? "completed" : "pending"}
                onDelete={() => handleDelete(note._id)}
                onEdit={() => handleEdit(note)}
                onToggle={() => toggleComplete(note)}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}