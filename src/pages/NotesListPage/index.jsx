import React, { useState, useEffect } from "react";
import { page, useNote, user } from "../../context/index.jsx";
import Note from "../../components/Note/Note";
import { Link, useNavigate } from "react-router-dom";
import "./NotesListPage.css";
import { RandomQuiz } from "../../modules/index.jsx";

export default function NotesListPage() {
  const { user_id } = user();
  const { currentPage, setCurrentPage } = page();
  setCurrentPage(window.location.pathname);
  const { noteContext, setNoteContext } = useNote();
  const [inputText, setInputText] = useState("");
  const [searchInput, setSearchInput] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch("http://localhost:4000/notes", {
          credentials: "include",
        });
        const data = await response.json();
        const mapNotes = data.map((note) => {
          return {
            key: note.notes_id,
            title: note.title,
            summary: note.summary,
            content: note.content,
          };
        });
        setNoteContext(mapNotes);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, []);

  useEffect(() => {
    if (localStorage.userid === "") {
      navigate("/login");
    }
    // console.log(localStorage.userid);
  }, [localStorage.userid, navigate]);

  function handleInput(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const filteredNotes = noteContext.filter((note) => {
      return note.title.toLowerCase().includes(inputText.toLowerCase());
    });
    setSearchInput(filteredNotes);
  }, [inputText, noteContext]);

  useEffect(() => {
    if (localStorage.userid === "") {
      navigate("/login");
    }
    // console.log(localStorage.userid);
  }, [localStorage.userid, navigate]);
  return (
    <>
      <div className="search-container">
        <h1 className="notes-title">Notes</h1>
        <input
          placeholder="Search for your notes"
          className="notes-search-bar"
          type="text"
          onChange={handleInput}
        ></input>
        <div className="new-note-btn-container">
          <p className="btn-label">New Note</p>
          <Link to="/note">
            <button className="new-btn">+</button>
          </Link>
        </div>
      </div>
      <RandomQuiz />
      <div className="list-container">
        {searchInput.map((note, i) => {
          return (
            <Link to={`/notes/${note.key}`} key={i}>
              <div className="notes-container">
                <div className="notes-list">
                  <Note title={note.title} content={note.summary} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
