import { useEffect, useState } from "react";

let intervalId = null;
function SimpleClock() {
  const [interval, setIntervalState] = useState(1000);
  const [counter, setCounter] = useState(0);

//   console.log(intervalId)
  useEffect(() => {
    console.log("useEffect");
    
    clearInterval(intervalId);
    console.log(intervalId)

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalId = setInterval(() => {
      setCounter((a) => a + 1);
    }, interval);

    // return () => {
    //     console.log('callback')
    //   clearInterval(intervalId);
    // };
  }, [interval]);

  return (
    <>
      <div>{counter}</div>
      <div>{interval}</div>
      <button onClick={() => setIntervalState((v) => v * 2)}>Double</button>
    </>
  );
}

export default SimpleClock;
