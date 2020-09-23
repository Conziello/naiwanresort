import React from "react";
import Hero from "../components/Hero.js";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import StyledHero from "../components/StyledHero.js";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious room" subtitle="deluxe room starting at $900">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      {/* <StyledHero /> */}
    </>
  );
}
