import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuizList from "./pages/QuizList";
import "./scss/style.scss";
import Game from "./pages/Game";
import Result from "./pages/Result";
import CreateQuiz from "./pages/CreateQuiz";
import MyQuizzes from "./pages/MyQuizzes";
import Results from "./pages/Results";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="home" element={<Home />} />
        <Route
          exact
          path="classicquizzes"
          element={<QuizList quizType="classicQuizzes" />}
        />
        <Route
          exact
          path="communityquizzes"
          element={<QuizList quizType="communityQuizzes" />}
        />
        <Route exact path="game" element={<Game />} />
        <Route exact path="result" element={<Result />} />
        <Route exact path="create-quiz" element={<CreateQuiz />} />
        <Route exact path="my-quizzes" element={<MyQuizzes />} />
        <Route exact path="results" element={<Results />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
