import React from "react";
import Navbar from "../components/Navbar";
import Announcementbar from "../components/Announcementbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <Announcementbar />
      <Navbar />
      <HeroSection/>
    </>
  );
};

export default Home;
