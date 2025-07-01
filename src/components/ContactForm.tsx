"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Building2, Calendar } from "lucide-react";

interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  location: string;
  workingHours: string;
  officeDetails: string;
  countryCode: string;
}

const officeLocations: ContactInfo[] = [
  {
    phone: "+94 70 582 2929",
    whatsapp: "94705822929",
    email: "hello@myhive.biz",
    address: "No. 146/5, Havelock Road",
    location: "Colombo 05, Sri Lanka",
    workingHours: "9am - 6pm IST, Monday - Friday",
    officeDetails: "HiVE Colombo - Head Office",
    countryCode: "+94",
  },
  {
    phone: "+1 437 254 3077",
    whatsapp: "14372543077",
    email: "hello@myhive.biz",
    address: "100 City Centre Dr",
    location: "Mississauga, Ontario L5B 2C9, Canada",
    workingHours: "9am - 5pm EST, Monday - Friday",
    officeDetails: "HiVE Toronto - Ontario Branch",
    countryCode: "+1",
  },
  {
    phone: "+1 236 979 1372",
    whatsapp: "12369391372",
    email: "hello@myhive.biz",
    address: "1021 West Hastings Street",
    location: "Vancouver, BC V6E 0C3, Canada",
    workingHours: "9am - 5pm PST, Monday - Friday",
    officeDetails: "HiVE Vancouver - British Columbia Branch",
    countryCode: "+1",
  },
];

const getRegionCode = async (): Promise<number> => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    console.log("Region data in ContactForm:", data);

    if (data.country_code === "LK") {
      return 0; // Colombo
    }

    if (data.country_code === "CA") {
      if (data.region_code === "BC") {
        console.log("Detected British Columbia");
        return 2; // Vancouver
      } else if (data.region_code === "ON") {
        console.log("Detected Ontario");
        return 1; // Toronto
      }
      return 1; // Default to Ontario for other Canadian provinces
    }

    return 2; // Default to Vancouver for international users
  } catch (error) {
    console.error("Error fetching region:", error);
    return 0; // Default to Colombo if there's an error
  }
};

