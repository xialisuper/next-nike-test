"use client";
import React, { useState } from "react";
import Button from "./button";
import Image from "next/image";
import { arrowRight } from "../../../public/icons";
import { ShoeType, shoes, statistics } from "../const";
import { montserrat, palanquin } from "./fonts";
import { bigShoe1 } from "../../../public/images";
import ShoeCard from "./shoe-card";

function Hero() {
  // use state to store the current shoe
  const [currentShoe, setCurrentShoe] = useState(shoes[0]);

  function handleShoeClick(shoe: ShoeType) {
    setCurrentShoe(shoe);
  }

  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full max-w-screen-xl flex-col justify-center 
      gap-10 p-2 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center  pt-28 xl:w-2/5">
        <p className={`${montserrat.className} text-xl text-coral-red`}>
          Our Summer colleciton
        </p>
        <p
          className={`mt-10 ${palanquin.className} text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]`}
        >
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mr-3 mt-3 inline-block text-coral-red">Nike </span>
          Shoes
        </p>
        <p
          className={`${montserrat.className} mb-14 mt-8 text-lg leading-8 text-slate-gray sm:max-w-sm`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        <Button label="Shop Now" icon={arrowRight}></Button>

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className={`${palanquin.className} text-4xl font-bold`}>
                {stat.value}
              </p>
              <p
                className={`${montserrat.className} leading-7 text-slate-gray`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex flex-1  items-center justify-center bg-primary   bg-card bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <Image
          src={currentShoe.bigShoe}
          alt="big shoe"
          // width={650}
          // height={500}
          className="relative z-10 object-contain"
        />
        <div className="absolute  -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe, index) => (
            // on click只接受void类型的函数，所以这里要用一个匿名函数包裹handleShoeClick
            <div key={index} onClick={() => handleShoeClick(shoe)}>
              <ShoeCard
                key={index}
                shoe={shoe}
                isSelect={shoe === currentShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
