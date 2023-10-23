import axios from "axios";
import { UserEntity } from "../entities/user.entity";
import { UserLogin } from "../redux/slice/authSlice";

export default async function Auth() {
    const auth = localStorage.getItem('userLogin');
    if (auth) {
      const userLocal = JSON.parse(auth);
      const users = await axios.get("http://localhost:3000/users")
      const user = users.data.find((user:UserEntity) => user.email === userLocal.email);
      const userLogin: UserLogin= {
        id: user.id,
        name: user.name,
        email: user.email,
        cart: user.cart,
      };
      return userLogin;
    }
  }