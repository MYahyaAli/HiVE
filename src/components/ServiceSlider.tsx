"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Server,
  MessageSquare,
  Zap,
  Globe,
  BarChart3,
  Bot,
  PenTool,
  Share2,
  Mic,
  LineChart,
  Clock,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ServiceSection {
  title: string;
  subtitle: string;
  description: string;
  mainIcon: React.ElementType;
  features: FeatureItem[];
  ctaText: string;
}

const productSection: ServiceSection = {
  title: "CRM Platform",
  subtitle: "Product",
  description: "",
  // A comprehensive solution that streamlines your business operations and enhances customer relationships.
  mainIcon: Server,
  ctaText: "Explore Key Features",
  features: [
    {
      title: "All-In-One CRM",
      description:
        "Manage all your customer relationships and interactions in one centralized platform.",
      icon: Globe,
    },
    {
      title: "Integratable",
      description:
        "Seamlessly connect with your favorite tools like WordPress, WhatsApp, and other business applications.",
      icon: Share2,
    },
    {
      title: "Cross Functional",
      description:
        "One platform handling multiple business functions, eliminating the need for separate specialized systems.",
      icon: BarChart3,
    },
    {
      title: "Ai Powered",
      description:
        "Advanced artificial intelligence that learns from your data to provide smarter insights and automation.",
      icon: Zap,
    },
    {
      title: "Cloud Platform",
      description:
        "Access your business data securely from anywhere without the need for local installations.",
      icon: Server,
    },
  ],
};

// Key benefits for product section
const productBenefits: FeatureItem[] = [
  {
    title: "Saves Time & Cost",
    description:
      "It is an All-in-One Cross-Functional platform specialized in a range of business functions, compared to the usual niched CRMs offering one line of function.",
    icon: Clock,
  },
  {
    title: "User Flexible",
    description:
      "The option to integrate user preferred applications & business tools such as Wordpress, Whatsapp & more.",
    icon: Zap,
  },
  {
    title: "Innovative Advantage",
    description:
      "An Ai Driven platform evolving every day offering future developments and features ahead of the industry & now.",
    icon: Globe,
  },
  {
    title: "Consistent Performance",
    description: "Functions and platform as a whole driven by Ai every second.",
    icon: BarChart3,
  },
  {
    title: "Saves Space",
    description:
      "A Cloud Platform, compared to the usual applications that require installation & updates.",
    icon: Server,
  },
];

// Key services for service section
const serviceFeatures: FeatureItem[] = [
  {
    title: "Automation",
    description:
      "Streamline repetitive tasks and workflows with intelligent automation that saves time and reduces errors.",
    icon: Zap,
  },
  {
    title: "Website Building, Design & Development",
    description:
      "Create professional, responsive websites tailored to your brand with SEO optimization and conversion-focused design.",
    icon: PenTool,
  },
  {
    title: "Live & Ai Chatbots",
    description:
      "Provide 24/7 customer support with intelligent conversational interfaces that handle inquiries efficiently.",
    icon: Bot,
  },
  {
    title: "Ai Voice Assistants & Employees",
    description:
      "Deploy natural-sounding voice solutions for customer service that sound like real human interactions.",
    icon: Mic,
  },
  {
    title: "Business Consultation",
    description:
      "Receive expert guidance on optimizing your operations with data-driven insights and recommendations.",
    icon: LineChart,
  },
];

const serviceSection: ServiceSection = {
  title: "Business Technology",
  subtitle: "Services",
  description: "",
  // Expert digital solutions to elevate your brand presence and engage your audience effectively.
  mainIcon: MessageSquare,
  ctaText: "Explore Key Services",
  features: serviceFeatures,
};

