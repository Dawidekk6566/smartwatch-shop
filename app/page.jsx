"use client";
import React, { useEffect } from "react";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Opinions from "@/components/Opinions";
import Products from "@/components/Products";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className="flex">
      <div className="flex-col items-center w-full">
        <Navbar />
        <Hero />
        <Brands />
        <Products />
        <Opinions />
        <Footer />
      </div>
    </main>
  );
}
