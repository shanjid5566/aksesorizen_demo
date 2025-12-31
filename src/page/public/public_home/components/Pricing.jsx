import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const plans = [
  {
    id: 'starter',
    title: 'Starter',
    price: '$0',
    priceSuffix: '/month',
    features: ['2.9% + $0.30 per transaction', 'Basic support', 'Up to $10K/month'],
    cardClass: 'scale-95 md:scale-100 rounded-xl bg-white p-8 shadow-lg transition hover:shadow-2xl',
    btnClass: 'w-full rounded-lg bg-gray-200 py-3 font-semibold text-gray-800 transition hover:bg-gray-300',
    iconClass: 'text-green-500',
  },
  {
    id: 'professional',
    title: 'Professional',
    price: '$49',
    priceSuffix: '/month',
    features: ['2.5% + $0.25 per transaction', 'Priority support', 'Up to $100K/month', 'Advanced analytics'],
    cardClass: 'md:scale-105 transform rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 text-white shadow-2xl',
    btnClass: 'w-full rounded-lg bg-white py-3 font-semibold text-purple-600 transition hover:bg-gray-100',
    iconClass: 'text-white',
    popular: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    features: ['Custom rates', '24/7 dedicated support', 'Unlimited volume', 'Custom integrations'],
    cardClass: 'scale-95 md:scale-100 rounded-xl bg-white p-8 shadow-lg transition hover:shadow-2xl',
    btnClass: 'w-full rounded-lg bg-gray-200 py-3 font-semibold text-gray-800 transition hover:bg-gray-300',
    iconClass: 'text-green-500',
  },
];

const PlanCard = ({ plan }) => (
  <div className={plan.cardClass}>
    {plan.popular && (
      <div className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-sm font-bold text-purple-600">POPULAR</div>
    )}

    <h3 className={`mb-4 text-2xl font-bold ${plan.popular ? 'text-white' : ''}`}>{plan.title}</h3>

    <div className="mb-4">
      <span className="text-4xl font-bold">{plan.price}</span>
      {plan.priceSuffix && <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>{plan.priceSuffix}</span>}
    </div>

    <ul className="mb-6 space-y-3">
      {plan.features.map((f, i) => (
        <li key={i} className="flex items-center">
          <CircleCheckBig className={`mr-2 h-5 w-5 ${plan.iconClass}`} aria-hidden="true" />
          <span className={plan.popular ? 'text-white' : ''}>{f}</span>
        </li>
      ))}
    </ul>

    <button className={plan.btnClass}>{plan.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}</button>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Simple Pricing</h2>

        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
