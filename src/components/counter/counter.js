import React from "react";
import "./counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div className="counter">
        counter #: {this.state.counter}
        <button
          className="inc-button"
          onClick={() => {
            const temp = this.state.counter + this.index;
            this.setState({ counter: temp });
          }}
        >
          INC
        </button>
        <button className="dec-button" onClick={() => {
            const temp = this.state.counter - this.index;
            this.setState({ counter: temp });
        }}>DEC</button>
        <button className="ret-button" onClick={() => {
            this.setState({ counter: 0 });
        }}>RST</button>
      </div>
    );
  }
}

export default Counter;
