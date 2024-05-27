import { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    //execute function after a time
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
