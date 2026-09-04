import Image from "next/image";
import Link from "next/link";
import { MapPin, PawPrint } from "lucide-react";
import data from "@/data/data.json";

export default function LocationsSection() {
  const { locations } = data;

  return (
    <section className="site-section relative w-full overflow-hidden bg-white !pt-4 sm:!pt-6 lg:!pt-6">
      {/* Background Decorators */}
      {/* Left dots pattern */}
      <div className="absolute left-0 opacity-20 pointer-events-none">
        <svg width="150" height="150" fill="none" viewBox="0 0 100 100">
          <pattern
            id="dots"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#ffb016" cx="2" cy="2" r="2"></circle>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots)"></rect>
        </svg>
      </div>
      {/* Right bottom paw */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/4">
        <svg
          viewBox="0 0 100 100"
          className="w-[400px] h-[400px] fill-[#0b1324]"
        >
          <path d="M50 80 C25 80, 20 50, 20 50 C20 50, 25 35, 50 40 C75 35, 80 50, 80 50 C80 50, 75 80, 50 80" />
          <circle cx="35" cy="45" r="8" />
          <circle cx="65" cy="45" r="8" />
          <circle cx="20" cy="60" r="6" />
          <circle cx="80" cy="60" r="6" />
        </svg>
      </div>

      <div className="site-container relative z-10">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <div className="mb-3 flex items-center space-x-2">
            <PawPrint className="w-5 h-5 text-[#0b1324]" />
            <span className="text-[#ffb016] font-bold text-sm tracking-wider uppercase">
              {locations.eyebrow}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1324] mb-4 font-serif">
            {locations.title}{" "}
            <span className="text-[#ffb016]">{locations.titleHighlight}</span>
          </h2>

          <div className="flex items-center space-x-4 mb-6">
            <div className="h-px w-12 bg-gray-300"></div>
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-none stroke-[#ffb016] stroke-2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>

          <p className="text-gray-500 max-w-lg text-base leading-relaxed whitespace-pre-line">
            {locations.description}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.places.map((place, index) => {
            const citySlugMap: Record<string, string> = {
              "New Delhi": "delhi-south-extension",
              "Mumbai": "mumbai-andheri",
              "Bengaluru": "bengaluru-koramangala",
              "Hyderabad": "hyderabad-banjara-hills",
              "Pune": "pune-kalyani-nagar",
              "Ahmedabad": "ahmedabad-prahlad-nagar"
            };
            const slug = citySlugMap[place.city] || place.city.toLowerCase().replace(/ /g, '-');
            
            return (
            <Link
              href={`/location/${slug}`}
              key={index}
              className="bg-[#fafaf9] rounded-2xl p-6 relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 block"
            >
              <div className="flex items-center space-x-6 relative">
                {/* Image Container with floating pin */}
                <div className="relative w-28 h-28 flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-gray-200">
                    <img
                      src={place.image}
                      alt={place.city}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Pin */}
                  <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2 w-9 h-9 bg-[#0b1324] rounded-t-full rounded-bl-full rounded-br-sm rotate-45 flex items-center justify-center border-2 border-white shadow-md z-10">
                    <div className="w-3 h-3 bg-[#ffb016] rounded-full"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col pt-2 pb-6">
                  <h3 className="text-xl font-extrabold text-[#0b1324] mb-2">
                    {place.city}
                  </h3>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-[#ffb016] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-xs leading-relaxed max-w-[140px]">
                      {place.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom line and paw */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-center">
                <div className="w-full h-px bg-gray-200 relative">
                  <div className="absolute left-1/2 -top-3 -translate-x-1/2 bg-[#fafaf9] px-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#ffb016]">
                      <path d="M12 21a5 5 0 0 1-5-5c0-2.5 3-5 5-5s5 2.5 5 5a5 5 0 0 1-5 5z" />
                      <circle cx="8" cy="11" r="2.5" />
                      <circle cx="16" cy="11" r="2.5" />
                      <circle cx="12" cy="7" r="3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}

