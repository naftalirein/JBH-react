import React from "react";
class Clock extends React.Component {
  intervalId = null;
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      interval: 1000,
    };
  }

  setIntervalState = () => {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, this.state.interval);
  };

  componentDidMount() {
    if (!this.intervalId) {
      this.setIntervalState();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.interval !== this.state.interval) {
      clearInterval(this.intervalId);
      this.setIntervalState();
    }
  }

  render() {
    return (
      <div>
        <div>{"Interval: " + this.state.interval}</div>
        <div>{this.state.date}</div>
        <button
          onClick={() =>
            this.setState({ date: new Date().toLocaleTimeString() })
          }
        >
          Update me now
        </button>
        <button
          onClick={() =>
            this.setState((state) => ({ interval: state.interval * 2 }))
          }
        >
          Dounle interval
        </button>
        <button
          onClick={() => this.setState(() => ({ interval: 1000 }))}
        >
          Reset interval
        </button>
      </div>
    );
  }
}

export default Clock;
