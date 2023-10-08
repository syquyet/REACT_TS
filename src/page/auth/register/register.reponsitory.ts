import {
    getDataFormLocalStorage,
    setDataFormLocalStorage,
  } from "../../../utils/method";
  
  export class RegisterRepository {
    registerUser(userModal:any) {
      const accountsDB = getDataFormLocalStorage("accounts");
      for (const user of accountsDB) {
        if (user.email === userModal.email) {
          return {
            status: "fail",
            data: null,
            messge: "Email đã tồn tại",
          };
        }
      }
      delete userModal.repeatPassword;
      accountsDB.push(userModal);
      setDataFormLocalStorage("accounts", accountsDB);
      return {
        status: "success",
        data: null,
        messge: "Đăng kí thành công",
      };
    }
  }