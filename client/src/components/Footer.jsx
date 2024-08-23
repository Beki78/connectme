import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white">
      <div className="flex justify-center space-x-4">
        <Link
          to="home"
          smooth={true}
          duration={500}
          
          className="cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={500}
          
          className="cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="pricing"
          smooth={true}
          duration={500}
          
          className="cursor-pointer"
        >
          Pricing
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          
          className="cursor-pointer"
        >
          Contact
        </Link>
      </div>
      <p className="text-center mt-4">
        &copy; 2024 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
