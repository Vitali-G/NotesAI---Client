import React, {useState, useEffect} from 'react'
import { QuestionCard } from "../../modules"
import "./styles.css"

export default function RandomQuiz() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const getQuestions = async () => {
      const randomQuestions = [];
      try {
        const response = await fetch("http://localhost:4000/questions/", {
          credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        if (data.length >= 3) {
          while (randomQuestions.length < 3) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuestion = data[randomIndex];
            if (!randomQuestions.includes(randomQuestion)) {
              randomQuestions.push(randomQuestion);
            }
            setQuestions(randomQuestions)
          }
        } else {
          setQuestions({"question": "Sorry! Not enough data in your notes to list out 3 questions!", "answer": "Write and save some notes to see some AI generated questions to help with your memory"})
        }
      } catch (error) {
          console.log(error);
        }
    };
    getQuestions();
  }, []);

  //this bit errors when less than 3 questions in database - fix
  return (
        <div className="threeQuestions">
          <h3>A few personalised quiz questions to help you remember!</h3>
            {questions.map((question, i) => <QuestionCard question={question.question} answer={question.answer} key={i} />)}
        </div>
  )
}
