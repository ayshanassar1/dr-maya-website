"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ArrowRight, ArrowLeft, Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "General Inquiry",
        otherService: "",
        preferredDate: "",
        preferredTime: "",
        meetingMode: "Online",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <section className="h-full w-full flex items-center bg-navy-deep relative overflow-hidden py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold-muted/5 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: Content & Context */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-gold-muted text-[10px] font-bold tracking-[0.3em] uppercase block">Inquire Privately</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-greige-warm leading-[1.1]">
                                Begin your <br />
                                <span className="italic text-gold-muted">Transformation</span>
                            </h2>
                            <p className="text-lg text-greige-warm/60 font-light leading-relaxed max-w-lg">
                                I provide a discreet 15-minute consultation to ensure clinical alignment. Please use the form to begin.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-greige-warm/10">
                            <div className="space-y-1">
                                <span className="text-[8px] font-bold tracking-widest uppercase text-gold-muted">Registry</span>
                                <p className="text-greige-warm text-lg font-serif">contact@drmaya.com</p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[8px] font-bold tracking-widest uppercase text-gold-muted">Direct Dial</span>
                                <p className="text-greige-warm text-lg font-serif">(310) 555-0123</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Multi-Step Form */}
                    <div className="relative">
                        <div className="relative bg-greige-warm p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/20 overflow-hidden min-h-[520px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-navy-deep/20 text-[10px] font-bold tracking-widest uppercase">Step 0{step} / 04</span>
                                            <div className="flex gap-1">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === step ? "w-6 bg-gold-muted" : "w-1.5 bg-navy-deep/5"}`} />
                                                ))}
                                            </div>
                                        </div>

                                        {step === 1 && (
                                            <div className="space-y-6">
                                                <h3 className="text-2xl font-serif text-navy-deep font-bold">What is your <span className="italic">identity</span>?</h3>
                                                <div className="space-y-4">
                                                    <div className="space-y-1">
                                                        <label htmlFor="full-name" className="sr-only">Full Name</label>
                                                        <input
                                                            id="full-name"
                                                            type="text"
                                                            className="w-full bg-navy-deep/5 border-none rounded-xl px-4 py-3 text-navy-deep focus:ring-1 focus:ring-gold-muted transition-all outline-none text-sm placeholder:text-navy-deep/30"
                                                            placeholder="Full Name"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            aria-label="Your Full Name"
                                                        />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label htmlFor="email" className="sr-only">Email Address</label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            className="w-full bg-navy-deep/5 border-none rounded-xl px-4 py-3 text-navy-deep focus:ring-1 focus:ring-gold-muted transition-all outline-none text-sm placeholder:text-navy-deep/30"
                                                            placeholder="Email Address"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            aria-label="Your Email Address"
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={nextStep}
                                                    disabled={!formData.name || !formData.email}
                                                    className="w-full bg-navy-deep text-greige-warm py-4 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-gold-muted hover:text-navy-deep transition-all duration-500 disabled:opacity-30 group"
                                                    aria-label="Continue to pathway selection"
                                                >
                                                    Continue Discovery
                                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                                </button>
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div className="space-y-6">
                                                <h3 className="text-2xl font-serif text-navy-deep font-bold">Select a <span className="italic">Pathway</span></h3>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {["Executive Anxiety", "Burnout Recovery", "Trauma Intensive", "General Inquiry", "Other"].map(path => (
                                                        <button
                                                            key={path}
                                                            onClick={() => setFormData({ ...formData, service: path })}
                                                            className={`p-3 rounded-xl text-left font-serif text-base transition-all duration-500 flex items-center justify-between group ${formData.service === path ? "bg-navy-deep text-greige-warm" : "bg-navy-deep/5 text-navy-deep/60 hover:bg-navy-deep/10"
                                                                }`}
                                                        >
                                                            {path}
                                                            {formData.service === path && <CheckCircle2 size={16} className="text-gold-muted" />}
                                                        </button>
                                                    ))}
                                                </div>

                                                <AnimatePresence>
                                                    {formData.service === "Other" && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <input
                                                                type="text"
                                                                className="w-full bg-navy-deep/5 border-none rounded-xl px-4 py-3 text-navy-deep focus:ring-1 focus:ring-gold-muted transition-all outline-none text-sm placeholder:text-navy-deep/30"
                                                                placeholder="Please specify your objective..."
                                                                value={formData.otherService || ""}
                                                                onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                                                            />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>

                                                <div className="flex gap-4 pt-2">
                                                    <button onClick={prevStep} className="w-1/3 bg-navy-deep/5 text-navy-deep py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-navy-deep/10 transition-all">Back</button>
                                                    <button
                                                        onClick={nextStep}
                                                        disabled={formData.service === "Other" && !formData.otherService}
                                                        className="w-2/3 bg-navy-deep text-greige-warm py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gold-muted hover:text-navy-deep transition-all disabled:opacity-30"
                                                    >
                                                        Continue
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {step === 3 && (
                                            <div className="space-y-6">
                                                <h3 className="text-2xl font-serif text-navy-deep font-bold">Appointment <span className="italic">Timing</span></h3>

                                                <div className="space-y-6">
                                                    {/* Date Selection */}
                                                    <div className="space-y-3">
                                                        <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep/40 block flex items-center gap-2">
                                                            <Mail size={12} /> Preferred Date
                                                        </span>
                                                        <input
                                                            type="date"
                                                            className="w-full bg-navy-deep/5 border-none rounded-xl px-4 py-3 text-navy-deep focus:ring-1 focus:ring-gold-muted transition-all outline-none text-sm"
                                                            value={formData.preferredDate}
                                                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                                            min={new Date().toISOString().split("T")[0]}
                                                        />
                                                    </div>

                                                    {/* Exact Time Selection */}
                                                    <div className="space-y-3">
                                                        <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep/40 block flex items-center gap-2">
                                                            <Clock size={12} /> Exact Time
                                                        </span>
                                                        <input
                                                            type="time"
                                                            className="w-full bg-navy-deep/5 border-none rounded-xl px-4 py-3 text-navy-deep focus:ring-1 focus:ring-gold-muted transition-all outline-none text-sm"
                                                            value={formData.preferredTime}
                                                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                                        />
                                                    </div>

                                                    {/* Mode Selection */}
                                                    <div className="space-y-3">
                                                        <span className="text-[10px] font-bold tracking-widest uppercase text-navy-deep/40 block flex items-center gap-2">
                                                            <Phone size={12} /> Meeting Format
                                                        </span>
                                                        <div className="flex bg-navy-deep/5 p-1 rounded-2xl relative">
                                                            {["Online", "Offline"].map(mode => (
                                                                <button
                                                                    key={mode}
                                                                    onClick={() => setFormData({ ...formData, meetingMode: mode })}
                                                                    className={`flex-1 py-3 rounded-xl z-10 transition-all duration-500 text-xs font-bold ${formData.meetingMode === mode ? "text-greige-warm" : "text-navy-deep/40"}`}
                                                                >
                                                                    {mode === "Online" ? "Virtual Suite" : "Private Office"}
                                                                </button>
                                                            ))}
                                                            <motion.div
                                                                className="absolute top-1 bottom-1 w-[49%] bg-navy-deep rounded-xl shadow-lg"
                                                                animate={{ x: formData.meetingMode === "Online" ? "1%" : "101%" }}
                                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4 pt-4">
                                                    <button onClick={prevStep} className="w-1/3 bg-navy-deep/5 text-navy-deep py-4 rounded-full font-bold uppercase tracking-widest text-[10px]">Back</button>
                                                    <button onClick={nextStep} disabled={!formData.preferredDate || !formData.preferredTime} className="w-2/3 bg-navy-deep text-greige-warm py-4 rounded-full font-bold uppercase tracking-widest text-[10px] disabled:opacity-30">Finalize</button>
                                                </div>
                                            </div>
                                        )}

                                        {step === 4 && (
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <h3 className="text-2xl font-serif text-navy-deep font-bold">Final <span className="italic">Context</span></h3>
                                                <textarea
                                                    className="w-full bg-navy-deep/5 border-none rounded-xl px-4 py-3 text-navy-deep focus:ring-1 focus:ring-gold-muted transition-all outline-none h-32 resize-none text-sm"
                                                    placeholder="Brief Narrative of objectives..."
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                                <div className="flex gap-4 pt-2">
                                                    <button type="button" onClick={prevStep} className="w-1/3 bg-navy-deep/5 text-navy-deep py-4 rounded-full font-bold uppercase tracking-widest text-[10px]">Back</button>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting || !formData.message}
                                                        className="w-2/3 bg-gold-muted text-navy-deep py-4 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-navy-deep hover:text-greige-warm transition-all disabled:opacity-30"
                                                    >
                                                        {isSubmitting ? (
                                                            <div className="w-4 h-4 border-2 border-navy-deep border-t-transparent rounded-full animate-spin" />
                                                        ) : (
                                                            "Initiate Protocol"
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 flex flex-col items-center text-center space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-gold-muted/10 rounded-full flex items-center justify-center text-gold-muted">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-serif text-navy-deep font-bold">Transmitted</h3>
                                            <p className="text-base text-navy-deep/60 font-light max-w-[280px]">
                                                Protocol initiated. I will contact you privately within 24 business hours.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
