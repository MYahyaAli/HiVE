"use client";

import type React from "react";

interface Plan {
  title: string;
  price: string;
  features: string[];
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan;
  regionCode: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

const contactInfoByRegion: { [key: string]: ContactInfo } = {
  LK: {
    phone: "+94 70 582 2929",
    email: "hello@myhive.biz",
    location: "Hive Colombo - Sri Lanka",
  },
  CA_ON: {
    phone: "+1 437 254 3077",
    email: "hello@myhive.biz",
    location: "Hive Toronto - Canada",
  },
  CA_BC: {
    phone: "+1 236 979 1372",
    email: "hello@myhive.biz",
    location: "Hive Doha - Qatar",
  },
};

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  plan,
  regionCode,
}) => {
  if (!isOpen) return null;

  const contactInfo = contactInfoByRegion[regionCode] || contactInfoByRegion.LK;

  const isAlliancePlan =
    plan.title === "Alliance Plan" || plan.title === "Special Plan";

  const emailAddress = isAlliancePlan
    ? "alliances@myhive.biz"
    : contactInfo.email;

  const phoneNumber = isAlliancePlan ? "+1 (437) 254-3077" : contactInfo.phone;
  const address = isAlliancePlan ? "Hive Toronto - Canada" : contactInfo.location;

  const displayPlanTitle = isAlliancePlan ? "Alliance Plan" : plan.title;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96 max-w-full relative">
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Contact Us - {displayPlanTitle}
          </h2>
          <p className="mb-4">
            Thank you for your interest in our {displayPlanTitle}. Please
            contact us using the information below:
          </p>
          <p className="mb-2">Phone:</p>
          <p className="font-bold mb-4">{phoneNumber}</p>
          <p className="mb-2">Email:</p>
          <p className="font-bold mb-4">{emailAddress}</p>
          <p className="text-sm text-gray-600">{address}</p>
        </div>
      </div>
      <div className="fixed inset-0 z-40" onClick={onClose}></div>
    </div>
  );
};

export default ContactModal;
