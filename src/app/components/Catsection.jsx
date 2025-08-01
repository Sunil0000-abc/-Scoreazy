const CTASection = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-blue-100 to-blue-500 text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Help Your Child Build Confidence?
        </h2>
        <p className="text-lg mb-8">
          Enroll in Scoreazy’s Microcourse for Grades 3–5 today and set them on the path to success!
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Enroll Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;
