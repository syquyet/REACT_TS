import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super({});
  }
  state: { count: number } = { count: 1 };
  render() {
    return (
      <div className="App">
        <h1>xin chào session_11</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click
        </button>
        <h2>{this.state.count}</h2>
        {true && <Child />}
      </div>
    );
  }
}

export default App;
class Child extends Component {
  render(): React.ReactNode {
    // các trường hợp chạy render khi mouting chạy say  componentWillMount
    // 2 chạy khi update chạy sau componentWillUpdate --> update props, update state
    console.log("render.....");
    return (
      <div>
        <h1>ví dụ</h1>
      </div>
    );
  }
  componentWillMount(): void {
    console.log("componentWillMount.....");
    // chạy khi đc gắn vào chạy lần đầu
  }
  componentDidMount(): void {
    console.log("componentDidMount.....");
    // chạy một lần sau khi render
  }
  componentWillUnmount(): void {
    console.log("componentWillUnmount...");
  }
  shouldComponentUpdate(): boolean {
    return true;
  }
  // chạy khi thay đổi props hay state
  componentWillReceiveProps(): void {
    console.log("componentWillReceiveProps......");
  }
// chạy khi thay đổi props hay state
  componentWillUpdate(): void {
    console.log("componentWillUpdate.....");
  }
// chạy khi thay đổi props hay state
  componentDidUpdate(): void {
    console.log("componentDidUpdate.....");
  }
}
