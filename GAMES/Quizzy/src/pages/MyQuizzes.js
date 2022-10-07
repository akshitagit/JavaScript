import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFilteredQuizzes,
  getQuestionsById,
  getQuizzes,
} from "../firebase/functions";

const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser"))
  );

  const navigate = useNavigate();

  useEffect(() => {
    getQuizzes("communityQuizzes").then((quizzes) => {
      setQuizzes(quizzes);
    });
  }, []);

  const getQuizQuestions = (quizId) => {
    getQuestionsById("communityQuizzes", quizId).then((questions) => {
      navigate("/game", { state: { questions: questions, quizId: quizId } });
    });
  };
  return (
    <div className="my-quizzes">
      <h2>My Quizzes</h2>
      {quizzes.length > 0 ? (
        <div className="quizzes">
          <ul onClick={(e) => getQuizQuestions(e.target.getAttribute("id"))}>
            {quizzes.map((quiz) => {
              if (quiz.author === user.displayName) {
                return (
                  <li id={`${quiz.author}${quiz.quizId}`}>
                    <label
                      className="quiz-name"
                      style={{ pointerEvents: "none" }}
                    >
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
              }
            })}
          </ul>
        </div>
      ) : (
        "You have no quizzes"
      )}
    </div>
  );
};

export default MyQuizzes;
