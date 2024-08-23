import { useState } from "react";
import React from "react";
import { MenuItem, Menu } from "./components/ui/navbar-menu";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { AnimatedModalDemo } from "./components/ButtonModal";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

const App = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative h-screen">
      {/* Menu Section */}
      <div className="flex justify-center">
        <Menu
          className="absolute top-0 w-[96%] max-w-4xl z-10"
          setActive={setActive}
        >
          <MenuItem item="Home" />
          <MenuItem item="Features" />
          <MenuItem item="Pricing" />
          <MenuItem item="Contact" />
        </Menu>
      </div>

      {/* Background Section */}
      <BackgroundBeamsWithCollisionDemo />
      <AnimatedModalDemo />
      <Feature />
      <Pricing />
      <Contactus />
      <Footer />
    </div>
  );
};

export default App;
