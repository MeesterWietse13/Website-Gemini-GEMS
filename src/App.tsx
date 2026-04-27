import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gem, 
  Clipboard, 
  ClipboardCheck, 
  ChevronRight,
  UserCircle,
  GraduationCap,
  ListChecks,
  Home as HomeIcon,
  BookOpen
} from 'lucide-react';
import { gemInstructions } from './data/content';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'Wat zijn Gems?', path: '/wat-zijn-gems', icon: <BookOpen size={18} /> },
    { name: 'Stappenplan', path: '/stappenplan', icon: <ListChecks size={18} /> },
    { name: 'Prompt Bibliotheek', path: '/bibliotheek', icon: <Gem size={18} /> },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Gem className="text-blue-400" size={24} />
          <span className="hidden sm:inline text-white">Gemini Gems <span className="text-blue-400">v/k Leerkracht</span></span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
                location.pathname === item.path 
                  ? "bg-blue-500/20 text-blue-300" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <span className="hidden md:inline">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="max-w-4xl mx-auto px-6 py-12"
  >
    {children}
  </motion.div>
);

// --- Pages ---

const HomePage = () => (
  <PageWrapper>
    <div className="text-center py-12">
      <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
        Gemini Gems <br />
        <span className="text-blue-400">voor Leerkrachten</span>
      </h1>
      <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
        Welkom op de gids voor het gebruik van Gems in het onderwijs. Ontdek hoe je efficiënter werkt en veilige AI-leeromgevingen creëert.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        <Link to="/wat-zijn-gems" className="flex items-center justify-between p-6 bg-slate-900 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group shadow-sm">
          <div className="text-left">
            <h3 className="font-bold text-white">Wat zijn Gems?</h3>
            <p className="text-xs text-slate-500">De absolute basis uitgelegd.</p>
          </div>
          <ChevronRight className="text-slate-600 group-hover:text-blue-400 transition-colors" />
        </Link>
        <Link to="/bibliotheek" className="flex items-center justify-between p-6 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 transition-all group shadow-md shadow-blue-900/20">
          <div className="text-left">
            <h3 className="font-bold">Bibliotheek</h3>
            <p className="text-xs text-blue-100">Start direct met prompts.</p>
          </div>
          <ChevronRight className="text-blue-200 group-hover:text-white transition-colors" />
        </Link>
      </div>
    </div>
  </PageWrapper>
);

const AboutPage = () => (
  <PageWrapper>
    <h2 className="text-3xl font-bold mb-8 text-white">Wat zijn Gems precies?</h2>
    
    <div className="grid gap-8">
      <section className="bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-sm">
        <div className="flex items-center gap-3 mb-6 text-blue-400">
          <UserCircle size={28} />
          <h3 className="text-2xl font-bold italic">Gems voor leerkrachten</h3>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300">
            Een Gem is een gepersonaliseerde versie van Gemini die je vooraf specifieke instructies geeft. Dit levert enorme <strong>efficiëntie</strong> op: je hoeft een lange, complexe prompt niet steeds opnieuw in te typen. Bovendien helpt het je om je beste prompts te onthouden en hergebruiken.
          </p>
          <h4 className="font-bold text-white mt-8 mb-4 border-l-4 border-blue-500 pl-4">Enkele voorbeelden:</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li><strong>Projectbrainstormer:</strong> Zorgt voor lesideeën bij een projectonderwerp, maar er wordt gekeken naar samenhangende lessen in alle vakken.</li>
            <li><strong>Tekst-naar-afbeelding instructie:</strong> Maakt van een tekst een afbeelding volgens een vastgelegde stijl.</li>
            <li><strong>Feedbackschrijver: Creatief schrijven bij een afbeelding:</strong> Genereer structurele feedback op basis van jouw evaluatiecriteria.</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-900 border border-white/10 p-8 rounded-3xl shadow-sm">
        <div className="flex items-center gap-3 mb-6 text-emerald-400">
          <GraduationCap size={28} />
          <h3 className="text-2xl font-bold italic">Gems voor leerlingen</h3>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300">
            Leerlingen kunnen nu ook GEMS gebruiken. Maar ze kunnen dit enkel op school. Buiten de school kunnen ze deze niet openen. Het algemene chatvenster van Gemini werkt nooit.
          </p>
          <h4 className="font-bold text-white mt-8 mb-4 border-l-4 border-emerald-500 pl-4">Enkele voorbeelden:</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li><strong>Zoekopdrachtencoach:</strong> Geeft feedback op klassieke zoekopdrachten van leerlingen.</li>
            <li><strong>Schrijfcoach: Creatief schrijven bij een afbeelding:</strong> Geeft leerlingen feedback op hun schrijfopdracht volgens de door jou bepaalde criteria.</li>
            <li><strong>Oefengenerator signaalwoorden:</strong> Maakt oneindig interactieve oefeningen, verbetert, geeft tips, maar ook uitleg.</li>
            <li><strong>Afgebakende informatiechatbot: AI of toch niet?</strong> Antwoordt enkel over een specifiek onderwerp.</li>
          </ul>
        </div>
      </section>
    </div>
  </PageWrapper>
);

