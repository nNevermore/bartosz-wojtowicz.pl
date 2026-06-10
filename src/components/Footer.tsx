import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 mt-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center">
        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/nNevermore" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all">
            <FaGithub size={20} />
          </a>
          {/* <a href="https://linkedin.com/in/TwojProfilLinkedin" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all">
            <FaLinkedin size={20} />
          </a> */}
          <a href="mailto:kontakt@bartoszwojtowicz.pl" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all">
            <Mail size={20} />
          </a>
        </div>
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-2">
            Kod źródłowy tej strony jest otwarty i dostępny <a href="http://github.com/nNevermore/bartosz-wojtowicz.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">na moim GitHubie</a>.
          </p>
          <p className="text-slate-600 text-sm mt-4">
            © {new Date().getFullYear()} Bartosz Wójtowicz. Zbudowano z Next.js, Tailwind CSS oraz maratońską pasją.
          </p>
        </div>
      </div>
    </footer>
  );
}
