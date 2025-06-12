"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  DollarSign,
  // ShoppingCart,
  MessageSquare,
} from "lucide-react";
// import csImage from "../assets/cs.jpeg";
// import accImage from "../assets/acc.jpeg";
// import salesImage from "../assets/sales.jpeg";
// import bg2 from "../assets/4.png";

import csImage from "../assets/myhive1.gif";
import accImage from "../assets/myhive2.gif";
import salesImage from "../assets/myhive4.jpg";
import bg2 from "../assets/4.png";

const PlatformFeature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.1, ease: "easeOut", delay: index * 0.005 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative overflow-hidden rounded-2xl bg-gray-800 p-6 shadow-lg transition-all duration-100 hover:bg-yellow-600">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/20 text-yellow-500 group-hover:bg-white group-hover:text-white-800">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="mb-2 text-xl font-semibold text-white group-hover:text-white-900">
      {title}
    </h4>
    <p className="text-gray-300 group-hover:text-white-800">{description}</p>
    <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-tl-xl bg-yellow-500/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
  </motion.div>
);

const ImageScroller = () => {
  const images = [
    { src: csImage, alt: "myhive Platform Customer Service" },
    { src: accImage, alt: "myhive Platform Sales and Marketing" },
    { src: salesImage, alt: "myhive Platform Accounting" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.02 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
    >
      <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-xl"></div>
      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-yellow-500" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function Platform() {
  const features = [
    {
      title: "Sales & Marketing",
      description: "Boost your sales with Ai-driven insights",
      icon: BarChart3,
    },
    {
      title: "Customer Service",
      description: "Provide exceptional support with automated tools",
      icon: Users,
    },
    {
      title: "Finance & Accounting",
      description: "Automate financial tasks and reporting",
      icon: DollarSign,
    },
    // {
    //   title: "E-Commerce",
    //   description: "Manage your online store with ease",
    //   icon: ShoppingCart,
    // },
    {
      title: "Communication",
      description: "Enhance collaboration with Ai-powered messaging",
      icon: MessageSquare,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="mb-2 inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-medium text-yellow-800">
            Powerful Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our <span className="text-yellow-600">Platform</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">
              myhive's
            </span>{" "}
            solution integrates Ai-driven automation and functions with business
            CRM tools to evolve operations across:
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <PlatformFeature
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>

          <ImageScroller />
        </div>
      </div>
    </section>
  );
}
