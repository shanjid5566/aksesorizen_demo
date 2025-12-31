const Contact = () => {
  return (

    <section id="contact" className="w-full bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">Get In Touch</h2>
        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-600"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-600"
              placeholder="your@email.com"
              type="email"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-purple-600"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full transform rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-3 font-semibold text-white transition duration-200 hover:scale-105 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
