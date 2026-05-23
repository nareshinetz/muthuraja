import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import TrustSection from "./TrustSection"
import FeaturesSection from "./FeaturesSection"
import TestimonialsSection from "./TestimonialsSection"
import SecuritySection from "./SecuritySection"
import Footer from "./Footer"


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