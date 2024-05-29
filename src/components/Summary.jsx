import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";

const Summary = () => {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="completeImg" />
      <h2>Quiz Completed !</h2>
      <div id="summary-states">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answer correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answer incorrectly</span>
        </p>
      </div>
      <ol>
        <li>
          <h3>2</h3>
          <p className="question">question text</p>
          <p className="user-answer">user's answer</p>
        </li>
      </ol>
    </div>
  );
};

export default Summary;
