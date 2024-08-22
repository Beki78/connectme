import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

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
    <div className="overflow-hidden bg-[#f8f6f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our features
              </p>
              <p className="mt-3 text-lg leading-8 text-gray-600">
                Enhance your social media presence with ease. Our platform
                offers a centralized place to showcase all your social media
                profiles, serving as a comprehensive portfolio. Track your
                profile's performance with analytics, seeing how many visitors
                come to your page.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
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
          <img
            alt="Product screenshot"
            src="https://images.unsplash.com/photo-1603145733146-ae562a55031e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
            className="w-[48rem] h-[36rem] object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
