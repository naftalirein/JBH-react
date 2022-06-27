import React from "react";
import "./App.css";
import Car from "./components/car/car";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.carsV2 = [
      { name: "oppel", speed: 1 },
      { name: "bmw", speed: 8 },
      { name: "audi", speed: 5 },
    ]
    this.state = {
      name: "",
      speed: "",
      cars: [
        { name: "oppel", speed: 1 },
        { name: "bmw", speed: 8 },
        { name: "audi", speed: 5 },
      ],
    };
  }

  addCar = () => {
    const newCar = { name: this.state.name, speed: this.state.speed }
    this.state.cars.push(newCar);
    this.setState({ cars: this.state.cars, name: '' , speed: ''});
  };

  render() {
    return (
      <div className="App">
        <h2> All Cars</h2>
        <div>
          <input
            value={this.state.name}
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
          />
          <input
            value={this.state.speed}
            onChange={(event) => {
              this.setState({ speed: event.target.value });
            }}
          />
          <button className='add-car' onClick={this.addCar} />
        </div>
        {this.state.cars.map((item, index) => {
          return <Car key={index} name={item.name} speed={item.speed} />;
        })}
      </div>
    );
  }
}

export default App;
