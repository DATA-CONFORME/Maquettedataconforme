import React, { useState, useRef, TouchEvent, useEffect } from 'react';
import { 
  FileCheck, BadgeCheck, MonitorPlay, Bot, Server, Award, ChevronLeft, ChevronRight 
} from 'lucide-react';
import fabrik01Mockup from "../../assets/fabrik01-mockup-v2.png";
import auditRgpdMockup from "../../assets/audit-rgpd-mockup-v4.png";
import dpoMockup from "../../assets/dpo-externalise-mockup-v2.png";
import formationsMockup from "../../assets/formations-mockup.png";
import nis2Logo from "../../assets/nis2-logo.png";
import isoLogo from "../../assets/iso27001-logo.png";

const CARDS = [
  {
    id: 1,
    title: "Audit & Conformité RGPD",
    description: "Audit de votre SI, registres obligatoires, analyse de vos process et plan d'action priorisé. Pour les TPE, PME et tout type d'organisation.",
    button: "Découvrir l'audit",
    bg: "#DBEAFE",
    iconColor: "#2563EB",
    icon: FileCheck,
    image: auditRgpdMockup,
    coverImage: true,
    customScale: 1.05,
    isDark: false,
    link: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
  },
  {
    id: 2,
    title: "DPO Externalisé",
    description: "Data Conforme est nommé DPO auprès de la CNIL. Hotline dédiée, pilotage logiciel, bilans réguliers et gestion complète de votre conformité.",
    button: "En savoir plus",
    bg: "#EDE9FE",
    iconColor: "#7C3AED",
    icon: BadgeCheck,
    image: dpoMockup,
    coverImage: true,
    customScale: 1.01,
    isDark: false,
    link: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
  },
  {
    id: 3,
    title: "Formations & Sensibilisations",
    description: "RGPD, AI Act, cybersécurité, IA responsable. Certifié Qualiopi. Votre formation peut être financée jusqu'à 50% par votre OPCO. Présentiel et e-learning.",
    button: "Voir les formations",
    bg: "#D1FAE5",
    iconColor: "#059669",
    icon: MonitorPlay,
    image: formationsMockup,
    coverImage: true,
    customScale: 1.05,
    isDark: false
  },
  {
    id: 4,
    title: "Développement IA & Automatisation",
    description: "IA locale souveraine, automatisation de workflows, agents conversationnels, analyse prédictive et applications métiers sur mesure. Sans dépendance au cloud américain.",
    button: "Découvrir Fabrik01",
    bg: "#1E3A5F",
    iconColor: "#FFFFFF",
    icon: Server,
    image: fabrik01Mockup,
    coverImage: true,
    customScale: 1.05,
    isDark: true,
    isFabrik: true
  },
  {
    id: 5,
    title: "Votre IA Conforme & Souveraine",
    description: "Conformité AI Act, audit RGPD de vos outils IA, éthique algorithmique et souveraineté des données. Déployez l'IA en toute confiance.",
    button: "Découvrir",
    bg: "#FAECE7",
    iconColor: "#E06B4D",
    icon: Bot,
    isDark: false,
    link: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/30min"
  },
  {
    id: 6,
    title: "Réglementations & Normes",
    description: "NIS 2, ISO 27001, DORA : nous suivons toutes les évolutions réglementaires pour rester à vos côtés et anticiper vos obligations.",
    button: "En savoir plus",
    bg: "#FEF3C7",
    iconColor: "#D97706",
    icon: Award,
    image: isoLogo,
    coverImage: true,
    customScale: 1.0,
    isDark: false,
    link: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30",
    doubleImage: nis2Logo
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive settings
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(0, CARDS.length - cardsPerView);

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const next = () => {
    if (currentIndex < totalSlides) setCurrentIndex(currentIndex + 1);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      next(); // scroll right
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prev(); // scroll left
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-16 relative">
        <h2 className="font-['Manrope:Bold',sans-serif] text-[36px] text-[#0A192F] mb-12 text-center md:text-left md:ml-4">
          Nos Services & Formations
        </h2>

        <div className="relative flex items-center group">
          
          {/* Left Arrow (Outside Carousel) */}
          <button 
            onClick={prev}
            className={`absolute -left-16 w-11 h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-200 z-10 
              ${currentIndex === 0 ? 'text-[#D1D5DB] pointer-events-none' : 'text-[#1A2340] hover:scale-110 cursor-pointer'}`}
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Carousel Track Container */}
          <div 
            className="overflow-hidden w-full pb-8 pt-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            ref={containerRef}
          >
            <div 
              className="flex gap-[20px]"
              style={{ 
                transition: 'transform 0.35s ease',
                transform: containerRef.current 
                  ? `translateX(-${currentIndex * ((containerRef.current.offsetWidth - (cardsPerView - 1) * 20) / cardsPerView + 20)}px)` 
                  : 'translateX(0px)'
              }}
            >
              {CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={card.id} 
                    className="flex-shrink-0 group/card bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden flex flex-col"
                    style={{ 
                      width: containerRef.current 
                        ? `${(containerRef.current.offsetWidth - (cardsPerView - 1) * 20) / cardsPerView}px` 
                        : `calc((100% - ${(cardsPerView - 1) * 20}px) / ${cardsPerView})`
                    }}
                  >
                    {/* Top Image Part */}
                    <div 
                      className={`w-full h-[180px] flex items-center justify-center relative overflow-hidden ${card.coverImage ? 'bg-white' : 'p-6'}`}
                      style={{ backgroundColor: card.coverImage ? '#FFFFFF' : card.bg }}
                    >
                      {/* Fabrik01 Badge */}
                      {card.isFabrik && (
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10">
                          <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-white tracking-wide uppercase">
                            Fabrik01
                          </span>
                        </div>
                      )}
                      {card.image ? (
                        <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center p-4">
                          {card.doubleImage ? (
                            <div className="flex w-full h-full items-center justify-center gap-4">
                              <img 
                                src={card.image} 
                                alt={card.title} 
                                className="max-w-[45%] max-h-full object-contain group-hover/card:scale-105 transition-transform duration-500 drop-shadow-md rounded-lg"
                              />
                              <img 
                                src={card.doubleImage} 
                                alt={card.title + " secondary"} 
                                className="max-w-[45%] max-h-full object-contain group-hover/card:scale-105 transition-transform duration-500 drop-shadow-md rounded-lg"
                              />
                            </div>
                          ) : (
                            <img 
                              src={card.image} 
                              alt={card.title} 
                              className={`
                                ${card.coverImage 
                                  ? "w-full h-full object-cover translate-y-[-2px]" 
                                  : "max-w-full max-h-[140px] w-auto object-contain group-hover/card:scale-105"
                                } transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]
                              `} 
                              style={card.coverImage ? { transform: `scale(${card.customScale || 1.05}) translateY(-2px)` } : {}}
                            />
                          )}
                        </div>
                      ) : (
                        <Icon size={72} color={card.iconColor} strokeWidth={1.5} className="group-hover/card:scale-105 transition-transform duration-300 relative z-0" />
                      )}
                    </div>

                    {/* Bottom Text Part */}
                    <div className="p-5 flex flex-col flex-grow bg-white">
                      <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[17px] text-[#1A2340] mb-3 leading-tight">
                        {card.title}
                      </h3>
                      <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4B5563] leading-[1.65] flex-grow mb-6">
                        {card.description}
                      </p>
                      
                      <a 
                        href={card.link || (card.isFabrik ? "/fabrik01" : "#")} 
                        target={card.link ? "_blank" : "_self"}
                        rel={card.link ? "noopener noreferrer" : ""}
                        className="group/link flex items-center gap-1 font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold mt-auto no-underline cursor-pointer"
                        style={{ color: card.isDark ? '#0047BA' : card.iconColor }}
                      >
                        {card.button}
                        <span className="transition-transform group-hover/link:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow (Outside Carousel) */}
          <button 
            onClick={next}
            className={`absolute -right-16 w-11 h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-200 z-10 
              ${currentIndex >= totalSlides ? 'text-[#D1D5DB] pointer-events-none' : 'text-[#1A2340] hover:scale-110 cursor-pointer'}`}
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

        </div>
      </div>
    </section>
  );
}
