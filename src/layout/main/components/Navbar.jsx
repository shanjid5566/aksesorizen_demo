import React, { useEffect, useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <nav className="z-50 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold text-gray-900"
              aria-label="Aksesorizeme home"
            >
              <img src="/logo.png" alt="Aksesorizeme Logo" className="h-24 w-auto md:h-30" />
            </a>
          </div>

          <div className="hidden text-base md:flex md:space-x-8">
            <a href="#features" className="os-medium text-gray-900 hover:text-purple-700">
              Features
            </a>
            <a href="#pricing" className="os-medium text-gray-900 hover:text-purple-700">
              Pricing
            </a>
            <a href="#contact" className="os-medium text-gray-900 hover:text-purple-700">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex md:items-center md:gap-3">
              <button className="rounded-lg p-2 text-gray-600 hover:bg-gray-50" aria-label="Search">
                <Search className="h-4 w-4" />
              </button>
              <button
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-50"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </button>
              <a
                href="/cart"
                className="relative inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 rounded-full bg-purple-700 px-2 text-xs text-white">
                  0
                </span>
              </a>
            </div>

            <button
              className={`inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-50 focus:outline-none md:hidden`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`origin-top transform transition-all duration-200 md:hidden ${open ? 'scale-y-100 opacity-100' : 'pointer-events-none scale-y-0 opacity-0'}`}
        role="dialog"
        aria-hidden={!open}
      >
        <div className="border-t border-gray-100 bg-white px-4 pt-4 pb-6">
          <div className="flex flex-col space-y-3">
            <a href="#features" onClick={() => setOpen(false)} className="os-medium text-gray-800">
              Features
            </a>
            <a href="#pricing" onClick={() => setOpen(false)} className="os-medium text-gray-800">
              Pricing
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="os-medium text-gray-800">
              Contact
            </a>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              className="flex-1 rounded-md bg-purple-700 px-3 py-2 text-white"
              onClick={() => setOpen(false)}
            >
              Sign in
            </button>
            <a
              href="/cart"
              className="flex-1 rounded-md border border-gray-200 px-3 py-2 text-center"
              onClick={() => setOpen(false)}
            >
              Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
