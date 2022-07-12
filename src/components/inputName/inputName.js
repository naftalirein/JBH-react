import { useState } from "react";
import MyInput from "../input/myInput";
import Name from "../name/name";

function InputName() {
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <MyInput handleNameChange={handleNameChange} />
      <Name name={name} />
    </div>
  );
}
export default InputName;
