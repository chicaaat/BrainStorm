import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import Result from "./Result";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); 


  useEffect(() => {
    setTimeLeft(15);
  }, [currentQuestion]);


  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(); 
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <div>
          <h2>Category: {questions[currentQuestion].category}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Time left: {timeLeft} seconds</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
