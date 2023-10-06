import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ModalAuth from "./components/ModalAuth";
import { useState } from "react";
import Antd from "./antd/antd";
function App() {
  const [show, setShow] = useState(false);
  const handleShow = (status:boolean) => setShow(status);
  console.log(1111111);
  

  return (
    <>
      <Header onHandleShow ={handleShow} />
      <ModalAuth show={show}onClose={handleShow} />
      <Antd/>
    </>
  );
}

export default App;
