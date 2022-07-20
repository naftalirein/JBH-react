import { useState } from "react";
import "./App.css";
import SimpleClock from "./components/simpleClock/simpleClocl";

function App() {
  const [showSimpleClock, setShowSimpleClock] = useState(true);
  return (
    <div>
      <button onClick={() => setShowSimpleClock(false)}>delete</button>
      {/* {showSimpleClock ? <SimpleClock /> : <span>Click to show clock</span>} */}
      {showSimpleClock && <SimpleClock />}
    </div>
  );
}
export default App;
