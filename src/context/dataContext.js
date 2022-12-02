import { createContext, useState, useEffect } from "react";

import { getProudcts } from "../services/productSercies";
import { getStores } from "../services/storeService";
import { getInfo } from "../services/infoService";
import { getCategory } from "../services/categoryService";
import { getOrders } from "../services/ordersService";
export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setDate] = useState({
    products: [],
    stores: [],
    info: [],
    category: [],
    orders: [],
  });

  useEffect(() => {
    getProudcts().then((res) => setDate({ ...data, products: res.result }));
    getStores().then((res) => setDate({ ...data, stores: res.result }));
    getInfo().then((res) => setDate({ ...data, info: res.result }));
    getCategory().then((res) => setDate({ ...data, category: res.result }));
    getOrders().then((res) => setDate({ ...data, orders: res.result }));
  }, []);
  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
};

export default DataProvider;
