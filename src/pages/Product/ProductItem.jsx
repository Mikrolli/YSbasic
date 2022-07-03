import React from "react";

const ProductItem = (props) => {
  return (
    <div className="w-[300px] rounded-md flex-shrink-0 bg-[#f4f5f7]">
      <div className="flex w-[260px] h-[260px] m-auto overflow-hidden rounded-md -translate-y-5">
        <img src={props.products.img} alt="/" className="w-full h-full rounded-md object-cover"  />
      </div>
      <div className="flex flex-grow flex-col w-full p-4">
      <div >
        <h2 className="w-full font-medium text-base">{props.products.brand}</h2>
        <h3 className="w-full font-normal text-md">{props.products.name}</h3>
      </div>
      <div>
        <span>{props.products.price}</span>
      </div>
      </div>
    </div>
  );
};

export default ProductItem;
