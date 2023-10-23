import { useEffect, useState } from "react";
import "./cart.css";
import { ProductEntity } from "../../../entities/product.entity";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";
import { navigation } from "../../../utils/Navigation";
export default function Cart() {
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
  const handleDeleteCart = (index: number) => {};
  //
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
                    <p>×</p>
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
                      <button className="btn-quantity-reduce">-</button>
                      <span>{item.quantity}</span>
                      <button className="btn-quantity-add">+</button>
                    </div>
                  </td>
                  <td>{(item.quantity * item.price).toLocaleString()}VND</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="back-product" onClick={handleBackProduct}>Tiếp tục xem sản phẩm</button>
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
