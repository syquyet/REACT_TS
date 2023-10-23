import { useEffect, useState } from "react";
import "./pay.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";

export default function Pay() {
  const [total, setTotal] = useState<number>(0);

  const userLogin = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    let totalMoney = 0;
    userLogin?.cart?.forEach((cart) => {
      totalMoney += cart.price * cart.quantity;
    });
    setTotal(totalMoney);
  }, [userLogin?.cart]);
  return (
    <main>
      <div className="pay-container">
        <section className="pay-address">
          <h6>THÔNG TIN THANH TOÁN</h6>
          <p>Họ và tên:</p>
          <input id="pay-input-name" type="text" placeholder="Họ và tên" />
          <p>Số điện thoại:</p>
          <input
            id="pay-input-phone"
            type="number"
            placeholder="Số điện thoại"
          />
          <p>Email:</p>
          <input id="pay-input-email" type="email" placeholder="Email" />
          <div className="pay-address-city">
            <div>
              <p>Tỉnh/Thành phố</p>
              <input
                id="pay-input-adress1"
                type="text"
                placeholder="Tỉnh/Thành phố"
              />
            </div>
            <div>
              <p>Quận/Huyện</p>
              <input
                id="pay-input-adress2"
                type="text"
                placeholder="Quận/Huyện"
              />
            </div>
            <div>
              <p>Phường/Xã</p>
              <input
                id="pay-input-adress3"
                type="text"
                placeholder="Phường/Xã"
              />
            </div>
          </div>
          <p>Địa chỉ:</p>
          <input
            id="pay-input-adress4"
            type="text"
            placeholder="Ví dụ: Số 20, ngõ 90"
          />
          <h6>THÔNG TIN BỔ SUNG</h6>
          <p>Ghi chú đơn hàng(tùy chọn)</p>
          <textarea
            name=""
            id="pay-input-note"
            cols={30}
            rows={2}
            placeholder="ghí chú về đơn hàng, hay địa điiểm giao hàng chi tiết hơn"
            defaultValue={""}
          />
        </section>
        <section className="pay-product">
          <h6>ĐƠN HÀNG CỦA BẠN</h6>
          <table className="pay-product-list">
            <tbody>
              <tr>
                <th>SẢN PHẨM</th>
                <th>TẠM TÍNH</th>
              </tr>
              {userLogin?.cart?.map((item) => (
                <tr>
                  <td className="pay-table-content">
                    <img
                      src="../banner_4.jpg"
                      alt=""
                      width="100px"
                      height="100px"
                    />
                    <div>
                      x <span>{item.quantity}</span>
                    </div>
                    <div>
                      <h6>{item.name}</h6>
                      <p>sze: {item.size}</p>
                    </div>
                  </td>
                  <td>{(item.price*item.quantity).toLocaleString()}VND</td>
                </tr>
              ))}

              <tr className="sum-money">
                <td>TẠM TÍNH</td>
                <td>{total.toLocaleString()}VND</td>
              </tr>
              <tr>
                <td>TỔNG</td>
                <td>{total.toLocaleString()}VND</td>
              </tr>
            </tbody>
          </table>
          <div className="pay-product-btn">
            <button type="button">ĐẶT HÀNG</button>
          </div>
        </section>
      </div>
    </main>
  );
}
