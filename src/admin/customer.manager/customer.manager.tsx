import SidebarAdmin from "../sidebar.admin/sidebar";
import "./customer.manager.css"
export default function CustomerManager() {
  return (
    <div className="customer-container">
      <SidebarAdmin />
      <div className="manage-user">
        <h5>QUẢN LÝ NGƯỜI DÙNG</h5>
        <div className="manage_users-input">
          <input
            id="manage-user-seach"
            type="text"
            placeholder="Nhập từ khóa"
          />
          <button>Tìm kiếm</button>
        </div>
        <table className="list-users">
          <tbody>
            <tr>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
            <tr>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Khách hàng</td>
              <td>Active</td>
              <td>
                <button>Sửa</button>
              </td>
            </tr>
            <tr>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Khách hàng</td>
              <td>Active</td>
              <td>
                <button>Sửa</button>
              </td>
            </tr>
            <tr>
              <td>Nguyễn Văn A</td>
              <td>nguyenvana@gmail.com</td>
              <td>Khách hàng</td>
              <td>Active</td>
              <td>
                <button>Sửa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
