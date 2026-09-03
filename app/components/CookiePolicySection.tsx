import React from "react";

export default function CookiePolicySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <p className="text-gray-600 mb-10 leading-relaxed text-[15px] animate-fade-up">
          At PawCare, we believe in being clear and open about how we collect and use data related to you. 
          This Cookie Policy provides detailed information about how and when we use cookies on our website.
        </p>

        <div className="space-y-10 animate-fade-up animation-delay-100">
          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">1. What are cookies?</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Cookies are small text files that are placed on your computer or mobile device by websites that you visit. 
              They are widely used in order to make websites work, or work more efficiently, as well as to provide 
              information to the owners of the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">2. How we use cookies</h2>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px]">
              <li><strong>Essential cookies:</strong> These are required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
              <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website, allowing us to personalize our content for you.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">3. Managing cookies</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, 
              including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">4. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              If you have any questions about our Cookie Policy, please contact us at{" "}
              <a href="mailto:hello@pawcare.com" className="text-[#ffb016] hover:underline">
                hello@pawcare.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 bg-[#fffaf5] p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px]">
          <span className="text-gray-600">Last updated: May 20, 2025</span>
          <span className="font-bold text-[#0b1324]">Thank you for trusting PawCare.</span>
        </div>
      </div>
    </section>
  );
}
