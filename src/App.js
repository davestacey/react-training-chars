import React, { Component } from "react";
import "./App.css";

import Validation from "./Validation/Validation";
import Char from "./Charbox/Charbox";

class App extends Component {
  state = {
    inputString: ""
  };

  changeHandler = event => {
    this.setState({ inputString: event.target.value });
  };

  charDeleteHandler = index => {
    let inputStringCopy = [...this.state.inputString.split("")];
    inputStringCopy.splice(index, 1);
    this.setState({ inputString: inputStringCopy.join("") });
  };

  render() {
    const charList = this.state.inputString.split("").map((charIn, index) => {
      return (
        <Char
          char={charIn}
          key={index}
          onClick={() => this.charDeleteHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <hr />
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.inputString}
        />
        <p>{this.state.inputString}</p>
        <p>{`Length is ${this.state.inputString.length}`}</p>
        <Validation length={this.state.inputString.length} />
        {charList}
        <hr />
      </div>
    );
  }
}

export default App;
