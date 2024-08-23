import React from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <h2
        data-aos="slide-right"
        className="text-2xl relative z-20 md:text-3xl lg:text-6xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
      >
        All your content, finally together
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] text-sm md:text-xl lg:text-3xl">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">
              Link all of you social media, stay connected with everyone
            </span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">
              Link all of you social media, stay connected with everyone
            </span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
