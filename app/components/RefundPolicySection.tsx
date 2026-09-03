import React from "react";

export default function RefundPolicySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-8">
        <p className="text-gray-600 mb-10 leading-relaxed text-[15px] animate-fade-up">
          Thank you for choosing PawCare. We understand that plans can change, and we strive to make our 
          cancellation and refund processes as simple and transparent as possible.
        </p>

        <div className="space-y-10 animate-fade-up animation-delay-100">
          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">1. Cancellation of Appointments</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              If you need to cancel or reschedule an appointment, we kindly ask that you provide us with at least 
              24 hours notice. Cancellations made within 24 hours of the appointment time may be subject to a cancellation fee.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">2. Refund Eligibility</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Refunds are issued for services paid in advance if the cancellation is made within the acceptable timeframe. 
              Refunds will not be provided for services that have already been rendered.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">3. Processing Refunds</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Approved refunds will be processed and credited back to the original method of payment within 5-7 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0b1324] font-serif mb-3">4. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              If you have any questions about our Cancellation & Refund Policy, please contact us at{" "}
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
