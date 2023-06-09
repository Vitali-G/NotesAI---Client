import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Configuration, OpenAIApi } from "openai";
import TextEditorBar from "../TextEditorBar";
import "./styles.css";
import { page } from "../../context";

const KEY = import.meta.env.VITE_chatGPT_KEY;
const openai = new OpenAIApi(
  new Configuration({
    apiKey: KEY,
  })
);

export default function NoteEntry() {
  const { currentPage, setCurrentPage } = page();
  setCurrentPage(window.location.pathname);
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [gotSummary, setgotSummary] = useState(false);
  const navigate = useNavigate()

  const localId = localStorage.getItem("noteId");
  const localTitle = localStorage.getItem("noteTitle");
  const localContent = localStorage.getItem("noteContent");

  async function saveNote(title, input, summary) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title: title,
        content: input,
        summary: summary,
      }),
    };
    const response = await fetch(`http://localhost:4000/notes/new`, options);
    const rawData = await response.json();
    setgotSummary(false);
  }

  async function saveQuestion(question) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        question: question.question,
        answer: question.answer
      }),
    };
    const response = await fetch(`http://localhost:4000/questions/new`, options);
    const rawData = await response.json();
    // console.log(rawData);
  }

  async function saveAllQs(data) {
    try {
      for(let question of data) {
        const res = await saveQuestion(question);
      } 
    } catch(err) {
      console.log(err);
    }
  }

  async function getSummary(input) {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `A user needs a summary of a note he is taking. Please write a 3 line summary of the note below. Make the first 2 lines succinct and informative, and make the third one VERY humorous with the hope that it makes the whole summary a lot more memorable. If you think there the note is not long enough to provide a meaningful summary, please just return a single line summary and end with "The note is not long enough to provide a meaningful summary. Keep the summary to a maximum of 250 characters please. The note is: ${input}`,
        },
      ],
    });
    const data = res.data.choices[0].message["content"];
    setSummary(data);
    setgotSummary(true);
  }

  async function getQuestions(input) {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `The student has writen a note to help them remember new content from class. To make it easier to remember as much of the content as possible, use it to generate a set of 3 questions which will be used as prompts to remind the student of his notes using spaced repition. Please provide the 3 questions in JSON format. Ensure that each question has a key of "question" and a corresponding "answer". For example [ { "question": "....?", "answer": "...." } ] The note is: ${input}`,
        },
      ],
    });
    const rawData = res.data.choices[0].message["content"];
    setQuestions(rawData);
    const array = JSON.parse(rawData)
    saveAllQs(array)
  }

  async function getTitle(input) {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `A student has written a note, most likely from a new subject they are learning at school. Generate a 5 word title for the note which most accurately describes the general content of the note. The note is: ${input}`,
        },
      ],
    });
    const data = res.data.choices[0].message["content"];
    setTitle(data);
  }

  function handleInput(e) {
    const newInput = e.target.value;
    setInput(newInput);
  }

  function handleTitle(e) {
    const newTitle = e.target.value;
    setTitle(newTitle);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let noteText = e.target.textContent.replace("Save Note", "");
    setSummary(" "); // This is so that there is a change to summary and the loading gif plays
    setInput(noteText);
    getQuestions(noteText);
    !title ? getTitle(noteText) : console.log("User entered title, AI doesn't need to generate one, day off!");
    getSummary(noteText);
  }

  useEffect(() => {
    setLoading(!loading);
  }, [summary]);

  useEffect(() => {
    gotSummary ? saveNote(title, input, summary) : "hello";
  }, [gotSummary]);

  // function to get the text editor buttons to work
  function handleRichText(e) {
    e.preventDefault();
    const element = e.target.parentElement;
    const command = element.dataset["element"];
    if (command == "createLink" || command == "insertImage") {
      let url = prompt("Enter link: ", "http://");
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  }

  const updateHandler = async () => {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        title: title,
        content: input,
      }),
    };
    const response = await fetch(
      `http://localhost:4000/notes/${localId}`,
      options
    );

    if (response.ok) {
      console.log("note updated");
      localStorage.noteId = "";
      localStorage.noteTitle = "";
      localStorage.noteContent = "";
      window.location.assign("/notes");
    } else {
      console.log("note not updated");
    }
  };

  useEffect(() => {
    if (localId) {
      setTitle(localTitle);
      setInput(localContent);
    }
  }, []);
  useEffect(() => {
    if (localStorage.userid === "") {
      navigate("/login")
    }
  }, [localStorage.userid, navigate])
  
  useEffect(() => {
    return () => {
      if (window.location.pathname !== "/note") {
        localStorage.noteId = "";
      localStorage.noteTitle = "";
      localStorage.noteContent = "";;
      }
    };
  }, [navigate]);
  return (
    <>
      <div className="body-lite">
        <main>
      <form>
        <input
          className="input-new-note"
          value={title}
          type="text"
          onChange={handleTitle}
          placeholder="Enter note title"
        />
      </form>
      <TextEditorBar className="text-editor-bar" handleRichText={handleRichText} />
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          className="content"
          id="newNote"
          contentEditable="true"
              onChange={handleInput}
              placeholder="Enter your note here"
            ></textarea>
          {localId ? <div className="note-btn-cont">
              <p className="note-btn-label">Update Note</p>
              <button className="update-note" onClick={updateHandler}>U</button>
            </div> : 
              <div className="note-btn-cont">
              <p className="note-btn-label">Save Note</p>
              <button className="save-note" type="submit">S</button>
              </div>}
          </form>
        </main>
        <article>
      <Link to="/notes">
        <button>Back to all notes</button>
      </Link>
      <p>AI Generated summary: </p>
      {!summary ? (<p className="summary">(Click SAVE NOTE to generate a summary of your note)</p>) : ""}
      {loading ? <><p>LOADING...</p><img className="loading" src="./src/assets/loading2.gif" /></> : ""}
      {summary ? <p className="summary" >{summary}</p> : "" }
          </article>
        </div>
    </>
  );
}
