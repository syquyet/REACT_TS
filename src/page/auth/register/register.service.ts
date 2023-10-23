import { UserEntity } from "../../../entities/user.entity";
import { IUser } from "../../../type/type";
import { RegisterRepository } from "./register.reponsitory";

class RegisterService {
 async registUser(userModal: any) {
    const entity:any= {
      email: userModal.email,
      name: userModal.fullname,
      phone: userModal.phone,
      password: userModal.password,
      address:"Đà Nẵng",
      created_at: new Date().toLocaleDateString(),
      role: "custumer",
      status: "activate",
      cart: [],
    };
    const registerRepository = new RegisterRepository();
    const accountsDB = await registerRepository.getUsers();
    const response = accountsDB.find((user:IUser) => user.email === userModal.email);
    if (!response) {
      registerRepository.createUser(entity);
      return {
        status: "success",
        message: "Đăng ký thành công",
      };
    } else {
      return {
        status: "fail",
        message: "Đăng ký không thành công",
      };
    }
  }
  validator(userModal: any) {
    const error = {
      isError: false,
      fullname: "",
      email: "",
      phone: "",
      password: "",
      repeatPassword: "",
    };
    if (!userModal.fullname) {
      error.isError = true;
      error.fullname = "*name không được để trống";
    }
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userModal.email.match(validRegex)) {
      error.isError = true;
      error.email = "*nhập đúng định dạng email";
    }
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(userModal.phone) == false) {
      error.isError = true;
      error.phone = "*Định dạng số đt sai, vui lòng nhập lại";
    }
    if (userModal.password.length < 8) {
      error.isError = true;
      error.password = "*mật khẩu 8 ký tự trở lên";
    }
    if (userModal.password !== userModal.repeatPassword) {
      error.isError = true;
      error.repeatPassword = "Mật khẩu không trùng";
    }
    return error;
  }
  // render error validation form
  renderValidator(error: any) {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((element) => {
      for (const key in error) {
        if (key == element.id.slice(6)) {
          element.textContent = error[key];
        }
      }
    });
  }
}
export default RegisterService;
