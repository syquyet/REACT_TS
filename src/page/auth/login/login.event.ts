import LoginService from "./login.service";

class LoginEvent {
  onLogin(userModal: any) {
    const loginService = new LoginService();
    const error = loginService.validator(userModal);
    loginService.renderValidator(error);
    if (error.isError) {
      return;
    }
    const response = loginService.loginUser(userModal);
    if (response.status === "success") {
      alert(response.messge);
    } else {
      if (response.status === "fail") {
        alert(response.messge);
      }
    }
  }
}
export default LoginEvent;
