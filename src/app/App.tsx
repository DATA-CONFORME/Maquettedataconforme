import { useState, useEffect } from "react";
import logoDataConforme from "../assets/logo.png";
import logoDcDegrade from "../assets/logo-dc-degrade.png";
import logoFabrik01 from "../assets/logo-fabrik01-blanc.png";
import jeromeFicatImage from "figma:asset/e4d81823abce74b8f71e2af748f5902b137d5ec7.png";
import brainImage from "figma:asset/32941527829b6439a6a0192b836d7968d7d083e6.png";
import formationHeroImage from "figma:asset/b0ce91a4ba3d2da757a976c89d84d80c675c3772.png";
import Main from "../imports/Main";
import Body from "../imports/Body";
import IAConformePage from "./components/IAConformePage";
import ContactPage from "./components/ContactPage";
import TarifsPage from "./components/TarifsPage";
import { BookOpen, Clock, Award, Users, FileCheck, Shield, Download, ChevronRight, Building2, HardDrive, CheckCircle2, GraduationCap, ShieldCheck, ScrollText, Lock, Scale } from "lucide-react";
import isoLogo from '../assets/iso27001-logo.png';
import nis2Logo from '../assets/nis2-logo.png';
import qualiopiLogo from '../assets/qualiopi-logo.png';

// Team Images
import teamJerome from '../assets/team-jerome.png';
import teamMatthias from '../assets/team-matthias.png';
import teamNosima from '../assets/team-nosima.png';
import teamMelvin from '../assets/team-melvin.png';
import teamRaphael from '../assets/team-raphael.png';

