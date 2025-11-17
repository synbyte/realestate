"use client";

import ContactForm from "@/components/contact-form";
import { CheckCircle2, Clock, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url(/hero-background.webp)",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#b3dcff]/60 via-white/80 to-[#b3dcff]/30" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Sell Your Home Fast
              <br />
              <span className="text-[#00ad45]">Get Cash in Hand</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              We purchase properties fast, in any condition. Get a fair cash
              offer without repairs, fees, or delays. Simple, no-pressure, and
              confidential.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-lg bg-[#00ad45] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#00ad45]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00ad45] transition-all"
              >
                Get Your Cash Offer
              </a>
              <a
                href="#process"
                className="text-base font-semibold leading-6 text-gray-900 hover:text-[#00ad45] transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How the Process Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to get your cash offer
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#5ecc62]/20 to-white p-8 border border-[#5ecc62]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5ecc62]">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Contact Us
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Fill out our form or give us a call to tell us about your
                property. It&apos;s quick, easy, and confidential.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#5ecc62]/20 to-white p-8 border border-[#5ecc62]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5ecc62]">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Receive a Cash Offer
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ll review the details and present you with a fair,
                no-obligation, all-cash offer within 24 hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#00ad45]/20 to-white p-8 border border-[#00ad45]/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00ad45]">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Close & Get Paid
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                If you accept, we&apos;ll close at a reputable local title
                company on your schedule. You get cash in hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#b3dcff]/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real experiences from satisfied sellers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <div className="flex text-[#5ecc62]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;Smooth, fast, and stress-free. Got my offer the same
                day.&quot;
              </p>
              <p className="text-sm font-medium text-gray-900">
                — Satisfied Customer
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <div className="flex text-[#5ecc62]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;The easiest home sale I&apos;ve ever experienced. Highly
                recommend.&quot;
              </p>
              <p className="text-sm font-medium text-gray-900">
                — Happy Seller
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-100">
              <div className="mb-4">
                <div className="flex text-[#5ecc62]">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                &quot;No repairs, no showings, just a clean cash offer.&quot;
              </p>
              <p className="text-sm font-medium text-gray-900">
                — Property Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get Your Cash Offer Today
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you within 24
              hours with a fair, no-obligation cash offer.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#b3dcff]/10 to-white p-8 sm:p-12 border border-[#b3dcff]/30 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Real Estate Company. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
