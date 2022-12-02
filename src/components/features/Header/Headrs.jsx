import React, { useContext} from "react";
import { BsBasket } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";





import { dataContext } from "../../../context/dataContext";

import "./Headrs.css";

const Headrs = () => {
  const { data } = useContext(dataContext);

  return (
    <div className="headersContainer container-fluid mt-5 text-center ">
      <div>
        Products
        <div className="content">
          {data.products.length}
          <BsBasket
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>

      <div>
        Stores
        <div className="content">
          {data.stores.length}
          <BiStore
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        Information
        <div className="content">
          {data.info.length}
          <AiOutlineInfoCircle
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        category's
        <div className="content">
          {data.category.length}
          <BsListTask
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
      <div>
        Departments
        <div className="content">
          {data.orders.length}
          <BsListTask
            size={40}
            color={"black"}
            style={{ borderLeft: "1px solid black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Headrs;
