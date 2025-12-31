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
    <nav className="z-50 bg-white shadow-sm border-b border-gray-200 py-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold text-gray-900"
              aria-label="Aksesorizeme home"
            >
              <img src="/logo.png" alt="Aksesorizeme Logo" className="h-30 w-auto md:h-30" />
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

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      <div className="md:hidden fixed inset-x-0 top-16 z-50" role="dialog" aria-hidden={!open}>
        <div
          className={`transform transition-all duration-300 ease-in-out ${
            open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-2 opacity-0 pointer-events-none'
          } border-t border-gray-100 bg-white px-4 pt-4 pb-6 shadow-lg`}
        >
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
    // <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
    //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //     <div className="flex h-16 items-center justify-between">
    //       <div className="flex items-center space-x-3">
    //         <div className="flex items-center space-x-2">
    //           <img alt="AKSESORIZEME" className="h-28 w-auto" src="/logo.png" />
    //         </div>
    //       </div>
    //       <div className="hidden items-center space-x-8 lg:flex">
    //         <a
    //           href="#features"
    //           className="font-medium text-gray-700 transition-colors hover:text-purple-600"
    //         >
    //           Features
    //         </a>
    //         <a
    //           href="#pricing"
    //           className="font-medium text-gray-700 transition-colors hover:text-purple-600"
    //         >
    //           Pricing
    //         </a>
    //         <a
    //           href="#contact"
    //           className="font-medium text-gray-700 transition-colors hover:text-purple-600"
    //         >
    //           Contact
    //         </a>
    //       </div>
    //       <div className="flex items-center space-x-6">
    //         <button
    //           className="hidden text-gray-600 transition-colors hover:text-purple-600 md:block"
    //           aria-label="Search"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             className="lucide lucide-search h-5 w-5"
    //             aria-hidden="true"
    //           >
    //             <path d="m21 21-4.34-4.34"></path>
    //             <circle cx="11" cy="11" r="8"></circle>
    //           </svg>
    //         </button>
    //         <button
    //           className="hidden text-gray-600 transition-colors hover:text-purple-600 md:block"
    //           aria-label="Account"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             className="lucide lucide-user h-5 w-5"
    //             aria-hidden="true"
    //           >
    //             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    //             <circle cx="12" cy="7" r="4"></circle>
    //           </svg>
    //         </button>
    //         <button
    //           className="relative hidden text-gray-600 transition-colors hover:text-purple-600 md:block"
    //           aria-label="Cart"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             className="lucide lucide-shopping-cart h-5 w-5"
    //             aria-hidden="true"
    //           >
    //             <circle cx="8" cy="21" r="1"></circle>
    //             <circle cx="19" cy="21" r="1"></circle>
    //             <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    //           </svg>
    //           <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
    //             0
    //           </span>
    //         </button>
    //         <button
    //           className="text-gray-700 transition-colors hover:text-purple-600 lg:hidden"
    //           aria-label="Menu"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             className="lucide lucide-menu h-6 w-6"
    //             aria-hidden="true"
    //           >
    //             <path d="M4 5h16"></path>
    //             <path d="M4 12h16"></path>
    //             <path d="M4 19h16"></path>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}
