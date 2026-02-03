"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Sparkles, Heart } from "lucide-react";

const points = [
    {
        title: "Structural Safety",
        desc: "Creating a calibrated environment where deep reflection is both safe and productive.",
        icon: ShieldCheck
    },
    {
        desc: "Utilizing EMDR and CBT frameworks to achieve specific psychological objectives.",
        title: "Precision Modalities",
        icon: Target
    },
    {
        desc: "Developing the internal architecture to navigate high-pressure excellence gracefully.",
        title: "Executive Recalibration",
        icon: Sparkles
    },
    {
        desc: "Bridging clinical insight with physiological regulation for complete integration.",
        title: "Somatic Depth",
        icon: Heart
    }
];

export default function Approach() {
    return (
        <section className="h-full w-full flex items-center bg-navy-deep relative overflow-hidden py-4 md:py-8">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-muted/5 skew-x-12 translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left: Interactive Points */}
                    <div className="space-y-6">
                        <div className="space-y-2 text-center lg:text-left">
                            <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase block">Methodology</span>
                            <h2 className="text-3xl md:text-5xl font-serif text-greige-warm leading-tight">
                                Rigorous <br />
                                <span className="italic">Clinical Frameworks</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {points.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex items-start gap-4 p-4 bg-greige-warm/5 border border-gold-muted/10 rounded-xl hover:bg-gold-muted/10 transition-all duration-500"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-lg bg-navy-deep border border-gold-muted/30 flex items-center justify-center text-gold-muted flex-shrink-0">
                                        <point.icon size={16} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="text-base font-serif text-greige-warm font-bold">{point.title}</h3>
                                        <p className="text-[11px] md:text-xs text-greige-warm/40 font-light leading-relaxed">{point.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Statement Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="bg-greige-warm p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <Target size={60} className="text-navy-deep" />
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="h-px bg-navy-deep/10 w-12" />
                                <h3 className="text-2xl md:text-3xl font-serif text-navy-deep font-bold italic leading-tight">
                                    &quot;Elite psychological health requires the same rigor as professional excellence.&quot;
                                </h3>
                                <div className="space-y-0.5">
                                    <p className="text-gold-muted font-bold tracking-widest uppercase text-[9px]">Dr. Maya Reynolds</p>
                                    <p className="text-navy-deep/40 font-light italic text-[10px]">Santa Monica, CA</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-muted/20 rounded-full blur-3xl -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
