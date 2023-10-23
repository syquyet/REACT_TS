import { useParams } from "react-router-dom";
import "./product-detail.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";
import { useEffect, useState } from "react";

import axios from "axios";
import { UserEntity } from "../../../entities/user.entity";
import { getProductDetail } from "../../../redux/slice/productSlice";
import { navigation } from "../../../utils/Navigation";
export default function ProductDetail() {
  // lấy id trên url và lọc dữ liệu để lấy sản phẩm
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState<UserEntity>();
  const dataProduct = useSelector(
    (state: RootState) => state.products.productDetail
  );
  // lưu lại size và số lượng
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>("");
  // lấy userLogin từ redux
  const userLogin = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    const fetchdata = async () => {
      const reponse = await axios.get(`http://localhost:3000/products/${id}`);
      dispatch(getProductDetail(reponse.data));
    };
    fetchdata();
  }, [id]);
  useEffect(() => {
    const fetchdata = async () => {
      if (userLogin) {
        const reponse = await axios.get(
          `http://localhost:3000/users/${userLogin?.id}`
        );
        setDataUser(reponse.data);
      }
    };
    fetchdata();
  }, []);

  // tăng số lượng
  const handleQuantityAdd = () => {
    setQuantity(quantity + 1);
  };
  // giame số lượng
  const handleQuantityReduce = () => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };

  const handleAddToCart = async () => {
    if (!userLogin?.email) {
      alert("Đăng nhập để mua hàng");
      navigation("/auth/login");
      return;
    }
    if (size === "") {
      alert(" Vui lòng chọn size sản phẩm!!!");
      return;
    }

    if (dataUser) {
      let cartUser: any = [...dataUser.cart];
      let found = false;

      cartUser.forEach((item: any) => {
        if (item.id === dataProduct?.id && item.size === size) {
          item.quantity += quantity;
          found = true;
        }
      });

      if (!found) {
        cartUser.push({ ...dataProduct, quantity, size });
      }

      try {
        const reponse = await axios.put(
          `http://localhost:3000/users/${userLogin?.id}`,
          { ...dataUser, cart: cartUser }
        );
        console.log(reponse);
      } catch (error) {
        console.log(error);
      }
    }
    navigation("/user/cart");
  };
  const handleSetData = () => {
    setQuantity(1);
    setSize("");
  };

  return (
    <main>
      <section className="product_detail-container">
        <section className="banner-product product_detail-banner">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../../../banner_4.jpg"
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../../banner_4.jpg"
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../../banner_4.jpg"
                  className="d-block"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section className="product_detail-content">
          <h4>{dataProduct?.name}</h4>
          <h5>Giá: {dataProduct?.price.toLocaleString()}VND</h5>
          <p>Chọn size:</p>

          <div className="btn-size">
            {dataProduct?.size.map((size, index) => (
              <button onClick={() => setSize(size)} key={index}>
                {size}
              </button>
            ))}
          </div>

          <p>Chọn số lượng:</p>
          <div className="btn-quantity">
            <button
              className="btn-quantity-reduce"
              onClick={handleQuantityReduce}
            >
              -
            </button>
            <span>{quantity}</span>
            <button className="btn-quantity-add" onClick={handleQuantityAdd}>
              +
            </button>
          </div>
          <div>
            <button
              className="btn-add-product_detail"
              onClick={() => handleAddToCart()}
            >
              Thêm vào giỏ hàng
            </button>
            <button className="product_detail-btn-buynow">Mua ngay</button>
            <button
              className="product_detail-btn-delete"
              onClick={handleSetData}
            >
              xóa
            </button>
          </div>
          <hr />
          <h6>MÔ TẢ SẢN PHẨM:</h6>
          {dataProduct?.describe}
        </section>
      </section>
    </main>
  );
}
