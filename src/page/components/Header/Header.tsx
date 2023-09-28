import { Component, ReactNode } from "react";
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="logo-content">
              <img src="" alt="" />
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
              <a href="">
                <i className="fa-solid fa-cart-shopping" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
