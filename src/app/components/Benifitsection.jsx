import Image from "next/image";
import img1 from "../assets/build.jpg";
import img2 from "../assets/psychology.jpg";
import img3 from '../assets/parent.jpg'

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Why Choose This Microcourse?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative rounded-lg shadow hover:shadow-md transition overflow-hidden h-64">
            {/* Background Image */}
            <Image
              src={img1}
              alt="Confidence boost"
              fill
              className="w-full h-full object-containr z-0"
            />

            {/* Overlay and Content */}
            <div className="absolute inset-0 bg-black/30 z-10 p-6 text-white flex items-center justify-center">
              <h3 className="text-xl font-semibold mb-2 bottom-1 absolute">
                Builds Confidence
              </h3>
              <p>
                Interactive activities designed to boost self-esteem and
                classroom participation.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg shadow hover:shadow-md transition overflow-hidden h-64">
            {/* Background Image */}
            <Image
              src={img2}
              alt="Confidence boost"
              fill
              className="w-full h-full object-containr z-0"
            />
            <div className="absolute inset-0 bg-black/30 z-10 p-6 text-white flex items-center justify-center">
              <h3 className="text-xl font-semibold mb-2 bottom-1 absolute">
                Builds Confidence
              </h3>
              <p>
                Designed using educational psychology to engage young learners
                effectively.
              </p>
            </div>
          </div>
          <div className="relative rounded-lg shadow hover:shadow-xl transition overflow-hidden h-64">
            {/* Background Image */}
            <Image
              src={img3}
              alt="Confidence boost"
              fill
              className="w-full h-full object-containr z-0"
            />
            <div className="absolute inset-0 bg-black/30 z-10 p-6 text-white flex items-center justify-center">
              <h3 className="text-xl font-semibold mb-2 bottom-1 absolute">
                Parents friendly
              </h3>
              <p >
                Regular updates and easy tracking to keep parents in the loop
                with their child’s progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
