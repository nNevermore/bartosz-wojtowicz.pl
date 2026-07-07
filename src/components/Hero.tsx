import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-primary border-primary/20 tracking-wide uppercase">
              Gotowy na nowe wyzwania (React / Frontend)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Cześć, jestem <br className="hidden lg:block" />
              <span className="text-primary">Bartosz Wójtowicz</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Frontend Developer specjalizujący się w ekosystemie React i architekturze Edge/Serverless. Buduję szybkie, dopracowane interfejsy webowe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
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
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
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
              <div className="absolute -bottom-2 -right-2 glass-panel px-4 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider flex items-center gap-3 shadow-2xl border-white/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Maraton & Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

