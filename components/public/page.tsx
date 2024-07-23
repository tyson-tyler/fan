"use client";

import React, { useState, useEffect } from "react";

import Navbar from "@/components/shared/navbar";
import Hero from "@/components/shared/Hero";
import Footer from "@/components/shared/Footer";
import Preloader from "@/components/shared/preloader";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-black text-white">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Hero />

          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
