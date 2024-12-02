import React from 'react';

function Result({ questions, userAnswers }) {
  const score = userAnswers.reduce((acc, answer, index) => {
    if (answer === questions[index].correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="result-container">
      <h2>Ваш результат:</h2>
      <p>Вы правильно ответили на {score} из {questions.length} вопросов!</p>
      <button className="restart-button" onClick={() => window.location.reload()}>
        Пройти заново
      </button>
    </div>
  );
}

export default Result;
