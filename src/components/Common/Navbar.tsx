import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Left: Brand + links */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-black tracking-wide text-slate-900">
            LUXE
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-slate-950">
              Shop
            </Link>
            <Link to="/" className="text-sm font-medium text-slate-700 hover:text-slate-950">
              New Arrivals
            </Link>
            <Link to="/about" className="text-sm font-medium text-slate-700 hover:text-slate-950">
              About
            </Link>
          </div>
        </div>

        {/* Right: Search + actions */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search gadgets..."
              className="w-56 rounded-full border border-slate-300 bg-white py-2 pl-4 pr-12 text-sm outline-none transition focus:border-slate-500 md:w-72"
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
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-black px-3 py-2 text-sm font-medium text-white "
          >
            <span className="hidden md:inline">Sign In</span>
          </Link>

          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
