"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';
import { LucideIcon } from 'lucide-react';

const Icon1: LucideIcon = /*<your_icon_here>*/;
const Icon2: LucideIcon = /*<your_icon_here>*/;
const Icon3: LucideIcon = /*<your_icon_here>*/;

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
          buttonText="Get started"
          onButtonClick={() => { /* handle click */ }}
        />
      </div>
      <div id="hero" data-section="hero">
        <BillboardHero title="Welcome to Xeven Solutions" subtitle="Your partner in innovation" />
      </div>
      <div id="about" data-section="about">
        <SplitAbout description="We provide innovative solutions that drive productivity and efficiency for your business." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D steps={[
          { title: "Step 1", description: "Create an account.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
          { title: "Step 2", description: "Verify your identity.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
          { title: "Step 3", description: "Fund your account.", image: "/images/placeholder3.avif", position: "right", isCenter: false }
        ]} />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics title="Tokenomics Overview" description="Our unique approach to token distribution and management." kpiItems={[
          { value: "1 Billion", description: "Total Supply", icon: Icon1 },
          { value: "20%", description: "Liquidity Reserve", icon: Icon2 },
          { value: "$10M", description: "Initial Market Cap", icon: Icon3 }
        ]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient 
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions Logo"
          logoText="Xeven Solutions"
          items={[
            { label: "Privacy Policy", onClick: () => { /* handle click */ } },
            { label: "Terms of Service", onClick: () => { /* handle click */ } },
            { label: "Contact Us", onClick: () => { /* handle click */ } }
          ]}
          className="footer-class"
          gradientStyle={{ backgroundColor: '#0A1B3C' }}
        />
      </div>
    </SiteThemeProvider>
  );
}