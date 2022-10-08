import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const _currentUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (_currentUser) {
      setCurrentUser({ isAuthenticated: true, ..._currentUser });
    } else {
      const guestUser = JSON.parse(sessionStorage.getItem("guestUser"));
      setCurrentUser({ isAuthenticated: false, ...guestUser });
    }
  }, []);

  return (
    <div className="home">
      <h1>
        Welcome to Quizzy{" "}
        {currentUser.isAuthenticated && currentUser.displayName}
      </h1>
      <ul>
        <li>
          <button
            className="primary-btn"
            onClick={() => navigate("/classicquizzes")}
          >
            Classic
          </button>
        </li>
        <li>
          <button
            className="primary-btn"
            onClick={() => navigate("/communityquizzes")}
          >
            Community Quizzes
          </button>
        </li>
        {currentUser.isAuthenticated && (
          <>
            <li>
              <button
                className="primary-btn"
                onClick={() => {
                  navigate("/my-quizzes");
                }}
              >
                My Quizzes
              </button>
            </li>
            <li>
              <button
                className="primary-btn"
                onClick={() => {
                  navigate("/create-quiz");
                }}
              >
                Create Quiz
              </button>
            </li>
            <li>
              <button
                className="primary-btn"
                onClick={() => {
                  navigate("/results");
                }}
              >
                Results
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Home;
