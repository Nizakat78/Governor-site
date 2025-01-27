import Design1 from "@/components/Design2";
import Footer from "@/components/Footer";
import Hero1 from "@/components/Heros";
import HeroSection from "@/components/Herosection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="px-4 md:px-8">
        <Hero1 />
      </div>
      
      {/* Hero Section 2 */}
      <div className="px-4 md:px-8">
        <HeroSection />
      </div>

      {/* Design Section */}
      <div className="px-4 md:px-8">
        <Design1 />
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
