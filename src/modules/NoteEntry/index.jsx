import React from 'react'
import text from "../../assets/text"
// import * as dotenv from 'dotenv';
// process.config();
// const KEY = process.env.REACT_APP_chatGPT_KEY;

export default function NoteEntry() {
    function getSummary() {
        fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${KEY}`
        },
        body: JSON.stringify({
            prompt: "What is 2 + 2?",
            max_tokens: 100
        })
    })
    .then(response => response.json())
    .then(data => console.log(data.choices[0].text))
    .catch(error => console.error(error))
    
}

// getSummary()

return (
    <form>
        <label for="newNote">Prompt:</label>
        <input id="newNote" type="text" />
        <button>ASK</button>
    </form>
  )
}

// prompt: `Can you please summarise the text below in 3 sentences where the first two sentences are clear and informative, but the third is humorous, in the hope that it will make the summary more memorable for the person reading the summary: ${text}`,

