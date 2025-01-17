import React from "react";
import { Check } from "lucide-react";

const PriceCard: React.FC<{
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}> = ({ title, price, features, isPopular }) => (
  <div
    className={`bg-zinc-800 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
      isPopular ? "border-2 border-amber-500" : ""
    } flex flex-col h-full`}
  >
    {isPopular && (
      <div className="bg-amber-500 text-zinc-900 text-center py-2 font-semibold">
        Most Popular
      </div>
    )}
    <div className="p-6 sm:p-8 flex-grow">
      <h3 className="text-2xl font-light text-zinc-100 mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl sm:text-4xl font-bold text-amber-500">
          {price}
        </span>
        <span className="text-zinc-400 ml-2">/ month</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-zinc-300">
            <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-1" />
            <span className="text-sm sm:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 sm:p-8 bg-zinc-700 mt-auto">
      <button className="w-full bg-amber-500 text-zinc-900 py-3 px-4 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300 text-sm sm:text-base">
        Get Started
      </button>
    </div>
  </div>
);

const Price: React.FC = () => {
  const plans = [
    {
      title: "Core Plan",
      price: "LKR 25,000 Onwards",
      features: [
        "Website Building & Development (+ Store)",
        "⁠Online Payment Integration",
        "⁠Live 24/7 Chatbot",
      ],
    },
    {
      title: "Pro Plan",
      price: "LKR 50,000 Onwards",
      features: [
        "Core Plan",
        "Designated User Access",
        "⁠Social Media One-Click Marketing Tools",
        "Ai Generated Content",
      ],
    },
    {
      title: "Essential Plan",
      price: "LKR 100,000 Onwards",
      features: ["Pro Plan", "⁠Ai Voice Bots", "Automation"],
      isPopular: true,
    },
  ];

  return (
    <div className="bg-zinc-900 py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-thin text-center text-zinc-100 mb-4">
          Pricing <span className="font-bold">Plans</span>
        </h2>
        <p className="text-lg sm:text-xl text-center text-zinc-400 mb-12 sm:mb-16 max-w-3xl mx-auto">
          Choose the perfect plan to elevate your business with HiVE's
          cutting-edge solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
