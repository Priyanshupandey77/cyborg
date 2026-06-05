function Timeline() {
  const timelineData = [
    {
      year: "2025",
      title: "Neural Networks",
      desc: "Advanced AI systems begin autonomous learning.",
    },
    {
      year: "2027",
      title: "Quantum Processing",
      desc: "Massive breakthroughs in computational power.",
    },
    {
      year: "2030",
      title: "Human-AI Integration",
      desc: "Direct communication between humans and machines.",
    },
    {
      year: "2035",
      title: "Full Cyborg Evolution",
      desc: "Biological and artificial intelligence become one.",
    },
  ];
  return (
    <section className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Evolution Timeline
        </h2>

        {timelineData.map((item) => (
          <div key={item.year} className="flex gap-6 mb-10">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div className="w-1 h-24 bg-cyan-400/30"></div>
            </div>

            <div>
              <p className="text-cyan-400 font-bold">{item.year}</p>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
