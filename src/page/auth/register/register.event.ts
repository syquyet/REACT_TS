import { navigation } from "../../../utils/Navigation";
import RegisterService from "./register.service";
class RegisterEvent {
async  onRegister(userModal: any) {
    const registerService = new RegisterService();
    const error = registerService.validator(userModal);
    registerService.renderValidator(error);
    if (error.isError) {
      return;
    }
    const response = await registerService.registUser(userModal);
    if (response.status === "fail") {
      alert(response.message);
    } else if (response.status === "success") {
      alert(response.message);
      navigation("/auth/login");
    }
  }
}
export default RegisterEvent;
