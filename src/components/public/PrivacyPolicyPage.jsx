import React, { useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Lock, FileText, Mail, Phone, Globe, CheckCircle2, Server, EyeOff, Cookie, Cpu } from 'lucide-react';
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
      <header className="sticky top-0 z-50 bg-[#090c19]/90 backdrop-blur-2xl border-b border-cyan-500/30 px-4 lg:px-8 py-3">
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
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest text-cyan-400 border border-cyan-500/40 px-2 py-0.5 rounded-full bg-cyan-950/40">
              Privacy Policy
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/40"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>FramEmpire</span>
            </button>

            <button
              onClick={onOpenEstimator}
              className="neon-button-secondary py-1.5 px-3.5 text-xs rounded-full shadow-[0_0_15px_rgba(0,243,255,0.25)] hidden sm:flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Project Estimator</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Privacy Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-12 sm:py-16 space-y-12">
        
        {/* Page Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-cyan-500/20 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-bold shadow-[0_0_15px_rgba(0,243,255,0.15)]">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Legal & Privacy Terms</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Creato_Display'] tracking-tight leading-tight">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 pt-1 font-mono">
            <span><strong>Effective Date:</strong> August 10, 2026</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Last Updated:</strong> August 10, 2026</span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-3">
            At <strong className="text-white">FramEmpire</strong> ("we," "our," or "us"), accessible from{' '}
            <a href="https://www.framempire.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold hover:text-cyan-300">
              www.framempire.com
            </a>
            , we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or utilize our creative and technical services—including Video Editing, Graphic Design, 2D & 3D Animation, Web Development, Vibe Coding, and digital agency solutions.
          </p>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic bg-cyan-950/20 p-3.5 rounded-xl border border-cyan-500/20 text-cyan-300">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this policy, please refrain from accessing the site or using our services.
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 bg-[#090d1a]/80 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
              1. Information We Collect
            </h2>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            We collect information directly from you when you visit our site, fill out a contact form, request a quote, or interact with our agency services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#050814] p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>A. Personal & Business Data</span>
              </h3>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, company name, and project role.</li>
                <li><strong className="text-white">Project Files & Assets:</strong> Media files, raw footage, design briefs, copy, 3D models, code repositories, and brand assets provided for project execution.</li>
                <li><strong className="text-white">Payment & Transaction Details:</strong> Billing details and invoicing history processed securely through verified third-party payment providers.</li>
              </ul>
            </div>

            <div className="bg-[#050814] p-4 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>B. Technical & Automated Usage Data</span>
              </h3>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                <li><strong className="text-white">Browser & Device Data:</strong> IP address, browser type, operating system, referring URLs, and pages viewed on our site.</li>
                <li><strong className="text-white">Cookies & Analytics:</strong> Tracking tools to analyze site performance and improve user experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 bg-[#090d1a]/80 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
              2. How We Use Your Information
            </h2>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            We use the information we collect for the following core purposes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="bg-[#050814] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-sm">Service Execution</h4>
              <p className="text-slate-400">To deliver professional video editing, graphic design, animation, web development, and vibe coding services as agreed upon.</p>
            </div>
            <div className="bg-[#050814] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-sm">Communication</h4>
              <p className="text-slate-400">To respond to project inquiries, provide updates, send invoices, and deliver client support.</p>
            </div>
            <div className="bg-[#050814] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-sm">Payments</h4>
              <p className="text-slate-400">To process local and international billing securely through trusted payment channels.</p>
            </div>
            <div className="bg-[#050814] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-sm">Website Optimization</h4>
              <p className="text-slate-400">To monitor website traffic, enhance user experience, and refine our service offerings.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 bg-gradient-to-br from-cyan-950/40 via-[#090d1a] to-[#070913] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,243,255,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shrink-0">
              <EyeOff className="w-5 h-5 text-cyan-300" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
              3. Client Assets & Portfolio Policy
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="bg-[#050814]/90 p-4 rounded-xl border border-cyan-500/30 space-y-1.5">
              <h3 className="font-bold text-cyan-300 text-sm">Ownership of Client Assets</h3>
              <p className="text-slate-300">
                All original files, raw video footage, graphic assets, code, or proprietary media provided by clients remain the exclusive property of the client.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-4 rounded-xl border border-cyan-500/30 space-y-1.5">
              <h3 className="font-bold text-cyan-300 text-sm">Portfolio Usage & Client Privacy</h3>
              <p className="text-slate-300">
                As a creative agency, FramEmpire displays completed projects (such as video edits, animations, and designs) in our public portfolio and social media showcases to demonstrate our work. However, if a client explicitly requests us not to showcase their project or requests privacy/confidentiality, we strictly honor that request and keep the project private.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-4 rounded-xl border border-cyan-500/30 space-y-1.5">
              <h3 className="font-bold text-cyan-300 text-sm">Data Security & Non-Disclosure</h3>
              <p className="text-slate-300">
                We do not sell, leak, or share client files, source code, or unreleased assets to third parties without permission.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-3 bg-[#090d1a]/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
              <h2 className="text-lg font-bold text-white font-['Creato_Display']">4. Remote & Global Operations</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              FramEmpire operates as a fully remote online agency serving clients globally. We do not operate a public physical office location. All interactions, project files, and communications are handled electronically via secure digital channels.
            </p>
          </section>

          <section className="space-y-3 bg-[#090d1a]/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2.5">
              <Server className="w-5 h-5 text-cyan-400 shrink-0" />
              <h2 className="text-lg font-bold text-white font-['Creato_Display']">5. Third-Party Services</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We may use third-party platforms for cloud storage, project management, analytics, and payment processing. These third parties only have access to necessary data to perform their specific tasks and are obligated to keep your data confidential.
            </p>
          </section>
        </div>

        {/* Section 6 & 7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-3 bg-[#090d1a]/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2.5">
              <Cookie className="w-5 h-5 text-cyan-400 shrink-0" />
              <h2 className="text-lg font-bold text-white font-['Creato_Display']">6. Cookies & Tracking</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We use cookies to improve your navigation and experience on our website. You can adjust your browser settings to decline or clear cookies, though some features of our site may not function as intended without them.
            </p>
          </section>

          <section className="space-y-3 bg-[#090d1a]/80 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-cyan-400 shrink-0" />
              <h2 className="text-lg font-bold text-white font-['Creato_Display']">7. Data Security</h2>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We implement appropriate technical and administrative measures to safeguard your personal data and project files against unauthorized access, alteration, or disclosure.
            </p>
          </section>
        </div>

        {/* Section 8 */}
        <section className="space-y-3 bg-[#090d1a]/80 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-white font-['Creato_Display']">8. Changes to This Privacy Policy</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this page periodically.
          </p>
        </section>

        {/* Section 9: Contact Us */}
        <section className="space-y-4 bg-gradient-to-r from-cyan-950 via-slate-900 to-[#070913] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_25px_rgba(0,243,255,0.15)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-cyan-300" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
              9. Contact Us
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your project privacy, please reach out to us:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="space-y-2 bg-[#050814] p-4 rounded-xl border border-slate-800">
              <p><strong className="text-cyan-400">Agency Name:</strong> <span className="text-white">FramEmpire</span></p>
              <p><strong className="text-cyan-400">Website:</strong> <a href="https://www.framempire.com/" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-semibold">www.framempire.com</a></p>
              <p><strong className="text-cyan-400">Operating Model:</strong> <span className="text-slate-300">Remote / Digital Agency</span></p>
            </div>

            <div className="space-y-2 bg-[#050814] p-4 rounded-xl border border-slate-800">
              <p><strong className="text-cyan-400">Official Mail:</strong> <a href="mailto:info@framempire.com" className="text-white hover:text-cyan-300 underline">info@framempire.com</a> / <a href="mailto:team.framempire@gmail.com" className="text-slate-300 hover:text-cyan-300 underline">team.framempire@gmail.com</a></p>
              <p><strong className="text-cyan-400">Contact Phone:</strong> <a href="tel:+8801615288259" className="text-white hover:text-cyan-300 underline font-semibold">+880 1615-288259</a></p>
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
