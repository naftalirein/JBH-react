import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleTextAreaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleCarChange = (event) => {
    setMyCar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let message = "";
    for (const input in inputs) {
      message += `${input}: ${inputs[input]}\n`;
    }
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input">
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label className="input">
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
      <div className="input">
        <div>textarea inputs</div>
        <textarea
          value={inputs.textarea}
          name="textarea"
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <div>textarea input</div>
        <textarea value={textarea} onChange={handleTextAreaChange} />
      </div>
      <div className="input">
        <select value={myCar} onChange={handleCarChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </div>
    </form>
  );
}
export default App;
