import React from "react";
import "./styles.css";

export default function QuestionCard({ question, answer, id, showDelete }) {
  
  async function deleteQuestion() {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    };
    const response = await fetch(`http://localhost:4000/questions/${id}`, options);
    const rawData = await response.json();
    console.log(rawData);
    window.location.reload(false);
  }

  return (
    <div className="question-card">
      <h2 className="questions-title-card">{question}</h2>
      {showDelete ? <button onClick={deleteQuestion} className="delete-btn">Delete</button> : "" }
      <span className="tooltip">{answer}</span>
    </div>
  );
}
