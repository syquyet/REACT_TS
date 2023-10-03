import { Component, ReactNode } from "react";

import { studentsDB } from "../../modles/data";
import { IStudent } from "../../types/type";

class ListStudent extends Component<{
  onDelete: Function;
  data: IStudent[];
  onViewForm: Function;
  onAddEditForm: Function;
}> {
  render() {
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.length > 0 &&
                this.props.data.map((student, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.gender ? "nam" : "nữ"}</td>
                    <td>
                      <div className="template-demo">
                        <button
                          type="button"
                          className="btn btn-danger btn-icon-text"
                          onClick={() =>
                            this.props.onViewForm(student.id, "view")
                          }
                        >
                          Xem
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning btn-icon-text"
                          onClick={() =>
                            this.props.onAddEditForm(student, "edit")
                          }
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="btn btn-success btn-icon-text"
                          onClick={() => this.props.onDelete(student.id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListStudent;
// import React, { Component, useState } from "react";
// import { students } from "../../modles/data";
// import { Interface } from "readline";

// class ListStudent extends Component<any, { selectedStudent: Student }> {
//   constructor(props: any, students: Student) {
//     super(props);
//     this.state = {
//       selectedStudent: students,
//     };
//   }

//   handleViewStudent(student: Student) {
//     this.setState({ selectedStudent: student });
//   }

//   render() {
//     const { selectedStudent } = this.state;

//     return (
//       <div className="card-body">
//         <h3 className="card-title">Danh sách sinh viên</h3>
//         <div className="table-responsive pt-3">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Mã sinh viên</th>
//                 <th>Tên sinh viên</th>
//                 <th>Tuổi</th>
//                 <th>Giới tính</th>
//                 <th>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{student.id}</td>
//                   <td>{student.name}</td>
//                   <td>{student.age}</td>
//                   <td>{student.gender}</td>
//                   <td>
//                     <div className="template-demo">
//                       <button
//                         type="button"
//                         className="btn btn-danger btn-icon-text"
//                         onClick={() => this.handleViewStudent(student)}
//                       >
//                         Xem
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-warning btn-icon-text"
//                       >
//                         Sửa
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-success btn-icon-text"
//                       >
//                         Xóa
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {selectedStudent && (
//           <div className="col-5 grid-margin">
//             <div className="card">
//               <div className="card-body">
//                 <h3 className="card-title">Thông tin sinh viên</h3>
//                 <form className="form-sample">
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">
//                       Mã sinh viên
//                     </label>
//                     <div className="col-sm-9">
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="idStudent"
//                         value={selectedStudent.id}
//                         // disable
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">
//                       Tên sinh viên
//                     </label>
//                     <div className="col-sm-9">
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="name"
//                         value={selectedStudent.name}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">Tuổi</label>
//                     <div className="col-sm-9">
//                       <input
//                         type="text"
//                         className="form-control"
//                         name="age"
//                         value={selectedStudent.age}
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">Giới tính</label>
//                     <div className="col-sm-9">
//                       <select name="gender" className="form-control">
//                         <option value="male">Nam</option>
//                         <option value="female">Nữ</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">Ngày sinh</label>
//                     <div className="col-sm-9">
//                       <input
//                         className="form-control"
//                         placeholder="dd/mm/yyyy"
//                       />
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">Nơi sinh</label>
//                     <div className="col-sm-9">
//                       <select className="form-control" name="poB">
//                         <option value="29">Hà Nội</option>
//                         <option value="59">TP. Hồ Chí Minh</option>
//                         <option value="43">Đà Nẵng</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="form-group row">
//                     <label className="col-sm-3 col-form-label">Địa chỉ</label>
//                     <div className="col-sm-9">
//                       <textarea className="form-control" />
//                     </div>
//                   </div>

//                   <button type="submit" className="btn btn-primary me-2">
//                     Add new student
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default ListStudent;
