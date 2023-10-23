import axios from "axios";
import { getAllItems, insertItem } from "../../../utils/DBUtil";

class LoginRepository {
  async   getUsers() {
    const response = await axios.get(" http://localhost:3000/users") 
    
    return response.data 
    
    
  }
  createUser(userEntity: any) {
    localStorage.setItem("userLogin", JSON.stringify(userEntity));
  }
}
export default LoginRepository;