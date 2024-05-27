import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  //force only shuffle answers once
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    // QUESTION Index = userAnswer.length -1
    shuffledAnswers.current = [...answers];
    //shuffle answer
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClass = "";
        const isSelected = selectedAnswer === answer;

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
