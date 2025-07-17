import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeout }) {
  const [remTime, setRemTime] = useState(timeout);

  useEffect(() => {
    const time = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(time);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemTime((prevRemTime) => prevRemTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remTime} />;
}

export default QuestionTimer;
