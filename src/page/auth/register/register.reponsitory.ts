import { getAllItems, insertItem } from "../../../utils/DBUtil";

export class RegisterRepository {
  getUsers() {
    const response = getAllItems("accounts");
    return response;
  }
  createUser(userEntity: any) {
    const id = insertItem("accounts", userEntity);
    return id;
  }
}
