import { useEffect, useState } from "react";
import "./game.css";

function Game(props) {
    const [num, setNum] = useState(30);
  const [steps, setSteps] = useState(-1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
      console.log('use Effect', num, steps)
        setSteps(steps + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  useEffect(() => {
      console.log('on load')
      return () => {
          console.log('on exit df')
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div className="game">
      <div>number: {num}</div>
      <div>steps: {steps}</div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        add 1
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        minuse 1
      </button>
    </div>
  );
}

export default Game;
