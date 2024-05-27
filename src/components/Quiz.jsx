import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";

const Quiz = () => {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  //answer 0 -> quesiton 0
  // start quiz
  //question 0 -> answer 1 -> active question index 1
  //question 1 -> answer 2 -> active question index 2
  //question 2 -> answer 3 -> active question index 3

  // check if question answered or not
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");

      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      // check is answer correct or wrong in 1 second
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        //after 2 seondes, setAnswerState to "" -> move to next question
        setTimeout(setAnswerState(""), 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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

  return (
    <div id="quiz">
      <div id="question">
        {/* onTimeOut function is execute once time expired */}
        <QuestionTimer
          // build-in props -> key to track changes state
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          // using key to force component to recreate, clear old memory
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
};

export default Quiz;
