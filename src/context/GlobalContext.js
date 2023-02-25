import { createContext, useEffect, useState } from "react";

export const GlobalContextObject = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const responseObj = await fetch("https://fakestoreapi.com/products");
      const data = await responseObj.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <GlobalContextObject.Provider value={{ products }}>
      {children}
    </GlobalContextObject.Provider>
  );
};

export default GlobalContextProvider;
