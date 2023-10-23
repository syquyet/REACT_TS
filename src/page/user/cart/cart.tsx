import { useEffect, useState } from "react";
import "./cart.css";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";
import { navigation } from "../../../utils/Navigation";

import { loginSuccess } from "../../../redux/slice/authSlice";
import { ProductEntity } from "../../../entities/product.entity";
export default function Cart() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState<number>(0);

  const userLogin = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    let totalMoney = 0;
    userLogin?.cart?.forEach((cart) => {
      totalMoney += cart.price * cart.quantity;
    });
    setTotal(totalMoney);
  }, [userLogin?.cart]);
  //  xóa sản phẩm trong cart
  const handleDeleteCart = async (id: number) => {
    let newCart;
    if (userLogin?.cart) {
      newCart = [...userLogin?.cart];
    }
    const cartProduct = newCart?.filter((product) => product.id !== id);

    const res = await axios.patch(
      `http://localhost:3000/users/${userLogin?.id}`,
      {
        cart: cartProduct,
      }
    );
    dispatch(loginSuccess(res.data));
  };
  // tăng số lượng sản phẩm trong cart
  const handleAddProduct = async (index: number) => {
    const res = await axios.get(`http://localhost:3000/users/${userLogin?.id}`);
    console.log(11111, res.data.cart);
    let newCart = [...res.data.cart];
    newCart[index].quantity++;
    const res2 = await axios.patch(
      `http://localhost:3000/users/${userLogin?.id}`,
      {
        cart: newCart,
      }
    );
    dispatch(loginSuccess(res2.data));
  };
  //  giảm số lượng snr phẩm trong cart
  const handleReduceProduct = async (index: number) => {
    const res = await axios.get(`http://localhost:3000/users/${userLogin?.id}`);
    console.log(11111, res.data.cart);
    let newCart = [...res.data.cart];
    newCart[index].quantity--;
    if (newCart[index].quantity <= 1) {
      newCart[index].quantity = 1;
    }
    const res2 = await axios.patch(
      `http://localhost:3000/users/${userLogin?.id}`,
      {
        cart: newCart,
      }
    );
    dispatch(loginSuccess(res2.data));
  };
  //thanh toán
  const handlePayment = () => {
    navigation("/user/pay");
  };
  const handleBackProduct = () => {
    navigation("/");
  };

  return (
    <main>
      <div className="cart-container">
        <section className="cart-list_product">
          <table className="cart-list-product">
            <tbody>
              <tr>
                <th>SẢN PHẨM</th>
                <th>GIÁ</th>
                <th>SỐ LƯỢNG</th>
                <th>TẠM TÍNH</th>
              </tr>
              {userLogin?.cart?.map((item, index) => (
                <tr key={index}>
                  <td className="cart-table-content">
                    <p onClick={() => handleDeleteCart(item.id)}>×</p>
                    <img
                      src="../banner_4.jpg"
                      alt=""
                      width="100px"
                      height="100px"
                    />
                    <div>
                      <h6>{item.name}</h6>
                      <p>sze: {item.size}</p>
                    </div>
                  </td>
                  <td>{item.price.toLocaleString()}VND</td>
                  <td>
                    <div className="btn-quantity">
                      <button
                        className="btn-quantity-reduce"
                        onClick={() => handleReduceProduct(index)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn-quantity-add"
                        onClick={() => handleAddProduct(index)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>{(item.quantity * item.price).toLocaleString()}VND</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="back-product" onClick={handleBackProduct}>
            Tiếp tục xem sản phẩm
          </button>
          <button className="back-product">Lịch sử mua hàng</button>
        </section>
        <section className="payment">
          <table>
            <tbody>
              <tr>
                <th>CỘNG GIỎ HÀNG</th>
              </tr>
              <tr>
                <td>Tạm tính</td>
                <td>{total.toLocaleString()}VND</td>
              </tr>
              <tr>
                <td>Tổng</td>
                <td>{total.toLocaleString()}VND</td>
              </tr>
            </tbody>
          </table>
          <button className="payment-now" onClick={handlePayment}>
            TIẾN HÀNH THANH TOÁN
          </button>
        </section>
      </div>
    </main>
  );
}
