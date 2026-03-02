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
import IjenHealthScreening from './app/ijen-health-screening/page';
import PressRecognitionPage from './app/press-recognition/page';
import CrewProfile from './app/crew/page';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Hub */}
          <Route path="/" element={<WhyJvto />} />
          <Route path="/why-jvto" element={<Navigate to="/" replace />} />

          {/* High-Fidelity Forensic Pages */}
          <Route path="/verify" element={<VerifyJvto />} />
          <Route path="/verify-jvto" element={<Navigate to="/verify" replace />} />
          <Route path="/ijen-health-screening" element={<IjenHealthScreening />} />
          <Route path="/press" element={<PressRecognitionPage />} />
          <Route path="/crew/:crewId" element={<CrewProfile />} />

          {/* Redirects for redundant/placeholder routes to maintain SEO/Links */}
          <Route path="/why-jvto/safety-leadership" element={<Navigate to="/" replace />} />
          <Route path="/why-jvto/proof-transparency" element={<Navigate to="/verify" replace />} />
          <Route path="/why-jvto/guest-voices-reviews" element={<Navigate to="/" replace />} />
          <Route path="/why-jvto/partners-verification" element={<Navigate to="/verify" replace />} />
          <Route path="/why-jvto/local-team-operations" element={<Navigate to="/" replace />} />
          <Route path="/why-jvto/history-roots" element={<Navigate to="/verify" replace />} />
          <Route path="/why-jvto/proof-transparency/police-safety" element={<Navigate to="/verify" replace />} />
          <Route path="/why-jvto/faq" element={<Navigate to="/" replace />} />
          <Route path="/why-jvto/safety-screening" element={<Navigate to="/ijen-health-screening" replace />} />
          <Route path="/why-jvto/our-team" element={<Navigate to="/" replace />} />
          <Route path="/why-jvto/recognition-history" element={<Navigate to="/press" replace />} />
          <Route path="/why-jvto/press-recognition" element={<Navigate to="/press" replace />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
