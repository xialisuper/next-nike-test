import React from "react";
import Link from "next/link";
import Image from "next/image";
import { headerLogo } from "../../../public/images";
import { hamburger } from "../../../public/icons";
import { navLinks } from "@/app/const";
import { montserrat } from "./fonts";

function Nav() {
  return (
    <header className="padding-x absolute z-10 w-full  py-8">
      <nav className="max-container flex items-center justify-between ">
        {/*  logo  */}
        <Link href={"/"}>
          <Image src={headerLogo} width={130} height={29} alt="logo" />
        </Link>
        {/*  icon  button */}

        <ul className="flex flex-1 items-center justify-center gap-16  max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className={` ${montserrat.className} text-lg leading-normal text-slate-gray `}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={"/"} className="hidden max-lg:block">
          <Image src={hamburger} width={30} height={30} alt="hamberger" />
        </Link>
      </nav>
    </header>
  );
}

export default Nav;
