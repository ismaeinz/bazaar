import React from "react";

export const ProductsCard = ({ product }) => {
  return (
    <div className="group">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4 ">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex gap-2 relative">
            <p className="line-through ">{100}</p>
            <p className="font-semibold">{product.price}</p>
          </div>
          <p className="absolute">add to cart</p>
        </div>
      </div>
    </div>
  );
};
