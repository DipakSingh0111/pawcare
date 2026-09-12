import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Phone,
  Mail,
  ChevronRight,
  Home,
  Stethoscope,
  Utensils,
  Heart,
} from "lucide-react";
import { PawPrint } from "@/app/components/common/PawPrint";
import { LocationPin } from "@/app/components/common/LocationPin";

export default function LocationDetailSection({ activeSlug }: { activeSlug?: string }) {
  const locations = [
    { name: "Mumbai - Andheri", slug: "mumbai-andheri" },
    { name: "Mumbai - Bandra", slug: "mumbai-bandra" },
    { name: "Delhi - South Extension", slug: "delhi-south-extension" },
    { name: "Bengaluru - Koramangala", slug: "bengaluru-koramangala" },
    { name: "Hyderabad - Banjara Hills", slug: "hyderabad-banjara-hills" },
    { name: "Pune - Kalyani Nagar", slug: "pune-kalyani-nagar" },
    { name: "Ahmedabad - Prahlad Nagar", slug: "ahmedabad-prahlad-nagar" },
  ].map(loc => ({
    ...loc,
    active: loc.slug === activeSlug
  }));

  return (
    <section className="site-section bg-white">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Main Content */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            {/* Top Row: Image & Contact Info */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-3/5 h-64 md:h-auto relative rounded-2xl overflow-hidden shadow-sm">
                {/* Fallback image if exact one is not present */}
                <Image
                  src="/images/gallery/gallery_01.png"
                  alt="Location Interior"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>

              {/* Contact Info Box */}
              <div className="w-full md:w-2/5 bg-[#fafaf9] rounded-2xl p-6 flex flex-col justify-center gap-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <LocationPin className="w-5 h-5 text-[#ffb016] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1324] mb-1">
                      Address
                    </h4>
                    <p className="text-[14px] text-gray-500 leading-relaxed">
                      123, Andheri Link Road,
                      <br />
                      Andheri (W), Mumbai - 400053
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#ffb016] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1324] mb-1">
                      Working Hours
                    </h4>
                    <p className="text-[14px] text-gray-500">
                      Mon – Sun : 8:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#ffb016] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1324] mb-1">
                      Helpline
                    </h4>
                    <p className="text-[14px] text-gray-500">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#ffb016] mt-1 shrink-0" />
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0b1324] mb-1">
                      Email
                    </h4>
                    <p className="text-[14px] text-gray-500">
                      andheri@pawcare.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div>
              <div className="mb-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b1324] font-serif mb-2">
                  Location <span className="text-[#ffb016]">Overview</span>
                </h2>
                <div className="h-1 w-16 bg-[#ffb016]"></div>
              </div>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Our Andheri center is one of the largest and most advanced pet
                care facilities, designed to give your furry friends a home away
                from home. With spacious play areas, comfortable boarding suites
                and expert care, we ensure every pet feels safe, happy and loved.
              </p>
            </div>

            {/* Features Bar */}
            <div className="bg-[#fafaf9] rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
                <div className="flex items-center gap-3 md:px-4 first:pl-0">
                  <Home className="w-8 h-8 text-[#ffb016] shrink-0" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-600 leading-tight">
                    Spacious
                    <br />
                    Indoor & Outdoor
                    <br />
                    Play Areas
                  </span>
                </div>
                <div className="flex items-center gap-3 md:px-4">
                  <Stethoscope className="w-8 h-8 text-[#ffb016] shrink-0" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-600 leading-tight">
                    24/7 Veterinary
                    <br />
                    Support
                  </span>
                </div>
                <div className="flex items-center gap-3 md:px-4">
                  <Utensils className="w-8 h-8 text-[#ffb016] shrink-0" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-600 leading-tight">
                    Nutritious Food
                    <br />
                    & Personalized Diets
                  </span>
                </div>
                <div className="flex items-center gap-3 md:px-4 last:pr-0">
                  <Heart className="w-8 h-8 text-[#ffb016] shrink-0" strokeWidth={1.5} />
                  <span className="text-[13px] font-medium text-gray-600 leading-tight">
                    Safe, Clean
                    <br />
                    & Pet Friendly
                    <br />
                    Environment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              <div className="bg-[#0b1324] px-6 py-4 flex items-center gap-3">
                <PawPrint className="w-5 h-5 text-[#ffb016]" />
                <h3 className="text-white font-bold text-lg">Our Locations</h3>
              </div>
              <div className="p-3 flex flex-col gap-1">
                {locations.map((loc, idx) => (
                  <Link
                    key={idx}
                    href={`/location/${loc.slug}`}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-lg transition-colors ${
                      loc.active
                        ? "bg-[#fff7e8] text-[#ffb016]"
                        : "hover:bg-[#fafaf9] text-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <LocationPin
                        className={`w-4 h-4 ${
                          loc.active ? "text-[#ffb016]" : "text-gray-400"
                        }`}
                      />
                      <span
                        className={`text-[14px] font-medium ${
                          loc.active ? "text-[#0b1324]" : ""
                        }`}
                      >
                        {loc.name}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        loc.active ? "text-[#ffb016]" : "text-gray-300"
                      }`}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
