import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);

const API = import.meta.env.VITE_API_URL;

  const fetchNotes = async () => {
    const res = await axios.get(`${API}/notes`);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!title.trim()) return;

    await axios.post(`${API}/notes`, {
      title
    });

    setTitle("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API}/notes/${id}`);
    fetchNotes();
  };

  return (
    <div className="container">
      <h1>Notes App</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addNote}>
          Add
        </button>
      </div>

      <div className="notes">
        {notes.map((note) => (
          <div className="note-card" key={note._id}>
            <span>{note.title}</span>

            <button
              onClick={() => deleteNote(note._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;