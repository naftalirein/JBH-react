import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counters: [0,0,0,0,0,0,0]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.counters.map((counter, index) => {
          return <Counter index={index + 1}/>
        })}
      </div>
    );
  }
}

export default App;
