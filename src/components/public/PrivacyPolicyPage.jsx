import React, { useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Lock, FileText, Mail, Phone, Globe, CheckCircle2, Server, EyeOff, Cookie, Cpu, Sparkles, AlertCircle, Layers } from 'lucide-react';
import Footer from './Footer';

export default function PrivacyPolicyPage({ onBackToHome, onOpenEstimator, onOpenPrivacyPolicy }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const originalTitle = document.title;
    document.title = "Privacy Policy — FramEmpire Studio";

    const updateMeta = (selector, attribute, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)[1];
          el.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)[1];
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    updateMeta('meta[property="og:title"]', 'content', 'Privacy Policy — FramEmpire Studio');
    updateMeta('meta[property="og:description"]', '100% Client Ownership, Privacy Policy & Confidentiality Terms for FramEmpire Studio services.');
    updateMeta('meta[name="twitter:title"]', 'content', 'Privacy Policy — FramEmpire Studio');

    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Sticky Header Bar */}
      <header className="sticky top-0 z-50 bg-[#090c19]/95 backdrop-blur-2xl border-b border-cyan-500/30 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={onBackToHome}
          >
            <img 
              src="/framempire_logo_white.png" 
              alt="FramEmpire Studio" 
              className="h-9 sm:h-11 object-contain drop-shadow-[0_0_12px_rgba(0,243,255,0.4)]"
            />
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-cyan-400 border border-cyan-500/40 px-2.5 py-0.5 rounded-full bg-cyan-950/60 shadow-[0_0_10px_rgba(0,243,255,0.15)]">
              Privacy Policy
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/40 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Studio</span>
            </button>

            <button
              onClick={onOpenEstimator}
              className="neon-button-secondary py-1.5 px-4 text-xs rounded-full shadow-[0_0_15px_rgba(0,243,255,0.25)] hidden sm:flex items-center gap-1.5 font-bold cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Estimator</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Privacy Policy Cards Grid Layout */}
      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-16 space-y-10">
        
        {/* Hero Card Banner */}
        <div className="bg-gradient-to-br from-cyan-950/60 via-[#090d1a] to-[#070913] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,243,255,0.15)] space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-xs font-bold shadow-[0_0_12px_rgba(0,243,255,0.2)]">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Official Privacy & Governance Statement</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-300 bg-slate-950/80 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <span><strong>Effective:</strong> August 10, 2026</span>
              <span className="text-slate-600">•</span>
              <span><strong>Updated:</strong> August 10, 2026</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Creato_Display'] tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white font-['Creato_Display']">FramEmpire</strong> ("we," "our," or "us"), accessible from{' '}
              <a href="https://www.framempire.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold hover:text-cyan-300">
                www.framempire.com
              </a>
              , we respect your privacy and are committed to protecting the personal information and project assets you share with us. This policy explains how we collect, use, disclose, and safeguard your data across Video Editing, Graphic Design, 2D & 3D Animation, Web Development, Vibe Coding, and digital agency solutions.
            </p>
          </div>

          <div className="bg-[#050814]/90 p-4 rounded-2xl border border-cyan-500/30 flex items-start gap-3 text-xs text-cyan-300/90 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this policy, please refrain from accessing the site or utilizing our agency services.
            </p>
          </div>
        </div>

        {/* Card 1: Information We Collect */}
        <section className="bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 hover:border-cyan-400/50 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">Section 01</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                1. Information We Collect
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            We collect information directly from you when you visit our site, fill out a contact form, request a quote, submit media briefs, or interact with our creative agency services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#050814] p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>A. Personal & Business Data</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Contact Info:</strong> Name, email address, phone number, company name, and project role.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Project Assets:</strong> Raw footage, design briefs, copy, 3D models, code repositories, and brand media provided for project execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Payment & Billing:</strong> Information required to process payments securely through verified third-party payment providers.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#050814] p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>B. Technical & Usage Data</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Device Specifications:</strong> IP address, browser type, operating system, and referring URLs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Analytics & Performance:</strong> Metrics collected via cookies and tracking tools to optimize site speed and user experience.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Card 2: How We Use Your Information */}
        <section className="bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 hover:border-cyan-400/50 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">Section 02</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                2. How We Use Your Information
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            We strictly utilize collected information to execute creative projects and maintain seamless client operations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#050814] p-4 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Service Execution</h3>
              <p className="text-xs text-slate-400">To deliver professional video editing, graphic design, 3D animation, web development, and vibe coding solutions as agreed upon.</p>
            </div>
            <div className="bg-[#050814] p-4 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Communication</h3>
              <p className="text-xs text-slate-400">To respond to project inquiries, provide milestone updates, issue invoices, and deliver direct executive support.</p>
            </div>
            <div className="bg-[#050814] p-4 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Secure Billing</h3>
              <p className="text-xs text-slate-400">To process local and international billing safely through verified payment channels.</p>
            </div>
            <div className="bg-[#050814] p-4 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm">Optimization</h3>
              <p className="text-xs text-slate-400">To monitor website traffic, enhance browsing responsiveness, and refine agency service performance.</p>
            </div>
          </div>
        </section>

        {/* Card 3: Client Assets & Portfolio Policy */}
        <section className="bg-gradient-to-br from-cyan-950/40 via-[#090d1a] to-[#070913] border border-cyan-400/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,243,255,0.12)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0">
              <EyeOff className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block font-mono">Section 03 • Core Client Protection</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                3. Client Assets & Portfolio Policy
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm">100% Client Ownership</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All original files, raw video footage, graphic assets, code repositories, or proprietary media provided by clients remain the exclusive property of the client.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm">Portfolio & Privacy Choice</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                FramEmpire showcases completed projects in our public reel. However, if a client explicitly requests confidentiality or NDA, we strictly honor that request and keep the project private.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm">Non-Disclosure Guarantee</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We do not sell, leak, or share client files, source code, or unreleased assets to third parties without prior written consent.
              </p>
            </div>
          </div>
        </section>

        {/* Cards 4 & 5 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 4: Remote & Global Operations */}
          <section className="bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-7 shadow-xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Creato_Display']">
                4. Remote & Global Operations
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              FramEmpire operates as a fully remote online agency serving clients globally. We do not operate a public physical office location. All interactions, project files, and communications are handled electronically via secure digital channels.
            </p>
          </section>

          {/* Card 5: Third-Party Services */}
          <section className="bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-7 shadow-xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Creato_Display']">
                5. Third-Party Services
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We may use third-party platforms for cloud storage of large video/animation files, project management, analytics, and local/international payment processing. These third parties only access necessary data to perform their specific tasks under strict confidentiality obligations.
            </p>
          </section>

        </div>

        {/* Cards 6, 7, 8 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 6 */}
          <section className="bg-[#090d1a] border border-slate-800 rounded-3xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Cookie className="w-4 h-4" />
              <span>6. Cookies & Tracking</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We use cookies to improve website navigation. You can adjust browser settings to decline or clear cookies anytime.
            </p>
          </section>

          {/* Card 7 */}
          <section className="bg-[#090d1a] border border-slate-800 rounded-3xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Lock className="w-4 h-4" />
              <span>7. Data Security</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We enforce appropriate technical and administrative safeguards to protect personal data and project files against unauthorized access.
            </p>
          </section>

          {/* Card 8 */}
          <section className="bg-[#090d1a] border border-slate-800 rounded-3xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Layers className="w-4 h-4" />
              <span>8. Policy Updates</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated date.
            </p>
          </section>

        </div>

        {/* Card 9: Contact Us & Escalation Desk */}
        <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-[#070913] border border-cyan-500/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(0,243,255,0.18)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">Section 09 • Direct Support</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                9. Contact Us
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your project privacy, please reach out to our client success desk:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2.5 bg-[#050814] p-5 rounded-2xl border border-slate-800">
              <p className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <strong className="text-cyan-400">Agency Name:</strong>
                <span className="text-white font-bold">FramEmpire</span>
              </p>
              <p className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <strong className="text-cyan-400">Official Website:</strong>
                <a href="https://www.framempire.com/" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-semibold">www.framempire.com</a>
              </p>
              <p className="flex items-center justify-between">
                <strong className="text-cyan-400">Operating Model:</strong>
                <span className="text-slate-300">Remote / Digital Agency</span>
              </p>
            </div>

            <div className="space-y-2.5 bg-[#050814] p-5 rounded-2xl border border-slate-800">
              <p className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <strong className="text-cyan-400">Official Email:</strong>
                <a href="mailto:info@framempire.com" className="text-white hover:text-cyan-300 underline font-semibold">info@framempire.com</a>
              </p>
              <p className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <strong className="text-cyan-400">Alternate Mail:</strong>
                <a href="mailto:team.framempire@gmail.com" className="text-slate-300 hover:text-cyan-300 underline">team.framempire@gmail.com</a>
              </p>
              <p className="flex items-center justify-between">
                <strong className="text-cyan-400">Contact Phone:</strong>
                <a href="tel:+8801615288259" className="text-white hover:text-cyan-300 underline font-semibold">+880 1615-288259</a>
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer 
        onOpenEstimator={onOpenEstimator}
        onOpenPrivacyPolicy={onOpenPrivacyPolicy}
      />
    </div>
  );
}
