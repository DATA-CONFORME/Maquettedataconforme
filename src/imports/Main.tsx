import teamImage from "figma:asset/f4ce6425b714fa3a43b2bdce4c81882315e6fe05.png";
import heroIllustration from "figma:asset/53e0a23a3adb6c4bc33708448daf06ff9a49f921.png";
import svgPaths from "./svg-2sqwfkv5kr";
import imgCybersecurityInterface from "figma:asset/15bdec7e0b0fb784d49f88bf54bf7523e1051e4f.png";
import imgServerInfrastructure from "figma:asset/ee3de47921ca488ba9f51b39e9b32147fee48add.png";

/* ─── Design Tokens (palette Data Conforme) ──────────────────────────────
   Primary   : #00A9C1  (teal / cyan)
   Secondary : #82E600  (lime green)
   Tertiary  : #0047BA  (blue)
   Neutral   : #0A192F  (dark navy)
──────────────────────────────────────────────────────────────────────── */

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[48px] text-center w-[720.97px]">
        <p className="leading-[48px]">Expertise Multidimensionnelle</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#3d494c] text-[18px] text-center w-[718.05px]">
        <p className="mb-0">{`Nos pôles d'excellence répondent aux exigences les plus strictes de la gouvernance`}</p>
        <p>moderne des données.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] right-0 top-[68px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[#0A192F] text-[24px]">
        <p>Cyber-Résilience</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] right-[8px] top-[116px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-start leading-[26px] not-italic relative shrink-0 text-[#3d494c] text-[16px]">
        <p className="m-0">Infrastructure robuste conçue par Fabrik01 pour résister aux menaces les plus sophistiquées. Protection proactive et détection en temps réel.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[40px] left-[8px] top-[4px] w-[32px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
            {/* Primary teal icon */}
            <path d={svgPaths.p3c781640} fill="var(--fill-0, #00A9C1)" id="Icon" />
          </svg>
        </div>
        <Heading2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          {/* Secondary dark checkmark */}
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #3D7000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[14px] w-[143.75px]">
        <p className="leading-[20px]">Audit de vulnérabilité</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #3D7000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container7 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[14px] w-[152.81px]">
        <p className="leading-[20px]">Réponse aux incidents</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Item />
        <Item1 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,71,186,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <List />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function HighCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative row-[1/span_2] self-start shrink-0" data-name="High Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,71,186,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[41px] relative w-full">
        <Container4 />
        <Margin />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[36px]">{`Gouvernance IA & RGPD`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(200,230,255,0.92)] w-full">
        <p className="mb-0">{`Naviguez dans la complexité de l'AI Act avec une`}</p>
        <p className="mb-0">sérénité totale. Nous transformons les contraintes</p>
        <p>réglementaires en avantages compétitifs.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          {/* Arrow icon on Secondary (lime) button — dark neutral text */}
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #0A192F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    /* Secondary (#82E600) CTA button */
    <div className="bg-[#82E600] content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[16px] text-center w-[107.39px]">
        <p className="leading-[24px]">En savoir plus</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <Heading3 />
      <Container9 />
      <Button />
    </div>
  );
}

function WideCard() {
  return (
    /* Tertiary → Primary gradient card */
    <div
      className="col-[2/span_2] justify-self-stretch relative row-1 self-start shrink-0"
      data-name="Wide Card"
      style={{ backgroundImage: "linear-gradient(159.692deg, #0047BA 0%, #00A9C1 100%)" }}
    >
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[35.5px] right-[35.5px] top-[82px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[28px] relative shrink-0 text-[#0A192F] text-[20px]">
        <p>Audit de Conformité</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[35.5px] right-[35.5px] top-[130px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-start leading-[20px] not-italic relative shrink-0 text-[#3d494c] text-[14px]">
        <p className="m-0">Analyse exhaustive de votre écosystème digital.</p>
      </div>
    </div>
  );
}

function SmallCard() {
  return (
    /* Tertiary light (#D4E3FF) small card */
    <div className="bg-[#D4E3FF] col-2 h-[194px] justify-self-stretch relative row-2 shrink-0" data-name="Small Card 1">
      <div aria-hidden="true" className="absolute border border-[rgba(0,71,186,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute left-[35.5px] size-[25px] top-[37.25px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <path d={svgPaths.p34a70300} fill="var(--fill-0, #0047BA)" id="Icon" />
        </svg>
      </div>
      <Heading4 />
      <Container11 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[32.99px] top-[85px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0A192F] text-[20px] w-[159.69px]">
        <p className="leading-[28px]">Cloud Souverain</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[32.99px] top-[121px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[#3d494c] text-[14px] w-[266.47px]">
        <p className="mb-0">{`Solutions d'hébergement garantissant la`}</p>
        <p>souveraineté.</p>
      </div>
    </div>
  );
}

function SmallCard1() {
  return (
    <div className="bg-[#D4E3FF] col-3 h-[194px] justify-self-stretch relative row-2 shrink-0" data-name="Small Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(0,71,186,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="absolute h-[20px] left-[34.25px] top-[41px] w-[27.5px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 20">
          <path d={svgPaths.p1f146080} fill="var(--fill-0, #0047BA)" id="Icon" />
        </svg>
      </div>
      <Heading5 />
      <Container12 />
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__299.75px_194px] relative shrink-0 w-full" data-name="Container">
      <HighCard />
      <WideCard />
      <SmallCard />
      <SmallCard1 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function SectionBentoGridServices() {
  return (
    /* Light accent background (#ECF0FF) instead of old #f0f3ff */
    <div className="absolute bg-[#ECF0FF] content-stretch flex flex-col items-start left-0 py-[96px] right-0 top-[788px]" data-name="Section - Bento Grid Services">
      <Container />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] not-italic relative shrink-0 text-[#3d494c] text-[16px] w-[434.48px]">
        <p className="mb-0">Rejoignez les leaders qui font confiance à Data Conforme</p>
        <p>pour leur stratégie de conformité globale.</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[32px]">
        <p className="leading-[32px]">Prêt pour la mutation digitale ?</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[448px] relative shrink-0 w-[447.5px]" data-name="Container">
      <Heading6 />
      <Container14 />
    </div>
  );
}

function Button1() {
  return (
    /* Tertiary blue CTA button */
    <div className="bg-[#0047BA] content-stretch flex flex-col items-center justify-center px-[40px] py-[16px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[210.64px]">
        <p className="leading-[28px]">Commencer Maintenant</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Button1 />
    </div>
  );
}

function SectionCtAsSocialProof() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 max-w-[1280px] px-[24px] right-0 top-[3550px]" data-name="Section - CTAs / Social Proof">
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute inset-0 opacity-5" data-name="Container">
      {/* Primary teal blur */}
      <div className="absolute bg-[#00A9C1] blur-[60px] right-0 rounded-[12px] size-[800px] top-0" data-name="Background+Blur" />
      {/* Secondary dark green blur */}
      <div className="absolute bg-[#3D7000] blur-[50px] bottom-0 left-0 rounded-[12px] size-[600px]" data-name="Background+Blur" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[960px] justify-center leading-[0] left-[173.13px] not-italic opacity-10 text-[#0A192F] text-[640px] top-[346px] w-[933.75px]">
        <p className="leading-[960px]">DC</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[16px] tracking-[1.6px] uppercase w-[309.41px]">
          <p className="leading-[24px]">Sécurité de Données Premium</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    /* Accent light (#D4E3FF = Tertiary tint) badge */
    <div className="bg-[#D4E3FF] content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,71,186,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      {/* Secondary dark dot */}
      <div className="bg-[#3D7000] rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
      <Container19 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[#0A192F] text-[72px] tracking-[-1.8px] w-full">
        <p className="mb-0">{`L'Architecture du`}</p>
        {/* Primary → Secondary gradient on hero text */}
        <p className="bg-clip-text bg-gradient-to-r from-[#00A9C1] text-[transparent] to-[#82E600]">Futur Conforme</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[576px] relative shrink-0 w-[576px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[130px] justify-center leading-[32.5px] not-italic relative shrink-0 text-[#3d494c] text-[20px] w-[574.69px]">
        <p className="mb-0">Data Conforme fusionne la solidité architecturale et la</p>
        <p className="mb-0">précision technique pour sécuriser vos actifs numériques les</p>
        <p className="mb-0">plus précieux. Une clarté absolue pour une conformité sans</p>
        <p>compromis.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    /* Primary hero CTA : Tertiary → Primary gradient */
    <div
      className="content-stretch flex flex-col items-center justify-center px-[32px] py-[18px] relative rounded-[8px] shrink-0"
      data-name="Button"
      style={{ backgroundImage: "linear-gradient(166.782deg, #0047BA 0%, #00A9C1 100%)" }}
    >
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[208.48px]">
        <p className="leading-[28px]">Découvrir nos Solutions</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[34px] py-[18px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,71,186,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#0A192F] text-[18px] text-center w-[160px]">
        <p className="leading-[28px]">Prendre un RDV</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <BackgroundBorder />
      <Heading />
      <Container20 />
      <Container21 />
    </div>
  );
}

function CybersecurityInterface() {
  return (
    <div className="h-[400px] pointer-events-none relative rounded-[4px] shrink-0 w-full" data-name="Cybersecurity Interface">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute h-[129.5%] left-0 max-w-none top-[-14.75%] w-full" src={imgCybersecurityInterface} />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          {/* Secondary lime icon on dark card */}
          <path d={svgPaths.p3d5d680} fill="var(--fill-0, #82E600)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[140.03px]">
        <p className="leading-[24px]">100% Compliance</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(236,240,255,0.7)] w-[116.47px]">
        <p className="leading-[20px]">Fabrik01 Certified</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140.03px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Background() {
  return (
    /* Neutral dark card badge */
    <div className="absolute bg-[#0A192F] bottom-[-23px] left-[-23px] rounded-[8px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container22 />
      </div>
    </div>
  );
}

function BackgroundBorder1WithTeam() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-center shrink-0 overflow-visible" data-name="Hero Illustration">
      <img
        alt="Équipe Data Conforme - conformité et sécurité des données"
        src={heroIllustration}
        className="absolute w-[115%] max-w-none h-auto object-contain"
        style={{ top: "50%", left: "-8%", transform: "translateY(-50%)" }}
      />
    </div>
  );
}

function Container17() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_484px] max-w-[inherit] px-[24px] relative w-full">
        <Container18 />
        <BackgroundBorder1WithTeam />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[128px] pt-[80px] right-0 top-[96px]" data-name="Hero Section">
      <Container16 />
      <Container17 />
    </div>
  );
}

function StatCard({ percentage, description }: { percentage: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-[48px] bg-white rounded-[16px] border border-[rgba(0,71,186,0.1)] shadow-sm">
      <div className="flex flex-col items-center gap-[16px]">
        <div className="font-['Manrope:Extra_Bold',sans-serif] text-[64px] leading-[72px] bg-clip-text bg-gradient-to-r from-[#0047BA] to-[#00A9C1] text-transparent">
          {percentage}
        </div>
        <div className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#3d494c] text-center max-w-[320px]">
          {description}
        </div>
      </div>
    </div>
  );
}

function PillarCard({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[12px] p-[32px] bg-white rounded-[12px] border border-[rgba(0,71,186,0.08)]">
      <div className="text-[48px] leading-[48px]">{emoji}</div>
      <div className="font-['Manrope:Bold',sans-serif] text-[16px] leading-[24px] text-[#0A192F] text-center">
        {label}
      </div>
    </div>
  );
}

function SectionStats() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 py-[96px] right-0 top-[1650px]" data-name="Section - Stats">
      <div className="max-w-[1280px] w-full px-[24px]">
        {/* Introduction text */}
        <div className="mb-[64px] max-w-[900px] mx-auto">
          <div className="font-['Inter:Regular',sans-serif] text-[18px] leading-[32px] text-[#3d494c] text-center">
            <p className="mb-4">
              Vos clients sont plus exigeants. Vos partenaires scrutent vos pratiques : l'IA Act et le RGPD imposent des due diligences strictes sur toute la chaîne de valeur, incluant la localisation et la sécurité des données. La pression "privacy" est aussi visible côté entreprises : 94% déclarent que leurs clients n'achèteraient pas si les données n'étaient pas correctement protégées.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-[32px] mb-[64px]">
          <StatCard
            percentage="76%"
            description="n'achèteraient pas auprès d'une entreprise qu'ils ne jugent pas fiable sur l'usage/protection des données"
          />
          <StatCard
            percentage="72%"
            description="des PME européennes expriment une forte inquiétude sur la localisation des données (stockage hors UE / USA)"
          />
          <StatCard
            percentage="75%"
            description="des salariés veulent travailler pour une organisation qui a un impact positif sur la société"
          />
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-4 gap-[24px] mb-[64px]">
          <PillarCard emoji="🛡️" label="Conformité réglementaire" />
          <PillarCard emoji="🇫🇷" label="Recherche de souveraineté" />
          <PillarCard emoji="💎" label="Éthique revendiquée" />
          <PillarCard emoji="🤖" label="IA Responsable" />
        </div>

        {/* Conclusion text */}
        <div className="max-w-[900px] mx-auto">
          <div className="font-['Inter:Regular',sans-serif] text-[18px] leading-[32px] text-[#3d494c] text-center">
            <p>
              Face à ces enjeux, afficher votre engagement pour une conformité robuste n'est plus optionnel : c'est un <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0047BA]">différenciateur stratégique</span> qui rassure, fidélise et attire. Surtout dans un écosystème où le "cloud de confiance" et l'IA responsable européenne deviennent des critères de choix déterminants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServerInfrastructure() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Server Infrastructure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[119.44%] left-0 max-w-none top-[-9.72%] w-full" src={imgServerInfrastructure} />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bottom-[0.25px] content-stretch flex flex-col items-start justify-center left-1/2 opacity-10 right-0 top-0" data-name="Container">
      <ServerInfrastructure />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      {/* Secondary lime accent label */}
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#82E600] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Synergie Technologique</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[48px] text-white w-full">
        <p className="mb-0">Fabrik01 : Le Cœur de notre</p>
        <p>Excellence Technique.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(236,240,255,0.8)] w-full">
        <p className="mb-0">{`Chaque solution Data Conforme est propulsée par l'ingénierie de pointe de`}</p>
        <p className="mb-0">Fabrik01. Ce partenariat garantit une intégration parfaite entre conseil</p>
        <p>stratégique et exécution technologique de haute précision.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-[92.59px]">
        <p className="leading-[36px]">99.9%</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(236,240,255,0.6)] text-center tracking-[1.2px] uppercase w-[101.33px]">
        <p className="leading-[16px]">Disponibilité</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[101.33px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-[51.77px]">
        <p className="leading-[36px]">ISO</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(236,240,255,0.6)] text-center tracking-[1.2px] uppercase w-[107.77px]">
        <p className="leading-[16px]">Certifié 27001</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[107.77px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <div className="bg-[rgba(255,255,255,0.1)] h-[48px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container35 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <Container29 />
      <Heading7 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Background1() {
  return (
    /* Neutral dark navy background for the Fabrik01 branding section */
    <div className="bg-[#0A192F] relative rounded-[32px] shrink-0 w-full" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[80px] relative w-full">
          <Container27 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Fabrik01BrandingSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip px-[24px] py-[96px] right-0 top-[2750px]" data-name="Fabrik01 Branding Section">
      <Background1 />
    </div>
  );
}

function Footer() {
  return (
    <footer className="absolute left-0 right-0 top-[3800px] bg-[#0A192F] py-[64px] px-[24px]" data-name="Footer">
      <div className="max-w-[1280px] mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-4 gap-[64px] mb-[48px]">
          {/* Brand column */}
          <div>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[20px] mb-[16px]">
              Data Conforme
            </h3>
            <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[24px] text-[rgba(236,240,255,0.6)]">
              Solutions avancées de conformité et de cybersécurité pour les entreprises innovantes.
            </p>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-['Manrope:Bold',sans-serif] font-bold text-[#82E600] text-[12px] tracking-[1.2px] uppercase mb-[24px]">
              Services
            </h4>
            <div className="flex flex-col gap-[12px]">
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Audit Systèmes
              </a>
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Conseil RGPD
              </a>
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Formation Sécurité
              </a>
            </div>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="font-['Manrope:Bold',sans-serif] font-bold text-[#82E600] text-[12px] tracking-[1.2px] uppercase mb-[24px]">
              Ressources
            </h4>
            <div className="flex flex-col gap-[12px]">
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                AI Act Guide
              </a>
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Documentation
              </a>
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Centre d'aide
              </a>
            </div>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="font-['Manrope:Bold',sans-serif] font-bold text-[#82E600] text-[12px] tracking-[1.2px] uppercase mb-[24px]">
              Légal
            </h4>
            <div className="flex flex-col gap-[12px]">
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Privacy Policy
              </a>
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Terms of Service
              </a>
              <a href="#" className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.8)] hover:text-[#00A9C1] transition-colors duration-200 underline">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-[32px] border-t border-[rgba(236,240,255,0.1)] flex items-center justify-between">
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.6)]">
            © 2024 Data Conforme. All rights reserved.
          </p>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(236,240,255,0.6)]">
            Fabrik01 is a brand of Data Conforme
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Main() {
  return (
    <div className="relative size-full" data-name="Main">
      <SectionBentoGridServices />
      <SectionCtAsSocialProof />
      <HeroSection />
      <SectionStats />
      <Fabrik01BrandingSection />
      <Footer />
    </div>
  );
}