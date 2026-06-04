import { FaBrain, FaRobot, FaShieldAlt, FaMicrochip } from "react-icons/fa";

function Feature() {
  const features = [
    {
      icon: <FaBrain />,
      title: "Neural Interface",
      desc: "Connect human cognition with advanced AI systems.",
    },
    {
      icon: <FaRobot />,
      title: "AI Intelligence",
      desc: "Intelligent systems capable of learning and adapting.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Protecting data with next-generation defense systems.",
    },
    {
      icon: <FaMicrochip />,
      title: "Autonomous Systems",
      desc: "Self-operating technologies built for the future.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Advanced Systems
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Exploring the technologies that power the next generation of
          cybernetic evolution.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-950 border border-cyan-500/20 p-8 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-cyan-400 text-5xl mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
