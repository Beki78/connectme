import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1724399056292.json"; 

const features = [
  {
    name: "Social Media Integration",
    description:
      "Enable users to connect their profiles to various social media platforms, such as: Twitter, LinkedIn, Instagram, Facebook, YouTube, TikTok, Personal website and others",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Profile Analytics",
    description:
      "Number of profile views, Traffic sources, Engagement metrics (e.g., clicks on links)",
    icon: LockClosedIcon,
  },
  {
    name: "Customizable Themes",
    description:
      "Offer various themes and design options so users can personalize their profiles with different colors, fonts, and layouts.",
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our features
              </p>
              <p className="mt-3 text-lg leading-8 text-white">
                Enhance your social media presence with ease. Our platform
                offers a centralized place to showcase all your social media
                profiles, serving as a comprehensive portfolio. Track your
                profile's performance with analytics, seeing how many visitors
                come to your page.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-bold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-[48rem] h-[32rem] object-contain "
          />
        </div>
      </div>
    </div>
  );
}
