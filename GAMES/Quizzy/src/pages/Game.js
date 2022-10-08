import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publishResult } from "../firebase/functions";
import correctSound from "../sounds/correct-answer.mp3";
import failSound from "../sounds/incorrect-answer.mp3";

const playSound = (sound) => new Audio(sound).play();

const Game = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [timer, setTimer] = useState(20);

  const [questions, setQuestions] = useState(location.state.questions);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnsIndex, setUserAnsIndex] = useState(0);
  const [score, setScore] = useState(0);

  console.log("rerendered");

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
    setIsAnswered(false);
    setTimer(20);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);

      if (currentQuestionIndex === questions.length - 1) {
        publishData();
      }
      return;
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [timer]);

  const selectAnswer = (ele) => {
    console.log(ele.children[0]);
    ele.children[0].classList.add("selected");

    if (isAnswered) return;
    const selectedAnswerIndex = ele.getAttribute("id");

    const questionResult = {
      userAnswerIndex: selectedAnswerIndex,
      isCorrect: false,
    };

    if (selectedAnswerIndex === currentQuestion.ansIndex) {
      const _score = score;
      playSound(correctSound);
      setScore(_score + parseInt(currentQuestion.points));
      questionResult.isCorrect = true;
    } else {
      playSound(failSound);
    }

    answers.push({ ...questionResult, ...currentQuestion });

    setIsAnswered(true);
    setUserAnsIndex(selectedAnswerIndex);
  };

  const computeResult = (answers) => {
    let correct = 0,
      incorrect = 0,
      skipped = 0;
    answers.map((answer) => {
      if (answer.isSkipped) {
        skipped++;
        return;
      }
      if (answer.isCorrect) {
        correct++;
        return;
      } else {
        incorrect++;
        return;
      }
    });

    return [correct, incorrect, skipped];
  };

  const publishData = () => {
    const quizId = location.state.quizId;

    let currentUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (currentUser) {
      currentUser = currentUser.email;
    } else {
      currentUser = JSON.parse(sessionStorage.getItem("guestUser"));
    }

    const [correctCount, incorrectCount, skippedCount] = computeResult(answers);

    const result = {
      correct: correctCount,
      incorrect: incorrectCount,
      skipped: skippedCount,
      score,
      answers,
    };

    publishResult(result, quizId, currentUser);

    navigate("/result", { state: { result: result } });
  };

  const quitGame = () => {
    navigate("/home");
  };

  const handleClick = () => {
    if (!isAnswered) {
      answers.push({ isSkipped: true, ...currentQuestion });
    }
    // navigate to result page
    if (currentQuestionIndex === questions.length - 1) {
      publishData();
    }

    // set new question index
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="game">
      <div className="game-timer">{timer}</div>
      <div className="game-stats">
        <div className="game-points">
          Question Point: <span>{currentQuestion.points}</span>
        </div>
        <div className="game-total-score">
          Total Score: <span>{score}</span>
        </div>
      </div>

      <div className="game-question">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="game-options">
        <ul onClick={(e) => selectAnswer(e.target)}>
          {currentQuestion.options.map((option, index) => {
            return (
              <li id={index}>
                <button
                  className={`primary-btn ${
                    isAnswered
                      ? currentQuestion.ansIndex == index
                        ? "true"
                        : userAnsIndex == index
                        ? "false"
                        : ""
                      : ""
                  }`}
                  style={{ pointerEvents: "none" }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="game-question-controls">
        <button className="primary-btn" onClick={quitGame} type="button">
          Quit
        </button>
        <button className="primary-btn" onClick={handleClick} type="button">
          {currentQuestionIndex < questions.length - 1
            ? !isAnswered
              ? "Skip"
              : "Next"
            : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default Game;
