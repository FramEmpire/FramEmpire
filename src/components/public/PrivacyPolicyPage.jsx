import React, { useEffect } from 'react';
import { ShieldCheck, ArrowLeft, Lock, FileText, Mail, Phone, Globe, CheckCircle2, Server, EyeOff, Cpu, AlertCircle, Smartphone, Gamepad2, Code } from 'lucide-react';
import Footer from './Footer';

export default function PrivacyPolicyPage({ onBackToHome, onOpenEstimator, onOpenPrivacyPolicy }) {
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = "Privacy Policy — FramEmpire Studio";
    } catch (e) {}
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
              type="button"
              onClick={onBackToHome}
              className="text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-all flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/40 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Studio</span>
            </button>

            {onOpenEstimator && (
              <button
                type="button"
                onClick={onOpenEstimator}
                className="neon-button-secondary py-1.5 px-4 text-xs rounded-full shadow-[0_0_15px_rgba(0,243,255,0.25)] hidden sm:flex items-center gap-1.5 font-bold cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Project Estimator</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Privacy Policy Cards Grid Layout */}
      <main className="max-w-5xl mx-auto px-4 py-10 sm:py-16 space-y-10">
        
        {/* Hero Banner Card */}
        <div className="bg-gradient-to-br from-cyan-950/60 via-[#090d1a] to-[#070913] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(0,243,255,0.15)] space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-300 text-xs font-bold shadow-[0_0_12px_rgba(0,243,255,0.2)]">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Official Privacy & Governance Statement</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-300 bg-slate-950/80 px-3.5 py-1.5 rounded-xl border border-slate-800">
              <span><strong>Effective:</strong> February 26, 2022</span>
              <span className="text-slate-600">•</span>
              <span><strong>Updated:</strong> August 10, 2026</span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Creato_Display'] tracking-tight leading-tight">
              PRIVACY POLICY
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At <strong className="text-white font-['Creato_Display']">FramEmpire</strong> ("we," "our," or "us"), accessible from{' '}
              <a href="https://www.framempire.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold hover:text-cyan-300">
                www.framempire.com
              </a>
              , we respect your privacy and are committed to protecting the personal information, project assets, and user data across our Agency Services, Web Applications, Mobile Software, and Mobile Games published via App Stores.
            </p>
          </div>

          <div className="bg-[#050814]/90 p-4 rounded-2xl border border-cyan-500/30 flex items-start gap-3 text-xs text-cyan-300/90 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p>
              If you do not agree with the terms of this policy, please refrain from accessing our site, using our applications, or utilizing our services.
            </p>
          </div>
        </div>

        {/* Card 01: Information We Collect */}
        <section className="bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 hover:border-cyan-400/50 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shrink-0 font-bold font-mono">
              01
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">Section 01</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                01. Information We Collect
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1A */}
            <div className="bg-[#050814] p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>A. Personal, Business & Developer Data</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Contact & Account Info:</strong> Name, email address, phone number, company name, and project/developer role.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Project & App Assets:</strong> Raw footage, design briefs, 3D models, game assets, source code, and software specifications provided for development.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Payment & Billing:</strong> Information required to process service payments or in-app purchases through verified payment providers.</span>
                </li>
              </ul>
            </div>

            {/* Card 1B */}
            <div className="bg-[#050814] p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>B. App, Game & Technical Usage Data</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">Device & App Diagnostics:</strong> IP address, device model, OS version, app performance logs, crash reports, and unique device identifiers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong className="text-white">In-App Analytics & Gameplay:</strong> Anonymous usage statistics, game progress, and interaction data collected to optimize app performance and user experience.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Card 02: How We Use Your Information */}
        <section className="bg-[#090d1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 hover:border-cyan-400/50 transition-all">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shrink-0 font-bold font-mono">
              02
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">Section 02</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                02. How We Use Your Information
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#050814] p-4.5 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Service & Software Delivery</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">To execute creative projects, design custom applications, build games, and maintain published mobile software.</p>
            </div>
            <div className="bg-[#050814] p-4.5 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Gamepad2 className="w-4 h-4 text-cyan-400" />
                <span>App & Game Optimization</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">To fix software bugs, streamline gameplay features, and enhance overall app stability and user interface.</p>
            </div>
            <div className="bg-[#050814] p-4.5 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Client Communication & Support</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">To respond to project inquiries, deliver milestone updates, offer app user support, and handle direct support requests.</p>
            </div>
            <div className="bg-[#050814] p-4.5 rounded-2xl border border-slate-800 space-y-1">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span>Secure Payment Processing</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">To securely handle agency billing, app store transactions, and in-app purchases.</p>
            </div>
          </div>
        </section>

        {/* Card 03: Core Client & Software Protection */}
        <section className="bg-gradient-to-br from-cyan-950/40 via-[#090d1a] to-[#070913] border border-cyan-400/60 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,243,255,0.12)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0 font-bold font-mono">
              03
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest block font-mono">Section 03 • Software Governance</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                03. Core Client & Software Protection
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>A. 100% Asset & Code Ownership</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                All original files, raw assets, proprietary code repositories, and app/game builds provided by or developed specifically for clients remain the exclusive property of the client.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>B. App Store & Software Governance</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Apps, games, and software developed or published by FramEmpire adhere strictly to Google Play Console and Apple App Store privacy mandates. We do not collect unnecessary personal data through our software applications.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-cyan-400" />
                <span>C. Portfolio & Confidentiality (NDA)</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We respect confidentiality. If a client requests an NDA for software, web, or game development, we keep all source code and project details strictly private.
              </p>
            </div>

            <div className="bg-[#050814]/90 p-5 rounded-2xl border border-cyan-500/30 space-y-2">
              <h3 className="font-bold text-cyan-300 text-sm flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>D. Third-Party Services & SDKs</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our web/mobile apps and games may integrate secure third-party SDKs (such as analytics, ad networks, or cloud databases). These third parties only process data necessary for app functionality under strict privacy agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Card 04: Remote Operations & Contact Desk */}
        <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-[#070913] border border-cyan-500/50 rounded-3xl p-6 sm:p-10 shadow-[0_0_35px_rgba(0,243,255,0.18)] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 shrink-0 font-bold font-mono">
              04
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block font-mono">Section 04 • Global Support Desk</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Creato_Display']">
                04. Remote Operations & Contact
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            FramEmpire operates as a fully remote digital agency and development studio serving clients globally without a physical public office.
          </p>

          <div className="bg-[#050814] p-6 rounded-2xl border border-slate-800 space-y-3 text-xs">
            <h3 className="font-bold text-white text-sm border-b border-slate-800 pb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Client & Developer Support Desk</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="space-y-2">
                <p className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                  <strong className="text-cyan-400">Agency Name:</strong>
                  <span className="text-white font-bold">FramEmpire</span>
                </p>
                <p className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                  <strong className="text-cyan-400">Official Website:</strong>
                  <a href="https://www.framempire.com/" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-semibold">www.framempire.com</a>
                </p>
                <p className="flex items-center justify-between">
                  <strong className="text-cyan-400">Official Email:</strong>
                  <a href="mailto:info@framempire.com" className="text-white hover:text-cyan-300 underline font-semibold">info@framempire.com</a>
                </p>
              </div>

              <div className="space-y-2">
                <p className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                  <strong className="text-cyan-400">Alternate Email:</strong>
                  <a href="mailto:team.framempire@gmail.com" className="text-slate-300 hover:text-cyan-300 underline">team.framempire@gmail.com</a>
                </p>
                <p className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                  <strong className="text-cyan-400">Contact Phone:</strong>
                  <a href="tel:+8801615288259" className="text-white hover:text-cyan-300 underline font-semibold">+880 1615-288259</a>
                </p>
                <p className="flex items-center justify-between">
                  <strong className="text-cyan-400">Copyright:</strong>
                  <span className="text-slate-400 font-mono">© 2026 FramEmpire Studio</span>
                </p>
              </div>
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
