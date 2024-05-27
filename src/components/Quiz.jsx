import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  //answer 0 -> quesiton 0
  // start quiz
  //question 0 -> answer 1 -> active question index 1
  //question 1 -> answer 2 -> active question index 2
  //question 2 -> answer 3 -> active question index 3
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  // If handleSelectAnswer were to change,
  // handleSkipAnswer needs to be recreated to use the new version of handleSelectAnswer.
  // React ensures that handleSkipAnswer is recreated with the latest reference to handleSelectAnswer.
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="completeImg" />
        <h2>Quiz Completed !</h2>
      </div>
    );
  }

  // QUESTION Index = userAnswer.length -1
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  //shuffle answer
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        {/* onTimeOut function is execute once time expired */}
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
