import React, { useEffect, useState } from "react";
import "./Headrs.css";

import { getProudcts } from "../../../services/productSercies";

const Headrs = () => {

  const [products,setProducts]=useState([]);

  useEffect(( )=>{
    getProudcts().then((res)=>setProducts(res))

  },[])
  console.log(products)

  return (
    <div className="headersContainer container-fluid mt-5 text-center ">
      <div>
        מוצרים
        <div className="content">{products.result.length}</div>
      </div>

      <div>
        חנויות
        <div className="content"></div>
      </div>
      <div>
        דפי מידע
        <div className="content"></div>
      </div>
      <div>
        קטגוריות
        <div className="content"></div>
      </div>
      <div>
        מחלקות
        <div className="content"></div>
      </div>
    </div>
  );
};

export default Headrs;
