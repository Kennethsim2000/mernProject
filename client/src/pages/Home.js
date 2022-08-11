import React from "react";
import NavigationBar from "../components/Navbar";
import ControlledCarousel from "../components/Carousel";
import Destination from '../components/Destination';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      {" "}
      <NavigationBar />
      <ControlledCarousel />
      <Destination />
      <Footer />
    </div>
  );
}
