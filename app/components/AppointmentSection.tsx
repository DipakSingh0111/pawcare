"use client";

import React, { useState } from "react";
import { User, Phone, Mail, PawPrint, Calendar, Clock, Edit3, ShieldCheck, ChevronDown, CalendarDays, ArrowRight } from "lucide-react";
import { site, SectionProps, AppointmentData } from "@/data/index";

export default function AppointmentSection({ data, className }: SectionProps<AppointmentData> = {}) {
  const componentData = data || site.appointment;
  const { tagline, title, description, submitLabel, trustNote, fields } = componentData;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    petName: "",
    petType: "",
    petAge: "",
    appointmentDate: "",
    appointmentTime: "",
    serviceNeeded: "",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Appointment request submitted successfully!");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      petName: "",
      petType: "",
      petAge: "",
      appointmentDate: "",
      appointmentTime: "",
      serviceNeeded: "",
      additionalNotes: "",
    });
  };

  return (
    <section className={`py-10 md:py-16 bg-[#fffaf5] relative overflow-hidden ${className || ""}`}>
      {/* Background decorations */}
      <div className="absolute left-10 top-32 opacity-20 hidden md:block">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-[#ffb016] rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="absolute left-[-50px] bottom-10 opacity-[0.03] hidden md:block">
        <PawPrint size={200} />
      </div>

      <div className="absolute right-[-80px] bottom-[-80px] w-64 h-64 border-[1px] border-[#ffb016]/20 rounded-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-full relative transform rotate-45">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute w-full h-[1px] bg-[#ffb016]/20" style={{ top: `${i * 10}%` }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-[#e69300]/30"></div>
            <div className="flex items-center gap-2 text-[#e69300] font-bold text-sm tracking-wider uppercase">
              <PawPrint className="w-4 h-4" />
              {tagline}
            </div>
            <div className="h-[1px] w-12 bg-[#e69300]/30"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1324] mb-6 font-serif">
            {title}
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
               <div className="h-[1px] w-20 bg-[#e69300]/30"></div>
               <PawPrint className="w-4 h-4 text-[#e69300]" />
               <div className="h-[1px] w-20 bg-[#e69300]/30"></div>
            </div>
          </div>

          <p className="text-gray-600">
            {description}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.fullName.label}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={fields.fullName.placeholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.phone.label}</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={fields.phone.placeholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.email.label}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={fields.email.placeholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm"
                    required
                  />
                </div>
              </div>

              {/* Pet Name */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.petName.label}</label>
                <div className="relative">
                  <PawPrint className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    placeholder={fields.petName.placeholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm"
                    required
                  />
                </div>
              </div>

              {/* Pet Type */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.petType.label}</label>
                <div className="relative">
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm appearance-none text-gray-500"
                    required
                  >
                    <option value="" disabled>{fields.petType.placeholder}</option>
                    {fields.petType.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Pet Age */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.petAge.label}</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="petAge"
                    value={formData.petAge}
                    onChange={handleChange}
                    placeholder={fields.petAge.placeholder}
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm"
                    required
                  />
                </div>
              </div>

              {/* Appointment Date */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.appointmentDate.label}</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm text-gray-500 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
                    required
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Appointment Time */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.appointmentTime.label}</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    className="w-full pl-12 pr-10 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm text-gray-500 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
                    required
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Service Needed */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0b1324]">{fields.serviceNeeded.label}</label>
                <div className="relative">
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm appearance-none text-gray-500"
                    required
                  >
                    <option value="" disabled>{fields.serviceNeeded.placeholder}</option>
                    {site.services.items.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#0b1324]">
                {fields.additionalNotes.label} <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Edit3 className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  placeholder={fields.additionalNotes.placeholder}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ffb016] focus:ring-1 focus:ring-[#ffb016] transition-all text-sm resize-y"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="bg-[#0b1324] hover:bg-[#1a2b4c] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-colors w-full md:w-auto min-w-[280px]"
              >
                <CalendarDays className="w-5 h-5 text-[#ffb016]" />
                {submitLabel}
                <ArrowRight className="w-5 h-5 text-[#ffb016] ml-2" />
              </button>
            </div>
          </form>
        </div>

        {/* Trust note */}
        <div className="flex items-center justify-center gap-2 mt-8 text-gray-500 text-sm">
          <ShieldCheck className="w-5 h-5 text-[#ffb016]" />
          <span>{trustNote}</span>
        </div>
      </div>
    </section>
  );
}
