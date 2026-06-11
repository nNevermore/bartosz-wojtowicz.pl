import Image from 'next/image';
import { Trophy, Activity, Dumbbell } from 'lucide-react';

export default function Hobby() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden glass-panel border-white/10 group shadow-2xl">
              <Image
                src="/images/bieg_czestochowski.png"
                alt="Wynik Bieg Częstochowski"
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary backdrop-blur-md">
                    <Trophy size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Bieg Częstochowski 10km</h3>
                </div>
                <p className="text-3xl font-mono text-primary font-bold">00:43:26</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Kodowanie to <span className="text-primary">maraton</span>.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Zarówno w IT, jak i w życiu prywatnym cenię dyscyplinę, systematyczność i długoterminowe cele. Ponad 100 ukończonych biegów w ramach parkrun oraz regularne starty na 10 km (czas netto 43:26) nauczyły mnie, że najlepsze rezultaty przychodzą dzięki wytrwałości i ciągłej optymalizacji - tak w biegu, jak i w kodzie.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Activity size={18} className="text-primary" />
                  Bieganie
                </div>
                <span className="text-sm text-slate-400">100+ parkrunów</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Dumbbell size={18} className="text-primary" />
                  Siłownia & Pływanie
                </div>
                <span className="text-sm text-slate-400">Balans do pracy przy komputerze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
