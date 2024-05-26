import { useState } from "react";

const Quiz = () => {
  const [activeQuestionIndex, setActiveQeustionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p> Currently active questions</p>;
};

export default Quiz;
