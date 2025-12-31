import React from 'react';

const stats = [
  { id: 1, value: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-600' },
  { id: 2, value: '2.5s', label: 'Average Processing', color: 'text-blue-600' },
  { id: 3, value: '24/7', label: 'Customer Support', color: 'text-pink-600' },
];

const StatCard = ({ item }) => (
  <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition hover:scale-105">
    <div className={`mb-2 text-4xl font-bold ${item.color}`}>{item.value}</div>
    <div className="text-gray-600">{item.label}</div>
  </div>
);

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-extrabold text-gray-900 md:text-6xl">
            We Make You Website Design
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AKSESORIZEME
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Accept payments online with confidence. Fast, secure, and reliable payment gateway
            integration for your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-200 hover:scale-105 hover:shadow-xl">
              Try Payment Demo
            </button>
            <button className="rounded-lg border-2 border-purple-600 bg-white px-8 py-4 text-lg font-semibold text-purple-600 transition duration-200 hover:bg-purple-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <StatCard key={s.id} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
