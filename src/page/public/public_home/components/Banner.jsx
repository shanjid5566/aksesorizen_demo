const stats = [
  { value: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-600' },
  { value: '2.5s', label: 'Average Processing', color: 'text-blue-600' },
  { value: '24/7', label: 'Customer Support', color: 'text-pink-600' },
];

function StatCard({ value, label, color }) {
  return (
    <div className="transform rounded-xl bg-white p-8 text-center shadow-lg transition hover:scale-105">
      <div className={`mb-2 os-bold text-4xl font-bold ${color}`}>{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-sky-50 to-pink-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12  md:py-18 lg:py-26">
        <div className="text-center">
          <h2 className="os-extrabold text-5xl leading-10 text-slate-900 sm:text-4xl md:text-5xl lg:text-7xl">
            We Make You Website Design
          </h2>

          <div className="mt-4">
            <span className="os-extrabold block bg-gradient-to-r from-purple-700 to-violet-500 bg-clip-text text-5xl font-black text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              AKSESORIZEME
            </span>
          </div>

          <p className="mx-auto mt-6 w-full max-w-3xl text-xl text-gray-600">
            Accept payments online with confidence. Fast, secure, and reliable payment gateway
            integration for your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="os-semibold transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-5 text-lg font-semibold text-white transition duration-200 hover:scale-105 hover:shadow-xl">
              Try Payment Demo
            </button>
            <button className="os-semibold rounded-lg border-2 border-purple-600 bg-white px-10 py-5 text-lg font-semibold text-purple-600 transition duration-200 hover:bg-purple-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-14 lg:mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} color={s.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
