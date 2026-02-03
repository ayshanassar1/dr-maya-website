"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Dr. Maya provided an exceptionally grounding space. For the first time, I felt the tools we developed were directly applicable to the high-stakes environment I operate in daily.",
        author: "Executive Client",
        role: "Financial Leadership"
    },
    {
        quote: "The transition to elite clinical support changed everything. Her methodology is rigorous yet deeply compassionate—a rare combination in modern psychology.",
        author: "Private Consultant",
        role: "Strategic Operations"
    },
    {
        quote: "Dr. Maya's approach to burnout recovery is structural. It didn't just help me get back to work; it redefined how I live my entire life.",
        author: "Creative Director",
        role: "Media & Arts"
    },
    {
        quote: "Exceptional insight. The EMDR intensives were a catalyst for growth I hadn't thought possible after years of standard therapy.",
        author: "Legal Professional",
        role: "Corporate Law"
    }
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (scrollRef.current) {
            setWidth(scrollRef.current.scrollWidth - scrollRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="h-full w-full flex flex-col justify-center bg-greige-warm overflow-hidden py-4 md:py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-10 gap-4">
                    <div className="max-w-xl space-y-2">
                        <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase block">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-navy-deep leading-tight">
                            Perspectives on <span className="italic text-gold-muted">Transformation</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-navy-deep p-6 md:p-8 rounded-[1.5rem] shadow-xl flex flex-col justify-between border border-gold-muted/10 transition-all duration-500 hover:border-gold-muted/30"
                        >
                            <div className="space-y-4">
                                <div className="w-8 h-8 bg-gold-muted/10 rounded-full flex items-center justify-center text-gold-muted">
                                    <Quote size={16} />
                                </div>
                                <p className="text-base md:text-lg font-serif text-greige-warm font-light leading-relaxed italic">
                                    &quot;{t.quote}&quot;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-greige-warm/10 mt-4 flex justify-between items-center">
                                <div>
                                    <p className="text-gold-muted font-bold tracking-widest uppercase text-[9px] mb-0.5">{t.author}</p>
                                    <p className="text-greige-warm/40 font-light text-[8px] uppercase tracking-tighter">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 p-4 bg-navy-deep/5 rounded-xl border border-navy-deep/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-navy-deep/40 font-light text-[10px] italic text-center md:text-left">
                        *Client confidentiality strictly maintained.
                    </p>
                    <a href="#contact" className="text-navy-deep font-bold tracking-widest uppercase text-[10px] border-b border-gold-muted pb-0.5 hover:text-gold-muted transition-colors">
                        Inquire Privately
                    </a>
                </div>
            </div>
        </section>
    );
}
