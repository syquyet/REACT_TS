import React from 'react';
import Login from "../page/auth/login/login";
import Register from "../page/auth/register/register";
import Home from "../page/home";
import Product from "../page/user/product/product";
import { I_Routes } from "../type/type";
import Cart from '../page/user/cart/cart';
import ProductDetail from '../page/user/product-detail/product-detail';


export const routes: I_Routes[] = [
  {
    titles: "Home",
    path: "/",
    element:<Home/>,
  },
  {
    titles: "Product",
    path: "/user/product",
    element: <Product/>,
  },
  {
    titles: "Product-detail",
    path: "/user/product-detail/:id",
    element: <ProductDetail/>
  },
  {
    titles: "Register",
    path: "/auth/register",
    element: <Register/>,
  },
  {
    titles: "login",
    path: "/auth/login",
    element: <Login/>
  },
  {
    titles: "cart",
    path: "/user/cart",
    element: <Cart/>
  },
 
];
