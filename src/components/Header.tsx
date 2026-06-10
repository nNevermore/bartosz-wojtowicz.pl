import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-background/90 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-2xl flex items-center justify-between shadow-xl shadow-black/50">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <Terminal className="text-primary" size={24} />
            <span>B<span className="text-primary">.</span>Wójtowicz</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#o-mnie" className="hover:text-white transition-colors">O mnie</a>
            <a href="#projekty" className="hover:text-white transition-colors">Projekty</a>
            <a href="mailto:kontakt@bartoszwojtowicz.pl" className="px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
