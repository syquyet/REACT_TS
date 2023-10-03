import { IUser } from "../../../type/type";
import { Users } from "../../model/data";
import "./register.css";
// import React, { Component, FormEvent } from 'react';
import { Component, FormEvent, ReactNode } from "react";

class Register extends Component {
  state: { formData: IUser } = {
    formData: {
      name: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
    },
  };
  handleOnChange = (event: FormEvent<HTMLInputElement>) => {
    console.log(1111111);
    const { name, value } = event.currentTarget;
    this.setState({
      formData: { ...this.state.formData, [name]: value },
    });
    console.log(2222,this.state.formData);
  };

  render(): ReactNode {
    return (
      <>
        <div className="form-container">
          <form>
            <h2>Đăng ký thành viên</h2>
            <hr />
            <label htmlFor="text">Họ và tên: </label>
            <input
              className="input-form"
              type="text"
              name="name"
              placeholder="Họ và tên"
              onChange={this.handleOnChange}
            />
            <p className="error" id="error-fullname" />
            <label htmlFor="email">Email:</label>
            <input
              className="input-form"
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleOnChange}
            />
            <p className="error" id="error-email" />
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              className="input-form"
              type="number"
              name="phone"
              placeholder="Số điện thoại"
              onChange={this.handleOnChange}
            />
            <p className="error" id="error-phone" />
            <label htmlFor="password">Mật khẩu:</label>
            <input
              className="input-form"
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={this.handleOnChange}
            />
            <p className="error" id="error-password" />
            <label htmlFor="password">Nhập lại mật khẩu:</label>
            <input
              className="input-form"
              type="password"
              name="repeatPassword"
              placeholder="Nhập lại mật khẩu"
              onChange={this.handleOnChange}
            />
            <p className="error" id="error-repeatPassword" />
            <div id="btn-form-login">
              <button>Đăng ký</button>
            </div>
            <p id="navigation">
              Bạn đã dăng ký tài khoản?
              <a href="/pages/auth/login/index.html">Đăng nhập</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}
export default Register;
