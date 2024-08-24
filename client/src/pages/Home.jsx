import { useState } from "react";
import React from "react";
import { MenuItem, Menu } from "../components/ui/navbar-menu";
import { BackgroundBeamsWithCollisionDemo } from "../components/BackgroundBeamsWithCollisionDemo";
import { AnimatedModalDemo } from "../components/ButtonModal";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import { Link, Element } from "react-scroll";

const App = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="relative h-screen">
      {/* Menu Section */}
      <div className="flex justify-center">
        <Menu
          className="absolute top-0 w-[96%] max-w-4xl z-10"
          setActive={setActive}
        >
          <Link to="home" smooth={true} duration={500}>
            <MenuItem item="Home" />
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <MenuItem item="Features" />
          </Link>
          <Link to="pricing" smooth={true} duration={500}>
            <MenuItem item="Pricing" />
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <MenuItem item="Contact" />
          </Link>
        </Menu>
      </div>

      {/* Sections */}
      <Element name="home" className="h-full">
        <BackgroundBeamsWithCollisionDemo />
      </Element>
      <Element name="features">
        <AnimatedModalDemo />
        <Feature />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="contact">
        <Contactus />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
