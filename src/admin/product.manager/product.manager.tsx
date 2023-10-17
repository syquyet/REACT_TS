import SidebarAdmin from "../sidebar.admin/sidebar";
import "./product.manager.css";
export default function ProductManager() {
  return (
    <>
      <div className="product-container">
        <SidebarAdmin />

        <div className="manage-product">
          <h5>QUẢN LÝ SẢN PHẨM</h5>
          <div className="manage-product-input">
            <input
              id="manage-product-seach"
              type="text"
              placeholder="Nhập từ khóa"
            />
            <button>Tìm kiếm</button>
            <button className="btn-add">Thêm</button>
          </div>
          <table className="list-product">
            <tbody>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Size</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>SP_01</td>
                <td>Váy chân dài</td>
                <td>S</td>
                <td>100,000đ</td>
                <td>20</td>
                <td>
                  <button className="btn-detail">chi tiết</button>
                  <button className="btn-edit">Sửa</button>
                  <button className="btn-delete">xóa</button>
                </td>
              </tr>
              <tr>
                <td>SP_01</td>
                <td>Váy chân dài</td>
                <td>S</td>
                <td>100,000đ</td>
                <td>20</td>
                <td>
                  <button className="btn-detail">chi tiết</button>
                  <button className="btn-edit">Sửa</button>
                  <button className="btn-delete">xóa</button>
                </td>
              </tr>
              <tr>
                <td>SP_01</td>
                <td>Váy chân dài</td>
                <td>S</td>
                <td>100,000đ</td>
                <td>20</td>
                <td>
                  <button className="btn-detail">chi tiết</button>
                  <button className="btn-edit">Sửa</button>
                  <button className="btn-delete">xóa</button>
                </td>
              </tr>
              <tr>
                <td>SP_01</td>
                <td>Váy chân dài</td>
                <td>S</td>
                <td>100,000đ</td>
                <td>20</td>
                <td>
                  <button className="btn-detail">chi tiết</button>
                  <button
                    className="btn-edit"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sửa
                  </button>
                  <button className="btn-delete">xóa</button>
                </td>
              </tr>
              <tr>
                <td>SP_01</td>
                <td>Váy chân dài</td>
                <td>S</td>
                <td>100,000đ</td>
                <td>20</td>
                <td>
                  <button className="btn-detail">chi tiết</button>
                  <button
                    className="btn-edit"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sửa
                  </button>
                  <button className="btn-delete">xóa</button>
                </td>
              </tr>
              <tr>
                <td>SP_01</td>
                <td>Váy chân dài</td>
                <td>S</td>
                <td>100,000đ</td>
                <td>20</td>
                <td>
                  <button className="btn-detail">chi tiết</button>
                  <button
                    className="btn-edit"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Sửa
                  </button>
                  <button className="btn-delete">xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="form-add-product">
                  <form>
                    <h2>Thông tin sản phẩm</h2>
                    <hr />
                    <label htmlFor="">Mã sản phẩm: </label>
                    <input id="input-id" type="text" />
                    <p />
                    <label htmlFor="">Tên sản phẩm:</label>
                    <input id="input-name" type="text" />
                    <p />
                    <label htmlFor="">Mô tả:</label>
                    <br />
                    <textarea id="input-describe" name="" defaultValue={""} />
                    <p />
                    <label htmlFor="">Size:</label>
                    <input id="input-size" type="text" />
                    <p />
                    <label htmlFor="">Đơn giá:</label>
                    <input id="input-price" type="number" />
                    <p />
                    <label htmlFor="">Số lượng:</label>
                    <input id="input-quantity" type="number" />
                    <p />
                    {/* <label for="">Hình ảnh:</label>
            <input type="file" />
            <p></p> */}
                    <div>
                      <button type="button">lưu</button>{" "}
                      <button className="btn-delete">Hủy</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
