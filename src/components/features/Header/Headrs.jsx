import React, { useEffect, useState } from "react";
import { BsBasket } from "react-icons/bs";

import "./Headrs.css";

import { getProudcts } from "../../../services/productSercies";
import { getStores } from "../../../services/storeService";
import { getInfo } from "../../../services/infoService";
import { getCategory } from "../../../services/categoryService";
const Headrs = () => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [info, setinfo] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    getProudcts().then((res) => setProducts(res.result));
    getStores().then((res) => setStores(res.result));
    getInfo().then((res) => setinfo(res.result));
    getCategory().then((res) => setCategory(res.result));
  }, []);
  console.log(products);

  return (
    <div className="headersContainer container-fluid mt-5 text-center ">
      <div>
        מוצרים
        <div className="content">
          {products.length}
          <BsBasket
            size={40}
            color={"black"}

            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>

      <div>
        חנויות
        <div className="content">
          {stores.length}
          <BsBasket
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        דפי מידע
        <div className="content">
          {info.length}
          <BsBasket
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        קטגוריות
        <div className="content">
        {category.length}
          <BsBasket
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        מחלקות
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Headrs;
