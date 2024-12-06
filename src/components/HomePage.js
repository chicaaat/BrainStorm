import React from "react";

function HomePage({ startQuiz }) {
  return (
    <div className="home-page">
      <h2>Добро пожаловать в BrainStorm!</h2>
      <p>Выберите уровень сложности, чтобы начать игру:</p>
      <div className="difficulty-buttons">
        <button className="btn easy" onClick={() => startQuiz("easy")}>
          Легкий
        </button>
        <button className="btn medium" onClick={() => startQuiz("medium")}>
          Средний
        </button>
        <button className="btn hard" onClick={() => startQuiz("hard")}>
          Сложный
        </button>
      </div>
   
    </div>
  
  );
}

export default HomePage;
