import React, { useState, useEffect, useRef } from 'react';
import './Button.scss';

type ButtonProps = {
    buttonName: string;
}

const Button = ({ buttonName }: ButtonProps) => {
  const [buttonCount, setButtonCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [timerCount, setTimerCount] = useState(5);
  const firstUpdate = useRef(true);
  const timer = (startTime: number) => {
    let count = startTime;
    setTimerCount(count);
    const timeOut = setInterval(() => {
      count -= 1;
      setTimerCount(count);
      if (count === 0) {
        clearInterval(timeOut);
        setTimerCount(5);
      }
    }, 1000);
  };
  useEffect(() => {
    setIsDisabled(true);
    timer(3);
    const buttonTimeOut1 = setTimeout(() => setIsDisabled(false), 3000);
    return () => clearTimeout(buttonTimeOut1);
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return () => undefined;
    }
    document.title = `${buttonName}: ${buttonCount}`;
    timer(5);
    setIsDisabled(true);
    const buttonTimeOut = setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
    return () => clearTimeout(buttonTimeOut);
  }, [buttonCount]);
  return (
    <button
      className="button"
      style={{ backgroundColor: `${buttonName}` }}
      disabled={isDisabled}
      onClick={() => setButtonCount(buttonCount + 1)}
    >
      {isDisabled ? `Enable after ${timerCount} seconds` : `${buttonName}: ${buttonCount}`}
    </button>
  );
};

export default Button;
