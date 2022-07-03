import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({ product }) => {
  return (
    <div className="pt-10 grid grid-cols-1 gap-4 md:gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {product.map((products) => (
        <ProductItem products={products} key={products.id} />
      ))}
    </div>
  );
};

export default ProductsList;
