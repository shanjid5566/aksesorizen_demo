import React from 'react'

export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-28 lg:py-28">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            We Make You Website Design
          </h2>

          <div className="mt-4">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-400">
              AKSESORIZEME
            </span>
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Accept payments online with confidence. Fast, secure, and reliable payment gateway
            integration for your business.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg hover:opacity-95">
              Try Payment Demo
            </button>
            <button className="px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 font-medium bg-white/40 hover:bg-white">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white rounded-xl shadow-md py-8 px-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">99.9%</div>
            <div className="mt-3 text-sm text-gray-500">Uptime Guarantee</div>
          </div>

          <div className="bg-white rounded-xl shadow-md py-8 px-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">2.5s</div>
            <div className="mt-3 text-sm text-gray-500">Average Processing</div>
          </div>

          <div className="bg-white rounded-xl shadow-md py-8 px-6 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">24/7</div>
            <div className="mt-3 text-sm text-gray-500">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
