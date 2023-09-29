import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Control from "./components/control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

function App() {
  return (
    <div className="row">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control />
          <ListStudent />
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
