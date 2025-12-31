import React from 'react';

const sections = [
  { title: 'Product', links: ['Features', 'Pricing', 'API'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
];

export default function Footer() {
  return (
    <footer className="mt-0 w-full bg-gray-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">PaymentHub</h3>
            <p className="text-gray-400">We make you website design.</p>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="mb-4 font-semibold text-white">{sec.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {sec.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 PaymentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
