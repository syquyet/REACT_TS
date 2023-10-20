import React, { useEffect, useState } from "react";
import "./product.css";
import "../product-detail/product-detail.css";
import { products } from "../../../model/data";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BannerProduct from "./bannerProduct";
import ModalProductDetail from "../modal.util/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";
import { getProduct } from "../../../redux/slice/productSlice";
import { ProductEntity } from "../../../entities/product.entity";
export default function Product() {
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState<any[]>([]);
  const [dataView, setDataView] = useState<ProductEntity>();

  const product = useSelector((state: RootState) => state.products.data);

  useEffect(() => {
    getData("http://localhost:3000/products", setDataProduct);
  }, []);
  // lấy dữ liệu
  const getData = async (url: string, setData: Function) => {
    const response = await axios.get(url);
    setData(response.data);
    dispatch(getProduct(response.data));
  };

  // truyen id product lên url
  const navigate = useNavigate();
  const handleBuyNow = (id: number) => {
    navigate(`/user/product-detail/${id}`);
  };
  // xem chi tiết sản phẩm
  const handleView = (id: string) => {
    const dataProductView = product.find((item) => item.id.toString() === id);
    setDataView(dataProductView);
  };
  return (
    <>
      <BannerProduct />

      <h1>Bộ sưu tập</h1>
      <div className="seach-product">
        <input
          type="text"
          name="tim kiếm"
          id="input-seach"
          placeholder="Tìm sản phẩm"
        />
        <button>Seach</button>
      </div>
      <hr />
      <section className="album-seach">
        <section className="filter-product">
          <h2>
            SẢN PHẨM <span>({product.length})</span>
          </h2>
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
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-2"
                defaultValue="200000,400000"
                data-filter="price"
              />
              <span>200,000-400,000VND</span>
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-3"
                defaultValue="400000,600000"
                data-filter="price"
              />
              <span>400,000-600,000VND</span>
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-4"
                defaultValue="600000,800000"
                data-filter="price"
              />
              <span>600,000-800,000VND</span>
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-5"
                defaultValue="800000,1000000"
                data-filter="price"
              />
              <span>800,000-1,000,000VND</span>
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
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-size-2"
                defaultValue="M"
                data-filter="size"
              />
              <span>M</span>
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-size-3"
                defaultValue="L"
                data-filter="size"
              />
              <span>L</span>
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-size-4"
                defaultValue="XL"
                data-filter="size"
              />
              <span>XL</span>
            </div>
            <div className="filter-group">
              <input
                type="checkbox"
                id="filter-size-5"
                defaultValue="XXL"
                data-filter="size"
              />
              <span>XXL</span>
            </div>
          </div>
        </section>
        <section className="album-product">
          {product.map((product, index) => (
            <div className="card">
              <div className="card-img">
                <img
                  src="../../banner_4.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="btn-img">
                  <i className="fa-solid fa-cart-shopping" />
                  <span
                    className="buy-now"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    Mua hàng
                  </span>
                  <i className="fa-regular fa-eye" />
                  <span
                    className="view-now"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleView(`${product.id}`)}
                  >
                    xem nhanh
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">size: {product.size.toString()}</p>
                <p className="card-text">
                  GIÁ:{product.price.toLocaleString()}VND
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
      {/* modal produc-detail */}
      <ModalProductDetail data={dataView} />
    </>
  );
}
