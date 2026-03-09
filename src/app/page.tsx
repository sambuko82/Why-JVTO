import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStack } from '../components/home/TrustStack';
import { AuthorityShield } from '../components/home/AuthorityShield';
import { PressProof } from '../components/home/PressProof';
import { HistoryArtifacts } from '../components/home/HistoryArtifacts';
import { ForensicLocker } from '../components/home/ForensicLocker';
import { HealthFlow } from '../components/home/HealthFlow';
import { TeamRegistry } from '../components/home/TeamRegistry';
import { Footer } from '../components/home/Footer';
import { SSOT } from '../lib/ssot';

export default function WhyJvto() {
  // ============================================================================
  // SKEMA JSON-LD (SEO Nuclear Option)
  // ============================================================================
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://javavolcano-touroperator.com/#organization",
    "name": SSOT.organization.name,
    "legalName": SSOT.organization.legalName,
    "foundingDate": SSOT.organization.foundingDate,
    "url": SSOT.organization.url,
    "description": SSOT.organization.description,
    "founder": {
      "@type": "Person",
      "name": SSOT.organization.founder.name,
      "jobTitle": SSOT.organization.founder.role,
      "memberOf": {
        "@type": "GovernmentOrganization",
        "name": "Indonesian National Police",
        "subOrganization": {
          "@type": "GovernmentOrganization",
          "name": SSOT.organization.founder.unit
        }
      },
      "sameAs": SSOT.organization.founder.sameAs
    },
    "subjectOf": [
      {
        "@type": "Book",
        "name": SSOT.history.book2016.title,
        "isbn": SSOT.history.book2016.isbn
      }
    ]
  };

  return (
    <div className="min-h-screen bg-audit-white font-sans text-authority-navy selection:bg-safety-orange/30 pb-20 md:pb-0">
      <Helmet>
        <title>{SSOT.organization.name} | Police-Led Volcanic Expeditions</title>
        <meta name="description" content={SSOT.organization.description} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      {/* SECTION 1: HERO (The Authority Statement) */}
      <HeroSection />

      {/* SECTION 2: THE HUB (The "Trust Stack" Grid) */}
      <TrustStack />

      {/* SECTION 2.5: AUTHORITY SHIELD (POLICE-LED) */}
      <AuthorityShield />

      {/* SECTION 3: PRESS & MEDIA PROOF (Tangkapan Layar Langsung) */}
      <PressProof />

      {/* SECTION 4: HISTORY ARTIFACTS (The Time-Proof) */}
      <HistoryArtifacts />

      {/* SECTION 5: THE FORENSIC LOCKER (Hard Evidence Preview) */}
      <ForensicLocker />

      {/* SECTION 5: HEALTH FLOW (IJEN SCREENING) */}
      <HealthFlow />

      {/* SECTION 6: THE TEAM REGISTRY (Personnel Roster) */}
      <TeamRegistry />

      {/* SECTION 7: FOOTER */}
      <Footer />
    </div>
  );
}
