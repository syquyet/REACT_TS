
import "./order.manager.css"
import SidebarAdmin from "../sidebar.admin/sidebar";

export default function OrderManager() {
  return (
    <div className="order-container">
      <SidebarAdmin />
      <div className="manager-order">
        <h5>QUẢN LÝ ORDER</h5>
        <div className="manage_order-input">
          <input
            id="manage-order-seach"
            type="text"
            placeholder="Nhập từ khóa"
          />
          <button>Tìm kiếm</button>
        </div>
        <table className="list-order">
          <tbody>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Ngày</th>
              <th>Tên order</th>
              <th>Tổng giá</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
            <tr>
              <td>1</td>
              <td>ORDER_001</td>
              <td>05/09/2023</td>
              <td>user_01</td>
              <td>100,000đ</td>
              <td>Đã đặt hàng</td>
              <td>
                <button className="btn-detail">chi tiết</button>
                <button className="btn-edit">Sửa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>ORDER_001</td>
              <td>05/09/2023</td>
              <td>user_01</td>
              <td>100,000đ</td>
              <td>Đã đặt hàng</td>
              <td>
                <button className="btn-detail">chi tiết</button>
                <button className="btn-edit">Sửa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>ORDER_001</td>
              <td>05/09/2023</td>
              <td>user_01</td>
              <td>100,000đ</td>
              <td>Đã đặt hàng</td>
              <td>
                <button className="btn-detail">chi tiết</button>
                <button className="btn-edit">Sửa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
