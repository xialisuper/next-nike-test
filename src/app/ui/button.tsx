import React from "react";
import Image from "next/image";
import { montserrat } from "./fonts";

interface buttonProps {
  label: string;
  icon: string;
}

function Button({ label, icon }: buttonProps) {
  return (
    <button
      className={`${montserrat.className}  flex items-center justify-center gap-2 border bg-coral-red px-7 py-2 text-lg leading-none rounded-full border-coral-red text-white`}
    >
      <span>{label}</span>
      <Image
        className="ml-2 rounded-full"
        src={icon}
        alt={"icon"}
        width={20}
        height={20}
      />
    </button>
  );
}

export default Button;
