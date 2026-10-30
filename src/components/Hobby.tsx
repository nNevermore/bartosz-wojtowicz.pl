"use client";

import Image from 'next/image';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hobby() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden glass-panel border border-white/5 group shadow-2xl">
              <Image
                src="/images/bieg_czestochowski.png"
                alt="Wynik Bieg Częstochowski"
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/60 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Trophy size={18} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-tight">Bieg Częstochowski 10km</h3>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">Czas netto</p>
                  </div>
                </div>
                <div className="text-2xl font-mono text-primary font-bold tracking-tight">00:43:26</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight"
              variants={itemVariants}
            >
              Kodowanie to <span className="text-primary">maraton</span>.
            </motion.h2>
            <motion.p 
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-[60ch]"
              variants={itemVariants}
            >
              Zarówno w IT, jak i w życiu prywatnym cenię dyscyplinę, systematyczność i długoterminowe cele. Ponad 100 ukończonych biegów w ramach parkrun oraz regularne starty na 10 km nauczyły mnie, że najlepsze rezultaty przychodzą dzięki wytrwałości i ciągłej optymalizacji - tak w biegu, jak i w kodzie.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8 mt-4"
              variants={itemVariants}
            >
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bieganie</span>
                <h4 className="text-lg font-bold text-white">100+ parkrunów</h4>
                <p className="text-xs text-slate-400 leading-normal">Regularna praca nad wytrzymałością i dyscypliną.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Regeneracja</span>
                <h4 className="text-lg font-bold text-white">Siłownia & Pływanie</h4>
                <p className="text-xs text-slate-400 leading-normal">Zdrowy balans dla umysłu i ciała po pracy przy biurku.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


