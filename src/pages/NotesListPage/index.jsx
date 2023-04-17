import React, { useState, useEffect } from "react";
import { useNote } from "../../context/index.jsx";
import Note from "../../components/Note/Note";
import { Link } from "react-router-dom";
import "./NotesListPage.css";

export default function NotesListPage() {
  const { noteContext, setNoteContext } = useNote();
  const [inputText, setInputText] = useState("");
  const [searchInput, setSearchInput] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        const mapNotes = data.results.map((note) => {
          return {
            key: note.episode_id,
            title: note.title,
            content: note.opening_crawl,
          };
        });
        setNoteContext(mapNotes);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, []);

  function handleInput(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const filteredNotes = noteContext.filter((note) => {
      return note.title.toLowerCase().includes(inputText.toLowerCase());
    });
    setSearchInput(filteredNotes);
  }, [inputText, noteContext]);

  return (
    <>
      <div>Notes List Page</div>
      <label>Search Your Notes</label>
      <input type="text" onChange={handleInput}></input>
      <div className="search-bar">
        {searchInput.map((note) => {
          return (
            <Link to={`/note/${note.key}`}>
              <ul key={note.key} className="note-cards">
                <Note title={note.title} content={note.content} />
              </ul>
            </Link>
          );
        })}
      </div>
    </>
  );
}
