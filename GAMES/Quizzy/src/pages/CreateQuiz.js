import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories, publishInitialQuiz } from "../firebase/functions";
import typeSound from "../sounds/typing.wav";

const playSound = (sound) => new Audio(sound).play();

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isFirstStep, setIsFirstStep] = useState(true);

  //   question related states
  const [question, setQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(1);
  const [ansIndex, setAnsIndex] = useState(0);
  const [points, setPoints] = useState(0);

  // Options related states
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");

  //   Master questions list
  const [quizDetails, setQuizDetails] = useState({});
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then((_categories) => {
      setCategories(_categories.categoryList);
    });
  }, []);

  const setCorrectAnswer = (_ansIndex) => {
    setAnsIndex(_ansIndex);
  };

  useEffect(() => {
    if (questionIndex > 1) {
      setQuestions([
        ...questions,
        {
          ansIndex: ansIndex,
          options: [optionOne, optionTwo, optionThree, optionFour],
          points: points,
          question: question,
        },
      ]);
    }
    setOptionOne("");
    setOptionTwo("");
    setOptionThree("");
    setOptionFour("");
    setPoints("");
    setQuestion("");
    setAnsIndex("");
  }, [questionIndex]);

  const initNextQuestion = () => {
    setQuizDetails({
      name: quizName,
      category: selectedCategory,
      author: JSON.parse(sessionStorage.getItem("loggedInUser")).displayName,
      quizId: Date.now(),
      questions: [
        ...questions,
        {
          ansIndex: ansIndex,
          options: [optionOne, optionTwo, optionThree, optionFour],
          points: points,
          question: question,
        },
      ],
    });
    setQuestionIndex(questionIndex + 1);
  };

  const publishQuiz = () => {
    publishInitialQuiz(quizDetails).then(() => {
      navigate("/my-quizzes");
    });
  };

  return (
    <div className="create-quiz">
      <h2>CreateQuiz</h2>
      {isFirstStep ? (
        <>
          <div className="quiz-name">
            <input
              type="text"
              placeholder="Whats your quiz name?"
              value={quizName}
              onChange={(e) => {
                setQuizName(e.target.value);
                playSound(typeSound);
              }}
            />
          </div>
          <div className="quiz-category">
            <select
              onChange={(e) => {
                setSelectedCategory(
                  e.target.options[e.target.selectedIndex].value
                );
                playSound(typeSound);
              }}
            >
              <option selected hiddden disabled>
                Select Category
              </option>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="btn">
            <button
              className="primary-btn"
              onClick={() => setIsFirstStep(false)}
            >
              Start Creating
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="question-index-wrapper">
            <h3>Note: Selected option is your Answer</h3>
            <label>
              Question Number : <span>{questionIndex}</span>
            </label>
          </div>
          <form>
            <div className="question-text-area">
              <textarea
                placeholder="Question???"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  playSound(typeSound);
                }}
                name="question"
                id=""
                rows="3"
              ></textarea>
            </div>
            <div className="question-options">
              <div className="input-wrapper">
                <input
                  type="radio"
                  name="options"
                  id="0"
                  onChange={(e) => {
                    setCorrectAnswer(e.target.getAttribute("id"));
                    playSound(typeSound);
                  }}
                />
                <input
                  value={optionOne}
                  onChange={(e) => {
                    setOptionOne(e.target.value);
                    playSound(typeSound);
                  }}
                  type="text"
                  placeholder="Option 1"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="radio"
                  name="options"
                  id="1"
                  onChange={(e) => {
                    setCorrectAnswer(e.target.getAttribute("id"));
                    playSound(typeSound);
                  }}
                />

                <input
                  value={optionTwo}
                  onChange={(e) => {
                    setOptionTwo(e.target.value);
                    playSound(typeSound);
                  }}
                  type="text"
                  placeholder="Option 2"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="radio"
                  name="options"
                  id="2"
                  onChange={(e) => {
                    setCorrectAnswer(e.target.getAttribute("id"));
                    playSound(typeSound);
                  }}
                />

                <input
                  value={optionThree}
                  onChange={(e) => {
                    setOptionThree(e.target.value);
                    playSound(typeSound);
                  }}
                  type="text"
                  placeholder="Option 3"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="radio"
                  name="options"
                  id="3"
                  onChange={(e) => {
                    setCorrectAnswer(e.target.getAttribute("id"));
                    playSound(typeSound);
                  }}
                />
                <input
                  value={optionFour}
                  onChange={(e) => {
                    setOptionFour(e.target.value);
                    playSound(typeSound);
                  }}
                  type="text"
                  placeholder="Option 4"
                />
              </div>
            </div>
            <div className="question-points">
              <input
                value={points}
                onChange={(e) => {
                  setPoints(e.target.value);
                  playSound(typeSound);
                }}
                type="text"
                name="points"
                placeholder="Question points"
              />
            </div>
          </form>
          <div className="question-controls">
            <button className="primary-btn" onClick={() => navigate("/home")}>
              Cancel
            </button>
            <button className="primary-btn" onClick={initNextQuestion}>
              Submit Question
            </button>
            <button className="primary-btn" onClick={publishQuiz}>
              Finish
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateQuiz;
