import Image, { StaticImageData } from "next/image";
import React from "react";
import { ShoeType } from "../const";

interface Props {
  shoe: ShoeType;
  //function to call when the card is clicked
  isSelect: boolean;
}

export default function ShoeCard({ shoe, isSelect }: Props) {
  return (
    <Image
      className={` 
      rounded-xl border-2 ${isSelect ? "border-coral-red" : "border-transparent"} } 
      flex cursor-pointer items-center justify-center bg-card max-sm:p-4 sm:h-40 sm:w-40`}
      src={shoe.thumbnail}
      alt="shoe"
    />
  );
}
