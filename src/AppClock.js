import React from "react";
import "./App.css";
import Clock from "./components/clock/clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 1000,
      reset: false,
      double: false,
    };
  }

  componentDidUpdate() {
    if (this.state.reset) {
      this.setState(() => ({ reset: false }));
    }
    if (this.state.double) {
      this.setState(() => ({ double: false }));
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              interval: Math.round((Math.random() * 10000) / 1000) * 1000,
            })
          }
        >
          Randomize all intervals
        </button>
        <button onClick={() => this.setState(() => ({ double: true }))}>
          Dounle all intervals
        </button>
        <button onClick={() => this.setState(() => ({ reset: true }))}>
          Reset all intervals
        </button>
        <Clock
          timeZone="Asia/Tel_Aviv"
          interval={this.state.interval}
          reset={this.state.reset}
          double={this.state.double}
        />
        <Clock
          timeZone="America/New_York"
          interval={this.state.interval}
          reset={this.state.reset}
          double={this.state.double}
        />
        <Clock
          timeZone="Europe/London"
          interval={this.state.interval}
          reset={this.state.reset}
          double={this.state.double}
        />
      </div>
    );
  }
}

export default App;
