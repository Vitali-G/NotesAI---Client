import React, { useState } from 'react'
import { Configuration, OpenAIApi } from "openai"
import "./styles.css"
import { BiBold, BiItalic, BiUnderline, BiListUl, BiListOl, BiLink, BiAlignLeft, BiAlignRight, BiAlignJustify, BiImageAdd } from "react-icons/bi"
import { BsTextCenter } from "react-icons/bs"

const KEY = import.meta.env.VITE_chatGPT_KEY
const openai = new OpenAIApi(new Configuration({
    apiKey: KEY
}))

export default function NoteEntry() {
    const [input, setInput] = useState("")
    const [summary, setSummary] = useState("")
    
    async function getSummary(input) {
        const res = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user",
                        content: `A user needs a summary of a note he is taking. Please write a 3 line summary of the note below. Make the first 2 lines succinct and informative, and make the third one VERY humorous with the hope that it makes the whole summary a lot more memorable. ${input}` }]
        })
        const data = await res.data.choices[0].message["content"]
        console.log(data);
        setSummary(data)
    
    }

    function handleInput(e) {
        const newInput = e.target.value;
        setInput(newInput)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setInput(e.target.value)
        console.log(e.target.value);
        getSummary(input)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newNote">Prompt:</label>
                <input onChange={handleInput} id="newNote" type="text" placeholder='What?'/>
                <button>SAVE</button>
            </form>
            {summary ? <p>{summary}</p> : "" }
            <div className="main-content">
                <div className="text-editor-header">
                    <button type="button" className="btn" data-element="bold">
                        <BiBold />
                    </button>
                    <button type="button" className="btn" data-element="italic">
                        <BiItalic />
                    </button>
                    <button type="button" className="btn" data-element="underline">
                        <BiUnderline />
                    </button>
                    <button type="button" className="btn" data-element="insertUnorderedList">
                        <BiListUl />
                    </button>
                    <button type="button" className="btn" data-element="insertOrderedList">
                        <BiListOl />
                    </button>
                    <button type="button" className="btn" data-element="createLink">
                        <BiLink />
                    </button>
                    <button type="button" className="btn" data-element="justifyLeft">
                        <BiAlignLeft />
                    </button>
                    <button type="button" className="btn" data-element="justifyCenter">
                        <BsTextCenter />
                    </button>
                    <button type="button" className="btn" data-element="justifyRight">
                        <BiAlignRight />
                    </button>
                    <button type="button" className="btn" data-element="justifyFull">
                        <BiAlignJustify />
                    </button>
                    <button type="button" className="btn" data-element="insertImage">
                        <BiImageAdd />
                    </button>
                </div>
                
                <div className="content" contentEditable="true"></div>
        </div>
        </>
    )
    }
