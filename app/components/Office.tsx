"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Shield, Phone, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const images = [
    {
        src: "/images/office-1.jpg",
        title: "Atmosphere",
        desc: "Designed for deep focus and absolute confidentiality."
    },
    {
        src: "/images/office-2.jpg",
        title: "Private Space",
        desc: "A sanctuary for reflection in the heart of Santa Monica."
    }
];

export default function Office() {
    const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

    return (
        <section className="h-full w-full flex items-center bg-navy-deep relative overflow-hidden py-12">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Cinematic Tour */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase block">The Practice</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-greige-warm leading-tight">
                                A Sanctuary of <br />
                                <span className="italic text-gold-muted">Professionalism</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group relative cursor-zoom-in"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-gold-muted/20 bg-navy-deep">
                                        <Image
                                            src={img.src}
                                            alt={img.title}
                                            fill
                                            className="object-cover transition-all duration-[2s] group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent opacity-60 pointer-events-none" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Practice Information Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-greige-warm/5 border border-greige-warm/10 rounded-[2.5rem] backdrop-blur-sm space-y-6"
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gold-muted">
                                    <MapPin size={20} />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Physical Space</span>
                                </div>
                                <h3 className="text-2xl font-serif text-greige-warm leading-tight">Santa Monica, CA</h3>
                                <p className="text-greige-warm/40 font-light text-base">
                                    Santa Monica, California 90401
                                </p>
                            </div>

                            <div className="h-px bg-greige-warm/10 w-full" />

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gold-muted">
                                    <Globe size={20} />
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Accessibility</span>
                                </div>
                                <h3 className="text-2xl font-serif text-greige-warm leading-tight">Telehealth Excellence</h3>
                                <p className="text-greige-warm/40 font-light text-base">
                                    Secure, HIPAA-compliant platforms across CA.
                                </p>
                            </div>

                            <div className="h-px bg-greige-warm/10 w-full" />

                            <div className="pt-2">
                                <div className="flex items-center gap-2 p-3 bg-gold-muted/10 rounded-xl border border-gold-muted/20 inline-flex">
                                    <Shield size={16} className="text-gold-muted" />
                                    <span className="text-greige-warm font-serif italic text-sm">Strictly Confidential</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gold-muted p-6 rounded-2xl flex items-center justify-between text-navy-deep group hover:bg-greige-warm transition-all duration-700 cursor-pointer"
                        >
                            <div className="space-y-0.5">
                                <p className="text-[8px] font-bold tracking-[0.3em] uppercase">Emergency Services</p>
                                <h4 className="text-xl font-serif font-bold">Crisis Support Registry</h4>
                            </div>
                            <div className="w-10 h-10 bg-navy-deep text-greige-warm rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                                <Phone size={18} />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Enlargement Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[1000] bg-navy-deep/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-8 right-8 text-greige-warm/60 hover:text-gold-muted transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold"
                        >
                            Close <X size={20} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-gold-muted/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className="object-cover filter contrast-[1.08] brightness-[1.05] saturate-[0.95]"
                                sizes="90vw"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-navy-deep to-transparent">
                                <h3 className="text-3xl md:text-5xl font-serif text-greige-warm italic">{selectedImage.title}</h3>
                                <p className="text-greige-warm/60 text-lg mt-2 max-w-xl">{selectedImage.desc}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
