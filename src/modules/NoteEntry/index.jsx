import React, { useState } from 'react'
import text from "../../assets/text"
import { Configuration, OpenAIApi } from "openai"

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
                        content: `${input}` }]
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
                <button>ASK</button>
            </form>
            {summary ? <p>{summary}</p> : "" }
        </>
    )
    }


    // "Write a limerick about Lewis, Silvia, Erhan and Vitali coding a notes app with built in AI assistance."
