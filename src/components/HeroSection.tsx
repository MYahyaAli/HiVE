"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/4.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-lg font-medium text-yellow-800"
            >
              Empower Your Business
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Empower Your
              <span className="mt-2 block bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
                Business
              </span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Elevate Your
              <span className="mt-2 block bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
                Brand
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg text-gray-600 md:mx-auto lg:mx-0"
            >
              Technology that Empowers Visionary Ideas to Ignite Brands and
              Transform Businesses!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <button
                className="group w-full rounded-full bg-yellow-600 px-8 py-4 font-bold text-white transition-colors duration-100 easse-out hover:bg-yellow-500 sm:w-auto"
                onClick={() => handleNavigation("/about")}
              >
                {/* Explore Our Locations */}
                About Us
                <ChevronRight className="ml-2 inline-block h-4 w-4 transition-transform duration-100 ease-out group-hover:translate-x-1" />
              </button>

              <button
                className="w-full rounded-full border-2 border-yellow-600 px-8 py-4 font-bold text-yellow-600 transition-colors hover:bg-yellow-50 hover:text-yellow-700 sm:w-auto"
                onClick={() => handleNavigation("/services")}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto h-[400px] w-full max-w-lg lg:h-[500px]"
          >
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-xl"></div>
            <div className="absolute inset-0 h-full w-full overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={bg1 || "/placeholder.svg"}
                alt="myhive Platform"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white p-3 shadow-lg"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-yellow-50">
                <span className="text-center text-sm font-bold text-yellow-800">
                  100% Secure
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [10, -10, 10] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white p-3 shadow-lg"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-yellow-50">
                <span className="text-center text-sm font-bold text-yellow-800">
                  Ai Powered
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
