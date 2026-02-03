"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const logoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            setShowBackToTop(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);

        // GSAP Logo Reveal
        gsap.fromTo(logoRef.current,
            { opacity: 0, y: -20, letterSpacing: "0.2em" },
            { opacity: 1, y: 0, letterSpacing: "0em", duration: 1.5, ease: "power4.out" }
        );

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Services", href: "#services" },
        { name: "Approach", href: "#approach" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Office", href: "#office" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled
                    ? "bg-greige-warm/90 backdrop-blur-xl border-b border-navy-deep/5 py-4 shadow-sm"
                    : "bg-transparent py-8"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    <a
                        href="#"
                        ref={logoRef}
                        className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-navy-deep transition-opacity hover:opacity-80"
                    >
                        Dr. Maya Reynolds
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-navy-deep/70 hover:text-gold-muted transition-colors text-xs font-bold tracking-[0.2em] uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-navy-deep text-greige-warm px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gold-muted hover:text-navy-deep transition-all duration-500 shadow-xl hover:shadow-gold-muted/20"
                        >
                            Executive Consultation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-navy-deep flex flex-col gap-1.5 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
                            className="w-6 h-0.5 bg-current"
                        />
                        <motion.div
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            className="w-6 h-0.5 bg-current"
                        />
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
                            className="w-6 h-0.5 bg-current"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-navy-deep z-40 md:hidden flex flex-col justify-center px-12"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="text-greige-warm text-4xl font-serif font-bold italic"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                href="#contact"
                                className="bg-gold-muted text-navy-deep text-center py-5 rounded-full font-bold uppercase tracking-widest mt-10"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Schedule Now
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-navy-deep text-greige-warm rounded-full flex items-center justify-center shadow-2xl hover:bg-gold-muted hover:text-navy-deep transition-all duration-300 group"
                    >
                        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
}
