import React from 'react'
import "./styles.css"

export default function QuestionCard({ question, answer }) {
  return (
    <div className='question-card'>
        <h2>{question}</h2>
        <button className="delete-btn">Delete</button>
        <span className="tooltip">{answer}</span>
    </div>
  )
}
