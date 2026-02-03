"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, BatteryCharging, Sparkles, X, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Executive Anxiety Management",
        shortDesc: "Strategic interventions for high-pressure stress cycles.",
        fullDesc: "Our specialized anxiety therapy for executives and professionals focuses on identifying the underlying structural causes of stress. We implement high-level cognitive and physiological tools to manage reactivity, ensuring you can lead with clarity and composure even in the most intense environments.",
        icon: Brain,
    },
    {
        title: "Trauma & EMDR Intensive",
        shortDesc: "Deep processing for profound psychological recalibration.",
        fullDesc: "Utilizing EMDR and other evidence-based trauma-informed modalities, we work to process complex experiences that hinder current performance. This intensive approach is designed for those seeking a deep shift in their psychological foundation, fostering resilience that is both profound and sustainable.",
        icon: Sparkles,
    },
    {
        title: "Burnout Recovery & Resilience",
        shortDesc: "Restoring capacity for the long-term high-performer.",
        fullDesc: "Burnout is more than exhaustion; it's a structural breakdown of professional capacity. Our recovery program focuses on recalibrating your values, boundaries, and physiological recovery systems. We build a sustainable architecture for your career, enabling you to reclaim your passion and drive without sacrifice.",
        icon: BatteryCharging,
    },
    {
        title: "Integrated Somatic Depth",
        shortDesc: "Body-oriented insight for complete integration.",
        fullDesc: "True psychological excellence requires the integration of mind and body. We utilize somatic techniques to bridge the gap between cognitive insight and felt experience. This approach is essential for regulating the nervous system and developing a grounded, authoritative presence in all areas of life.",
        icon: Heart,
    },
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    return (
        <section className="h-full w-full flex items-center bg-navy-deep py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-12"
                >
                    <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">Specialized Modalities</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-greige-warm leading-[1.1] mb-6">
                        Precision <br />
                        <span className="italic text-gold-muted">Clinical Strategy</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setSelectedService(index)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-left bg-greige-warm/5 p-8 rounded-[2rem] border border-greige-warm/10 group transition-all duration-700 hover:bg-greige-warm/10 hover:border-gold-muted/30 relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-navy-deep rounded-xl flex items-center justify-center text-gold-muted border border-gold-muted/20 group-hover:scale-110 group-hover:bg-gold-muted group-hover:text-navy-deep transition-all duration-700">
                                    <service.icon size={20} strokeWidth={1} />
                                </div>
                                <ArrowRight className="text-greige-warm/20 group-hover:text-gold-muted group-hover:translate-x-2 transition-all duration-500" />
                            </div>

                            <h3 className="text-2xl font-serif text-greige-warm font-bold mb-2">{service.title}</h3>
                            <p className="text-base text-greige-warm/50 font-light leading-relaxed">{service.shortDesc}</p>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-navy-deep/80 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-greige-warm max-w-4xl w-full rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/20"
                        >
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-navy-deep p-12 flex flex-col justify-between text-greige-warm">
                                    <div className="w-20 h-20 bg-gold-muted rounded-3xl flex items-center justify-center text-navy-deep shadow-2xl">
                                        {(() => {
                                            const Icon = services[selectedService].icon;
                                            return <Icon size={40} />;
                                        })()}
                                    </div>
                                    <div className="pt-20">
                                        <p className="text-xs font-bold tracking-[0.4em] uppercase text-gold-muted mb-2">Category</p>
                                        <p className="text-2xl font-serif italic text-greige-warm">Precision Care</p>
                                    </div>
                                </div>

                                <div className="md:w-2/3 p-12 md:p-20 relative">
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="absolute top-8 right-8 w-12 h-12 rounded-full bg-navy-deep/5 flex items-center justify-center text-navy-deep hover:bg-navy-deep hover:text-greige-warm transition-all duration-300"
                                    >
                                        <X size={24} />
                                    </button>

                                    <div className="space-y-8">
                                        <h3 className="text-4xl md:text-5xl font-serif text-navy-deep font-bold leading-tight">
                                            {services[selectedService].title}
                                        </h3>
                                        <div className="h-1 w-16 bg-gold-muted rounded-full" />
                                        <p className="text-xl md:text-2xl text-navy-deep/70 font-light leading-relaxed">
                                            {services[selectedService].fullDesc}
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSelectedService(null);
                                                window.location.href = "#contact";
                                            }}
                                            className="inline-flex items-center justify-center bg-navy-deep text-greige-warm px-10 py-5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gold-muted hover:text-navy-deep transition-all duration-500 shadow-xl"
                                        >
                                            Inquire About This Service
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
