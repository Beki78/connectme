import { useState } from "react";
import React from "react";
import { MenuItem, Menu } from "./components/ui/navbar-menu";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { AnimatedModalDemo } from "./components/ButtonModal";
import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
const App = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative h-screen">
      {/* Menu Section */}
      <Menu className="absolute top-0 left-0 w-full z-10" setActive={setActive}>
        <MenuItem item="Products" />
        <MenuItem item="Features" />
        <MenuItem item="Pricing" />
        <MenuItem item="Contact" />
      </Menu>

      {/* Background Section */}
      <BackgroundBeamsWithCollisionDemo />
      <AnimatedModalDemo />
      <Feature />
      <Pricing/>
    </div>
  );
};

export default App;
