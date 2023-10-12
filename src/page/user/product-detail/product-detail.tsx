import "./product-detail.css"
export default function ProductDetail() {
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
          <h4>Tên sản phẩm</h4>
          <h5>Giá: 100,000VND</h5>
          <p>Chọn size:</p>
          <div className="btn-size">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
          <p>Chọn số lượng:</p>
          <div className="btn-quantity">
            <button className="btn-quantity-reduce">-</button>
            <span>1</span>
            <button className="btn-quantity-add">+</button>
          </div>
          <div>
            <button className="btn-add-product_detail">
              Thêm vào giỏ hàng
            </button>
            <button className="product_detail-btn-buynow">Mua ngay</button>
            <button className="product_detail-btn-delete">xóa</button>
          </div>
          <h6>Mô tả sản phẩm</h6>
          <hr />
          Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn sản phẩm
          thời trang cho nữ. Váy chân dài cũng mang đến một hình ảnh chỉnh chu,
          sang trọng và nữ tính quyến rũ.
        </section>
      </section>
    </main>
  );
}
