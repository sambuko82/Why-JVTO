/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Existing Pages
import WhyJvto from './app/page';
import VerifyJvto from './app/verify-jvto/page';
import IjenHealthScreening from './app/travel-guide/ijen-health-screening/page';
import PressRecognitionPage from './app/verify-jvto/press-recognition/page';
import CrewProfile from './app/team/page';
import FAQPage from './app/why-jvto/page';
import { GlobalLayout } from './components/GlobalLayout';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GlobalLayout>
          <Routes>
            {/* Main Hub */}
            <Route path="/" element={<WhyJvto />} />

            {/* Trust Hub */}
            <Route path="/why-jvto" element={<FAQPage />} />
            <Route path="/why-jvto/safety-leadership" element={<Navigate to="/why-jvto" replace />} />
            <Route path="/why-jvto/our-story" element={<Navigate to="/why-jvto" replace />} />
            <Route path="/why-jvto/our-team" element={<Navigate to="/team" replace />} />
            <Route path="/why-jvto/the-jvto-difference" element={<Navigate to="/why-jvto" replace />} />

            {/* Proof Library (SSOT dedicated hub) */}
            <Route path="/verify-jvto" element={<VerifyJvto />} />
            <Route path="/verify-jvto/press-recognition" element={<PressRecognitionPage />} />
            <Route path="/verify-jvto/legal" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/verify-jvto/police-safety" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/verify-jvto/history-artifacts" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/verify-jvto/partners" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/verify-jvto/partners/:partnerId" element={<Navigate to="/verify-jvto" replace />} />

            {/* Crew Registry */}
            <Route path="/team/:crewId" element={<CrewProfile />} />
            <Route path="/team" element={<Navigate to="/" replace />} />

            {/* Travel Guide */}
            <Route path="/travel-guide/ijen-health-screening" element={<IjenHealthScreening />} />
            <Route path="/travel-guide/booking-information" element={<Navigate to="/why-jvto" replace />} />
            <Route path="/travel-guide" element={<Navigate to="/" replace />} />

            {/* Itinerary Cluster */}
            <Route path="/tour/:slug" element={<Navigate to="/" replace />} />

            {/* Reviews Registry */}
            <Route path="/reviews" element={<Navigate to="/" replace />} />

            {/* Policy */}
            <Route path="/policy/booking-payment-cancellation" element={<Navigate to="/why-jvto" replace />} />
            <Route path="/policy/inclusions-exclusions" element={<Navigate to="/why-jvto" replace />} />
            <Route path="/policy/privacy" element={<Navigate to="/why-jvto" replace />} />

            {/* Partner Landing Page */}
            <Route path="/isic/student-package" element={<Navigate to="/" replace />} />

            {/* Legacy Redirects */}
            <Route path="/verify" element={<Navigate to="/verify-jvto" replace />} />
            <Route path="/ijen-health-screening" element={<Navigate to="/travel-guide/ijen-health-screening" replace />} />
            <Route path="/press" element={<Navigate to="/verify-jvto/press-recognition" replace />} />
            <Route path="/faq" element={<Navigate to="/why-jvto" replace />} />
            <Route path="/crew/:crewId" element={<Navigate to="/team/:crewId" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </GlobalLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
