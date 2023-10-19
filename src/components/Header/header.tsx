import "./header.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="logo-content">
              <img src="./logo_new.jpg" alt="" />
              <big> SƯƠNGG STORE</big>
            </li>
          </ul>
          <ul className="nav-container">
            <Link to="/">
              <li>
                <a href="">TRANG CHỦ</a>
              </li>
            </Link>
            <Link to="/user/product">
              <li>
                <a href=""> SẢN PHẨM </a>
              </li>
            </Link>
            <Link to="">
              <li>
                <a href="">BLOG THỜI TRANG</a>
              </li>
            </Link>

            <Link to="">
              <li>
                <a href="" style={{ color: "rgb(191, 88, 88)" }}>
                  KHUYẾN MÃI
                </a>
              </li>
            </Link>
          </ul>
          <ul id="nav-right">
            <Link to="/auth/register">
              <li>
                <button>Đăng ký</button>
              </li>
            </Link>

            <Link to="/auth/login">
              <li>
                <button>Đăng nhập</button>
              </li>
            </Link>

            <Link to="/user/cart">
              <li>
                <div className="cart-number">
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="number-product">0</span>
                </div>
              </li>
            </Link>
           
          </ul>
        </nav>
      </header>
    </>
  );
}
