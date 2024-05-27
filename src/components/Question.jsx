import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import React from "react";

const Question = ({
  QuestionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      {/* onTimeOut function is execute once time expired */}
      <QuestionTimer
        // build-in props -> key to track changes state
        // key={activeQuestionIndex}
        timeout={10000}
        onTimeOut={onSkipAnswer}
      />
      <h2>{}</h2>
      <Answers
        // using key to force component to recreate, clear old memory
        // key={activeQuestionIndex}
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
