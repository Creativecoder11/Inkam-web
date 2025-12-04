"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import HeaderBanner from "@/components/layout/headerBanner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.acceptTerms
    ) {
      alert("Please fill in all required fields and accept the terms.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section className=" text-white ">
      <HeaderBanner
        title="Contact Us"
        heading={<>Under Construction</>}
      />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <div className="mb-8">
              <p className="text-sm tracking-wider text-gray-400 mb-4 flex items-center gap-3">
                CONTACT US
                <span className="h-[1px] w-24 bg-(--orange)"></span>
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
                Get in Touch
              </h1>
            </div>

            {/* Call Us */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-(--orange) p-4 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Call Us:</p>
                  <p className="text-xl font-semibold">+880 1234 567890</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm ml-16">
                If you need help or quick answers, our friendly support team is
                always just a call away.
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-(--orange) p-4 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Email:</p>
                  <p className="text-xl font-semibold">example@email.com</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm ml-16">
                Send us an email anytime, and our dedicated team will respond
                promptly with helpful assistance.
              </p>
            </div>

            {/* Office */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-(--orange) p-4 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Office:</p>
                  <p className="text-xl font-semibold">
                    Mirpur DOHS, H: 654, R: 09 Ave: 04, Dhaka
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm ml-16">
                Visit our office for personalized meetings, professional
                consultations, and reliable in-person support services.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Send Us a Message
            </h2>

            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Full Name<span className="text-(--orange)">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Please enter your full name"
                  className="w-full bg-transparent border-b border-gray-700 py-3 px-0 text-white placeholder-gray-500 focus:border-(--orange) focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address<span className="text-(--orange)">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Please provide your email address"
                  className="w-full bg-transparent border-b border-gray-700 py-3 px-0 text-white placeholder-gray-500 focus:border-(--orange) focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Phone Number<span className="text-(--orange)">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Please enter your phone number"
                  className="w-full bg-transparent border-b border-gray-700 py-3 px-0 text-white placeholder-gray-500 focus:border-(--orange) focus:outline-none transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Subject Line<span className="text-(--orange)">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Please enter your subject"
                  className="w-full bg-transparent border-b border-gray-700 py-3 px-0 text-white placeholder-gray-500 focus:border-(--orange) focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="150 word max."
                  rows={4}
                  maxLength={750}
                  className="w-full bg-transparent border-b border-gray-700 py-3 px-0 text-white placeholder-gray-500 focus:border-(--orange) focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 bg-transparent border border-gray-600 rounded focus:ring-2 focus:ring-(--orange) cursor-pointer"
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  I accept the{" "}
                  <span className="text-(--orange) underline hover:text-(--orange)-400">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-(--orange) underline hover:text-(--orange)-400">
                    Privacy Policy.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-(--orange) hover:bg-(--orange)-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