export default function ServiceSlider() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"product" | "service">("product");

  // Create refs for scrolling to sections
  const productFeaturesRef = useRef<HTMLDivElement>(null);
  const productBenefitsRef = useRef<HTMLDivElement>(null);
  const serviceFeaturesRef = useRef<HTMLDivElement>(null);
  const serviceBenefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll functions for each section
  const scrollToProductFeatures = () => {
    productFeaturesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProductBenefits = () => {
    productBenefitsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServiceFeatures = () => {
    serviceFeaturesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServiceBenefits = () => {
    serviceBenefitsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("product")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "product"
                  ? "bg-white text-yellow-600 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Product
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === "service"
                  ? "bg-white text-yellow-600 shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          {/* Product Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: activeTab === "product" ? 1 : 0,
              x: activeTab === "product" ? 0 : -20,
              display: activeTab === "product" ? "block" : "none",
            }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-yellow-50 to-amber-100"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center mb-10">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="h-16 w-16 rounded-2xl bg-yellow-600 text-white flex items-center justify-center shadow-lg">
                    <productSection.mainIcon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
                    {productSection.subtitle}
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {productSection.title}
                  </h2>
                  <p className="text-gray-600 max-w-2xl">
                    {productSection.description}
                  </p>
                </div>
              </div>

              {/* Key Features Card */}
              <div
                ref={productFeaturesRef}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8"
                id="product-features"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Our platform offers powerful capabilities to transform your
                    business operations.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productSection.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                      className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 h-12 w-12 rounded-lg bg-yellow-600/10 text-yellow-600 flex items-center justify-center">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          {/* <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Button to navigate to Benefits section */}
                <div className="text-center mt-8">
                  <button
                    onClick={scrollToProductBenefits}
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-yellow-600 text-yellow-600 font-medium hover:bg-yellow-50 transition-colors duration-200"
                  >
                    Explore Your Benefits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Explore More Services Card */}
              <div
                ref={productBenefitsRef}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8"
                id="product-benefits"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Explore YOUR Benefits
                  </h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    How our services create value and transform your business
                    operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productBenefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center"
                    >
                      <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6 mx-auto">
                        {React.createElement(benefit.icon, {
                          className: "h-6 w-6",
                        })}
                      </div>
                      <h3 className="text-lg mb-3 font-semibold">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Button to navigate to Features section */}
                <div className="text-center mt-8">
                  <button
                    onClick={scrollToProductFeatures}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition-colors duration-200"
                  >
                    {productSection.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: activeTab === "service" ? 1 : 0,
              x: activeTab === "service" ? 0 : 20,
              display: activeTab === "service" ? "block" : "none",
            }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-50 to-gray-100"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center mb-10">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="h-16 w-16 rounded-2xl bg-yellow-600 text-white flex items-center justify-center shadow-lg">
                    <serviceSection.mainIcon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
                    {serviceSection.subtitle}
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    {serviceSection.title}
                  </h2>
                  <p className="text-gray-600 max-w-2xl">
                    {serviceSection.description}
                  </p>
                </div>
              </div>

              {/* Key Services Card */}
              <div
                ref={serviceFeaturesRef}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8"
                id="service-features"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Key Services</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Our comprehensive range of services designed to elevate your
                    business.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                      className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                    >
                      <div className="flex flex-col items-center">
                        <div className="mb-4 h-12 w-12 rounded-lg bg-yellow-600/10 text-yellow-600 flex items-center justify-center">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {feature.title}
                          </h3>
                          {/* <p className="text-gray-600 text-sm">
                            {feature.description}
                          </p> */}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Button to navigate to Service Benefits section */}
                <div className="text-center mt-8">
                  <button
                    onClick={scrollToServiceBenefits}
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 border-yellow-600 text-yellow-600 font-medium hover:bg-yellow-50 transition-colors duration-200"
                  >
                    Explore Your Benefits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Service Benefits Card */}
              <div
                ref={serviceBenefitsRef}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8"
                id="service-benefits"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Service Benefits</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    How our services create value and transform your business
                    operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
                    <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6 mx-auto">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg mb-3 font-semibold">Saves Time</h4>
                    <p className="text-gray-600 text-sm">
                      Ai-driven automation executes business functions in
                      seconds, reducing manual workload and boosting
                      productivity.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
                    <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6 mx-auto">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg mb-3 font-semibold">Saves Cost</h4>
                    <p className="text-gray-600 text-sm">
                      Consistent Ai-powered performance eliminates
                      inefficiencies and reduces operational expenses.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
                    <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6 mx-auto">
                      <Users className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg mb-3 font-semibold">
                      Real-Life Engagement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Activity-based approach with brand-resonating
                      personalities creates authentic connections with your
                      audience.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
                    <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6 mx-auto">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg mb-3 font-semibold">
                      Real-Time Engagement
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Inquiry-based approach with brand-representing personas
                      provides immediate, personalized customer responses.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center">
                    <div className="h-12 w-12 rounded-xl bg-yellow-600 text-white flex items-center justify-center mb-6 mx-auto">
                      <LineChart className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg mb-3 font-semibold">
                      Advanced Consultation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Deep data insights, Ai forecasting, and real-time
                      analytics inform strategic business decisions.
                    </p>
                  </div>
                </div>

                {/* Button to navigate to Key Services section */}
                <div className="text-center mt-8">
                  <button
                    onClick={scrollToServiceFeatures}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-600 text-white font-medium hover:bg-yellow-500 transition-colors duration-200"
                  >
                    {serviceSection.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
