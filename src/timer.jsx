import React, { useState, useRef, useEffect } from "react";

export default function Timer() {
  const [counter, setCounter] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return; 
      setCounter(0);
    timerRef.current = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setCounter(0); 
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p className="timer">{counter}s</p>
      <button onClick={start} className="start-btn">Старт</button>
      <button onClick={stop} className="stop-btn">Стоп</button>
    </div>
  );
}