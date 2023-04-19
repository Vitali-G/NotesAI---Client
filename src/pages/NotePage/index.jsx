import React, { useState, useEffect } from "react";
import { useNote } from "../../context/index.jsx";
import { Link, useParams } from "react-router-dom";
import "./NotePage.css";

function NotePage() {
  const { id } = useParams();
  const { noteContext, setNoteContext } = useNote();
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getNote = noteContext.find((note) => note.key == parseInt(id));
    if (getNote) {
      setNote(getNote);
    }
    setLoading(false);
  }, [id, noteContext]);

  console.log(note.key);

  const handleDelete = async () => {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };

    const res = await fetch(`http://localhost:4000/notes/${note.key}`, options);

    if (res.ok) {
      console.log("note deleted");
      window.location.assign("/notes");
    } else {
      console.log("error in deleting note");
    }
  };

  const handleUpdate = async () => {
    const noteId = localStorage.setItem("noteId", note.key);
    const noteTitle = localStorage.setItem("noteTitle", note.title);
    const noteContent = localStorage.setItem("noteContent", note.content);
  };

  return (
    <>
      <div className="btn-container">
        <div className="new-btn-cont">
          <p className="note-btn-label">New Note</p>
          <Link to="/note">
            <button className="note-new-btn">+</button>
          </Link>
        </div>
        <div className="del-btn-cont">
          <p className="note-btn-label">Delete</p>
          <button onClick={handleDelete} className="note-new-btn">
            D
          </button>
        </div>
        <div className="upd-btn-cont">
          <p className="note-btn-label">Update</p>
          <Link to="/note">
            <button onClick={handleUpdate} className="note-new-btn">
              U
            </button>
          </Link>
        </div>
      </div>
      <div className="sub-cont">
        <h1 className="note-page-title">{note.title}</h1>
        <div className="note-page-content">
          <p>{note.content}</p>
        </div>
      </div>
    </>
  );
}

export default NotePage;
