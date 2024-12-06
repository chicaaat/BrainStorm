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
      <footer className="footer">
        <div className="footer-content">
         
          <p className="footer-email">Контакты: <a href="mailto:akmatbekovc1@gmail.com">akmatbekovc1@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Result;
