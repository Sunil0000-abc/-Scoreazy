"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down -> hide
      } else {
        setShowNavbar(true); // scrolling up -> show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 ">
          <Link href="/" onClick={closeMenu}>
            Scoreazy
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="#about">About</Link>
          <Link href="#benefits">Benefits</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#faq">FAQs</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Enroll Now
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
  className={`md:hidden bg-white px-6 pb-6 pt-4 flex flex-col space-y-4 text-gray-700 font-medium transform transition-all duration-300 ease-in-out ${
    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
  }`}
>
  <Link href="#about" className="block" onClick={() => setTimeout(closeMenu, 300)}>
    About
  </Link>
  <Link href="#benefits" className="block" onClick={() => setTimeout(closeMenu, 300)}>
    Benefits
  </Link>
  <Link href="#testimonials" className="block" onClick={() => setTimeout(closeMenu, 300)}>
    Testimonials
  </Link>
  <Link href="#faq" className="block" onClick={() => setTimeout(closeMenu, 300)}>
    FAQs
  </Link>
  <Link href="#contact" className="block" onClick={() => setTimeout(closeMenu, 300)}>
    Contact
  </Link>
  <a
    href="#cta"
    onClick={() => setTimeout(closeMenu, 300)}
    className="bg-blue-600 text-white px-5 py-2 text-center rounded-full hover:bg-blue-700 transition"
  >
    Enroll Now
  </a>
</div>

      )}
    </nav>
  );
};

export default Navbar;
