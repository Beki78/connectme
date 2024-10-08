import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      description: "",
      price: "0ETB",
      duration: "/month",
      features: [
        "Add up to 4 social media accounts",
        "Basic features and configuration",
        "Free updates",
      ],
    },
    {
      title: "Premium",
      description: "",
      price: "50ETB",
      duration: "/month",
      features: [
        "Add unlimited social media accounts",
        "Analytics and insights",
        "Multiple theme",
      ],
    },
  ];


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2
            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            data-aos="fade-right"
          >
            Pricing Plans
          </h2>
          <p
            className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
            data-aos="fade-left"
          >
            Simple, transparent pricing for your personalize needs.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2  lg:space-y-1">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {plan.duration}
                </span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
