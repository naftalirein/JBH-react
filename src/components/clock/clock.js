import React from "react";
class Clock extends React.Component {
  intervalId = null;
  setDate = (timeZone) =>
    new Date().toLocaleString("en-US", { timeZone: timeZone });
  constructor(props) {
    super(props);
    this.state = {
      date: this.setDate(props.timeZone),
      interval: 1000,
    };
  }

  setIntervalState = () => {
    this.intervalId = setInterval(() => {
      this.setState({ date: this.setDate(this.props.timeZone) });
    }, this.state.interval);
  };

  resetInterval = () => this.setState({ interval: 1000 });
  dounleInterval = () => this.setState({ interval: this.state.interval * 2 });

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
    if (this.props.reset && !prevProps.reset) {
      this.resetInterval();
    }
    if (this.props.double && !prevProps.double) {
      this.dounleInterval();
    }
    if (this.props.interval !== prevProps.interval) {
      this.setState({ interval: this.props.interval });
    }
  }

  render() {
    return (
      <div>
        <div>-------------------------------------------------</div>
        <div>{"Timezone: " + this.props.timeZone}</div>
        <div>{"Interval: " + this.state.interval}</div>
        <div>{this.state.date}</div>
        <button
          onClick={() =>
            this.setState({ date: new Date().toLocaleTimeString() })
          }
        >
          Update me now
        </button>
        <button onClick={() => this.setState(this.dounleInterval)}>
          Dounle interval
        </button>
        <button onClick={this.resetInterval}>Reset interval</button>
      </div>
    );
  }
}

export default Clock;
