import React, { useState } from 'react';
import './styles.css';
import Question from './components/Question';
import Result from './components/Result';
import HomePage from './components/HomePage';  

const questions = [
  {
    question: "Когда у Акматбекова Чынгыза Эсеновича днюха?",
    options: ["23-февраля", "23-апреля", "23-марта", "24-апреля"],
    correctAnswer: "23-апреля",
  },
  {
    question: "Какое место на Олимпийских играх по хоккею занимает сборная Канады?",
    options: ["Первое", "Второе", "Третье", "Четвертое"],
    correctAnswer: "Первое",
  },
  {
    question: "Что такое 'HTTP'?",
    options: ["HyperText Transfer Protocol", "HyperTool Transfer Protocol", "HighTech Text Protocol", "HyperText Translation Protocol"],
    correctAnswer: "HyperText Transfer Protocol",
  },
  {
    question: "Кто является основателем компании Microsoft?",
    options: ["Стив Джобс", "Билл Гейтс", "Ларри Пейдж", "Марк Цукерберг"],
    correctAnswer: "Билл Гейтс",
  },
  {
    question: "Что такое 'фуа-гра'?",
    options: ["Молочный продукт", "Мясной деликатес", "Десерт", "Напиток"],
    correctAnswer: "Мясной деликатес",
  },
  {
    question: "Кто был первым президентом США?",
    options: ["Джордж Вашингтон", "Авраам Линкольн", "Томас Джефферсон", "Франклин Рузвельт"],
    correctAnswer: "Джордж Вашингтон",
  },
  {
    question: "В какой стране произошла Октябрьская революция 1917 года?",
    options: ["Франция", "Германия", "Россия", "США"],
    correctAnswer: "Россия",
  },
  {
    question: "Какая река является самой длинной в мире?",
    options: ["Амазонка", "Нил", "Миссисипи", "Янцзы"],
    correctAnswer: "Нил",
  },
  {
    question: "В каком виде спорта используется термин 'офсайд' ?",
    options: ["Баскетбол", "Футбол", "Теннис", "Хоккей"],
    correctAnswer: "Футбол",
  },
 
  ];
  
function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true); 
  const [timeLeft, setTimeLeft] = useState(60);
  const [intervalId, setIntervalId] = useState(null);


  const startQuiz = () => {
    setShowHomePage(false);
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerId);
          setShowResult(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    setIntervalId(timerId);
  };

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      clearInterval(intervalId); 
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">BrainStorm</h1>
      {showHomePage ? (  
        <HomePage startQuiz={startQuiz} />
      ) : (
        <>
          <p>Оставшееся время: {timeLeft} секунд</p>
          {showResult ? (
            <Result questions={questions} userAnswers={userAnswers} />
          ) : (
            <Question
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
