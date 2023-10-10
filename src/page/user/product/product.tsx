import Home from "../../home";
import React from "react";
import "./product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "../product-detail/product-detail";
export default function Product() {
  return (
    <>
      <main>
        <section className="banner-product">
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
                <img src="./baner-1.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./banner_4.jpg" className="d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./banner_3.jpg" className="d-block" alt="..." />
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
        <div className="seach-product">
          <input
            type="text"
            name="tim kiếm"
            id="input-seach"
            placeholder="Tìm sản phẩm"
          />
          <button>Seach</button>
        </div>
        <h1>Bộ sưu tập</h1>
        <hr />
        <section className="album-seach">
          <section className="filter-product">
            <h2>SẢN PHẨM <span>(0)</span></h2>
            <h4>Bộ lọc</h4>
            <hr />
            <div className="custom-select" style={{ width: 200 }}>
              <p>
                <b>Giá sản phẩm:</b>
              </p>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-1"
                  defaultValue="0,200000"
                  data-filter="price"
                />
                <span>0-200,000VND</span>
                {/* <label htmlFor="">0đ-200,000đ</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-2"
                  defaultValue="200000,400000"
                  data-filter="price"
                />
                <span>200,000-400,000VND</span>
                {/* <label htmlFor="">200,000đ-400,000đ</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-3"
                  defaultValue="400000,600000"
                  data-filter="price"
                />
                <span>400,000-600,000VND</span>
                {/* <label htmlFor="">400,000đ-600,000đ</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-4"
                  defaultValue="600000,800000"
                  data-filter="price"
                />
                <span>600,000-800,000VND</span>
                {/* <label htmlFor="">600,000đ-800,000đ</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-5"
                  defaultValue="800000,1000000"
                  data-filter="price"
                />
                <span>800,000-1,000,000VND</span>
                {/* <label htmlFor="">800,000đ-1,000,000đ</label> */}
              </div>
            </div>
            <div className="select-size">
              <p>
                <b>Kích thước sản phẩm:</b>
              </p>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-size-1"
                  defaultValue="S"
                  data-filter="size"
                />
                <span>S</span>
                {/* <label htmlFor="">S</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-size-2"
                  defaultValue="M"
                  data-filter="size"
                />
                <span>M</span>

                {/* <label htmlFor="">M</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-size-3"
                  defaultValue="L"
                  data-filter="size"
                />
                <span>L</span>

                {/* <label htmlFor="">L</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-size-4"
                  defaultValue="XL"
                  data-filter="size"
                />
                <span>XL</span>

                {/* <label htmlFor="">XL</label> */}
              </div>
              <div className="filter-group">
                <input
                  type="checkbox"
                  id="filter-size-5"
                  defaultValue="XXL"
                  data-filter="size"
                />
                <span>XXL</span>

                {/* <label htmlFor="">XXL</label> */}
              </div>
            </div>
          </section>
          <section className="album-product">
            <div className="container text-center">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src="./banner_4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="btn-img">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="buy-now">Mua hàng</span>
                        <i className="fa-regular fa-eye" />
                        <span
                          className="view-now"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          xem nhanh
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Tên sản phẩm</h5>
                      <p className="card-text">size: X,M,L,XL,XXL</p>
                      <p className="card-text">Gía: 1,000,000 VND</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src="./banner_4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="btn-img">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="buy-now">Mua hàng</span>
                        <i className="fa-regular fa-eye" />
                        <span
                          className="view-now"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          xem nhanh
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Tên sản phẩm</h5>
                      <p className="card-text">size: X,M,L,XL,XXL</p>
                      <p className="card-text">Gía: 1,000,000 VND</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src="./banner_4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="btn-img">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="buy-now">Mua hàng</span>
                        <i className="fa-regular fa-eye" />
                        <span
                          className="view-now"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          xem nhanh
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Tên sản phẩm</h5>
                      <p className="card-text">size: X,M,L,XL,XXL</p>
                      <p className="card-text">Gía: 1,000,000 VND</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src="./banner_4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="btn-img">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="buy-now">Mua hàng</span>
                        <i className="fa-regular fa-eye" />
                        <span
                          className="view-now"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          xem nhanh
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Tên sản phẩm</h5>
                      <p className="card-text">size: X,M,L,XL,XXL</p>
                      <p className="card-text">Gía: 1,000,000 VND</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src="./banner_4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="btn-img">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="buy-now">Mua hàng</span>
                        <i className="fa-regular fa-eye" />
                        <span
                          className="view-now"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          xem nhanh
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Tên sản phẩm</h5>
                      <p className="card-text">size: X,M,L,XL,XXL</p>
                      <p className="card-text">Gía: 1,000,000 VND</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-xl-2">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src="./banner_4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="btn-img">
                        <i className="fa-solid fa-cart-shopping" />
                        <span className="buy-now">Mua hàng</span>
                        <i className="fa-regular fa-eye" />
                        <span
                          className="view-now"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          xem nhanh
                        </span>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Tên sản phẩm</h5>
                      <p className="card-text">size: X,M,L,XL,XXL</p>
                      <p className="card-text">Gía: 1,000,000 VND</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* modal produc-detail */}
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
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Chi tiết sản phẩm
                </h1>
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
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                    >
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
                            src="/image/anh sản phẩm 8.jpg"
                            className="d-block"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/image/anh sản phẩm 7.jpg"
                            className="d-block"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="/image/anh sản phẩm 5.jpg"
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
                    <h4>Tên sản phẩm</h4>
                    <h5>Giá: 100,000đ</h5>
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
                      <button className="product_detail-btn-buynow">
                        Mua ngay
                      </button>
                      <button className="product_detail-btn-delete">xóa</button>
                    </div>
                    <h6>Mô tả sản phẩm</h6>
                    <hr />
                    Váy chân dài luôn có sức hút và vị trí riêng trong vô vàn
                    sản phẩm thời trang cho nữ. Váy chân dài cũng mang đến một
                    hình ảnh chỉnh chu, sang trọng và nữ tính quyến rũ.
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
        <ProductDetail/>
      </main>
    </>
  );
}
