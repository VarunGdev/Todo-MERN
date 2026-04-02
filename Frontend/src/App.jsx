import { Routes, Route, Link } from "react-router-dom";
import ToDoApp from "./ToDoApp";
import LandingPage from "./LandingPage";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<ToDoApp />} />
    </Routes>
  );
}