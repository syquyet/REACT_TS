import { getAllItems, insertItem } from "../../../utils/DBUtil";

class LoginRepository {
  getUsers() {
    const response = getAllItems("accounts");
    return response;
  }
  createUser(userEntity: any) {
    const id = insertItem("userLogin", userEntity);
    return id;
  }
}
export default LoginRepository;