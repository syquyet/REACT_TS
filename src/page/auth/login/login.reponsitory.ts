import axios from "axios";
import { getAllItems, insertItem } from "../../../utils/DBUtil";

class LoginRepository {
  async   getUsers() {
    const response = await axios.get(" http://localhost:3000/users") 
    console.log(1111,response.data);
    return response.data 
    
    
  }
  createUser(userEntity: any) {
    const id = insertItem("userLogin", userEntity);
    return id;
  }
}
export default LoginRepository;