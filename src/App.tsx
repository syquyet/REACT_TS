import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Control from "./components/control/control";
import ListStudent from "./components/liststudent/ListStudent";
import Form from "./components/form/Form";
import { IStudent } from "./types/type";
import { studentsDB } from "./modles/data";

class App extends Component {
  state: {
    students: IStudent[];
    isShowForm: boolean;
    studentForm: IStudent | null;
    action: string | null;
  } = {
    students: studentsDB,
    isShowForm: false,
    studentForm: null,
    action: null,
  };
  // handleToggleForm
  handleToggleForm = (status: boolean, action: string): void => {
    if (status === false) {
      this.setState({ studentForm: null });
    }
    this.setState({ isShowForm: status, action: action });
  };
  handleDelete = (id: string) => {
    this.setState(() => {
      const newData = this.state.students.filter((student) => student.id != id);
      return { students: newData };
    });
  };
  handleAddEditForm = (student: IStudent, action: string | null) => {
    console.log(534555, action);

    if (this.state.action === "add") {
      this.state.students.push(student);
      this.setState({ students: this.state.students });
    } else if (this.state.action === "edit") {
      const newData = this.state.students.map((item) => {
        if (item.id === student.id) {
          return { ...item, ...student };
        }

        return item;
      });

      this.setState({ students: newData });
      console.log(2121212, this.state.students);
    }
  };
  handleViewForm = (id: "string", action: string) => {
    const student = this.state.students.find((student) => student.id === id);

    if (student) {
      this.setState({ studentForm: student });
    }
    this.handleToggleForm(true, action);
  };
  render(): React.ReactNode {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control onShowForm={this.handleToggleForm} />
            <ListStudent
              data={this.state.students}
              onDelete={this.handleDelete}
              onViewForm={this.handleViewForm}
              onAddEditForm={this.handleAddEditForm}
            />
          </div>
        </div>
        {this.state.isShowForm && (
          <Form
            onAddEditForm={this.handleAddEditForm}
            onCloseForm={this.handleToggleForm}
            action={this.state.action}
            studentForm={this.state.studentForm}
          />
        )}
      </div>
    );
  }
}

export default App;
