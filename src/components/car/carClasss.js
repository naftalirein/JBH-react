import React from "react";
import "./car.css";

class Car extends React.Component {
  constructor(props) {
    super(props);
    let speedClass = "slow";
    if (props.speed >= 4 && props.speed <= 6) {
      speedClass = "medum";
    } else if (props.speed > 6) {
      speedClass = "fast";
    }
    this.state = { name: props.name, speed: props.speed, speedClass };
  }

  componentWillUnmount() {
    console.log("The component named Header is about to be unmounted.");
  }

  render() {
    return (
      <div className="car">
        <h2 className={(this.state.speedClass)}> {this.state.name}</h2>
      </div>
    );
  }
}

export default Car;
