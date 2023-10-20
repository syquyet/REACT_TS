import { any } from "prop-types";
import { ProductEntity } from "../../../entities/product.entity";
import { useState } from "react";

interface Props {
  data: ProductEntity | undefined;
}
export default function ModalProductDetail(props: Props) {
  const [quantity, setQuantity] = useState<number>(1);

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
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="exampleModalLabel">
              Chi tiết sản phẩm
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
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
                        src="../../banner_4.jpg"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="../../banner_4.jpg"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="../../banner_4.jpg"
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
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </section>
              <section className="product_detail-content">
                <h4>{props.data?.name}</h4>
                <h5>Giá: {props.data?.price.toLocaleString()}đ</h5>
                <p>Chọn size:</p>
                <div className="btn-size">
                  {props.data?.size.map((size) => (
                    <button>{size}</button>
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
                  <button
                    className="btn-quantity-add"
                    onClick={handleQuantityAdd}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button className="btn-add-product_detail">
                    Thêm vào giỏ hàng
                  </button>
                  <button className="product_detail-btn-buynow">
                    Mua ngay
                  </button>
                  <button className="product_detail-btn-delete">xóa</button>
                </div>
                <hr />
                <h6>MÔ TẢ SẢN PHẨM:</h6>
                Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản
                phẩm thời trang cho nữ. Váy chân dài cũng mang đến một hình ảnh
                chỉnh chu, sang trọng và nữ tính quyến rũ.
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
