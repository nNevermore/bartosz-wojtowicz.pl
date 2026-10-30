"use client";

import { Server, Database, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section id="o-mnie" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Moja <span className="text-primary">Ewolucja</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Od ponad dekady jestem blisko technologii. Moją drogę rozpocząłem od środowiska LAMP (Linux, Apache, MySQL, PHP), projektując wtyczki dla WordPressa oraz portale oparte o Joomlę (jak popularne elrath.pl gromadzące 900 graczy dziennie).
                </p>
                <p>
                  Dziś jako programista płynnie przeszedłem do świata <strong className="text-white font-semibold">architektury Edge i Serverless</strong>. Głównie wykorzystuję <strong className="text-white font-semibold">Next.js (App Router)</strong> z bazami danych typu Turso czy Supabase. Mam obsesję na punkcie optymalizacji wydajności, śledzenia metryk (Vitals) i zarządzania systemami CI/CD w chmurze (Netlify, Vercel).
                </p>
                <p>
                  Pracuję wykorzystując najnowsze techniki wsparcia AI w kodowaniu (Vibe Coding, Antigravity). Doświadczenie analityczne łączę ze zmysłem estetycznym, budując mroczne i eleganckie interfejsy.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                { icon: Code2, title: "Nowoczesny Front", desc: "Next.js, Tailwind, React" },
                { icon: Server, title: "Backend", desc: "Node.js, PHP (Laravel)" },
                { icon: Database, title: "Bazy Danych", desc: "Turso, Supabase, MySQL" },
                { icon: Cpu, title: "Infrastruktura", desc: "Git, Linux, Netlify" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={cardVariants}
                  className="glass-panel p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-primary/30 hover:bg-white/[0.02] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-[15px]">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


