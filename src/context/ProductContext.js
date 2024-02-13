import React, { createContext, useContext } from "react";

const productContext = createContext();
const useProduct = () => useContext(productContext);
const ProductContext = ({ children }) => {
  const values = {};
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
