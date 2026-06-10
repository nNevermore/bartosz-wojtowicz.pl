import { Server, Database, Code2, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="o-mnie" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
          {/* Dekoracyjne elementy tła */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Moja <span className="text-primary">Ewolucja</span></h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Od ponad dekady jestem blisko technologii. Moją drogę rozpocząłem od środowiska LAMP (Linux, Apache, MySQL, PHP), projektując wtyczki dla WordPressa oraz portale oparte o Joomlę (jak popularne elrath.pl gromadzące 900 graczy dziennie).
                </p>
                <p>
                  Dziś jako programista płynnie przeszedłem do świata <strong>architektury Edge i Serverless</strong>. Głównie wykorzystuję <strong>Next.js (App Router)</strong> z bazami danych typu Turso czy Supabase. Mam obsesję na punkcie optymalizacji wydajności, śledzenia metryk (Vitals) i zarządzania systemami CI/CD w chmurze (Netlify, Vercel).
                </p>
                <p>
                  Pracuję wykorzystując najnowsze techniki wsparcia AI w kodowaniu (Vibe Coding, Antigravity). Doświadczenie analityczne łącze ze zmysłem estetycznym budując mroczne i eleganckie interfejsy.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code2, title: "Nowoczesny Front", desc: "Next.js, Tailwind, React" },
                { icon: Server, title: "Backend", desc: "Node.js, PHP (Laravel)" },
                { icon: Database, title: "Bazy Danych", desc: "Turso, Supabase, MySQL" },
                { icon: Cpu, title: "Infrastruktura", desc: "Git, Linux, Netlify" },
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