const ContactForm: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"contact" | "booking">("contact");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    phoneType: "mobile",
    office: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isSuccess: false,
    isSubmitting: false,
  });

  // Load the GoHighLevel script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    const fetchRegion = async () => {
      const officeIndex = await getRegionCode();
      setSelectedOffice(officeIndex);
      setFormData((prev) => ({
        ...prev,
        office: officeLocations[officeIndex].officeDetails,
      }));
    };

    fetchRegion();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "office") {
      const officeIndex = Number.parseInt(value);
      setSelectedOffice(officeIndex);
      setFormData((prev) => ({
        ...prev,
        office: officeLocations[officeIndex].officeDetails,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      message: "",
      isSuccess: false,
      isSubmitting: true,
    });

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Website Contact Form",
        }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status: ${res.status}`);
      }

      let result;
      try {
        result = await res.json();
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError);
        throw new Error("Invalid response from server");
      }

      setFormStatus({
        message:
          result.message ||
          (result.success
            ? "Thank you! Your message has been sent successfully."
            : "Sorry, there was an error submitting your form. Please try again later."),
        isSuccess: result.success,
        isSubmitting: false,
      });

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          phoneType: "mobile",
          office: officeLocations[selectedOffice].officeDetails,
          message: "",
        });
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "There was an error submitting your form. Please try again later.";
      setFormStatus({
        message: `Error: ${errorMessage}`,
        isSuccess: false,
        isSubmitting: false,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 pb-20">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Contact Information Section */}
          <div className="bg-yellow-600 text-gray-800 p-8 w-full lg:w-2/5">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Contact Information
            </h2>
            <p className="mb-8">We're here to assist you with any inquiries.</p>

            {/* Office Selection Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {officeLocations.map((office, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedOffice(index);
                    setFormData((prev) => ({
                      ...prev,
                      office: office.officeDetails,
                    }));
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedOffice === index
                      ? "bg-gray-800 text-yellow-400"
                      : "bg-yellow-500 text-gray-800 hover:bg-yellow-400"
                  }`}
                >
                  {office.officeDetails.split(" - ")[0]}
                </button>
              ))}
            </div>

            {/* Selected Office Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <Building2 className="mr-4 h-6 w-6" />
                  <span className="font-semibold">
                    {officeLocations[selectedOffice].officeDetails}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="mr-4 h-6 w-6" />
                  <div>
                    <p>Phone: {officeLocations[selectedOffice].phone}</p>
                    <p>
                      <a
                        href={`https://wa.me/${officeLocations[selectedOffice].whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 transition duration-300"
                      >
                        WhatsApp: {officeLocations[selectedOffice].phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 h-6 w-6" />
                <span>{officeLocations[selectedOffice].email}</span>
              </div>
              <div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 mt-1" />
                  <div>
                    <p>{officeLocations[selectedOffice].address}</p>
                    <p>{officeLocations[selectedOffice].location}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="mr-4 h-6 w-6" />
                <span>{officeLocations[selectedOffice].workingHours}</span>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="w-full lg:w-3/5">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors duration-200 ${
                  activeTab === "contact"
                    ? "bg-gray-200 text-yellow-600 border-b-2 border-yellow-600"
                    : "bg-white text-gray-600 hover:text-gray-800"
                }`}
              >
                <Mail className="inline-block mr-2 h-5 w-5" />
                Send Message
              </button>
              <button
                onClick={() => setActiveTab("booking")}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors duration-200 ${
                  activeTab === "booking"
                    ? "bg-gray-200 text-yellow-600 border-b-2 border-yellow-600"
                    : "bg-white text-gray-600 hover:text-gray-800"
                }`}
              >
                <Calendar className="inline-block mr-2 h-5 w-5" />
                Book Meeting
              </button>
            </div>

            {/* Contact Form Tab */}
            {activeTab === "contact" && (
              <form onSubmit={handleSubmit} className="p-8 bg-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Send us a message
                </h2>

                {formStatus.message && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      formStatus.isSuccess
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name Field */}
                  <div>
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      placeholder="First Name"
                    />
                  </div>

                  {/* Last Name Field */}
                  <div>
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      placeholder="Last Name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-600 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      placeholder="Email Address"
                    />
                  </div>

                  {/* Phone Field with Type Selection */}
                  <div>
                    <label className="block text-gray-600 mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="phoneType"
                        name="phoneType"
                        value={formData.phoneType}
                        onChange={handleChange}
                        className="w-1/3 p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      >
                        <option value="mobile">Mobile</option>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="relative w-2/3">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span className="text-gray-500">
                            {officeLocations[selectedOffice].countryCode}
                          </span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-3 pl-10 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Office Field */}
                  <div className="sm:col-span-2">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="office"
                    >
                      Preferred Office
                    </label>
                    <select
                      id="office"
                      name="office"
                      className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                      value={selectedOffice}
                      onChange={handleChange}
                    >
                      {officeLocations.map((office, index) => (
                        <option key={index} value={index}>
                          {office.officeDetails}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="mt-6">
                  <label className="block text-gray-600 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className={`w-full bg-yellow-600 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 ${
                      formStatus.isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}

            {/* Booking Widget Tab */}
            {activeTab === "booking" && (
              <div className="p-8 bg-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Book a Meeting
                </h2>
                <p className="text-gray-600 mb-6">
                  Schedule a consultation with our team to discuss your business
                  needs and how we can help you grow.
                </p>

                {/* GoHighLevel Booking Widget */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/booking/9PTksH2wnp8z44xneDiF"
                    style={{
                      width: "100%",
                      border: "none",
                      overflow: "hidden",
                      minHeight: "500px",
                    }}
                    // scrolling="no"
                    id="ghl-booking-widget"
                    title="Book a Meeting"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;