"use client";

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // premium ease-out
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20 lg:py-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl lg:-translate-y-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primary border-primary/20 tracking-wide uppercase"
              variants={itemVariants}
            >
              Gotowy na nowe wyzwania (React / Frontend)
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight"
              variants={itemVariants}
            >
              Cześć, jestem <br className="hidden lg:block" />
              <span className="text-primary">Bartosz Wójtowicz</span>.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Frontend Developer specjalizujący się w ekosystemie React i architekturze Edge/Serverless. Buduję szybkie, dopracowane interfejsy webowe.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              variants={itemVariants}
            >
              <a
                href="#projekty"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-slate-950 font-bold hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                Zobacz projekty
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <a
                href="mailto:kontakt@bartoszwojtowicz.pl"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl glass-panel text-white font-semibold border border-white/10 hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Skontaktuj się
              </a>
            </motion.div>
          </motion.div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-3xl border border-white/5 overflow-hidden glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/profilowe.jpg"
                  alt="Bartosz Wójtowicz"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 420px"
                  className="object-cover object-top scale-102 hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                  fetchPriority="high"
                />
              </div>
              {/* <div className="absolute -bottom-2 -right-2 glass-panel px-4 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider flex items-center gap-3 shadow-2xl border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/70 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Coder
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


