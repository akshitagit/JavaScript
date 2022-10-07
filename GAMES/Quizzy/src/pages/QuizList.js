import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizzes, getQuestionsById } from "../firebase/functions";

const QuizList = ({ quizType }) => {
  const [quizzes, setQuizzes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getQuizzes(quizType).then((quizzes) => {
      setQuizzes(quizzes);
    });
  }, []);

  const getQuizQuestions = (quizId) => {
    getQuestionsById(quizType, quizId).then((questions) => {
      navigate("/game", { state: { questions: questions, quizId: quizId } });
    });
  };

  return (
    <div className="classic-quiz-list">
      <h1 className="title">Classic Quizzes</h1>
      <div className="classic-quizzes">
        <ul onClick={(e) => getQuizQuestions(e.target.getAttribute("id"))}>
          {quizzes.map((quiz) => {
            return (
              <li id={`${quiz.author}${quiz.quizId}`}>
                <label className="quiz-name" style={{ pointerEvents: "none" }}>
                  {quiz.name}
                </label>
                <label
                  className="quiz-author"
                  style={{ pointerEvents: "none" }}
                >
                  Author: {quiz.author}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuizList;
