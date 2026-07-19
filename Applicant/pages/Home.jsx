import React from "react";
import Navbar from "../components/Navbar";
import Announcementbar from "../components/Announcementbar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import TrackSection from "../components/TrackSection";

const Home = () => {
  return (
    <>
      <Announcementbar />
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <TrackSection/>
    </>
  );
};

export default Home;
