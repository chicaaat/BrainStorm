import React from 'react';

function HomePage({ startQuiz }) {  
  return (
    <div className="home-page">
      <h2>Добро пожаловать в BrainStorm!</h2>
      <p>Нажмите "Начать", чтобы начать викторину.</p>
      <button className="start-button" onClick={startQuiz}>
        Начать викторину
      </button>
    </div>
  );
}

export default HomePage;
