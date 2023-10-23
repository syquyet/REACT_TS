import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import ModalProductDetail from "../user/modal.util/modal";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/slice/productSlice";

import { RootState } from "../../redux/store/configureStore";
import { ProductEntity } from "../../entities/product.entity";

export default function ListProduct() {
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState<ProductEntity[]>([]);
  const [dataView, setDataView] = useState<ProductEntity>();
  const product = useSelector((state: RootState) => state.products.data);
  useEffect(() => {
    const fetchdata = async () => {
      const reponse = await axios.get(`http://localhost:3000/products`);
      setDataProduct(reponse.data);
      dispatch(getProduct(reponse.data));
    };
    
    fetchdata();
  
  }, []);
  // truyen id product len url
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
    <section className="list-product">
      {dataProduct.map((product, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src="../../banner_4.jpg" className="card-img-top" alt="..." />
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
              <strong>Mô tả:</strong> <i>{product.describe}</i>
            </p>
            <p className="card-text">GIÁ:{product.price.toLocaleString()}VND</p>
          </div>
        </div>
      ))}

      {/* modal produc-detail */}
      <ModalProductDetail data={dataView} />
    </section>
  );
}
