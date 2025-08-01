const FAQSection = () => {
  return (
    <section id="faq" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="text-left space-y-6">
          {/* FAQ 1 */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600">
              What age group is this microcourse designed for?
            </h4>
            <p className="text-gray-700">
              This course is specifically designed for students in Grades 3 to 5.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600">
              How long is the course and what is the format?
            </h4>
            <p className="text-gray-700">
              The course runs for 2 weeks and includes fun, interactive video lessons, activities, and self-reflection tasks.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h4 className="font-semibold text-lg text-blue-600">
              Do parents need to be involved in the course?
            </h4>
            <p className="text-gray-700">
              Parents receive regular updates but the course is designed to be self-guided by the student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
