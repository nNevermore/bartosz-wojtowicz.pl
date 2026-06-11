import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full glass-panel text-sm font-medium text-primary mb-2">
              Gotowy na nowe wyzwania (Fullstack Developer)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
              Cześć, jestem <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">Bartosz Wójtowicz</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Frontend & Fullstack Developer. Od portali społecznościowych, przez automatyzację w grach, aż po wielodomenowe aplikacje e-commerce z Edge Runtime. 15 lat pasji przekuwam w profesjonalny kod.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#projekty" className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-slate-900 font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                Zobacz projekty
                <ArrowRight size={18} />
              </a>
              <a href="mailto:kontakt@bartoszwojtowicz.pl" className="w-full sm:w-auto px-8 py-3 rounded-xl glass-panel font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-100 lg:h-100">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border border-white/10 overflow-hidden glass-panel shadow-2xl">
                <Image
                  src="/images/profilowe.jpg"
                  alt="Bartosz Wójtowicz"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 400px"
                  className="object-cover object-top scale-105"
                  priority
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 glass-panel px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 shadow-2xl border-white/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
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
