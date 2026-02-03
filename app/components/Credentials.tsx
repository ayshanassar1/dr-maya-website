"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { Award, GraduationCap, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";

const credentials = [
    {
        year: "2012 - Present",
        title: "Clinical Leadership",
        institution: "Santa Monica Pyschological Associates",
        icon: ShieldCheck
    },
    {
        year: "2010",
        title: "Psy.D. in Clinical Psychology",
        institution: "University of Southern California",
        icon: GraduationCap
    },
    {
        year: "2008",
        title: "Board Certification",
        institution: "California Board of Psychology",
        icon: Award
    }
];

export default function Credentials() {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = 12;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView]);

    return (
        <section className="h-full w-full flex items-center bg-greige-warm py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Animated Counter & Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-gold-muted text-xs font-bold tracking-[0.3em] uppercase">Qualifications</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-navy-deep leading-tight">
                                A Foundation of <br />
                                <span className="italic text-gold-muted">Technical Excellence</span>
                            </h2>
                        </div>

                        <div ref={counterRef} className="flex items-center gap-8 py-8 border-y border-navy-deep/10">
                            <div className="text-7xl md:text-8xl font-serif font-bold text-navy-deep">
                                {count}<span className="text-3xl text-gold-muted">+</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-navy-deep text-lg font-bold uppercase tracking-widest">Years of</p>
                                <p className="text-navy-deep/40 font-light text-base">Clinical Practice</p>
                            </div>
                        </div>

                        <p className="text-lg text-navy-deep/60 font-light leading-relaxed max-w-lg">
                            My practice is built on a rigorous academic background and over a decade of hands-on experience in specialized clinical environments.
                        </p>
                    </motion.div>

                    {/* Right: Timeline */}
                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy-deep/10 md:-translate-x-1/2" />

                        <div className="space-y-10">
                            {credentials.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className={`relative flex items-center md:justify-between group ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-greige-warm border border-navy-deep/20 rounded-full flex items-center justify-center -translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-navy-deep group-hover:text-greige-warm text-gold-muted shadow-xl">
                                        <item.icon size={20} />
                                    </div>

                                    <div className={`ml-20 md:ml-0 md:w-[42%] p-6 bg-navy-deep/5 border border-navy-deep/5 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:bg-navy-deep/10 hover:border-gold-muted/30`}>
                                        <span className="text-gold-muted text-[10px] font-bold tracking-widest uppercase mb-1 block">{item.year}</span>
                                        <h3 className="text-navy-deep text-xl font-serif font-bold mb-1">{item.title}</h3>
                                        <p className="text-navy-deep/40 font-light text-sm tracking-wide">{item.institution}</p>
                                    </div>
                                    <div className="hidden md:block md:w-[42%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
