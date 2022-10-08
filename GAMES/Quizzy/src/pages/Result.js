import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result] = useState(location.state.result);

  const handleClick = () => {
    navigate("/home");
  }

  return (
    <div className="result">
      <div className="container">
        <div className="result-stats">
          <div className="result-correct-count">
            Correct: <span>{result.correct}</span>
          </div>
          <div className="result-inCorrect-count">
            Incorrect: <span>{result.incorrect}</span>
          </div>
          <div className="result-skipped-count">
            Skipped: <span>{result.skipped}</span>
          </div>
        </div>
        
        <div className="result-bottom">
          <div className="result-score">
            Total Score: <span>{result.score}</span>
          </div>

          <div className="result-back">
            <button className="primary-btn" onClick={handleClick}>Back to Home</button>
          </div>
        </div>
        
        <ul className="result-list">
          {result.answers.map((answer) => {
            return (
              <li className={`${answer.isCorrect ? "true" : "false"}`}>
                <div className="question">{answer.question}</div>
                <div className="correct-answer">
                  <span>Correct Answer : </span>
                  {answer.options[answer.ansIndex]}
                </div>
                <div className="user-answer">
                  <span>Your Answer : </span>
                  {answer.options[answer.userAnswerIndex]}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Result;
