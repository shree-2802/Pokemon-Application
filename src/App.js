import React, { Component } from "react";
import "./App.css";
import Pokemon from "./Components/js/Pokemon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon />
      </div>
    );
  }
}

export default App;
