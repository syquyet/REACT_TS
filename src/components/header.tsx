import "./header.css";
export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="logo-content">
              <img src="/assets/image/logo.jpg" alt="" />
              <big>SUONGG STORE</big>
            </li>
          </ul>
          <ul className="nav-container">
            <li>
              <a href="/index.html">TRANG CHỦ</a>
            </li>
            <li>
              <a href="/product.html"> SẢN PHẨM </a>
            </li>
            <li>
              <a href="">BỘ SƯU TẬP</a>
            </li>
            <li>
              <a href="" style={{ color: "rgb(191, 88, 88)" }}>
                KHUYẾN MÃI
              </a>
            </li>
          </ul>
          <ul id="nav-right">
            <li>
              <button>Đăng ký</button>
            </li>
            <li>
              <button>Đăng nhập</button>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
