function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          THE FUTURE IS{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_10px_cyan]">
            CYBORG
          </span>
        </h1>

        <p className="text-xl mb-8">
          Merging Human Intelligence with Artificial Evolution.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-cyan-500 hover:scale-105 transition font-semibold">
            Launch Mission
          </button>
          <button className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300">
            Explore Technology
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
