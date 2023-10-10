

import { object } from "prop-types";
import { LoginService } from "./login.service";
export default class LoginEvent  {
  onLoginEvent(data:object){
    const loginService = new LoginService();
    const error = loginService.validator(data);
    loginService.renderValidator(error);
    if (error.isError) {
      return;
    }
    const response = loginService.login(data);
    if(response.status==="success"){
      alert("Đăng nhập thành công")
    }else{
      if(response.status==="fail"){
        alert("Đăng nhập thất bại kiểm tra lại e mail và mật khẩu")
      }
    }
  }
  
};
