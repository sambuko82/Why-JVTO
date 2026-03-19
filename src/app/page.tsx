import React from 'react';
import { PageSEO } from '../components/PageSEO';
import { HeroSection } from '../components/home/HeroSection';
import { Differentiators } from '../components/home/Differentiators';
import { DestinationGrid } from '../components/home/DestinationGrid';
import { TourBrowser } from '../components/home/TourBrowser';
import { TrustSignals } from '../components/home/TrustSignals';
import { FounderSpotlight } from '../components/home/FounderSpotlight';
import { VerifyCTA } from '../components/home/VerifyCTA';
import { Footer } from '../components/home/Footer';
import { SSOT } from '../lib/ssot';

export default function HomePage() {
  // ============================================================================
  // SKEMA JSON-LD (SEO Nuclear Option)
  // ============================================================================
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": SSOT.pages['/'].schema_type || "TravelAgency",
    "@id": `${SSOT.organization.url}/#organization`,
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
    <div className="min-h-screen bg-white font-sans text-authority-navy selection:bg-safety-orange/30 pb-20 md:pb-0">
      <PageSEO route="/" schema={jsonLdSchema} />

      {/* SECTION 1: HERO (The Authority Statement) */}
      <HeroSection />

      {/* SECTION 2: DIFFERENTIATORS (The JVTO Difference) */}
      <Differentiators />

      {/* SECTION 3: DESTINATIONS (Explore the Ring of Fire) */}
      <DestinationGrid />

      {/* SECTION 4: TOURS BROWSER (Departure Selector) */}
      <TourBrowser />

      {/* SECTION 5: TRUST SIGNALS (Why Trust JVTO?) */}
      <TrustSignals />

      {/* SECTION 6: FOUNDER SPOTLIGHT (Police Leadership) */}
      <FounderSpotlight />

      {/* SECTION 7: VERIFY CTA (Ready to Audit?) */}
      <VerifyCTA />

      {/* SECTION 8: FOOTER */}
      <Footer />
    </div>
  );
}
