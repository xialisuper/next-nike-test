import Image from "next/image";
import React from "react";
import Hero from "./ui/hero";
import PopularProducts from "./ui/popular-products";
import SuperQuality from "./ui/super-quality";
import Services from "@/app/ui/services";
import SpecialOffer from "@/app/ui/special-offer";
import Footer from "@/app/ui/footer";
import CustomerReviews from "./ui/customer-reviews";
import Nav from "@/app/ui/nav";
import HeroJS from "./ui/herojs";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
}
