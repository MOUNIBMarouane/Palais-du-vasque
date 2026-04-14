import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ProductShowcase from "@/app/components/ProductShowcase";
import CategoriesSection from "@/app/components/CategoriesSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Testimonials from "@/app/components/Testimonials";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductShowcase />
        <CategoriesSection />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
