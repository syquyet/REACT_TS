import "./sidebar.css";
export default function SidebarAdmin() {
  return (
    <div className="sidenav-admin">
      <div className="sidenav">
        <div className="sidenav-avatar">
          <img src="./banner_4.jpg" alt="" />
          <p>Role: Admin</p>
          <p>Nguyễn VĂn A</p>
          <button className="btn btn-primary">Edit</button>
          <hr />
        </div>
        <div className="sidenav-content">
          <div>
            <i className="fa-solid fa-list" />
            <a href="">Dashboard</a>
          </div>
          <div>
            <i className="fa-solid fa-users" />
            <a href="">Customer</a>
          </div>
          <div>
            <i className="fa-solid fa-shirt" />
            <a href="">Product</a>
          </div>
          <div>
            <i className="fa-solid fa-file-invoice" />
            <a href="">Order</a>
          </div>
          <div>
            <i className="fa-solid fa-comments" />

            <a href="">Reviews</a>
          </div>
          <div>
          <i className="fa-solid fa-award" />

            <a href="">Vouchers</a>
          </div>
          <div>
            <i className="fa-solid fa-right-from-bracket" />
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </div>
  );
}
