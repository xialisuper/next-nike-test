import React from "react";
import { montserrat, palanquin } from "./fonts";
import { products } from "../const";
import ProductCard from "./product-card";
//import image

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className={`${palanquin.className} text-4xl font-bold`}>
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className={`${montserrat.className} lg::max-w-lg text-slate-gray`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* // 遍历products 生成ProductCard组件 */}
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
