import React from 'react';

export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-28 lg:py-26">
        <div className="text-center">
          <h2 className="os-bold text-5xl leading-10 text-slate-900 sm:text-4xl md:text-5xl lg:text-7xl">
            We Make You Website Design
          </h2>

          <div className="mt-4">
            <span className="os-bold block bg-linear-to-r from-purple-700 to-purple-700 bg-clip-text text-5xl font-black text-[#0000] sm:text-5xl md:text-6xl lg:text-7xl">
              AKSESORIZEME
            </span>
          </div>

          <p className="mx-auto mt-6 w-full max-w-3xl text-xl text-gray-600">
            Accept payments online with confidence. Fast, secure, and reliable payment gateway
            integration for your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-200 hover:scale-105 hover:shadow-xl">
              Try Payment Demo
            </button>
            <button className="rounded-lg border-2 border-purple-600 bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition duration-200 hover:bg-purple-50">
              Learn More
            </button>
          </div>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="transform rounded-xl bg-white p-8 text-center shadow-lg transition hover:scale-105">
            <div class="mb-2 text-4xl font-bold text-purple-600">99.9%</div>
            <div class="text-gray-600">Uptime Guarantee</div>
          </div>

          <div class="transform rounded-xl bg-white p-8 text-center shadow-lg transition hover:scale-105">
            <div class="mb-2 text-4xl font-bold text-blue-600">2.5s</div>
            <div class="text-gray-600">Average Processing</div>
          </div>

          <div class="transform rounded-xl bg-white p-8 text-center shadow-lg transition hover:scale-105">
            <div class="mb-2 text-4xl font-bold text-pink-600">24/7</div>
            <div class="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
