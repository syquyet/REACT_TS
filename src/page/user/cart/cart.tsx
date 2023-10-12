 import "./cart.css"
 export default function Cart() {
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
              <tr>
                <td className="cart-table-content">
                  <p>×</p>
                  <img
                    src="/image/anh sản phẩm 8.jpg"
                    alt=""
                    width="100px"
                    height="100px"
                  />
                  <div>
                    <h6>Tên sản phẩm</h6>
                    <p>sze: S</p>
                  </div>
                </td>
                <td>100,000đ</td>
                <td>
                  <div className="btn-quantity">
                    <button className="btn-quantity-reduce">-</button>
                    <span>0</span>
                    <button className="btn-quantity-add">+</button>
                  </div>
                </td>
                <td>100,000đ</td>
              </tr>
              <tr>
                <td className="cart-table-content">
                  <p>×</p>
                  <img
                    src="/image/anh sản phẩm 8.jpg"
                    alt=""
                    width="100px"
                    height="100px"
                  />
                  <div>
                    <h6>Tên sản phẩm</h6>
                    <p>sze: S</p>
                  </div>
                </td>
                <td>100,000đ</td>
                <td>
                  <div className="btn-quantity">
                    <button className="btn-quantity-reduce">-</button>
                    <span>0</span>
                    <button className="btn-quantity-add">+</button>
                  </div>
                </td>
                <td>100,000đ</td>
              </tr>
            </tbody>
          </table>
          <button className="back-product">Tiếp tục xem sản phẩm</button>
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
                <td>100,000đ</td>
              </tr>
              <tr>
                <td>Tổng</td>
                <td>100,000đ</td>
              </tr>
            </tbody>
          </table>
          <button className="payment-now">TIẾN HÀNH THANH TOÁN</button>
        </section>
      </div>
    </main>
  );
}
