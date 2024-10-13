import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[60px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI
        </span>{" "}
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your Personal Trip Planner and Travel Curator, Creating custom
        Itineraries Tailored To Your Interests and Budgets
      </p>

      <Link to={"/create-trip"}>
        <Button>Get Started, It's FREE</Button>
      </Link>
    </div>
  );
};

export default Hero;
