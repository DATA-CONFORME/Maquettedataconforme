import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Search, FileText, UserCheck, HardDrive, GraduationCap, Building2, Laptop, HeartPulse, Factory, Globe2, ChevronDown, ChevronUp } from "lucide-react";
import isoLogo from "../../assets/iso27001-logo.png";
import nis2Logo from "../../assets/nis2-logo.png";

export function SectionRGPD() {
  const features = [
    { title: "Une mise aux normes obligatoire", desc: "Le RGPD est obligatoire pour tout type de structure. Nous vous aidons à protéger votre « trésor de guerre » et à limiter les risques.", icon: <ShieldCheck className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Analyse de votre SI", desc: "Un regard neuf sur vos failles de sécurité. Le DPO vous aide à prévenir les non-conformités informatiques.", icon: <HardDrive className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "ISO 27001", desc: "Mise en place d’un système de management de la sécurité de l’information (SMSI) selon les normes internationales.", icon: <img src={isoLogo} alt="ISO 27001" className="w-10 h-auto object-contain" /> },
    { title: "Analyse de vos process", desc: "Chaque service de votre entreprise a ses pratiques. Sécuriser vos données en adaptant vos usages aux exigences cyber.", icon: <Search className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Une assistance nécessaire", desc: "Le RGPD exige des connaissances spécialisées. Un Délégué à la Protection des Données (DPO) vous soulage de cette contrainte.", icon: <UserCheck className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "NIS 2 : nouvelle règlementation", desc: "Changement de paradigme pour apporter davantage de protection face aux acteurs malveillants toujours plus performants.", icon: <img src={nis2Logo} alt="NIS 2" className="w-12 h-12 rounded-lg object-cover" /> }
  ];

  return (
    <div className="w-full py-[64px] bg-white relative" data-name="Section - RGPD Features">
      <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">
        <div className="text-center mb-[80px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] tracking-tight mb-[24px]">
            Le RGPD et les normes de Cybersécurité
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6A7A] max-w-[800px] mx-auto">
            Devenez résilient face aux risques grâce à un écosystème de conformité complet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {features.map((feat, idx) => (
            <div key={idx} className="group relative bg-[#f8fafc] rounded-[24px] p-[32px] flex flex-col items-start border border-[rgba(0,169,193,0.08)] hover:border-[#00A9C1] hover:shadow-[0_8px_30px_rgb(0,169,193,0.1)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 transform group-hover:scale-110">
                {feat.icon}
              </div>
              <div className="w-[56px] h-[56px] rounded-[16px] bg-white flex items-center justify-center shadow-sm mb-[28px] group-hover:bg-[#E6F6F9] transition-colors duration-500">
                {feat.icon}
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F] mb-[16px] group-hover:text-[#0047BA] transition-colors duration-500">
                {feat.title}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#5A6A7A] leading-[1.65]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionSecteurs() {
  const sectors = [
    { name: "Centres de formation", icon: <GraduationCap size={20} /> },
    { name: "Travail temporaire", icon: <UserCheck size={20} /> },
    { name: "Éditeurs de logiciels", icon: <Laptop size={20} /> },
    { name: "Agences d'urbanisme", icon: <Building2 size={20} /> },
    { name: "ESN & Hébergeurs", icon: <HardDrive size={20} /> },
    { name: "Établissements de santé", icon: <HeartPulse size={20} /> },
    { name: "Entreprises industrielles", icon: <Factory size={20} /> },
  ];

  // Duplicate for seamless infinite loop
  const doubleSectors = [...sectors, ...sectors];

  return (
    <div className="w-full py-[80px] bg-[#0A192F] overflow-hidden" data-name="Section - Sectors">
      <div className="max-w-[1280px] mx-auto px-[32px] mb-12">
        <div className="max-w-[800px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[42px] leading-tight mb-[24px]">
            Tous les secteurs sont concernés.
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[rgba(255,255,255,0.7)]">
            Toutes les sociétés, associations, établissements publics ou privés sont concernés par le RGPD. 
            Notre expertise multisectorielle nous permet de diffuser les meilleures pratiques cyber à travers tous les domaines.
          </p>
        </div>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden py-4">
        <div className="flex gap-[24px] animate-marquee whitespace-nowrap">
          {doubleSectors.map((sec, idx) => (
            <div key={idx} className="flex items-center gap-[12px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md px-[28px] py-[16px] rounded-[100px] border border-[rgba(255,255,255,0.1)] text-white font-['Inter:Semi_Bold',sans-serif] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-default">
              <span className="text-[#82E600]">{sec.icon}</span>
              {sec.name}
            </div>
          ))}
        </div>
        
        {/* CSS for marquee animation inline if not in global css, but I'll add a style tag for simplicity here */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </div>
  );
}

export function SectionOffres() {
  const plans = [
    {
      title: "Conformité TPE ou Solo",
      subtitle: "PME/PMI moins de 5 salariés",
      highlight: false,
      features: [
        "Sensibilisation cybersécurité et RGPD",
        "Analyse de votre système d'information",
        "Identification des risques & non-conformités",
        "Établissement du registre des activités",
        "Analyse des contrats sous-traitants",
        "Autonomie après initiation"
      ]
    },
    {
      title: "Audit initial de conformité",
      subtitle: "PME/PMI au-delà de 5 salariés",
      highlight: true,
      features: [
        "Sensibilisation du comité de direction",
        "Accompagnement et formation du relai interne RGPD",
        "Analyse de votre SI et organisation physique",
        "Interview des différents services métiers",
        "Analyse, ajout et modification de la documentation",
        "Audit de votre site internet et/ou intranet",
        "Analyse & avenants de sous-traitance",
        "Établissement du registre des activités",
        "Analyse des vulnérabilités informatiques",
        "Mise en place des registres (incidents, preuves...)",
        "Sensibilisation des salariés à la cybersécurité",
        "Plan d'actions priorisé",
        "Rapport d’audit clair et synthétique"
      ]
    },
    {
      title: "Suivi DPD / PME",
      subtitle: "Confiez votre RGPD à un DPD nommé à la CNIL",
      highlight: false,
      desc: "Un DPO certifié, c'est mieux.",
      features: [
        "Nomination en tant que DPD auprès de la CNIL",
        "Mise à jour mensuelle par le DPO",
        "Environnement collaboratif inter-services",
        "Hotline RGPD et juridique dédiée",
        "Gestion de la conformité via logiciel dédié",
        "Mise à jour des registres activités & sous-traitants",
        "Rédaction documentation (politique, clauses, chartes...)",
        "Assistance violation de données & demandes de droits",
        "Rédaction de PIA (analyses d'impacts)",
        "Aide à l'analyse des sous-traitants",
        "Bilan intermédiaire et annuel"
      ]
    }
  ];

  return (
    <div id="offres-pricing" className="w-full py-[64px] bg-[#f5f7ff]" data-name="Section - Offers Pricing">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="text-center mb-[80px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[48px] text-[#0A192F] tracking-tight mb-[24px]">
            Un budget compliance adapté
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6A7A]">
            Découvrez nos accompagnements sur-mesure pour initier votre conformité ou nommer un DPO à la demande.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] items-stretch">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative flex flex-col p-[40px] rounded-[24px] ${plan.highlight ? "bg-[#0A192F] text-white shadow-2xl transform scale-105" : "bg-white text-[#0A192F] shadow-lg"}`}>
              {plan.highlight && (
                <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00A9C1] to-[#82E600] text-white font-['Inter:Bold',sans-serif] px-[24px] py-[8px] rounded-full text-[14px]">
                  Le plus complet
                </div>
              )}
              
              <h3 className={`font-['Manrope:Bold',sans-serif] text-[24px] mb-[4px] ${plan.highlight ? "text-white" : "text-[#0A192F]"}`}>
                {plan.title}
              </h3>
              {plan.subtitle && (
                <p className={`font-['Inter:Semi_Bold',sans-serif] text-[13px] uppercase tracking-wider mb-[16px] ${plan.highlight ? "text-[#82E600]" : "text-[#00A9C1]"}`}>
                  {plan.subtitle}
                </p>
              )}
              {plan.desc && <p className="mb-[24px] font-['Inter:Regular',sans-serif] opacity-80">{plan.desc}</p>}
              
              <div className="my-[32px] h-[1px] w-full" style={{ backgroundColor: plan.highlight ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }} />
              
              <ul className="flex flex-col gap-[16px] flex-1 mb-[40px]">
                {/* Render the first 6 features */}
                {plan.features.slice(0, 6).map((f, i) => (
                  <li key={i} className="flex items-start gap-[12px] font-['Inter:Regular',sans-serif] text-[15px]">
                    <CheckCircle2 className={`shrink-0 w-6 h-6 ${plan.highlight ? "text-[#82E600]" : "text-[#00A9C1]"}`} />
                    <span className={plan.highlight ? "text-[rgba(255,255,255,0.9)]" : "text-[#5A6A7A]"}>{f}</span>
                  </li>
                ))}
                
                {/* Expandable part if features > 6 */}
                {plan.features.length > 6 && (
                  <ExpandableFeatures features={plan.features.slice(6)} isHighlight={plan.highlight} />
                )}
              </ul>
              
              <a 
                href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] text-[16px] transition-colors flex items-center justify-center no-underline ${
                  plan.highlight 
                    ? "bg-[#00A9C1] hover:bg-[#82E600] text-white hover:text-[#0A192F]" 
                    : "bg-[#f5f7ff] hover:bg-[#0A192F] hover:text-white text-[#0A192F]"
                }`}
              >
                Nous consulter
              </a>
            </div>
          ))}
        </div>

        <div className="mt-[64px] flex justify-center" data-name="CTA - Free Consultation">
          <a 
            href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[12px] bg-white px-[32px] py-[20px] rounded-[24px] shadow-sm border border-[rgba(0,169,193,0.15)] hover:shadow-md transition-shadow duration-300 no-underline"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-[#E6F6F9] flex items-center justify-center text-[24px]">
              📞
            </div>
            <div className="text-left">
              <p className="font-['Manrope:Bold',sans-serif] text-[#0A192F] text-[18px]">
                Premier entretien visio de 30 min offert
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6A7A] text-[14px]">
                Discutez de vos enjeux avec un DPO certifié sans engagement.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// Subcomponent to handle the expandable list state
function ExpandableFeatures({ features, isHighlight }: { features: string[], isHighlight?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {isExpanded && features.map((f, i) => (
        <li key={i} className="flex items-start gap-[12px] font-['Inter:Regular',sans-serif] text-[15px] animate-fadeIn">
          <CheckCircle2 className={`shrink-0 w-6 h-6 ${isHighlight ? "text-[#82E600]" : "text-[#00A9C1]"}`} />
          <span className={isHighlight ? "text-[rgba(255,255,255,0.9)]" : "text-[#5A6A7A]"}>{f}</span>
        </li>
      ))}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center gap-[4px] font-['Inter:Semi_Bold',sans-serif] text-[14px] transition-colors mt-[8px] cursor-pointer bg-transparent border-none ${isHighlight ? "text-[rgba(255,255,255,0.6)] hover:text-white" : "text-[#00A9C1] hover:text-[#0A192F]"}`}
      >
        {isExpanded ? "Voir moins" : `Voir ${features.length} points supplémentaires`}
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </>
  );
}

export function SectionEcosystem() {
  const partners = [
    { title: "Cabinets Informatiques", role: "Conseil & Intégration", icon: "🏢" },
    { title: "Ingénieurs Cyber", role: "Audit technique & Sécurité", icon: "🛡️" },
    { title: "Hackers Éthiques", role: "Tests d'intrusion (Pentest)", icon: "💻" }
  ];

  return (
    <div className="w-full py-[100px] bg-white relative overflow-hidden" data-name="Section - Ecosystem">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="text-center mb-[64px]">
          <div className="inline-block px-[16px] py-[6px] rounded-full bg-[#E6F6F9] text-[#00A9C1] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-[20px]">
            Notre Écosystème
          </div>
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] tracking-tight">
            Réseau d'experts & Pilotage Logiciel
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] items-stretch">
          {/* Partners Column (Bento Card 1) */}
          <div className="lg:col-span-5 bg-[#f8fafc] rounded-[32px] p-[40px] border border-[rgba(0,71,186,0.08)] flex flex-col">
            <h3 className="font-['Manrope:Bold',sans-serif] text-[26px] text-[#0047BA] mb-[24px]">Nos Partenaires Experts</h3>
            <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#5A6A7A] leading-[1.7] mb-[40px]">
              Nous activons une synergie étroite avec les acteurs majeurs de la tech pour couvrir 100% de vos besoins critiques.
            </p>
            
            <div className="flex flex-col gap-[20px] mt-auto">
              {partners.map((p, i) => (
                <div key={i} className="flex items-center gap-[20px] bg-white p-[20px] rounded-[20px] shadow-sm border border-[rgba(0,71,186,0.04)] hover:shadow-md transition-shadow">
                  <div className="text-[32px]">{p.icon}</div>
                  <div>
                    <div className="font-['Manrope:Bold',sans-serif] text-[#1A2340] text-[17px]">{p.title}</div>
                    <div className="font-['Inter:Regular',sans-serif] text-[14px] text-[#00A9C1]">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Pilotage (Bento Card 2) */}
          <div className="lg:col-span-7 bg-[#0A192F] rounded-[32px] p-[40px] relative overflow-hidden flex flex-col">
            <div className="relative z-10 max-w-[480px]">
              <h3 className="font-['Manrope:Bold',sans-serif] text-[26px] text-[#82E600] mb-[24px]">Pilotage Digital</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-[40px]">
                Le respect de "l'accountability" simplifié via notre plateforme dédiée. Suivez votre avancement en temps réel avec une clarté absolue.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[40px]">
                {[
                  "Registres automatisés", 
                  "Score de protection en réel", 
                  "Reporting DG & CODIR", 
                  "Espace collaboratif"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-[12px] bg-[rgba(255,255,255,0.05)] p-[16px] rounded-[16px] border border-[rgba(255,255,255,0.1)]">
                    <CheckCircle2 size={18} className="text-[#82E600]" />
                    <span className="font-['Inter:Medium',sans-serif] text-white text-[14px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Abstract UI Representation */}
            <div className="mt-auto relative h-[240px] w-full flex items-end justify-center">
              <div className="w-[85%] h-full bg-[rgba(255,255,255,0.03)] rounded-t-[20px] border-x border-t border-[rgba(255,255,255,0.1)] p-6 overflow-hidden">
                <div className="flex gap-4 mb-8">
                  <div className="w-1/4 h-8 bg-[#82E600] rounded-full opacity-40" />
                  <div className="w-1/2 h-8 bg-[#00A9C1] rounded-full opacity-20" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 bg-[rgba(255,255,255,0.05)] rounded-xl border border-[rgba(255,255,255,0.1)] animate-pulse" />
                  <div className="h-40 bg-[rgba(130,230,0,0.1)] rounded-xl border border-[#82E600]/20" />
                  <div className="h-32 bg-[rgba(255,255,255,0.05)] rounded-xl border border-[rgba(255,255,255,0.1)]" />
                </div>
              </div>
            </div>
            
            {/* Ambient glows */}
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#00A9C1] blur-[120px] opacity-10" />
            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#82E600] blur-[100px] opacity-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
