import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";

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
    return <div id="summary"></div>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