function Navbar({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 bg-white/95 backdrop-blur-sm"
      style={{ height: "96px" }}
    >
      {/* Logo */}
      <button onClick={() => onNavigate("home")} className="flex items-center cursor-pointer">
        <img
          src={logoDataConforme}
          alt="Data Conforme"
          className="h-[80px] w-auto object-contain"
        />
      </button>

      {/* Navigation links */}
      <div className="flex items-center gap-12">
        <button
          onClick={() => onNavigate("home")}
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 whitespace-nowrap cursor-pointer ${
            currentPage === "home" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          Conformité et Opportunités
        </button>
        <button
          onClick={() => onNavigate("formation")}
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 cursor-pointer ${
            currentPage === "formation" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          Formation
        </button>
        <div className="relative group">
          <button
            onClick={() => onNavigate("ia-conforme")}
            className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 whitespace-nowrap cursor-pointer ${
              currentPage === "ia-conforme" || currentPage === "fabrik01" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
            }`}
          >
            Votre IA Conforme
          </button>
          {/* Dropdown submenu */}
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="bg-white rounded-lg shadow-lg border border-[rgba(0,71,186,0.1)] py-2 min-w-[200px]">
              <button
                onClick={() => onNavigate("fabrik01")}
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Fabrik01
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => onNavigate("about")}
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 cursor-pointer ${
            currentPage === "about" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          À propos
        </button>
        <a
          href="#"
          className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
        >
          News
        </a>
        <button
          onClick={() => onNavigate("contact")}
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 cursor-pointer ${
            currentPage === "contact" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          Contact
        </button>
      </div>

      {/* CTA Button */}
      <div className="flex items-center">
        <a
          href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-[10px] rounded-[8px] cursor-pointer shadow-md hover:opacity-90 transition-opacity duration-200 no-underline flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)" }}
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
            Démarrer
          </span>
        </a>
      </div>
    </nav>
  );
}

export { Navbar };

function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleNavigation = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="w-full bg-[#0A192F] py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Column 1 - Data Conforme */}
          <div>
            <img src={logoDcDegrade} alt="Data Conforme" className="h-[90px] w-auto object-contain mb-6" />
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] leading-relaxed">
              Votre partenaire en conformité et IA responsable
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('home')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  Conformité RGPD
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('ia-conforme')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  IA Responsable
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('formation')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  Formation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('fabrik01')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  Fabrik01
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4 - Légal */}
          <div>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Confiance & Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "legal")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <ScrollText className="w-3 h-3" /> Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "privacy")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Lock className="w-3 h-3" /> Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "trust-center")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-[#82E600] text-[14px] hover:text-white transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-3 h-3" /> Centre de Confiance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "cgu")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <Scale className="w-3 h-3" /> Conditions Générales d'Utilisation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 - Partenaires & Certifications */}
          <div className="flex flex-col justify-start md:items-end gap-6">
            <img src={logoFabrik01} alt="Fabrik01" className="h-[80px] w-auto object-contain" />
            <div className="bg-white rounded-lg p-3 inline-flex">
              <img src={qualiopiLogo} alt="Certifié Qualiopi" className="h-[50px] w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(236,240,255,0.1)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white/60 text-[14px]">
              © 2026. Tous droits réservés. Reproduction interdite. Fabrik01 est une marque déposée de Data Conforme
            </p>
          </div>
           <div className="flex gap-3 items-center">
             {/* LinkedIn Data Conforme */}
             <a
               href="https://www.linkedin.com/company/dataconforme/"
               target="_blank"
               rel="noopener noreferrer"
               title="LinkedIn Data Conforme"
               className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#0077B5] transition-colors cursor-pointer text-white/70 hover:text-white text-[13px]"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
               </svg>
               <span className="font-['Inter:Semi_Bold',sans-serif]">Data Conforme</span>
             </a>
             {/* LinkedIn Jérôme Ficat */}
             <a
               href="https://www.linkedin.com/in/jerome-ficat/"
               target="_blank"
               rel="noopener noreferrer"
               title="LinkedIn Jérôme Ficat"
               className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#0077B5] transition-colors cursor-pointer text-white/70 hover:text-white text-[13px]"
             >
               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
               </svg>
               <span className="font-['Inter:Semi_Bold',sans-serif]">Jérôme Ficat</span>
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="about" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative w-full pt-[140px] pb-[80px] bg-white text-center">
        <div className="max-w-[1000px] mx-auto px-8 relative z-10">
          <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[48px] md:text-[56px] leading-[1.1] mb-6">
            À propos de <span className="text-[#00A9C1]">Data Conforme</span>
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] leading-relaxed max-w-[800px] mx-auto">
            Une équipe pluridisciplinaire d'experts réunissant l'excellence juridique et technologique pour sécuriser et propulser vos projets.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#F8FAFC] to-white/0 pointer-events-none" />
      </section>

      {/* L'Equipe Section */}
      <section className="w-full py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[40px] mb-4">
              Notre Équipe
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[18px]">
              L'alliance de l'expertise juridique et technologique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jérôme Ficat", role: "Fondateur & CEO / Expert RGPD", desc: "DPO externe depuis 2020. Plus de 50 audits RGPD et cyber. Responsable parcours Qualiopi.", image: teamJerome },
              { name: "Matthias de Forni", role: "CTO / Déc. IA & Automatisation", desc: "Expert IA, agents intelligents (n8n, CrewAI). Développe des solutions souveraines sur mesure.", image: teamMatthias },
              { name: "Nosimahéfa Rakotoarisoa", role: "Expert RGPD & IA Souveraine", desc: "Analyse et accompagnement RGPD/AI Act, assistant Délégué à la Protection des Données.", image: teamNosima },
              { name: "Melvin Bouyssou", role: "Développeur IA & Automatisation", desc: "Développement web, IA et création d'automatisations complexes.", image: teamMelvin },
              { name: "Raphaël SANTOS", role: "Business Developer", desc: "Développement et lancement des offres de transformation IA pour les organisations.", image: teamRaphael }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E5E9F0] hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-[#00A9C1]/10 flex items-center justify-center mb-6 overflow-hidden border-2 border-[#00A9C1]/20">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[22px] mb-2">{member.name}</h3>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#82E600] text-[14px] uppercase tracking-wide mb-4">{member.role}</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[15px] leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="w-full py-20 px-8 bg-white border-b border-[#E5E9F0]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[40px] mb-4">
              Nos Valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0047BA] to-[#00A9C1] rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                 <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4">Excellence</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[16px] leading-relaxed">
                Nous visons l'excellence dans chaque projet, en combinant expertise technique et compréhension métier.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00A9C1] to-[#82E600] rounded-2xl flex items-center justify-center mb-6 rotate-3">
                 <Lock className="text-white w-8 h-8" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4">Transparence</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[16px] leading-relaxed">
                Une communication claire et honnête avec nos clients. Pas de promesses irréalistes, que des résultats concrets.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#82E600] to-[#0A192F] rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                 <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4">Partenariat</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[16px] leading-relaxed">
                Nous construisons des relations long terme basées sur la confiance, le respect et le succès mutuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mot du fondateur (Avant-dernier) */}
      <section className="w-full py-20 px-8" style={{ background: "linear-gradient(135deg, #0A192F 0%, #1A293F 100%)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[36px] mb-6">Le mot du fondateur</h2>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#82E600] text-[20px] mb-6">Jérôme Ficat</h3>
            
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white/90 text-[18px] leading-relaxed mb-6 italic border-l-4 border-[#00A9C1] pl-6">
              "Après 20 ans d'expérience dans le digital et 5 ans en tant que DPO, j'ai créé Data Conforme par passion pour aider mes clients à maîtriser leurs risques juridiques et cybersécurité. Notre plus grand défi aujourd'hui ? L'intelligence artificielle qu'il faut pouvoir encadrer pour innover de manière éthique et souveraine."
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-[8px] cursor-pointer shadow-[0_8px_30px_rgba(130,230,0,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: '#82E600' }}
              >
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px]">
                  Prendre rendez-vous
                </span>
                <ChevronRight className="w-5 h-5 text-[#0A192F]" />
              </button>
              <a
                href="https://www.linkedin.com/in/jerome-ficat/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-[8px] cursor-pointer hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[16px]">Jérôme Ficat</span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#00A9C1] rounded-2xl rotate-6 opacity-20"></div>
            <img
              src={jeromeFicatImage}
              alt="Jérôme Ficat"
              className="w-[350px] md:w-[450px] h-auto object-contain rounded-2xl relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Specificité section */}
      <section className="w-full py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center mb-12">
            <img
              src={brainImage}
              alt="Intelligence Artificielle"
              className="w-[200px] h-auto object-contain"
            />
          </div>
          
          <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[36px] text-center mb-12">
            Spécificité de Data conforme : Des juristes qui parlent "TECH"
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[18px] leading-relaxed mb-8">
              <span className="font-bold">Contrairement aux consultants purement juridiques</span>, nous comprenons votre
              réalité technique.
            </p>

            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed mb-6">
              Juristes de formation, chaque collaborateur est formé au digital et traduit les obligations RGPD en
              solutions concrètes pour votre système d'information.
            </p>

            <div className="my-8">
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[18px] mb-6">
                Pourquoi cette approche change tout ?
              </p>

              <div className="space-y-4 ml-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#00A9C1] text-[20px] font-bold">✓</span>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                    <span className="font-bold">Compréhension de vos infrastructures</span> : Serveurs, réseaux,
                    applications... nous parlons votre langage technique
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A9C1] text-[20px] font-bold">✓</span>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                    <span className="font-bold">Audit de votre SI</span> : Vision indépendante sur vos failles, vos
                    prestataires, vos vulnérabilités réelles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A9C1] text-[20px] font-bold">✓</span>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                    <span className="font-bold">Nous faisons des ponts</span> : Entre vos équipes IT et votre direction,
                    entre conformité et performance
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[18px] mb-4">
                Le résultat ?
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                La protection de vos données devient un atout stratégique, et non une contrainte administrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function HorizontalAntiGravityStrip() {
  const stats = [
    { value: "+200", label: "Professionnels formés" },
    { value: "100%", label: "Taux de satisfaction" },
    { value: "+6 ans", label: "Années d'expérience" },
    { value: "100%", label: "Certifié Qualiopi" },
  ];

  return (
    <section className="w-full py-12 bg-white border-y border-[#E5E9F0] overflow-hidden relative">
      <div className="flex animate-horizontal-scroll whitespace-nowrap">
        {/* Two sets of items for seamless loop */}
        {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center min-w-[350px] px-12">
            <div className="text-[52px] font-['Manrope:Extra_Bold',sans-serif] text-[#0047BA] leading-none mb-2 drop-shadow-[0_0_15px_rgba(0,71,186,0.15)]">
              {stat.value}
            </div>
            <div className="text-[14px] font-['Inter:Semi_Bold',sans-serif] text-[#5A6C7D] uppercase tracking-[3px] text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      {/* Side gradients for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

function FormationPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [showRGPDDetails, setShowRGPDDetails] = useState(false);
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="formation" onNavigate={onNavigate} />

      {/* Hero Section - Centered without image */}
      <section className="relative w-full pt-[96px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%)' }}>
        <div className="max-w-[1000px] mx-auto px-8 py-24 text-center">
          <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[56px] leading-[1.1] mb-6">
            Développez vos compétences en conformité
          </h1>
          
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] leading-[1.6] mb-8 max-w-[800px] mx-auto">
            Des formations pratiques et certifiantes pour maîtriser le RGPD, l'IA Act et la cybersécurité, animées par des experts terrain.
          </p>
          
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                Voir nos formations
              </span>
            </button>
            
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white border-2 border-[#E5E9F0] rounded-lg transition-all duration-200 hover:border-[#0047BA] hover:bg-[#F8FAFB] cursor-pointer"
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px]">
                Demander un devis
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar replaced with Anti-Gravity Marquee */}
      <HorizontalAntiGravityStrip />

      {/* Programs Section */}
      <section className="w-full py-24 px-8 bg-[#F8FAFB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[48px] mb-4">
              Nos formations
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] max-w-[700px] mx-auto">
              Des programmes conçus pour vous accompagner dans votre mise en conformité
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Program 1: DPO */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E9F0]">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4 leading-tight">
                Formation d’un référent interne RGPD
              </h3>
              
              <p className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#0047BA] text-[15px] mb-4">
                Afin de rendre son organisation conforme au RGPD
              </p>

              <div className="mb-6">
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px] mb-2">Objectifs :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A9C1] shrink-0 mt-1" />
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[14px]">Connaître et comprendre les obligations liées au RGPD.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A9C1] shrink-0 mt-1" />
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[14px]">Être capable de mettre en application les obligations de conformité RGPD au sein de son entreprise.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    de 0,5 jours à 5 jours (3h30 à 35h), selon le besoin exprimé
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Certification incluse
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    En présentiel ou distanciel
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowRGPDDetails(!showRGPDDetails)}
                className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#F8FAFB] transition-all duration-200 group flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[16px]">
                  {showRGPDDetails ? "Voir moins" : "En savoir plus"}
                </span>
                <ChevronRight className={`w-4 h-4 text-[#0047BA] transition-transform duration-200 ${showRGPDDetails ? 'rotate-90' : ''}`} />
              </button>

              {/* Expandable Details Menu */}
              <div className={`overflow-hidden transition-all duration-300 ${showRGPDDetails ? 'max-h-[800px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-[#F8FAFB] rounded-xl border border-[#E5E9F0] space-y-4">
                  <div className="space-y-3">
                    {[
                      "Connaître son système d’information",
                      "Être capable d’analyser son organisation physique",
                      "Réaliser la documentation interne obligatoire",
                      "Auditer son site internet et/ou intranet",
                      "Établir son registre des activités de traitement",
                      "Mettre en place les autres registres : incidents, sous-traitants, suivi des demandes de droits, recueil des preuves de consentement",
                      "Plannifier des sensibilisation des salariés à la cybersécurité et au RGPD",
                      "Tester un logiciel de gestion du RGPD"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BA] mt-2 shrink-0" />
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[14px] leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#E5E9F0]">
                    <p className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#0A192F] text-[14px]">
                      Action de formation individuelle ou de groupe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program 2: IA Act */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#0047BA]">
              <div className="absolute -top-3 right-8">
                <div className="px-4 py-1 rounded-full bg-[#0047BA]">
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-[12px] uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #00A9C1 0%, #82E600 100%)' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[28px] mb-4">
                IA Act & Conformité
              </h3>
              
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6] mb-6">
                Maîtrisez la réglementation européenne sur l'IA et mettez en place une gouvernance responsable de vos systèmes d'IA.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    3 jours (21 heures)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Attestation de formation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Format sur-mesure disponible
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <a 
                  href="/programme_formation_ia.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center no-underline cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}
                >
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[15px]">
                    Programme de formation
                  </span>
                </a>
                
                <a 
                  href="/Fiche_Produit_IA_Qualiopi.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#F8FAFB] transition-colors duration-200 flex items-center justify-center text-center no-underline cursor-pointer"
                >
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[15px]">
                    Fiche de formation
                  </span>
                </a>
              </div>
            </div>

            {/* Program 3: Cybersécurité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E9F0]">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #82E600 0%, #0047BA 100%)' }}>
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[28px] mb-4">
                Cybersécurité
              </h3>
              
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6] mb-6">
                Protégez vos données et systèmes. Formation pratique aux enjeux de cybersécurité pour dirigeants et équipes IT.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    2 jours (14 heures)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Cas pratiques inclus
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Tous niveaux
                  </span>
                </div>
              </div>
              
              <button className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#0047BA] transition-colors duration-200 group cursor-pointer">
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] group-hover:text-white text-[16px]">
                  En savoir plus
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[48px] mb-4">
              Pourquoi choisir nos formations ?
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] max-w-[700px] mx-auto">
              Une approche unique combinant expertise juridique et maîtrise technique
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0047BA15 0%, #00A9C115 100%)' }}>
                <BookOpen className="w-10 h-10 text-[#0047BA]" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Expertise terrain
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Formateurs praticiens avec plus de 20 ans d'expérience en protection des données et transformation digitale.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
                <img src={qualiopiLogo} alt="Qualiopi" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Certifications reconnues
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Organisme certifié Qualiopi. Votre formation peut être financée jusqu'à 50% par votre OPCO et donne accès à des certifications professionnelles valorisantes.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #82E60015 0%, #0047BA15 100%)' }}>
                <Users className="w-10 h-10 text-[#82E600]" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Approche pratique
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Cas concrets, ateliers et mises en situation pour une application immédiate dans votre contexte professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-8" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[48px] leading-tight mb-6">
            Prêt à vous former ?
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-white/90 text-[20px] leading-[1.6] mb-10">
            Contactez-nous pour construire ensemble votre parcours de formation personnalisé.
          </p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white hover:bg-gray-100 rounded-lg transition-colors duration-200 shadow-lg cursor-pointer"
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[16px]">
                Nous contacter
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer">
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                Télécharger le catalogue
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="home" onNavigate={onNavigate} />
      <div className="relative w-full flex flex-col">
        <Main onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function Fabrik01Page({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="fabrik01" onNavigate={onNavigate} />
      <div className="relative w-full pt-[96px]">
        <Body />
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function LegalNoticePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="legal" onNavigate={onNavigate} />
      
      <section className="relative w-full pt-[140px] pb-24 px-8 border-b border-[#E5E9F0]" style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[rgba(0,71,186,0.1)] text-[#0047BA] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-6">
            Informations Légales
          </div>
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] mb-6 leading-tight">Mentions Légales</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6C7D]">
            Transparence et informations réglementaires concernant l'éditeur du site Data Conforme.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-8">
        <div className="max-w-[800px] mx-auto space-y-12">
           
           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <ScrollText className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">Définitions</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p><strong>Client :</strong> tout professionnel ou personne physique capable au sens des articles 1123 et suivants du Code civil, ou personne morale, qui visite le Site objet des présentes conditions générales.</p>
               <p><strong>Contenu :</strong> Ensemble des éléments constituants l’information présente sur le Site, notamment textes – images – vidéos.</p>
               <p><strong>Informations clients :</strong> Ci-après dénommé « Information (s) » qui correspondent à l’ensemble des données personnelles susceptibles d’être détenues par DATA CONFORME pour la gestion de votre compte, de la gestion de la relation client et à des fins d’analyses et de statistiques.</p>
               <p><strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.</p>
               <p><strong>Informations personnelles :</strong> « Les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
               <p>Les termes « données à caractère personnel », « personne concernée », « sous-traitant » et « données sensibles » ont le sens défini par le Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Building2 className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">1. Présentation du site internet</h2>
             </div>
             <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed mb-4">
               En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet <a href="https://dataconforme.fr" className="text-[#00A9C1] hover:underline">https://dataconforme.fr</a> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
             </p>
             <ul className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-2">
               <li><strong>Propriétaire :</strong> DATA CONFORME est une Société par Actions Simplifiée (SAS), représentée par Jérôme FICAT.</li>
               <li><strong>Responsable de la rédaction :</strong> Jérôme FICAT</li>
               <li><strong>Adresse :</strong> 63 rue Jacques Teulié 31150 FENOUILLET</li>
               <li><strong>N° SIRET :</strong> 939 743 225 R.C.S. Toulouse</li>
               <li><strong>Webmaster :</strong> Jérôme FICAT</li>
               <li><strong>Hébergeur :</strong> O2 switch, Chem. des Pardiaux, 63000 Clermont-Ferrand</li>
               <li><strong>Délégué à la protection des données :</strong> Jérôme FICAT – <a href="mailto:rgpd@dataconforme.com" className="text-[#00A9C1] hover:underline">rgpd@dataconforme.com</a></li>
             </ul>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Scale className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">2. Conditions générales d’utilisation du site et des services proposés</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site.</p>
               <p>L’utilisation du site <a href="https://www.dataconforme.fr" className="text-[#00A9C1] hover:underline">https://www.dataconforme.fr</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.</p>
               <p>Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par DATA CONFORME, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web est mis à jour régulièrement par le responsable de publication. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <BookOpen className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">3. Description des services fournis</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>Le site internet a pour objet de fournir une information concernant l’ensemble des activités de la société DATA CONFORME.</p>
               <p>DATA CONFORME s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
               <p>Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <HardDrive className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">4. Limitations contractuelles sur les données techniques</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.</p>
               <p>Le site <a href="https://www.dataconforme.fr" className="text-[#00A9C1] hover:underline">https://www.dataconforme.fr</a> est hébergé chez un prestataire français, et donc situé sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).</p>
               <p>L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal.</p>
               <p>DATA CONFORME et l’hébergeur O2switch ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie liée notamment à l’encombrement du réseau empêchant l’accès au serveur.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Shield className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">5. Propriété intellectuelle et contrefaçons</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>DATA CONFORME est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons.</p>
               <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : DATA CONFORME.</p>
               <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Users className="w-6 h-6 text-[#00A9C1]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">6. Limitations de responsabilité</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p>DATA CONFORME agit en tant qu’éditeur du site et est responsable de la qualité et de la véracité du Contenu qu’il publie.</p>
               <p>DATA CONFORME ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet <a href="https://www.dataconforme.fr/" className="text-[#00A9C1] hover:underline">https://www.dataconforme.fr/</a>, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
               <p>DATA CONFORME ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. DATA CONFORME se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p>
               <p>Le cas échéant, DATA CONFORME se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</p>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                 <Lock className="w-6 h-6 text-[#0047BA]" />
               </div>
               <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">7. Protection des données à caractère personnel</h2>
             </div>
             <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
               <p><strong>Les activités de traitement opérées sur le site internet :</strong></p>
               <ul className="list-disc pl-5 space-y-2">
                 <li>Gestion des contacts par courrier électronique, par téléphone ou par formulaire</li>
                 <li>Promotion de l’entité</li>
               </ul>
               <p>Nous n’utilisons aucun cookie (ou traceur) non essentiel au bon fonctionnement du site. Nous respectons les recommandations de la CNIL SAN-2020-003 du 28 juillet 2020.</p>
               <p>Pour plus d’information sur notre politique de protection des données, merci de consulter notre page dédiée en cliquant <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="text-[#00A9C1] hover:underline">ici</a>.</p>
             </div>
           </div>
           
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function PrivacyPolicyPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="privacy" onNavigate={onNavigate} />
      
      <section className="relative w-full pt-[140px] pb-24 px-8 border-b border-[#E5E9F0]" style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[rgba(0,169,193,0.1)] text-[#00A9C1] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-6">
            Protection des données
          </div>
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] mb-6 leading-tight">Politique de Confidentialité</h1>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6C7D]">
            Transparence totale sur la collecte, l'utilisation et la protection de vos données personnelles par Data Conforme.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-8">
        <div className="max-w-[900px] mx-auto space-y-8">
          
          {/* I - Objectifs */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00A9C1]" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">I – Objectifs de notre politique de confidentialité</h2>
            </div>
            <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
              <p>Cette Politique de Confidentialité s’applique à tous les services, produits, et applications, proposés par Data conforme.</p>
              <div className="bg-[#F8FAFB] p-6 rounded-xl border border-[#E5E9F0]">
                <p className="font-['Manrope:Bold',sans-serif] text-[#0A192F] mb-2 uppercase text-[12px] tracking-wider">Nos coordonnées</p>
                <p><strong>DATA CONFORME :</strong> Société par Actions Simplifiée (SAS)<br />
                N° SIRET : 939 743 225 R.C.S. Toulouse<br />
                Adresse : 63 rue Jacques Teulié 31150 FENOUILLET<br />
                Courriel : <a href="mailto:rgpd@dataconforme.com" className="text-[#00A9C1] hover:underline">rgpd@dataconforme.com</a></p>
              </div>
              <p>Nous nous assurons que nos mesures techniques et organisationnelles respectent vos droits relatifs à la protection des données (RGPD, Directive UE n°2002/58, Loi Informatique et Libertés). Lorsque vous nous fournissez des données, vous nous autorisez à les recueillir pour répondre à nos obligations contractuelles, au titre de notre intérêt légitime ou sur la base de votre consentement.</p>
            </div>
          </div>

          {/* II - Quel type d'informations */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-[#0047BA]" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">II – Quel type d’informations collectons nous ?</h2>
            </div>
            <div className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed space-y-4">
              <p>Nous recueillons et traitons actuellement les informations suivantes :</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dans le cadre de nos formulaires :</strong> Noms, prénoms, nom de votre société, courriel professionnel, téléphone.</li>
                <li><strong>Dans le cadre de notre relation contractuelle :</strong> Adresse professionnelle, SIRET, et coordonnées de contact direct.</li>
              </ul>
            </div>
          </div>

          {/* III & IV - Obtention & Traitement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-[#00A9C1]" />
                </div>
                <h2 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F]">III – Comment obtenons-nous les données ?</h2>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed">
                La plupart des données nous sont fournies directement par vous lorsque vous souhaitez des compléments d’information, un devis, ou souscrire à un contrat de service.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                  <FileCheck className="w-6 h-6 text-[#0047BA]" />
                </div>
                <h2 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F]">IV – Activités de traitement</h2>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed">
                Gestion des contacts, promotion de l’entité, analyse statistique, gestion de la clientèle et des prospects, pilotage de la conformité via logiciel métier RGPD (SAAS).
              </p>
            </div>
          </div>

          {/* V, VI, VII - Stockage & Sécurité */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <HardDrive className="w-5 h-5 text-[#00A9C1]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F]">V – Stockage</h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">Serveurs sécurisés situés en France ou dans un pays adéquat au RGPD.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#00A9C1]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F]">VI – Conservation</h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">Respect des obligations légales. Suppression définitive après expiration du délai.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-[#0047BA]" />
                  <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F]">VII – Violations</h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">Information de la CNIL au plus tard dans les 48h en cas de faille constatée.</p>
              </div>
            </div>
          </div>

          {/* VIII - Vos droits */}
          <div className="bg-[#0A192F] rounded-2xl p-8 border border-[#1A293F] shadow-xl text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#00A9C1] flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px]">VIII – Vos droits sur les données</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 font-['Inter:Regular',sans-serif] text-white/80 text-[15px]">
              <div className="space-y-4">
                <p><strong>Droit d’accès :</strong> Demander des copies de vos données personnelles.</p>
                <p><strong>Droit à la rectification :</strong> Corriger ou compléter des informations inexactes.</p>
                <p><strong>Droit à l’effacement :</strong> Demander la suppression de vos données.</p>
              </div>
              <div className="space-y-4">
                <p><strong>Droit à la restriction :</strong> Limiter le traitement dans certaines circonstances.</p>
                <p><strong>Droit d’opposition :</strong> Vous opposer au traitement de vos données.</p>
                <p><strong>Droit à la portabilité :</strong> Transférer vos données à une autre organisation.</p>
              </div>
            </div>
            <p className="mt-8 pt-8 border-t border-white/10 text-white/60 text-[14px] italic">
              Pour exercer vos droits, contactez-nous à <a href="mailto:rgpd@dataconforme.com" className="text-[#00A9C1] hover:underline font-bold">rgpd@dataconforme.com</a>. Une réponse vous sera apportée sous un mois.
            </p>
          </div>

          {/* IX - Réclamation */}
          <div className="bg-white rounded-2xl p-8 border border-[#E5E9F0] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E6F6F9] flex items-center justify-center shrink-0">
                <FileCheck className="w-6 h-6 text-[#00A9C1]" />
              </div>
              <h2 className="font-['Manrope:Bold',sans-serif] text-[24px] text-[#0A192F]">IX – Réclamation auprès de la CNIL</h2>
            </div>
            <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] leading-relaxed">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une plainte à la CNIL : 3 Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07 ou sur <a href="http://www.cnil.fr" className="text-[#00A9C1] hover:underline">www.cnil.fr</a>.
            </p>
          </div>

          {/* X - Mise à jour */}
          <div className="text-center pt-8">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#5A6C7D]">
              Version mise à jour le <strong>11 février 2026</strong>. Toute modification sera portée à la connaissance du public.
            </p>
          </div>

        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function TrustCenterPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-[#F8FAFB]">
      <Navbar currentPage="trust-center" onNavigate={onNavigate} />
      
      {/* Premium Hero Section */}
      <section className="relative w-full pt-[140px] pb-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A192F 0%, #0047BA 100%)' }}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_#00A9C1_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_#82E600_0%,_transparent_50%)]"></div>
        
        <div className="max-w-[1200px] mx-auto px-8 relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-[rgba(130,230,0,0.15)] text-[#82E600] font-['Inter:Semi_Bold',sans-serif] text-[14px] mb-8 border border-[#82E600]/30 backdrop-blur-md uppercase tracking-wider shadow-[0_0_15px_rgba(130,230,0,0.2)]">
            Engagement de conformité
          </div>
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[64px] leading-[1.1] mb-8 drop-shadow-lg">
            Centre de Confiance
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[22px] text-white/90 max-w-[800px] mx-auto font-light">
            La sécurité, la transparence et la protection de vos données sont inscrites dans le code et les processus de Data Conforme.
          </p>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="w-full px-8 pb-24 -mt-16 relative z-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             
             {/* Security By Design */}
             <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-10 shadow-2xl border border-white">
                <div className="w-16 h-16 rounded-[20px] mb-8 flex items-center justify-center shadow-inner" style={{ background: 'linear-gradient(135deg, rgba(0,71,186,0.1) 0%, rgba(0,169,193,0.1) 100%)' }}>
                  <Shield className="w-8 h-8 text-[#0047BA]" />
                </div>
                <h3 className="font-['Manrope:Bold',sans-serif] text-[32px] text-[#0A192F] mb-4">Sécurité par Design</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#5A6C7D] leading-relaxed mb-8">
                  Nos infrastructures logicielles et nos méthodes d'audit sont développées autour des principes les plus stricts de <em>Privacy By Design</em>, empêchant la compromission des données avant même qu'elle n'arrive.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 bg-[#F8FAFB] p-3 rounded-xl border border-[#E5E9F0]">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#82E600]" /></div> 
                    <span className="font-['Inter:Medium',sans-serif] text-[#0A192F]">Chiffrement fort (en transit et au repos)</span>
                  </li>
                  <li className="flex items-center gap-4 bg-[#F8FAFB] p-3 rounded-xl border border-[#E5E9F0]">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#82E600]" /></div> 
                    <span className="font-['Inter:Medium',sans-serif] text-[#0A192F]">Hébergement souverain qualifié SecNumCloud</span>
                  </li>
                  <li className="flex items-center gap-4 bg-[#F8FAFB] p-3 rounded-xl border border-[#E5E9F0]">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"><CheckCircle2 className="w-5 h-5 text-[#82E600]" /></div> 
                    <span className="font-['Inter:Medium',sans-serif] text-[#0A192F]">Tests d'intrusion continus par des hackers éthiques</span>
                  </li>
                </ul>
             </div>

             {/* Compliance & Certifications */}
             <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-10 shadow-2xl border border-white">
                <div className="w-16 h-16 rounded-[20px] mb-8 flex items-center justify-center shadow-inner" style={{ background: 'linear-gradient(135deg, rgba(0,169,193,0.1) 0%, rgba(130,230,0,0.1) 100%)' }}>
                  <Award className="w-8 h-8 text-[#00A9C1]" />
                </div>
                <h3 className="font-['Manrope:Bold',sans-serif] text-[32px] text-[#0A192F] mb-4">Certifications d'Excellence</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#5A6C7D] leading-relaxed mb-8">
                  La garantie de notre sérieux. Notre organisme fusionne l'expertise juridique et technologique pour valider les standards les plus exigeants de l'industrie pour nous et nos clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-[24px] border border-[#E5E9F0] transition-transform hover:-translate-y-1 shadow-sm">
                     <img src={qualiopiLogo} alt="Qualiopi Certification" className="h-10 w-auto object-contain mb-2" />
                     <span className="font-['Manrope:Bold',sans-serif] text-[18px] text-[#0A192F]">Qualiopi</span>
                     <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#5A6C7D] mt-1">
                       Financement OPCO jusqu'à 50%
                     </span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-[#white] to-[#f8f9fa] rounded-[24px] border border-[#E5E9F0] transition-transform hover:-translate-y-1 shadow-sm">
                     <img src={isoLogo} alt="ISO 27001 Certification" className="h-14 w-auto object-contain mb-2" />
                     <span className="font-['Manrope:Bold',sans-serif] text-[18px] text-[#0A192F]">ISO 27001</span>
                     <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#5A6C7D] mt-1">Méthodologie prouvée</span>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center gap-4 bg-[#F8FAFB] p-4 rounded-xl border border-[#E5E9F0]">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 overflow-hidden"><img src={nis2Logo} alt="NIS 2" className="w-full h-full object-cover" /></div> 
                    <span className="font-['Inter:Medium',sans-serif] text-[14px] text-[#0A192F]">Accompagnement expert sur la conformité NIS 2 et l'IA Act Européen.</span>
                </div>
             </div>

          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Global Scroll Animation Observer
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            // Optional: observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        '[data-name*="Section"], [data-name*="Card"], [data-name*="Grid"], [data-name*="Container"]'
      );
      elements.forEach((el) => {
        const hasStaticOpacity = Array.from(el.classList).some(
          (c) => c.startsWith("opacity-") && c !== "opacity-0" && c !== "opacity-100"
        );
        if (!el.classList.contains("scroll-animated") && !hasStaticOpacity) {
          // Add Tailwind transition classes. Using transforming vars prevents overriding layout transforms.
          el.classList.add(
            "scroll-animated",
            "transition-all",
            "duration-1000",
            "ease-out",
            "opacity-0",
            "translate-y-10"
          );
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [currentPage]);

  return currentPage === "about" ? (
    <AboutPage onNavigate={setCurrentPage} />
  ) : currentPage === "formation" ? (
    <FormationPage onNavigate={setCurrentPage} />
  ) : currentPage === "ia-conforme" ? (
    <IAConformePage onNavigate={setCurrentPage} />
  ) : currentPage === "fabrik01" ? (
    <Fabrik01Page onNavigate={setCurrentPage} />
  ) : currentPage === "legal" ? (
    <LegalNoticePage onNavigate={setCurrentPage} />
  ) : currentPage === "privacy" ? (
    <PrivacyPolicyPage onNavigate={setCurrentPage} />
  ) : currentPage === "trust-center" ? (
    <TrustCenterPage onNavigate={setCurrentPage} />
  ) : currentPage === "contact" ? (
    <ContactPage onNavigate={setCurrentPage} />
  ) : currentPage === "tarifs" ? (
    <TarifsPage />
  ) : (
    <HomePage onNavigate={setCurrentPage} />
  );
}