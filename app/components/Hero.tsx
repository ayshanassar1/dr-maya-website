"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        image: "/images/office-1.png",
        title: "Executive Clinical",
        titleLarge: "Resilience & Excellence",
        subtitle: "Specialized psychological support for high-performing professionals navigating complex challenges."
    },
    {
        image: "/images/office-2.png",
        title: "Private Space",
        titleLarge: "Serene & Grounding",
        subtitle: "A premium therapeutic environment in Santa Monica, designed for reflection and therapeutic depth."
    }
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const startTimer = () => {
        stopTimer();
        timerRef.current = setInterval(nextSlide, 8000);
    };

    const stopTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    useEffect(() => {
        startTimer();
        return () => stopTimer();
    }, []);

    useEffect(() => {
        // GSAP Parallax & Ken Burns
        if (imageRef.current) {
            gsap.fromTo(imageRef.current,
                { scale: 1.2, x: direction * 50 },
                { scale: 1, x: 0, duration: 8, ease: "linear" }
            );
        }
        if (contentRef.current) {
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.5 }
            );
        }
        startTimer(); // Reset timer on manual change
    }, [index]);

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-navy-deep"
            onMouseEnter={stopTimer}
            onMouseLeave={startTimer}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Ken Burns */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div ref={imageRef} className="relative w-full h-full">
                            <Image
                                src={slides[index].image}
                                alt={slides[index].titleLarge}
                                fill
                                priority={index === 0}
                                className="object-cover contrast-[1.1] saturate-[1.1] brightness-[0.9]"
                                sizes="100vw"
                                quality={100}
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" />
                        <div className="absolute inset-0 bg-navy-deep/10" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
                        <div ref={contentRef} className="max-w-3xl space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="inline-block px-4 py-1 border border-gold-muted/30 rounded-full text-gold-muted text-xs font-bold tracking-[0.3em] uppercase bg-gold-muted/5 backdrop-blur-sm">
                                    {slides[index].title}
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-greige-warm leading-[1.1] tracking-tight">
                                {slides[index].titleLarge.split(' ').map((word, i) => (
                                    <span key={i} className="inline-block mr-4">
                                        {word}
                                    </span>
                                ))}
                            </h1>

                            <p className="text-xl md:text-2xl text-greige-warm/70 font-light leading-relaxed max-w-xl">
                                {slides[index].subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center justify-center bg-gold-muted text-navy-deep px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-greige-warm transition-all duration-500 shadow-2xl"
                                >
                                    Start Your Registry
                                    <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center border border-greige-warm/20 text-greige-warm px-10 py-5 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-greige-warm/10 transition-all duration-500 backdrop-blur-sm"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slide Navigation */}
            <div className="absolute bottom-12 right-6 md:right-12 flex items-center gap-6 z-30">
                <div className="flex items-center gap-2 mr-4">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1 transition-all duration-500 rounded-full ${i === index ? "w-12 bg-gold-muted" : "w-2 bg-greige-warm/30"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-greige-warm/20 flex items-center justify-center text-greige-warm hover:bg-gold-muted hover:border-gold-muted hover:text-navy-deep transition-all duration-500 group"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-greige-warm/20 flex items-center justify-center text-greige-warm hover:bg-gold-muted hover:border-gold-muted hover:text-navy-deep transition-all duration-500 group"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-greige-warm/30 pointer-events-none"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-gold-muted/50 to-transparent" />
            </motion.div>
        </section>
    );
}
