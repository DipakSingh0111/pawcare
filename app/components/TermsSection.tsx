import React from "react";
import Link from "next/link";

export default function TermsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <p className="text-gray-600 mb-10 leading-relaxed text-[15px] animate-fade-up">
          Welcome to PawCare. By accessing or using our website and services, you agree to be bound by
          the following Terms and Conditions. If you do not agree with any part of these terms, please do not
          use our website or services.
        </p>

        <div className="space-y-10 animate-fade-up animation-delay-100">
          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">1. Use of Our Website</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of,
              restrict, or inhibit anyone else's use and enjoyment of the site. You must not misuse our site by introducing
              viruses or attempting to gain unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">2. Services</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              PawCare provides pet care and related services as described on our website. We reserve the right to modify,
              suspend, or discontinue any service at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">3. Appointments and Cancellations</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Appointments can be booked through our website or by contacting us directly. We request you to inform us in
              advance if you need to reschedule or cancel an appointment. Missed appointments without prior notice may be
              subject to a cancellation charge.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">4. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              You are responsible for providing accurate information when using our services. You agree not to hold PawCare
              liable for any issues arising from incorrect or incomplete information provided by you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              All content on this website, including text, images, logos, and designs, is the property of PawCare and is
              protected by applicable copyright and trademark laws. You may not use any content without our prior written
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              PawCare shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our
              website or services. Our total liability, if any, shall be limited to the amount paid for the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">7. Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We may update these Terms and Conditions from time to time. Any changes will be posted on this page with the
              updated effective date. Your continued use of our website and services constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any
              disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              If you have any questions about these Terms and Conditions, please contact us at{" "}
              <a href="mailto:hello@pawcare.com" className="text-[#ffb016] hover:underline">
                hello@pawcare.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+919876543210" className="text-[#ffb016] hover:underline">
                +91 98765 43210
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
