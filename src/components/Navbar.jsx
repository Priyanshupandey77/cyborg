function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-gray-950 text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="/cyborgLogo.jpeg"
          alt="Cyborg Logo"
          className="h-12 w-12 rounded-full object-cover border-2 border-cyan-400"
        />
        <h2 className="text-2xl font-bold tracking-wider text-cyan-400 drop-shadow-[0_0_10px_cyan]">
          CYBORG
        </h2>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-8 text-lg font-medium">
        <li className="cursor-pointer transition hover:text-cyan-400">Home</li>
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
    </nav>
  );
}

export default Navbar;
