import React from "react";

export default function PrivacyPolicySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <p className="text-gray-600 mb-10 leading-relaxed text-[15px] animate-fade-up">
          Welcome to PawCare's Privacy Policy. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you as to how we look after your personal data when you visit our website.
        </p>

        <div className="space-y-10 animate-fade-up animation-delay-100">
          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              Identity Data, Contact Data, Financial Data, Transaction Data, Technical Data, Profile Data, Usage Data, and Marketing and Communications Data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: 
              Where we need to perform the contract we are about to enter into or have entered into with you, or where it is necessary for our legitimate interests.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">3. Data Security</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">4. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
