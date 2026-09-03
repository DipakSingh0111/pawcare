"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted", formData);
    alert("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#fffaf5] py-16 md:py-24 space-y-20">
      
      {/* 1. Get in Touch */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1324] mb-4 font-serif">
            Get in Touch
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-12 bg-[#ffb016]"></div>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Have questions or need assistance? Feel free to reach out to us<br className="hidden md:block" />
            through email, phone, or visit us at our address.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
            
            {/* Email */}
            <div className="flex flex-col items-center pb-8 md:pb-0 md:pr-8">
              <h3 className="text-lg font-bold text-[#0b1324] mb-3 font-serif">Email Us</h3>
              <p className="text-gray-600 text-sm mb-4">We're happy to assist you via email.</p>
              <a href="mailto:hello@pawcare.com" className="text-[#ffb016] font-semibold text-sm hover:underline mt-auto">
                hello@pawcare.com
              </a>
            </div>

            {/* Call */}
            <div className="flex flex-col items-center py-8 md:py-0 md:px-8">
              <h3 className="text-lg font-bold text-[#0b1324] mb-3 font-serif">Call Us</h3>
              <p className="text-gray-600 text-sm mb-1">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-gray-600 text-sm mb-4">Sunday: 10:00 AM – 4:00 PM</p>
              <a href="tel:+919876543210" className="text-[#ffb016] font-semibold text-sm hover:underline mt-auto">
                +91 98765 43210
              </a>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center pt-8 md:pt-0 md:pl-8">
              <h3 className="text-lg font-bold text-[#0b1324] mb-3 font-serif">Our Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                PawCare Pet Wellness Center<br />
                123, Greenview Street,<br />
                Koramangala, Bangalore – 560034,<br />
                Karnataka, India
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Send Us a Message */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1324] mb-4 font-serif">
            Send Us a Message
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-12 bg-[#ffb016]"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-5 py-4 bg-[#fffaf5]/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ffb016] transition-all text-sm"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-[#fffaf5]/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ffb016] transition-all text-sm"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-5 py-4 bg-[#fffaf5]/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ffb016] transition-all text-sm"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-5 py-4 bg-[#fffaf5]/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ffb016] transition-all text-sm"
                required
              />
            </div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full px-5 py-4 bg-[#fffaf5]/50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ffb016] transition-all text-sm resize-y"
              required
            ></textarea>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-[#ffb016] hover:bg-[#e69300] text-white px-10 py-3.5 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 3. Find Us */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1324] mb-4 font-serif">
            Find Us
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-12 bg-[#ffb016]"></div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Visit us at our center. We'd love to meet you and your pets!
          </p>
        </div>

        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps?q=Koramangala,Bangalore&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          ></iframe>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 md:top-auto md:bottom-8 md:left-8 bg-white p-5 rounded-2xl shadow-xl flex gap-4 items-start max-w-[320px]">
            <div className="bg-[#ffb016]/10 p-3 rounded-full shrink-0">
              <MapPin className="w-6 h-6 text-[#ffb016]" fill="#ffb016" stroke="white" />
            </div>
            <div>
              <h4 className="font-bold text-[#0b1324] text-sm mb-1">PawCare Pet Wellness Center</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                123, Greenview Street,<br />
                Koramangala, Bangalore – 560034,<br />
                Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
