import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="glass-panel px-6 py-3.5 rounded-2xl flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
          <a href="#" className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight hover:opacity-90 active:scale-[0.98] transition-all">
            <Terminal className="text-primary" size={20} strokeWidth={2} />
            <span className="font-sans">
              B<span className="text-primary">.</span>Wójtowicz
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#o-mnie" className="hover:text-white hover:-translate-y-px active:translate-y-0 active:scale-[0.98] transition-all duration-200">
              O mnie
            </a>
            <a href="#projekty" className="hover:text-white hover:-translate-y-px active:translate-y-0 active:scale-[0.98] transition-all duration-200">
              Projekty
            </a>
            <a 
              href="mailto:kontakt@bartoszwojtowicz.pl" 
              className="px-4.5 py-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:-translate-y-px active:translate-y-0 active:scale-[0.97] transition-all duration-200 font-semibold"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

