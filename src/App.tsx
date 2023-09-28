import React, { Component, createElement } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    console.log(1111, React);
    const h1 = createElement(
      "h1",
      {
        className: "title",
      },
      "hello meeting"
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h1>xin chào bài 9</h1>
        </header>
        {h1}
      </div>
    );
  }
}

export default App;