const GuidePage = () => (
  <PageWrapper>
    <h2 className="text-3xl font-bold mb-12 text-white text-center italic">Stappenplan: Hoe ga je aan de slag?</h2>
    <div className="space-y-12">
      {[
        { 
          num: '1', 
          title: 'Bedenk een doel', 
          content: 'Houd het simpel. Een te complexe Gem die te veel deeltaken moet uitvoeren, verliest zijn precisie. Focus op één sterke taak en maak eventuele meerdere GEMS die je na elkaar gebruikt in plaats van 1 grote GEM.' 
        },
        { 
          num: '2', 
          title: 'Laat Gemini de basisinstructie schrijven', 
          content: 'Vraag Gemini om een GEMinstructie te ontwerpen voor jouw doel, maar blijf zelf de kapitein. Jij bepaalt de toon en de evaluatiecriteria, niet de AI. Vb. Als je een schrijfcoach maakt bepaal jij criteria waarop de GEM feedback moet geven. Je laat dit niet door Gemini bepalen. In principe bevat een GEM een rol, een toon en een opdracht, maar laat Gemini dit maar uitwerken. Hij weet dit automatisch.' 
        },
        { 
          num: '3', 
          title: 'Test de Gem grondig', 
          content: 'Probeer de Gem uit als een "slechte" gebruiker. Voer bij een schrijfcoach bijvoorbeeld bewust een tekst met fouten in om te horen of de coach de juiste feedback geeft. Gemini kan deze \'leerlingtekst\' perfect voor jou maken met hierin bewust een aantal fouten die je GEM zou moeten nakijken.' 
        },
      ].map((step) => (
        <div key={step.num} className="flex gap-6 items-start">
          <div className="shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-900/40 border border-blue-400/30">
            {step.num}
          </div>
          <div className="border-b border-white/5 pb-8 w-full">
            <h4 className="text-xl font-bold mb-3 text-white tracking-tight">{step.title}</h4>
            <p className="text-slate-400 leading-relaxed">{step.content}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 p-8 bg-slate-900 rounded-3xl border border-white/10 shadow-lg">
      <h4 className="text-lg font-bold text-blue-300 mb-6 flex items-center gap-2">
        <Gem size={20} className="text-blue-400" />
        Cruciaal voor leerling-Gems:
      </h4>
      <ul className="space-y-4">
        <li className="flex gap-4 text-slate-300">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <p className="text-sm">De AI mag NOOIT het antwoord voorzeggen, enkel tips en begeleiding bieden.</p>
        </li>
        <li className="flex gap-4 text-slate-300">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <p className="text-sm">De AI mag niet ingaan op vragen buiten het onderwerp (scope).</p>
        </li>
        <li className="flex gap-4 text-slate-300">
          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <p className="text-sm">De AI reageert alleen op kindvriendelijke vragen.</p>
        </li>
      </ul>
    </div>
  </PageWrapper>
);

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState<'teacher' | 'student'>('teacher');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(title);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <PageWrapper>
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white italic">Prompt Bibliotheek</h2>
        <div className="inline-flex p-1 bg-white/5 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveTab('teacher')}
            className={cn(
              "px-5 py-2 rounded-lg text-sm font-bold transition-all",
              activeTab === 'teacher' ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
            )}
          >
            Leerkrachten
          </button>
          <button
            onClick={() => setActiveTab('student')}
            className={cn(
              "px-5 py-2 rounded-lg text-sm font-bold transition-all",
              activeTab === 'student' ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
            )}
          >
            Leerlingen
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {gemInstructions
          .filter(gem => gem.category === activeTab)
          .map((gem) => (
            <div key={gem.title} className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all">
              <div className="p-6 border-b border-white/5 bg-slate-900/50">
                <h3 className="font-bold text-lg mb-1 text-white">{gem.title}</h3>
                <p className="text-sm text-slate-400">{gem.description}</p>
              </div>
              <div className="p-6 bg-slate-950/40">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Systeem Instructie</span>
                  <button 
                    onClick={() => copyToClipboard(gem.systemInstruction, gem.title)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border",
                      copiedId === gem.title 
                        ? "bg-green-500/10 text-green-400 border-green-500/20" 
                        : "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20"
                    )}
                  >
                    {copiedId === gem.title ? <ClipboardCheck size={14} /> : <Clipboard size={14} />}
                    {copiedId === gem.title ? "Gekopieerd!" : "Kopieer Instructie"}
                  </button>
                </div>
                <pre className="text-[11px] text-slate-300 whitespace-pre-wrap font-mono leading-relaxed bg-slate-950 p-4 rounded-xl border border-white/5 max-h-48 overflow-y-auto custom-scrollbar">
                  {gem.systemInstruction}
                </pre>
              </div>
            </div>
          ))}
      </div>
    </PageWrapper>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#020617] text-slate-200">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wat-zijn-gems" element={<AboutPage />} />
              <Route path="/stappenplan" element={<GuidePage />} />
              <Route path="/bibliotheek" element={<LibraryPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="py-12 border-t border-white/5 bg-slate-950">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm text-slate-500 italic">
              "Gemini Gems voor Leerkrachten" - Focus op pedagogische meerwaarde en efficiëntie.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

