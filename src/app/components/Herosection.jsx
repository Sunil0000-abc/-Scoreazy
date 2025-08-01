// components/HeroSection.js

import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../assets/hero.jpg'; // Don't move image to public

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Confident student learning online"
          fill
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-blue-900/50" /> {/* Overlay */}
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Boost Your Child's Confidence with Scoreazy's Microcourse
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          A 2-week fun and interactive course designed to build self-belief in students of Grades 3–5. Backed by educational psychology and delivered with care.
        </p>
        <Link
          href="#cta"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
