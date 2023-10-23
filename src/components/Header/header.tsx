import { useSelector } from "react-redux";
import "./header.css";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store/configureStore";
import { navigation } from "../../utils/Navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [quantityProduct, setQuantityProduct] = useState<number>(0);
  const userLogin = useSelector((state: RootState) => state.auth.user);
  //  đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    navigation("/");
  };
  useEffect(() => {
    let quantity = 0;
    userLogin?.cart?.forEach((element) => {
      quantity += element.quantity;
    });
    setQuantityProduct(quantity);
  }, [userLogin?.cart]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="logo-content">
              <img src="./banner_4.jpg" alt="" />
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
            <li>
              {userLogin ? (
                userLogin.name
              ) : (
                <Link to="/auth/register">
                  <button>Đăng ký</button>
                </Link>
              )}
            </li>

            <li>
              {userLogin ? (
                <button onClick={handleLogout}>Đăng xuất</button>
              ) : (
                <Link to="/auth/login">
                  <button>Đăng nhập</button>
                </Link>
              )}
            </li>

            <Link to="/user/cart">
              <li>
                <div className="cart-number">
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="number-product">{quantityProduct}</span>
                </div>
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
