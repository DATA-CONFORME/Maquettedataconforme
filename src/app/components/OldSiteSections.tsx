import React from "react";
import { CheckCircle2, ShieldCheck, Search, FileText, UserCheck, HardDrive, GraduationCap, Building2, Laptop, HeartPulse, Factory, Globe2 } from "lucide-react";

export function SectionRGPD() {
  const features = [
    { title: "Une mise aux normes obligatoire", desc: "Le RGPD est obligatoire pour tout type de structure. Nous vous aidons à protéger votre « trésor de guerre » et à limiter les risques.", icon: <ShieldCheck className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Analyse de votre SI", desc: "Un regard neuf sur vos failles de sécurité. Le DPO vous aide à prévenir les non-conformités informatiques.", icon: <HardDrive className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "ISO 27001", desc: "Mise en place d’un système de management de la sécurité de l’information (SMSI) selon les normes internationales.", icon: <Globe2 className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Analyse de vos process", desc: "Chaque service de votre entreprise a ses pratiques. Sécuriser vos données en adaptant vos usages aux exigences cyber.", icon: <Search className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Une assistance nécessaire", desc: "Le RGPD exige des connaissances spécialisées. Un Délégué à la Protection des Données (DPO) vous soulage de cette contrainte.", icon: <UserCheck className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "NIS 2 : nouvelle règlementation", desc: "Changement de paradigme pour apporter davantage de protection face aux acteurs malveillants toujours plus performants.", icon: <FileText className="w-8 h-8 text-[#00A9C1]" /> }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-[#f5f7ff] rounded-[16px] p-[40px] flex flex-col items-start border border-[rgba(0,169,193,0.1)] hover:shadow-lg transition-shadow duration-300">
              <div className="w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center shadow-sm mb-[24px]">
                {feat.icon}
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F] mb-[16px]">
                {feat.title}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#5A6A7A] leading-[1.6]">
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

  return (
    <div className="w-full py-[64px] bg-[#0A192F] overflow-hidden" data-name="Section - Sectors">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[48px]">
          <div className="flex-1">
            <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[42px] leading-tight mb-[24px]">
              Tous les secteurs sont concernés.
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[rgba(255,255,255,0.7)]">
              Toutes les sociétés, associations, établissements publics, privés, sont concernés par le RGPD. 
              Cette diversité de clientèle nous permet de faire bénéficier à nos clients de bonnes pratiques issues d'autres domaines d'activité.
            </p>
          </div>
          
          <div className="flex-1 flex flex-wrap gap-[16px] justify-center md:justify-end">
            {sectors.map((sec, idx) => (
              <div key={idx} className="flex items-center gap-[8px] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm px-[20px] py-[12px] rounded-[100px] border border-[rgba(255,255,255,0.1)] text-white font-['Inter:Semi_Bold',sans-serif]">
                <span className="text-[#82E600]">{sec.icon}</span>
                {sec.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionOffres() {
  const plans = [
    {
      title: "Conformité TPE ou Solo",
      highlight: false,
      features: [
        "Formation à la cybersécurité et au RGPD",
        "Identification des risques & non-conformités",
        "Registre des activités & sous-traitants",
        "Autonomie après initiation"
      ]
    },
    {
      title: "Audit initial de conformité",
      highlight: true,
      features: [
        "Sensibilisation du comité de direction",
        "Analyse de votre SI et organisation physique",
        "Audit du site internet et/ou intranet",
        "Établissement des registres d'activités",
        "Analyse & avenants des sous-traitants",
        "Rapport d’audit clair et synthétique"
      ]
    },
    {
      title: "Suivi DPD / PME",
      highlight: false,
      desc: "Un DPO certifié, c'est mieux.",
      features: [
        "Nomination en tant que DPD (CNIL)",
        "Hotline RGPD et juridique dédiée",
        "Gestion via logiciel de pilotage",
        "Assistance droits, violations et PIA",
        "Rédaction de la documentation RGPD",
        "Bilan intermédiaire et annuel"
      ]
    }
  ];

  return (
    <div className="w-full py-[64px] bg-[#f5f7ff]" data-name="Section - Offers Pricing">
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
              
              <h3 className={`font-['Manrope:Bold',sans-serif] text-[24px] mb-[16px] ${plan.highlight ? "text-white" : "text-[#0A192F]"}`}>
                {plan.title}
              </h3>
              {plan.desc && <p className="mb-[24px] font-['Inter:Regular',sans-serif] opacity-80">{plan.desc}</p>}
              
              <div className="my-[32px] h-[1px] w-full" style={{ backgroundColor: plan.highlight ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }} />
              
              <ul className="flex flex-col gap-[16px] flex-1 mb-[40px]">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-[12px] font-['Inter:Regular',sans-serif] text-[15px]">
                    <CheckCircle2 className={`shrink-0 w-6 h-6 ${plan.highlight ? "text-[#82E600]" : "text-[#00A9C1]"}`} />
                    <span className={plan.highlight ? "text-[rgba(255,255,255,0.9)]" : "text-[#5A6A7A]"}>{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-[16px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] text-[16px] transition-colors ${
                plan.highlight 
                  ? "bg-[#00A9C1] hover:bg-[#82E600] text-white hover:text-[#0A192F]" 
                  : "bg-[#f5f7ff] hover:bg-[#0A192F] hover:text-white text-[#0A192F]"
              }`}>
                Nous consulter
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionEcosystem() {
  return (
    <div className="w-full py-[64px] bg-white relative overflow-hidden" data-name="Section - Ecosystem">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="flex flex-col lg:flex-row items-center gap-[80px]">
          <div className="flex-1 z-10">
            <div className="inline-block px-[16px] py-[6px] rounded-full bg-[#E6F6F9] text-[#00A9C1] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-[24px]">
              Notre Environnement
            </div>
            <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[42px] leading-[1.2] mb-[32px]">
              Réseau d'experts & Pilotage logiciel
            </h2>
            
            <div className="flex flex-col gap-[40px]">
              <div>
                <h3 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#00A9C1] mb-[16px]">Réseau de Partenaires</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#5A6A7A] leading-[1.6]">
                  Nous travaillons en synergie avec des <strong>Cabinets de conseil en informatique</strong>, des <strong>Ingénieurs en Cybersécurité</strong> et des <strong>Hackers éthiques</strong> (tests d'intrusion) pour pallier à tous vos besoins technologiques.
                </p>
              </div>

              <div>
                <h3 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#00A9C1] mb-[16px]">Pilotage de Conformité via Logiciel</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#5A6A7A] leading-[1.6] mb-[24px]">
                  Le respect de "l'accountability" simplifié. La simplification du suivi de votre conformité est réalisée grâce à notre plateforme dédiée :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  {["Visualisation des registres obligatoires", "Suivi en temps réel de la protection", "Comptes-rendus d'avancement clairs", "Environnement collaboratif inter-services"].map((item, i) => (
                    <div key={i} className="flex items-center gap-[12px] bg-[#f5f7ff] p-[16px] rounded-[12px]">
                      <div className="w-[8px] h-[8px] rounded-full bg-[#82E600]" />
                      <span className="font-['Inter:Medium',sans-serif] text-[#0A192F] text-[14px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative h-[600px] bg-gradient-to-br from-[#0A192F] to-[#00A9C1] rounded-[32px] p-[40px] flex items-center justify-center shadow-2xl">
            {/* Abstact UI Representation of the Software */}
            <div className="w-full max-w-[400px] bg-white rounded-[16px] shadow-2xl overflow-hidden animate-[pulse_4s_ease-in-out_infinite]">
              <div className="h-[48px] bg-[#f5f7ff] border-b border-[rgba(0,0,0,0.05)] flex items-center px-[24px] gap-[8px]">
                <div className="w-[12px] h-[12px] rounded-full bg-[#ff5f57]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#28c941]" />
              </div>
              <div className="p-[32px] flex flex-col gap-[24px]">
                <div className="h-[24px] w-1/3 bg-[#E6F6F9] rounded-full" />
                <div className="flex gap-[16px]">
                  <div className="flex-1 h-[80px] bg-[#f5f7ff] rounded-[12px] border border-[rgba(0,0,0,0.05)]" />
                  <div className="flex-1 h-[80px] bg-[#f5f7ff] rounded-[12px] border border-[rgba(0,0,0,0.05)] flex items-center justify-center">
                    <div className="w-[40px] h-[40px] rounded-full border-4 border-[#82E600] border-t-transparent animate-spin" />
                  </div>
                </div>
                <div className="w-full h-[120px] bg-[#E6F6F9] rounded-[12px]" />
                <div className="w-2/3 h-[16px] bg-[#f5f7ff] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
