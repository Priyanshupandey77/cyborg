function Contact() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Connect With The Future
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Have a question or want to collaborate? Send us a message.
        </p>

        <form className="bg-gray-900 p-8 rounded-xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-3 rounded-2xl transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;