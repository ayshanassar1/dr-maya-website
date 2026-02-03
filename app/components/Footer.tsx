"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full bg-navy-deep border-t border-white/5 pt-24 pb-12 px-6 md:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 items-start mb-24">

                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-10">
                        <h2 className="text-3xl font-serif font-bold text-greige-warm tracking-tight">
                            Dr. Maya Reynolds
                        </h2>
                        <p className="text-xl text-greige-warm/40 font-light leading-relaxed max-w-sm italic">
                            &quot;Evidence-based interventions designed for absolute resilience and psychological clarity.&quot;
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">Santa Monica</span>
                            <div className="w-4 h-px bg-gold-muted/30" />
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-muted">Telehealth</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-8">
                        <h3 className="text-gold-muted text-xs font-bold tracking-[0.3em] uppercase">Registry</h3>
                        <div className="flex flex-col gap-5">
                            {["About", "Services", "Methodology", "Testimonials", "Contact"].map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-greige-warm/60 hover:text-gold-muted transition-colors text-sm font-bold tracking-widest uppercase flex items-center group"
                                >
                                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-px bg-gold-muted mr-0 group-hover:mr-3" />
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Crisis Protocol */}
                    <div className="space-y-8">
                        <h3 className="text-gold-muted text-xs font-bold tracking-[0.3em] uppercase">Safety Protocol</h3>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-greige-warm text-sm font-bold">988 Crisis Lifeline</p>
                                <p className="text-greige-warm/40 text-xs font-light leading-relaxed font-sans">
                                    Call or text 988 (Available 24/7)
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-greige-warm text-sm font-bold">Crisis Text Line</p>
                                <p className="text-greige-warm/40 text-xs font-light leading-relaxed font-sans">
                                    Text HOME to 741741
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Final Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-greige-warm/20">
                        &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. Built for Excellence.
                    </div>
                    <div className="flex items-center gap-10">
                        <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-greige-warm/40 hover:text-gold-muted transition-colors">Privacy Protcol</a>
                        <a href="#" className="text-[10px] font-bold tracking-widest uppercase text-greige-warm/40 hover:text-gold-muted transition-colors">Terms of Practice</a>
                    </div>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-gold-muted/5 rounded-full blur-[150px] pointer-events-none" />
        </footer>
    );
}
