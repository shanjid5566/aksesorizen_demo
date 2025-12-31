import React from 'react';
import { Lock, Zap, CreditCard } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Secure Transactions',
    desc:
      'Bank-level encryption and PCI DSS compliance ensure your payments are always secure.',
    icon: <Lock className="h-6 w-6 text-purple-600" />,
    bg: 'bg-purple-100',
  },
  {
    id: 2,
    title: 'Lightning Fast',
    desc: 'Process payments in seconds with our optimized infrastructure and global CDN.',
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    bg: 'bg-blue-100',
  },
  {
    id: 3,
    title: 'Multiple Payment Methods',
    desc: 'Accept credit cards, debit cards, and digital wallets from customers worldwide.',
    icon: <CreditCard className="h-6 w-6 text-pink-600" />,
    bg: 'bg-pink-100',
  },
];

const FeatureCard = ({ feature }) => (
  <div className="rounded-xl bg-white p-6 transition hover:shadow-xl">
    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bg}`}>
      {feature.icon}
    </div>

    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
    <p className="text-gray-600">{feature.desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Why Choose Us?</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
