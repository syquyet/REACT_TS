import {
  getDataFormLocalStorage,
  setDataFormLocalStorage,
} from "../../../utils/method";

export class LoginRepository {
  loginUser(userModal: any) {
    const accouts = getDataFormLocalStorage("accounts");
    let user;
    for (const userDB of accouts) {
      if (userDB.email === userModal.email) {
        if (userDB.password === userModal.password) {
          user = { ...userModal };
          break;
        }
      }
    }
    if (user) {
      delete user.password;
      setDataFormLocalStorage("userLogin", user);
      return {
        status: "success",
        data: "",
        messge: "",
      };
    } else {
      return {
        status: "fail",
        data: "",
        messge: "",
      };
    }
  }
}
