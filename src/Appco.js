import { useState } from 'react';
import './App.css';
import Car from './components/car/car';


function App() {
  const [name, setName] = useState();
  const [speed, setSpeed] = useState();
  const [cars, setCars] = useState([{ name : 'oppel', speed: 1 }, { name: 'bmw', speed: 8 }, {name:'audi', speed: 5 }]);
  return (
    <div className="App">
      <h2> All Cars</h2>
      <div>
        <input value={name} onChange={(event) => {
          setName(event.target.value)
        }}/>
        <input value={speed} onChange={(event) => {
          setSpeed(event.target.value)
        }}/>
        <button className='add-car' onClick={() => {
          const newCar = {name, speed};
          cars.push(newCar);
          setCars(cars)
          setName('')
          setSpeed('')
        }}>react button</button>
      </div>
        {cars.map((item, index) => {
          return <Car key={index} name={item.name} speed={item.speed} />
        })}
    </div>
  );
}

export default App;
