import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8 py-12">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

          <motion.img
            src="/futuristic_Robot.jpeg"
            alt="Futuristic Robot"
            width={500}
            height={500}
            className="relative z-10 w-[85vw] max-w-[280px] sm:max-w-[380px] md:max-w-[500px] rounded-3xl object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 1.2 },
              x: { duration: 1.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left max-w-2xl mx-auto md:mx-0">
          <motion.h1
            className="font-extrabold leading-tight mb-6 text-[clamp(2.5rem,8vw,5rem)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            THE FUTURE IS{" "}
            <motion.span
              className="text-cyan-400"
              animate={{
                textShadow: [
                  "0 0 10px #22d3ee",
                  "0 0 25px #22d3ee",
                  "0 0 10px #22d3ee",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              CYBORG
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Merging Human Intelligence with Artificial Evolution.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 hover:scale-105 transition-all duration-300 font-semibold text-black">
              Launch Mission
            </button>

            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_#22d3ee] transition-all duration-300">
              Explore Technology
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
