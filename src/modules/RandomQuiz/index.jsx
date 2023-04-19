import React, {useState} from 'react'
import { QuestionCard } from "../../modules"
import "./styles.css"

export default function RandomQuiz() {
  const [questions, setQuestions] = useState([ { "question": "What are the initial steps for creating a routing system in React?", "answer": "Launch vite, delete un-needed files, create all pages with barebones, create external index.jsx for the pages folder, and export all pages. Then, import all the pages in app and build the routing system.", "level": 1 }, { "question": "What is the purpose of the layouts folder and index.jsx file?", "answer": "To create a parent layout component that can be used for multiple pages and to add navigation styling. The index.jsx file contains a barebones RFC and imports NavLink and styles constant in the header function.", "level": 2 }, { "question": "What React hooks are used when building the showgallery component and why are they used?", "answer": "The hooks used are useEffect, useState, and useParams. useEffect is used to make the API request for shows and to set the loading state. useState is used to store the shows array and to handle changes to the search string. useParams is used for the show page to access the id parameter. ", "level": 3 } ])

  return (
        <div className="threeQuestions">
          <h3>A few personalised quiz questions to help you remember!</h3>
            {questions.map((question, i) => <QuestionCard question={question.question} answer={question.answer} key={i} />)}
        </div>
  )
}
