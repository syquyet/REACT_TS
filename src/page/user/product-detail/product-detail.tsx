import { useParams } from "react-router-dom";
import "./product-detail.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";
import { useState } from "react";
export default function ProductDetail() {
  // lấy id trên url và lọc dữ liệu để lấy sản phẩm
  const { id } = useParams();
  const product = useSelector((state: RootState) => state.products.data);
  const [quantity, setQuantity] = useState<number>(1);
  const dataProduct = product.find((item) => item.id.toString() === id);
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
              <>
                <button>{size}</button>
              </>
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
            <button className="btn-add-product_detail">
              <i className="fas fa-shopping-cart"></i>
              Thêm vào giỏ hàng
            </button>
            <button className="product_detail-btn-buynow">
              {" "}
              <i className="fas fa-credit-card"></i> Mua ngay
            </button>
            <button className="product_detail-btn-delete">
              <i className="fas fa-trash"></i>xóa
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
