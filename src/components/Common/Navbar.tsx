import { navItem } from "@/constants";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Left: Brand + links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-black tracking-wide text-slate-900">
            LUXE
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <ul className='hidden lg:flex gap-6'>
              {navItem.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-950">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Search + actions */}
        <div className="flex items-center gap-3">
          <div className="relative block">
            <input
              type="text"
              placeholder="Search gadgets..."
              className="w-40 rounded-full border border-slate-300 bg-white py-2 pl-4 pr-12 text-sm outline-none transition focus:border-slate-500 sm:w-56 md:w-72"
            />
            <button
              type="button"
              aria-label="Search"
              className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            >
              <Search size={16} />
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center  text-slate-700"
            aria-label="Cart"
          >
            <ShoppingCart size={16} />
          </button>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 md:bg-black md:px-3 md:py-2 md:font-medium md:text-white md:hover:bg-black"
          >
            <span>Sign In</span>
          </Link>


          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:bg-slate-100 md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white p-5 shadow-xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-lg font-bold text-slate-900">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
