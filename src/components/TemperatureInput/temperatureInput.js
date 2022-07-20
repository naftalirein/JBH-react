import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
    const { scale, temperature, onTemperatureChange } = props;

  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
}
export default TemperatureInput;
