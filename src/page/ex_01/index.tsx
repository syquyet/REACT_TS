import { Component, ReactNode } from "react";

class Ex1 extends Component<{}, { count: number }> {
  constructor() {
    super({});
    this.state = {
      count: 0,
    };
  }

  render(): ReactNode {
    return (
      <>
        <h1>Bài tập 1</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          tăng
        </button>
        <button>{this.state.count}</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          giảm
        </button>
      </>
    );
  }
}
export default Ex1;
