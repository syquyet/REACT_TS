import { Component, ReactNode } from "react";
import "./toggle.css";
class Toggle extends Component {
  state: { isVisible: boolean } = {
    isVisible: false,
  };
  handleClose = (status: boolean) => {
    this.setState({ isVisible: status });
  };
  render(): ReactNode {
    return (
      <>
        <h1>bật tắt modal</h1>
        <button onClick={() => this.handleClose(true)}>open</button>
        {this.state.isVisible && <h1>tắt,mở modal</h1>}
        {this.state.isVisible && (
          <Modal onClose={() => this.handleClose(false)} />
        )}
      </>
    );
  }
}
export default Toggle;

class Modal extends Component<{ onClose: Function }> {
  state: { backgroundColor: string; transform: number } = {
    backgroundColor: "white",
    transform: 1,
  };
  changeTransform = () => {
    this.setState({ transform:this.state.transform +0.2 });
  };
  changeBackgroundColor = (color: string) => {
    this.setState({ backgroundColor: color });
  };
  listColor = ["red", "green", "blue"];
  render(): ReactNode {
    const style = {
      backgroundColor: this.state.backgroundColor,
      transform: `scale(${this.state.transform}) `,
    };
    
    return (
      <div className="container-modal">
        <div className="modal" style={style}>
          <h1>Đây là modal</h1>

          {this.listColor.map((item) => (
            <button
              key={item}
              onClick={() => this.changeBackgroundColor(item)}
              style={{ backgroundColor: item }}
            >
              {item}
            </button>
          ))}
          <button onClick={() => this.props.onClose(false)}>Close</button>
          <button onClick={() => this.changeTransform()}>phóng to</button>
        </div>
      </div>
    );
  }
}
