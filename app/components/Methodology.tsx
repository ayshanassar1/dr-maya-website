"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Anchor, Sun, ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Immersion & Assessment",
        description: "A deep dive into your current landscape. We identify patterns, stressors, and the structural foundations of your experience.",
        color: "bg-navy-deep"
    },
    {
        icon: Compass,
        title: "Strategic Mapping",
        description: "Defining the trajectory of our work. We collaborate on specific, measurable objectives for psychological growth and resilience.",
        color: "bg-gold-muted"
    },
    {
        icon: Anchor,
        title: "Deep Integration",
        description: "Working through the core challenges. We utilize evidence-based modalities to foster profound insight and behavioral change.",
        color: "bg-navy-deep"
    },
    {
        icon: Sun,
        title: "Sustainability",
        description: "Codifying your growth into lasting resilience. We ensure you have the structural tools to maintain excellence independently.",
        color: "bg-gold-muted"
    }
];

export default function Methodology() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="h-full w-full flex items-center bg-greige-warm py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Content & Progress Tracker */}
                    <div className="lg:w-1/2 space-y-10">
                        <div className="space-y-4">
                            <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase">The Process</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-navy-deep leading-tight">
                                A Structured <br />
                                <span className="italic">Therapeutic Journey</span>
                            </h2>
                        </div>

                        {/* Progress Tracker Visualizer */}
                        <div className="relative pt-6">
                            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-navy-deep/5 overflow-hidden rounded-full">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(activeStep + 1) * 25}%` }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                    className="h-full bg-gold-muted shadow-[0_0_15px_rgba(198,169,105,0.5)]"
                                />
                            </div>
                            <div className="flex justify-between relative z-10">
                                {steps.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all duration-700 flex items-center justify-center ${i <= activeStep
                                            ? "bg-navy-deep border-gold-muted text-gold-muted scale-110 shadow-xl"
                                            : "bg-greige-warm border-navy-deep/10 text-navy-deep/30"
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="p-8 bg-navy-deep rounded-3xl space-y-4 shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gold-muted rounded-xl flex items-center justify-center text-navy-deep shadow-lg">
                                        {(() => {
                                            const Icon = steps[activeStep].icon;
                                            return <Icon size={24} />;
                                        })()}
                                    </div>
                                    <h3 className="text-2xl font-serif text-greige-warm font-bold italic">
                                        {steps[activeStep].title}
                                    </h3>
                                </div>
                                <p className="text-lg text-greige-warm/70 font-light leading-relaxed">
                                    {steps[activeStep].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Isometric Step Grid */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative p-8 bg-navy-deep/5 rounded-[3rem] hidden lg:grid">
                        {steps.map((step, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setActiveStep(i)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-[2rem] border-2 text-left transition-all duration-500 h-[200px] flex flex-col justify-between ${activeStep === i
                                    ? "bg-white border-gold-muted shadow-2xl scale-105 z-10"
                                    : "bg-navy-deep border-navy-deep text-greige-warm/80 opacity-40 hover:opacity-100"
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${activeStep === i ? "bg-navy-deep text-gold-muted" : "bg-gold-muted text-navy-deep"
                                    }`}>
                                    <step.icon size={20} />
                                </div>
                                <div>
                                    <h4 className={`text-lg font-serif font-bold mb-1 ${activeStep === i ? "text-navy-deep" : "text-greige-warm"}`}>
                                        {step.title}
                                    </h4>
                                    <p className={`text-[8px] uppercase tracking-widest font-bold ${activeStep === i ? "text-gold-muted" : "text-greige-warm/40"}`}>
                                        View Details
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
