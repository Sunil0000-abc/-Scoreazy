const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
          What Parents & Students Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              “My daughter’s confidence has improved drastically. She now participates in class with excitement. Thank you Scoreazy!”
            </p>
            <h4 className="font-semibold text-blue-600">– Mrs. Sharma, Parent</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              “I used to be scared to speak in front of others, but now I enjoy sharing my ideas with my friends.”
            </p>
            <h4 className="font-semibold text-blue-600">– Aarav, Grade 5 Student</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              “This microcourse is well-designed. Easy to follow, fun, and very impactful. Highly recommended for all parents.”
            </p>
            <h4 className="font-semibold text-blue-600">– Ritu Mehta, Teacher</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
