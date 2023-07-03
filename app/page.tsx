import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Opinions from "@/components/Opinions";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
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
