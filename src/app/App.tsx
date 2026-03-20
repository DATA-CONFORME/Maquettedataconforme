import { useState, useEffect } from "react";
import logoDataConforme from "../assets/logo.png";
import jeromeFicatImage from "figma:asset/e4d81823abce74b8f71e2af748f5902b137d5ec7.png";
import brainImage from "figma:asset/32941527829b6439a6a0192b836d7968d7d083e6.png";
import formationHeroImage from "figma:asset/b0ce91a4ba3d2da757a976c89d84d80c675c3772.png";
import Main from "../imports/Main";
import Body from "../imports/Body";
import IAConformePage from "./components/IAConformePage";
import { BookOpen, Clock, Award, Users, FileCheck, Shield, Download, ChevronRight } from "lucide-react";

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
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 whitespace-nowrap ${
            currentPage === "home" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          Conformité et Opportunités
        </button>
        <button
          onClick={() => onNavigate("formation")}
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 ${
            currentPage === "formation" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          Formation
        </button>
        <div className="relative group">
          <button
            onClick={() => onNavigate("ia-conforme")}
            className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 whitespace-nowrap ${
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
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200"
              >
                Fabrik01
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={() => onNavigate("about")}
          className={`font-['Inter:Regular',sans-serif] font-normal text-[16px] transition-colors duration-200 ${
            currentPage === "about" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
          }`}
        >
          À propos
        </button>
        <a
          href="#"
          className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] hover:text-[#00A9C1] transition-colors duration-200"
        >
          News
        </a>
        <a
          href="#"
          className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] hover:text-[#00A9C1] transition-colors duration-200"
        >
          Contact
        </a>
      </div>

      {/* CTA Button */}
      <div className="flex items-center">
        <button
          className="px-5 py-[10px] rounded-[8px] cursor-pointer shadow-md hover:opacity-90 transition-opacity duration-200"
          style={{ backgroundImage: "linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)" }}
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
            Démarrer
          </span>
        </button>
      </div>
    </nav>
  );
}

export { Navbar };

function Footer() {
  return (
    <footer className="w-full bg-[#0A192F] py-16 px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Footer grid */}
        <div className="grid grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Data Conforme */}
          <div>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Data Conforme
            </h3>
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
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Conformité RGPD
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  IA Responsable
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Formation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Fabrik01
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Ressources */}
          <div>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Légal */}
          <div>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200"
                >
                  CGU
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-white/60 text-[14px] text-center">
            © 2026 Data Conforme. Tous droits réservés.
          </p>
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

      {/* Hero Section with Jérôme Ficat */}
      <section
        className="relative w-full pt-[96px]"
        style={{
          background: "linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)",
          minHeight: "600px",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-16 flex items-center gap-16">
          {/* Left content */}
          <div className="flex-1">
            <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[48px] leading-tight mb-8">
              À propos...
            </h1>
            <p className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-4">
              Jérôme FICAT
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-4">
              J'ai créé mon propre cabinet d'expertise après{" "}
              <span className="font-bold">20 ans d'expérience dans le monde digital</span> et{" "}
              <span className="font-bold">5 ans en tant que délégué à la protection des données</span>.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-4">
              <span className="font-bold">Juriste de formation</span>, je me suis formé aux différentes
              réglementations en protection des données et <span className="font-bold">analyse des risques cybers</span>{" "}
              pour vous proposer une <span className="font-bold">expertise en conformité</span>.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-4">
              J'exerce ce métier par <span className="font-bold">passion</span> car j'aide mes clients à maîtriser leurs
              risques juridiques et de cybersécurité, améliorer leurs process et pérenniser leurs organisations.
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-4">
              <span className="font-bold">
                Nous formons aussi de futurs Délégués à la Protection des données ainsi que des relais RGPD internes à
                l'entreprise.
              </span>
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-4">
              <span className="font-bold">Nous suivons pour vous toutes les évolutions de la législation</span> pour
              rester performant à vos côtés. (NIS2, ISO27001, DORA, etc...)
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[18px] leading-relaxed mb-6 mt-8">
              <span className="font-bold">Un des défis les plus pregnants aujourd'hui ? :</span>
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-4">
              Sans doute <span className="font-bold">l'intelligence artificielle qu'il faut encadrer et maîtriser</span>
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white text-[16px] leading-relaxed mb-8">
              ou comment rester conforme, respectueux des données, de l'éthique, tout en créant de nouvelles pratiques
              avec l'IA ?
            </p>

            <button
              className="px-8 py-4 rounded-[8px] cursor-pointer shadow-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: "#82E600" }}
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px]">
                APPELEZ AU 06 20 98 88 16
              </span>
            </button>
          </div>

          {/* Right image */}
          <div className="flex-shrink-0 relative">
            <img
              src={jeromeFicatImage}
              alt="Jérôme Ficat"
              className="w-[450px] h-auto object-contain rounded-lg"
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

      <Footer />
    </div>
  );
}

function HorizontalAntiGravityStrip() {
  const stats = [
    { value: "500+", label: "Professionnels formés" },
    { value: "98%", label: "Taux de satisfaction" },
    { value: "15+", label: "Années d'expérience" },
    { value: "100%", label: "Certifié Qualiopi" },
  ];

  return (
    <section className="w-full py-12 bg-white border-y border-[#E5E9F0] overflow-hidden relative">
      <div className="flex animate-horizontal-scroll whitespace-nowrap">
        {/* Two sets of items for seamless loop */}
        {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center min-w-[350px] animate-float px-12">
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
            <button className="px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                Voir nos formations
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white border-2 border-[#E5E9F0] rounded-lg transition-all duration-200 hover:border-[#0047BA] hover:bg-[#F8FAFB]">
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
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[28px] mb-4">
                Formation DPO
              </h3>
              
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6] mb-6">
                Devenez délégué à la protection des données certifié. Formation complète pour maîtriser le RGPD et piloter la conformité.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    5 jours (35 heures)
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
              
              <button className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#0047BA] transition-colors duration-200 group">
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] group-hover:text-white text-[16px]">
                  En savoir plus
                </span>
              </button>
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
              
              <button className="w-full py-3 px-6 rounded-lg transition-colors duration-200" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                  En savoir plus
                </span>
              </button>
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
              
              <button className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#0047BA] transition-colors duration-200 group">
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
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00A9C115 0%, #82E60015 100%)' }}>
                <Award className="w-10 h-10 text-[#00A9C1]" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Certifications reconnues
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Organisme certifié Qualiopi, nos formations donnent accès à des certifications professionnelles valorisantes.
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
            <button className="px-8 py-4 bg-white hover:bg-gray-100 rounded-lg transition-colors duration-200 shadow-lg">
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[16px]">
                Nous contacter
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                Télécharger le catalogue
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="home" onNavigate={onNavigate} />
      <div className="relative w-full flex flex-col">
        <Main />
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
      <Footer />
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
        '[data-name$="Section"], [data-name$="Card"], [data-name$="Grid"], [data-name="Container"]'
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
  ) : (
    <HomePage onNavigate={setCurrentPage} />
  );
}