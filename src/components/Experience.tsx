"use client";

import Image from 'next/image';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'boosttft',
    year: '2019-2025',
    title: 'BoostTFT.pl (GatsbyJS)',
    role: 'Founder & Frontend Developer',
    description: 'Autorski system e-commerce oparty o potężne środowisko SSG (Static Site Generation). Główny poligon doświadczalny rozwoju platformy od strony GraphQL oraz TypeScript. Własny projekt rozwijany latami.',
    tech: ['GatsbyJS', 'React', 'TypeScript', 'GraphQL'],
    image: '/images/boosttft-pl.png',
  },
  {
    id: 'poe',
    year: '2020',
    title: 'Path of Exile Trade Automation',
    role: 'Data Automation Developer',
    description: 'Skrypty do web scrapingu cen w grze z wykorzystaniem Pythona i serwera Node.js. Skrypt asynchronicznie procesował rynkowe zmiany cen, budując natychmiastową przewagę w handlu wewnątrz gry.',
    tech: ['Node.js', 'Python', 'Web Scraping', 'Async JS'],
    image: null,
  },
  {
    id: 'elrath',
    year: '2016-2020',
    title: 'Heroes Online Wiki (elrath.pl)',
    role: 'Founder & Creator & Admin',
    description: 'Portal skupiający społeczność graczy Heroes Online. Nadzór nad prawidłowym działaniem frontendu, systematyczna przebudowa interfejsu z naciskiem na responsywność oraz utrzymanie stabilnego ruchu.',
    tech: ['PHP', 'Joomla', 'MySQL', 'Community'],
    image: '/images/elrath_pl.jpg',
  }
];

export default function Experience() {
  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section id="projekty" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div 
          className="text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Główne <span className="text-primary">Projekty</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-[15px] leading-relaxed">
            Projekty własne i komercyjne – od nowoczesnego e-commerce po automatyzację danych i wiki dla społeczności.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured Project - Full Width */}
          <motion.div 
            className="glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden group hover:border-primary/20 hover:bg-white/[0.01] transition-all duration-300"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 items-center">
              <div className="lg:w-1/2 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-mono text-xs font-semibold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/25">
                    {featuredProject.year}
                  </span>
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{featuredProject.title}</h3>
                <div className="text-slate-400 font-medium text-sm">{featuredProject.role}</div>
                <p className="text-slate-400 leading-relaxed text-[15px]">{featuredProject.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/[0.04] border border-white/5 rounded-lg text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {featuredProject.image && (
                <div className="lg:w-1/2 w-full">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 group-hover:border-primary/20 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 45vw"
                      priority
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Grid Projects - 2 Column Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {gridProjects.map((project) => (
              <motion.div 
                key={project.id} 
                variants={itemVariants}
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between group hover:border-primary/20 hover:bg-white/[0.01] transition-all duration-300"
              >
                <div className="space-y-4">
                  {project.image ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/5 group-hover:border-primary/10 transition-all duration-500 shadow-md mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                      />
                    </div>
                  ) : (
                    /* Terminal Visualizer mock for POE automation project */
                    <div className="bg-black/40 rounded-xl p-4 font-mono text-[10px] text-primary/80 border border-primary/10 h-40 overflow-hidden flex flex-col justify-between mb-4 select-none">
                      <div>
                        <div className="flex items-center gap-1.5 text-slate-500 border-b border-white/5 pb-1.5 mb-2">
                          <Terminal size={12} strokeWidth={2} />
                          <span>poe_scanner.py</span>
                        </div>
                        <span className="text-slate-500">// Path of Exile Trade Scanner</span>
                        <br />
                        <span className="text-slate-300">def</span> <span className="text-white">scan_margins</span>():
                        <br />
                        <span className="pl-4 text-slate-400">prices = api.get_live_rates()</span>
                        <br />
                        <span className="pl-4 text-primary">if margin &gt; 15.0: alert(margin)</span>
                      </div>
                      <div className="text-[9px] text-slate-500 flex justify-between border-t border-white/5 pt-1.5">
                        <span>STATUS: ACTIVE</span>
                        <span>ASYNC POOL: OK</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-mono text-[10px] font-semibold uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/25">
                        {project.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{project.title}</h4>
                    <p className="text-xs text-slate-400 font-semibold">{project.role}</p>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-4">{project.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-5 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium bg-white/[0.03] border border-white/5 rounded-md text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

