import React from "react";
import { ProductsCard } from "./ProductsCard";

export const Products = ({ products }) => {
  console.log(products);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4 font-bold">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          reprehenderit amet labore adipisci nemo, odit, fuga quos tempore
          quisquam, culpa repudiandae. Voluptate distinctio voluptatibus itaque
          deserunt assumenda ratione laboriosam ipsum.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductsCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
