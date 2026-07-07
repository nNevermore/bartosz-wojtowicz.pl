import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center">
        <div className="flex items-center gap-5 mb-8">
          <a 
            href="https://github.com/nNevermore" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profil" 
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/bartosz-w%C3%B3jtowicz-9b66a2415/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profil" 
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="mailto:kontakt@bartoszwojtowicz.pl" 
            aria-label="Wyślij Email" 
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.95] transition-all duration-200"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>
        <div className="text-center space-y-2 select-none">
          <p className="text-slate-500 text-xs md:text-sm">
            Kod źródłowy tej strony jest otwarty i dostępny <a href="http://github.com/nNevermore/bartosz-wojtowicz.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">na moim GitHubie</a>.
          </p>
          <p className="text-slate-600 text-xs md:text-sm pt-2">
            © {new Date().getFullYear()} Bartosz Wójtowicz. Zbudowano z Next.js, Tailwind CSS oraz maratońską pasją.
          </p>
        </div>
      </div>
    </footer>
  );
}

