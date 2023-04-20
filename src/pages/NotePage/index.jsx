import React, { useState, useEffect } from "react";
import { page, useNote, user } from "../../context/index.jsx";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Configuration, OpenAIApi } from "openai";
import "./NotePage.css";

const KEY = import.meta.env.VITE_chatGPT_KEY;
const openai = new OpenAIApi(
  new Configuration({
    apiKey: KEY,
  })
);

function NotePage() {
  const { setCurrentPage } = page();
  setCurrentPage(window.location.pathname);
  const { id } = useParams();
  const { noteContext, setNoteContext } = useNote();
  const [note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const [highlighted, setHighlighted] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loadingExplanation, setLoadingExplanation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const getNote = noteContext.find((note) => note.key == parseInt(id));
    if (getNote) {
      setNote(getNote);
    }
    setLoading(false);
  }, [id, noteContext]);

  useEffect(() => {
    if (localStorage.userid === "") {
      navigate("/login");
    }
    console.log(localStorage.userid);
  }, [localStorage.userid, navigate]);
  // console.log(note.key);

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

  function getSelectionText() {
    let text = "";
    text = window.getSelection().toString();
    setHighlighted(text);
  }

  async function getExplanation() {
    setLoadingExplanation(true);
    if (highlighted) {
      const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `A user has written a note but is struggling to understand a word, sentence or concept in the note. The part the user is struggling with is ${highlighted}, and the full context of the note is ${note.content}. Please help the user understand the part they have highlighted as clearly as possible.`,
          },
        ],
      });
      const data = res.data.choices[0].message["content"];
      setExplanation(data);
      setLoadingExplanation(false);
    } else {
      setExplanation(
        "Please highlight some text which you would like our AI to explain! 🤖"
      );
    }
  }
  useEffect(() => {
    if (localStorage.userid === "") {
      navigate("/login");
    }
    console.log(localStorage.userid);
  }, [localStorage.userid, navigate]);

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
        <div className="upd-btn-cont">
          <p className="note-btn-label">Explain</p>
          <button onClick={getExplanation} className="note-new-btn">
            ?
          </button>
        </div>
      </div>
      <div className="sub-cont">
        <h1 className="note-page-title">{note.title}</h1>
        <div className="note-page-content">
          <p onMouseUp={getSelectionText}>{note.content}</p>
        </div>
        <div className="explain-container">
          {loadingExplanation ? (
            <>
              <p>LOADING...</p>
              <img className="loading" src="../src/assets/loading2.gif" />
            </>
          ) : (
            ""
          )}
          {explanation ? (
            <h1 className="explanation">
              AI explanation of highlighted text: <br /> <br />{" "}
              <p className="explanation-detail">{explanation}</p>
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default NotePage;
