"use client";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Sertifikat from "@/components/Sertifikat";
import Skill from "@/components/Skill";
import SwiperSlider from "@/components/SwiperSlider";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <SwiperSlider />
      <Sertifikat />
      <Footer />
    </>
  );
}
