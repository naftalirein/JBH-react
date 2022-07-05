import React from "react";
import "./App.css";
import Counter from "./components/counter/counter";
import Game from "./components/game/game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isvisable: true,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.isvisable && <Game></Game>}
        ---------------------------
        <div>
          <button
            onClick={() => {
              this.setState({ isvisable: false });
            }}
          >
            remove game
          </button>
        </div>
      </div>
    );
  }
}

export default App;
