import BenefitsSection from "./components/Benifitsection";
import CTASection from "./components/Catsection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/navbar";
import TestimonialsSection from "./components/Testimonial";


export default function Home() {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <BenefitsSection/>
       <CTASection/>
       <TestimonialsSection/>
       <FAQSection/>
       <Footer/>
    </div>
  );
}
