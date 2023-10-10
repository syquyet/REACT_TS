import { LoginRepository } from "./login.reponsitory";


export class LoginService {
  login(userModal:object) {
    const loginRepository = new LoginRepository();
    const response = loginRepository.loginUser(userModal);
    return response;
  }
  validator(userModal:any) {
    const error = {
      isError: false,
      email: "",
      password: "",
    };
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userModal.email.match(validRegex)) {
      error.isError = true;
      error.email = "*Nhập đúng định dạng email";
    }
    if (!userModal.password) {
      error.isError = true;
      error.password = "*Mật khẩu không được để trống";
    }

    return error;
  }
  renderValidator(error: any) {
    console.log(555, error);
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
      for (const key in error) {
        console.log(666, key);
        if (key === element.id.slice(6)) {
          element.textContent = error[key];
        }
      }
    });
  }
}
