import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Configuration, OpenAIApi } from "openai"
import "./styles.css"
import TextEditorBar from '../TextEditorBar'

const KEY = import.meta.env.VITE_chatGPT_KEY
const openai = new OpenAIApi(new Configuration({
    apiKey: KEY
}))

async function postNote(title, summary, input) {
    const response = await fetch(`http://localhost:3000/note`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: {title},
            summary: {summary},
            note: {input},
    })
    })
    const rawData = await response.json()
    const data = rawData.map(s => s.show)
    }

export default function NoteEntry() {
    const [input, setInput] = useState("")
    const [summary, setSummary] = useState("")
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState([])
    const [title, setTitle] = useState("")
    
    async function getSummary(input) {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user",
                        content: `A user needs a summary of a note he is taking. Please write a 3 line summary of the note below. Make the first 2 lines succinct and informative, and make the third one VERY humorous with the hope that it makes the whole summary a lot more memorable. ${input}` }]
        })
        const data = await res.data.choices[0].message["content"]
        setSummary(data)
    }
    async function getQuestions(input) {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user",
                        content: `The student has written a note to help them remember new content from class. To make it easier to remember as much of the content as possible, use it to generate a set of 3 questions which will be used as prompts to remind the student of his notes using spaced repetition. Please provide the 3 questions in JSON format with a "question" and corresponding "answer".  The note is: ${input}` }]
        })
        const data = await res.data.choices[0].message["content"]
        setQuestions(data)
        console.log(questions);
    }

    async function getTitle(input) {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user",
                        content: `A student has written a note, most likely from a new subject they are learning at school. Generate a 5 word title for the note which most accurately describes the general content of the note. The note is: ${input}` }]
        })
        const data = await res.data.choices[0].message["content"]
        setTitle(data)
    }

    function handleInput(e) {
        const newInput = e.target.value;
        setInput(newInput)
    }
    
    function handleTitle(e) {
        const newTitle = e.target.value;
        setTitle(newTitle)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let noteText = e.target.textContent.replace("SAVE NOTE", "")
        if (!title) {
            getTitle(noteText)
        }
        setInput(noteText)
        setSummary(" ")
        getSummary(noteText)
        getQuestions(noteText)
    }

    useEffect(() => {
        setLoading(!loading)
    }, [summary])

    function handleRichText(e) {
        e.preventDefault()
        const element =  e.target.parentElement
        const command =  element.dataset['element']
        if(command == "createLink" || command == "insertImage") {
            let url = prompt("Enter link: ", 'http://')
            document.execCommand(command, false, url)
        } else {
            document.execCommand(command, false, null)
        }
    }

    return (
        <>
            <form>
                <input type="text" onChange={handleTitle} placeholder='Enter note title'/>
            </form>
            <TextEditorBar handleRichText={handleRichText} />
            <form onSubmit={handleSubmit}>
                <div onChange={handleInput} className="content" id="newNote" contentEditable="true"></div>
                <button >SAVE NOTE</button>
            </form>
                <button ><Link to="./notes">Back to all notes</Link></button>
            <p>AI Generated summary: </p>
            {!summary ? <p className="summary">(Click SAVE NOTE to generate a summary of your note)</p> : "" }
            {title ? <p className="summary" >{title}</p> : "" }
            {summary ? <p className="summary" >{summary}</p> : "" }
            {questions ? <p className="summary" >{questions}</p> : "" }
            {loading ? <><p>LOADING...</p><img className="loading" src="./src/assets/loading2.gif"/></> : ""}
        </>
    )
    }
