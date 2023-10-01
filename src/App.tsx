import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ex1 from "./page/ex_01";
import Toggle from "./page/ex_02/toggle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>xin chào bài 10</h1>
        <ChildApp
          onClick={() => {
            console.log("chil");
          }}
        />
        <Ex1 />
        <Toggle/>
      </div>
    );
  }
}
interface PropsChild {
  onClick: Function;
}

class ChildApp extends Component<PropsChild> {
  render() {
    return <h1>đây là chil</h1>;
  }
}

export default App;
