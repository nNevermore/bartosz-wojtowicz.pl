import Image from 'next/image';

const projects = [
  {
    id: 'tft-boost',
    year: '2025-2026',
    title: 'TFT-Boost.net (Next.js E-commerce)',
    role: 'Founder & Fullstack Developer',
    description: 'Wielodomenowa aplikacja e-commerce oparta na Next.js (App Router), dostępna na domenach .net, .pl, .fr, .de. Wykorzystanie Turso i Supabase do optymalnego zarządzania danymi.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Turso', 'Supabase', 'Next-Auth', 'Drizzle ORM', 'Stripe', 'Redux', 'i18n'],
    image: '/images/tft-boost-net.png',
  },
  {
    id: 'boosttft',
    year: '2019-2025',
    title: 'BoostTFT.pl (GatsbyJS)',
    role: 'Founder & Frontend Developer',
    description: 'Poprzednia iteracja systemu e-commerce oparta o potężne środowisko SSG (Static Site Generation). Główny poligon doświadczalny rozwoju platformy od strony GraphQL oraz TypeScript. Własny, autorski projekt rozwijany latami i udoskonalany ze wzrostem moich kompetencji.',
    tech: ['GatsbyJS', 'React', 'TypeScript', 'GraphQL'],
    image: '/images/boosttft-pl.png',
  },
  {
    id: 'poe',
    year: '2020',
    title: 'Path of Exile Trade Automation',
    role: 'Data Automation Developer',
    description: 'Skrypty do web scrapingu cen w grze z wykorzystaniem Pythona i serwera Node.js. Skrypt asynchronicznie procesował rynkowe zmiany cen, budując natychmiastową przewagę w handlu wewnątrz gry.',
    tech: ['Node.js', 'Python', 'Web Scraping', 'Asynchronous JS'],
    image: null,
  },
  {
    id: 'elrath',
    year: '2016-2020',
    title: 'Heroes Online Wiki (elrath.pl)',
    role: 'Founder & Creator & Admin',
    description: 'Portal skupiający społeczność graczy Heroes Online. W szczytowym momencie zarządzałem ruchem na poziomie 900 unikalnych użytkowników dziennie. Budowa strony w PHP (Joomla) wraz z nadzorem nad artykułami współtworzonymi przez graczy.',
    tech: ['PHP', 'Joomla', 'MySQL', 'Community Management'],
    image: '/images/elrath_pl.jpg',
  }
];

export default function Experience() {
  return (
    <section id="projekty" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Główne <span className="text-primary">Projekty</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Wybór projektów, które pokazują moje zdolności od budowania zaangażowania użytkowników, przez złożoną analitykę w grach, aż do nowoczesnego e-commerce i środowisk SSG.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
                <div className={`${project.image ? 'lg:w-1/3' : 'w-full'} flex flex-col justify-center`}>
                  <div className="text-primary font-mono text-sm mb-2">{project.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="text-slate-400 font-medium mb-4">{project.role}</div>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.image && (
                  <div className="lg:w-2/3">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 66vw"
                        priority={project.id === 'tft-boost'}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
