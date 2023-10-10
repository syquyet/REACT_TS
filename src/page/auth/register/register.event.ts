import { navigation } from "../../../utils/method";
import { RegisterService } from "./register.service";

export default class RegisterEvent {
  onRegisterEvent(data:object) {
    const registerService = new RegisterService();
    const error = registerService.validator(data);
    registerService.renderValidator(error);
    if (error.isError) {
      return;
    }
    const response = registerService.register(data);
    if (response.status === "fail") {
      alert("email đã tồn tại vui lòng nhập lại email để đăng ký");
    } else if (response.status === "success") {
      alert("Đăng ký thành công!!!!!!");
      navigation("/auth/login");
    }
  }
}
