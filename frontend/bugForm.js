import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BugForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/bugs", { title, description });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report a Bug</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bug Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Bug Description" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BugForm;
