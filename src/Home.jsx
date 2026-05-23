import FeaturesSection from "./FeaturesSection"
import Footer from "./Footer"
import HeroSection from "./Herosection"
import Navbar from "./Navbar"
import SecuritySection from "./SecuritySection"
import TestimonialsSection from "./TestimonialsSection"
import TrustSection from "./TrustSection"


function Home() {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <HeroSection />
            <TrustSection />
            <FeaturesSection />
            <TestimonialsSection />
            <SecuritySection />
            <Footer />
        </div>
    )
}

export default Home