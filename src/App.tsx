import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Control from "./components/control/control";
import ListStudent from "./components/liststudent/ListStudent";
import Form from "./components/form/Form";
import { IStudent } from "./types/type";
import { students } from "./modles/data";

class App extends Component {
  state: { students: IStudent[]; isShowForm: boolean } = {
    students: students,
    isShowForm: false,
  };
  render(): React.ReactNode {
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
}

export default App;
