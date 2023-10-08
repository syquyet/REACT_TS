import Register from "../page/auth/register/register";
import Home from "../page/home";
import Product from "../page/user/product/product";
import { I_Routes } from "../type/type";

export const routes: I_Routes[] = [
  {
    titles: "Home",
    path: "/",
    element: <Home />,
  },
  {
    titles: "Product",
    path: "/user/product",
    element: <Product/>,
  },
  {
    titles: "Register",
    path: "/auth/register",
    element: <Register/>,
  },
];
