import React from 'react';

function Question({ question, onAnswer }) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
