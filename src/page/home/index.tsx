import { useState } from "react";
import ProductDetail from "../user/product-detail/product-detail";
import Banner from "./banner";
import BlockProduct from "./blockProduct";
import "./home.css";
import ListProduct from "./listProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/configureStore";

import { ProductEntity } from "../../entities/product.entity";

export default function Home(): JSX.Element {

  return (
    <>
      <Banner />

      <h1>HÀNG MỚI VỀ</h1>
      
      <div className="fillter-prodcut">
        <select name="" id="">
          <option value="mới nhất">Mới nhất</option>
          <option value="giá từ thấp tới cao">Giá từ thấp tới cao</option>
          <option value="giá từ cao tới thấp">Giá từ cao tới thấp</option>
          <option value="Bán chạy nhất">Bán chạy nhất</option>
          <option value="Yêu thích nhất">Yêu thích nhất</option>
        </select>
      </div>

      <hr />
      <ListProduct />
      <BlockProduct />
      <section className="home-trasport">
        <div>
          <img src="../../transport.png" alt="" width="150px" height="120px" />
          <h6>MIỄN PHÍ GIAO HÀNG</h6>
          <p>CHO ĐƠN TỪ 500K</p>
        </div>
        <div>
          <img src="../../dung_hang.png" alt="" width="150px" height="120px" />
          <h6>CAM KẾT GIAO ĐÚNG HÀNG</h6>
          <p>ĐƯỢC KIỂM HÀNG TRƯỚC KHI NHẬN</p>
        </div>
        <div>
          <img src="../../doitra.jpg" alt="" width="150px" height="120px" />
          <h6>HỔ TRỢ ĐỔI TRẢ</h6>
          <p>ĐỔI TRẢ HÀNG TRONG VÒNG 3 NGÀY</p>
        </div>
      </section>
    </>
  );
}
