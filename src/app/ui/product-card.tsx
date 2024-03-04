import React from "react";
import { Product } from "../const";

import Image from "next/image";
import { palanquin } from "./fonts";

function ProductCard(product: Product) {
  return (
    <div key={product.name} className="flex w-full flex-col  items-start  ">
      <Image
        src={product.imgURL}
        alt={product.name}
        // className=" w-full object-contain"
      />
      <h3 className={`${palanquin.className} mt-2 text-xl font-bold`}>
        {product.name}
      </h3>

      <div className="flex items-center justify-between">
        <span className={`${palanquin.className} text-lg text-slate-gray`}>
          {product.price}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
