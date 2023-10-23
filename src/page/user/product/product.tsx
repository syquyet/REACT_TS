import React, { useEffect, useState } from "react";
import "./product.css";
import "../product-detail/product-detail.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BannerProduct from "./bannerProduct";
import ModalProductDetail from "../modal.util/modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";
import { getProduct } from "../../../redux/slice/productSlice";
import { ProductEntity } from "../../../entities/product.entity";

const listInput = [
  {
    name: "radio",
    min: 0,
    max: 200000,
    type: "radio",
    dataFilter: "price1",
  },
  {
    name: "radio",
    min: 200000,
    max: 400000,
    type: "radio",
    dataFilter: "price2",
  },
  {
    name: "radio",
    min: 400000,
    max: 600000,
    type: "radio",
    dataFilter: "price3",
  },
  {
    name: "radio",
    min: 600000,
    max: 800000,
    type: "radio",
    dataFilter: "price4",
  },
  {
    name: "radio",
    min: 800000,
    max: 1000000,
    type: "radio",
    dataFilter: "price5",
  },
];

export default function Product() {
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState<any[]>([]);
  const [dataView, setDataView] = useState<ProductEntity>();
  const [searchTerm, setSearchTerm] = useState("");
  const product = useSelector((state: RootState) => state.products.data);
  useEffect(() => {
    const fetchdata = async () => {
      const reponse = await axios.get(`http://localhost:3000/products`);
      setDataProduct(reponse.data);
      dispatch(getProduct(reponse.data));
    };
    fetchdata();
  }, []);

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
  // tìm kiếm theo tên sản phẩm
  const handleSearch = () => {
    const filteredProducts = product.filter((item) =>
      removeUnicode(item.name).toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDataProduct(filteredProducts);
  };
  const handleFillter = (min: number, max: number) => {
    let dataFillter = product.filter(
      (item) => item.price >= min && item.price < max
    );
    setDataProduct(dataFillter);
  };
  // chuyển đổi tên
  function removeUnicode(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
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
            {listInput.map((item: any) => (
              <div className="filter-group">
                <input
                  type={item.type}
                  name={item.name}
                  defaultValue={`${item.min}, ${item.max}`}
                  data-filter={item.dataFilter}
                  onChange={() => handleFillter(item.min, item.max)}
                />
                <span>{`${item.min.toLocaleString()} - ${item.max.toLocaleString()}VND`}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="album-product">
          {dataProduct.map((product, index) => (
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
                <p className="card-text">
                  <strong>Mô tả:</strong>
                  <i>{product.describe}</i>
                </p>
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
