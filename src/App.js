import React, { Component } from "react";
import "./App.css";

import TodoContainer from "./components/TodoContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbo">
          <h1> To Do List </h1>
        </div>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
