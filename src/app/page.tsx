import React from 'react';
import { PageSEO } from '../components/PageSEO';
import { HeroSection } from '../components/home/HeroSection';
import { Differentiators } from '../components/home/Differentiators';
import { DestinationGrid } from '../components/home/DestinationGrid';
import { TourBrowser } from '../components/home/TourBrowser';
import { VerifyCTA } from '../components/home/VerifyCTA';
import { Footer } from '../components/home/Footer';
import { AuthorityShield } from '../components/home/AuthorityShield';
import { HealthFlow } from '../components/home/HealthFlow';
import { TrustStack } from '../components/home/TrustStack';
import { PartnerHighlight } from '../components/home/PartnerHighlight';
import { CrewSection } from '../components/CrewSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { GuideAndFAQ } from '../components/home/GuideAndFAQ';
import { TransparencyHub } from '../components/home/TransparencyHub';
import { AtmosphericBreak } from '../components/home/AtmosphericBreak';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-audit-white font-sans text-authority-navy selection:bg-safety-orange/30">
      <PageSEO route="/" />

      {/* SECTION A-B: HERO */}
      <HeroSection />

      {/* SECTION C: ENTITY ANCHOR */}
      <AuthorityShield />

      {/* SECTION D: DIFFERENTIATORS */}
      <Differentiators />

      {/* SECTION E: DESTINATIONS */}
      <DestinationGrid />

      {/* SECTION F: DEPARTURE CITY */}
      <TourBrowser />

      {/* SECTION G: FEATURED TOURS */}
      {/* (Already part of TourBrowser or needs separate component) */}

      {/* SECTION I: MANDATORY REQUIREMENT */}
      <HealthFlow />

      {/* SECTION J: INTERNATIONAL GUESTS */}
      <TrustStack />

      {/* STRATEGIC AFFILIATIONS HIGHLIGHT */}
      <PartnerHighlight />

      {/* SECTION K: TEAM & CREW */}
      <CrewSection />

      {/* SECTION L: REVIEWS */}
      <ReviewsSection />

      {/* CONSOLIDATED TRANSPARENCY HUB (HISTORY, PRESS, FORENSIC) */}
      <TransparencyHub />

      {/* SECTION M & N: TRAVEL GUIDE & FAQ (INTEGRATED) */}
      <GuideAndFAQ />

      {/* SECTION O: PRE-FOOTER CTA */}
      <VerifyCTA />

      {/* SECTION P: FOOTER */}
      <Footer />
    </div>
  );
}
