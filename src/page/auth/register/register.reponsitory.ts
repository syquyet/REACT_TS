
import { getAllItems, insertItem } from "../../../utils/DBUtil";
import axios from "axios";
export class RegisterRepository {
  async   getUsers() {
    const response = await axios.get(" http://localhost:3000/users") 
   return response.data 
    
    
  }
  createUser(userEntity: any) {
    const id = axios.post("http://localhost:3000/users", userEntity);
    return id;
  }
}
