import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false }
      ]
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false }
      ]
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false }
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true }
      ]
    }
  ];

  const [changeQuestion, setchangeQuestion] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [countScore, setcountScore] = useState(0);

  const handleChangeQuestion = (isCorrect) => {
    const nxtQuestion = changeQuestion + 1;
    setchangeQuestion(nxtQuestion);
    console.log(questions.length);
    if (nxtQuestion === questions.length) {
      setshowScore(true);
    }
    console.log(isCorrect);
    if (isCorrect) {
      setcountScore(countScore + 1);
    }
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {countScore} out of {questions.length}
          <button>Reset?</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {changeQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[changeQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[changeQuestion].answerOptions.map((qAns, key) => (
              <button
                key={key}
                onClick={() => handleChangeQuestion(qAns.isCorrect)}
              >
                {qAns.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
