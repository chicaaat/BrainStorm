import React from "react";

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>Викторина завершена!</h2>
      <p>
        Ваш счет: {score} / {total}
      </p>
      <button onClick={() => window.location.reload()}>Начать заново</button>
    </div>
  );
};

export default Result;
