import React, { useState, useEffect, useRef } from 'react';

const TextChange = () => {
  const texts = ["Hello, I am Tavishi !!", "Code, Create and Learn :)", "Happy Coding!"];
  const [currText, setCurrText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  // useRef to hold latest values
  const endValueRef = useRef(endValue);
  const isForwardRef = useRef(isForward);
  const indexRef = useRef(index);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentText = texts[indexRef.current];
      const nextLength = isForwardRef.current ? endValueRef.current + 1 : endValueRef.current - 1;

      setCurrText(currentText.substring(0, endValueRef.current));
      setEndValue(nextLength);
      endValueRef.current = nextLength;

      if (nextLength > currentText.length + 10) {
        setIsForward(false);
        isForwardRef.current = false;
      }

      if (nextLength < 2.1) {
        const nextIndex = (indexRef.current + 1) % texts.length;
        setIsForward(true);
        isForwardRef.current = true;
        setIndex(nextIndex);
        indexRef.current = nextIndex;
      }
    }, 65);

    return () => clearInterval(intervalId);
  }, [texts]);

  return <div className="transition ease duration-300">{currText}</div>;
};

export default TextChange;
