'use client'
import React from "react";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { ButtonWhats } from "@/components/ButtonWhats";
import { Cards } from "@/components/Cards";
import { CallToAction } from "@/components/CallToAction";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="container-test">
      <ButtonWhats />
      <Banner />
      <About />
      <Cards />
      <CallToAction />
      <Carousel />
      <Footer />
    </main>
  )
}
