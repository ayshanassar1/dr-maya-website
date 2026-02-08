import Hero from "./components/Hero";
import About from "./components/About";
import Credentials from "./components/Credentials";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import Approach from "./components/Approach";
import Testimonials from "./components/Testimonials";
import Office from "./components/Office";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Deployment trigger: Rebuild
export default function Home() {
    return (
        <main className="w-full relative bg-greige-warm">
            <Navbar />
            <div className="snap-section"><Hero /></div>
            <div className="snap-section" id="about"><About /></div>
            <div className="snap-section" id="contact"><Contact /></div>
            <div className="snap-section" id="credentials"><Credentials /></div>
            <div className="snap-section" id="services"><Services /></div>
            <div className="snap-section" id="methodology"><Methodology /></div>
            <div className="snap-section" id="approach"><Approach /></div>
            <div className="snap-section" id="testimonials"><Testimonials /></div>
            <div className="snap-section" id="office"><Office /></div>
            <Footer />
        </main>
    );
}
