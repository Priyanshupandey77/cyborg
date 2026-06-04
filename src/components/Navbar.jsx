import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/cyborgLogo.jpeg"
            alt="Cyborg Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-cyan-400"
          />

          <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-cyan-400 drop-shadow-[0_0_10px_cyan]">
            CYBORG
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li className="cursor-pointer transition hover:text-cyan-400">
            Home
          </li>
          <li className="cursor-pointer transition hover:text-cyan-400">
            Features
          </li>
          <li className="cursor-pointer transition hover:text-cyan-400">
            Technology
          </li>
          <li className="cursor-pointer transition hover:text-cyan-400">
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-cyan-500/20">
          <ul className="flex flex-col py-4">
            <li className="px-6 py-3 hover:bg-gray-800 hover:text-cyan-400 cursor-pointer transition">
              Home
            </li>
            <li className="px-6 py-3 hover:bg-gray-800 hover:text-cyan-400 cursor-pointer transition">
              Features
            </li>
            <li className="px-6 py-3 hover:bg-gray-800 hover:text-cyan-400 cursor-pointer transition">
              Technology
            </li>
            <li className="px-6 py-3 hover:bg-gray-800 hover:text-cyan-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
