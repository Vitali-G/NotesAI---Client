import React, { useState, useEffect } from "react";
import { QuestionCard } from "../../modules";
import "./styles.css";

export default function RandomQuiz() {
  const [questions, setQuestions] = useState([]);
  const [showDelete, setShowDelete] = useState(true)

  useEffect(() => {
    const getQuestions = async () => {
      const randomQuestions = [];
      try {
        const response = await fetch("http://localhost:4000/questions/", {
          credentials: "include",
        });
        const data = await response.json();
        if (data.length >= 3) {
          while (randomQuestions.length < 3) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuestion = data[randomIndex];
            if (!randomQuestions.includes(randomQuestion)) {
              randomQuestions.push(randomQuestion);
            }
            setQuestions(randomQuestions);
          }
        } else {

          setQuestions([
            {
              question:
                "Sorry! Not enough data in your notes to list out 3 questions!",
              answer:
                "Write and save some notes to see some AI generated questions to help with your memory",
            },
          ]);
          setShowDelete(false)

        }
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
  }, []);

  return (
    <div className="threeQuestions">
      <h3 className="questions-title">Quiz questions to help you remember:</h3>
      <hr />
      {questions.map((question, i) => (
        <QuestionCard
          question={question.question}
          answer={question.answer}
          key={i}
          id={question.question_id}
          showDelete={showDelete}
        />
      ))}
    </div>
  );
}
