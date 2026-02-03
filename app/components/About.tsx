"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="h-full w-full flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[3/4] max-h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 mx-auto">
                            <Image
                                src="/images/dr-maya.jpg"
                                alt="Dr. Maya Reynolds - Clinical Psychologist"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-navy-deep/10 mix-blend-multiply opacity-20" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 p-6 bg-navy-deep rounded-2xl shadow-xl z-20 border border-gold-muted/20">
                            <p className="text-gold-muted text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Clinical Leadership</p>
                            <p className="text-greige-warm text-lg font-serif italic">Dr. Maya Reynolds</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8 md:space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <span className="text-gold-muted text-xs font-bold tracking-[0.3em] uppercase">Philosophy</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-navy-deep leading-tight">
                                Resilience is a <br />
                                <span className="italic text-gold-muted underline decoration-1 underline-offset-8">Deliberate Practice</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-6 text-lg md:text-xl text-navy-deep/80 font-light leading-relaxed">
                            <p>
                                In elite clinical practice, we move beyond simple symptom management. Resilience requires the same rigor as physical excellence.
                            </p>
                            <p>
                                I specialize in supporting high-performers through trauma, burnout, and executive pressure using evidence-based frameworks to build absolute structural resilience.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="p-6 md:p-8 border-l-4 border-gold-muted bg-navy-deep/5 rounded-r-2xl"
                        >
                            <p className="text-navy-deep font-serif italic text-xl md:text-2xl leading-relaxed">
                                "Transforming psychological insight into executive resilience."
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
