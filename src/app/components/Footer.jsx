const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Brand or Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Scoreazy. All rights reserved.</p>
        </div>

        {/* Right: Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#faq" className="hover:underline">FAQs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
