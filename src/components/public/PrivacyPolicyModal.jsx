import React, { useEffect } from 'react';
import { ShieldCheck, X, Lock, FileText, Mail, Phone, Globe, CheckCircle2, Server, EyeOff, Cookie, Cpu } from 'lucide-react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Container Box */}
      <div 
        className="w-full max-w-4xl max-h-[90vh] bg-[#070913] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(0,243,255,0.25)] flex flex-col overflow-hidden relative text-slate-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="bg-[#090c19] border-b border-cyan-500/30 p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white font-['Creato_Display'] flex items-center gap-2">
                <span>Privacy Policy</span>
                <span className="text-[10px] text-cyan-400 border border-cyan-500/40 px-2 py-0.5 rounded-full bg-cyan-950/60 font-mono">
                  FramEmpire Studio
                </span>
              </h2>
              <p className="text-[11px] text-slate-400 font-mono">
                Effective Date: August 10, 2026 • Last Updated: August 10, 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 custom-scrollbar text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          {/* Intro Banner */}
          <div className="space-y-3 bg-cyan-950/20 p-4 sm:p-5 rounded-2xl border border-cyan-500/30">
            <p className="text-slate-200">
              At <strong className="text-white">FramEmpire</strong> ("we," "our," or "us"), accessible from{' '}
              <a href="https://www.framempire.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold">
                www.framempire.com
              </a>
              , we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or utilize our creative and technical services—including Video Editing, Graphic Design, 2D & 3D Animation, Web Development, Vibe Coding, and digital agency solutions.
            </p>
            <p className="text-slate-400 text-xs italic">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this policy, please refrain from accessing the site or using our services.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3 bg-[#090d1a] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white font-['Creato_Display'] flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>1. Information We Collect</span>
            </h3>
            <p>We collect information directly from you when you visit our site, fill out a contact form, request a quote, or interact with our agency services.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#050814] p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <h4 className="font-bold text-cyan-400 text-xs uppercase">A. Personal & Business Data</h4>
                <ul className="text-xs space-y-1 list-disc list-inside text-slate-300">
                  <li><strong>Contact Info:</strong> Name, email, phone number, company name, project role.</li>
                  <li><strong>Project Assets:</strong> Media files, footage, briefs, 3D models, code repos.</li>
                  <li><strong>Payment Details:</strong> Secure transaction & billing data.</li>
                </ul>
              </div>
              <div className="bg-[#050814] p-3.5 rounded-xl border border-slate-800 space-y-1.5">
                <h4 className="font-bold text-cyan-400 text-xs uppercase">B. Technical & Usage Data</h4>
                <ul className="text-xs space-y-1 list-disc list-inside text-slate-300">
                  <li><strong>Browser & Device:</strong> IP address, OS, referring URLs, pages viewed.</li>
                  <li><strong>Cookies & Analytics:</strong> Tracking tools to optimize performance.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 bg-[#090d1a] p-5 rounded-2xl border border-slate-800">
            <h3 className="text-base font-bold text-white font-['Creato_Display'] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>2. How We Use Your Information</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-[#050814] p-3 rounded-xl border border-slate-800">
                <strong className="text-white block">Service Execution</strong>
                <span className="text-slate-400">Delivering video editing, animation, design & web development.</span>
              </div>
              <div className="bg-[#050814] p-3 rounded-xl border border-slate-800">
                <strong className="text-white block">Communication</strong>
                <span className="text-slate-400">Responding to inquiries, sending invoices & client support.</span>
              </div>
              <div className="bg-[#050814] p-3 rounded-xl border border-slate-800">
                <strong className="text-white block">Payments</strong>
                <span className="text-slate-400">Processing local & international billing via trusted channels.</span>
              </div>
              <div className="bg-[#050814] p-3 rounded-xl border border-slate-800">
                <strong className="text-white block">Optimization</strong>
                <span className="text-slate-400">Monitoring website traffic & refining agency offerings.</span>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 bg-gradient-to-r from-cyan-950/40 via-[#090d1a] to-[#050814] p-5 rounded-2xl border border-cyan-500/30">
            <h3 className="text-base font-bold text-white font-['Creato_Display'] flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-cyan-300" />
              <span>3. Client Assets & Portfolio Policy</span>
            </h3>
            <div className="space-y-2 text-xs">
              <p><strong className="text-cyan-300">Ownership of Client Assets:</strong> All original files, raw video footage, graphic assets, code, or proprietary media provided by clients remain the exclusive property of the client.</p>
              <p><strong className="text-cyan-300">Portfolio Usage & Client Privacy:</strong> As a creative agency, FramEmpire displays completed projects in our public portfolio. However, if a client explicitly requests privacy/confidentiality, we strictly honor that request and keep the project private.</p>
              <p><strong className="text-cyan-300">Data Security & Non-Disclosure:</strong> We do not sell, leak, or share client files, source code, or unreleased assets to third parties without permission.</p>
            </div>
          </section>

          {/* Section 4 & 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#090d1a] p-4 rounded-2xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>4. Remote & Global Operations</span>
              </h4>
              <p className="text-xs text-slate-400">FramEmpire operates as a fully remote online agency serving clients globally with no public physical office.</p>
            </div>
            <div className="bg-[#090d1a] p-4 rounded-2xl border border-slate-800 space-y-1">
              <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span>5. Third-Party Services</span>
              </h4>
              <p className="text-xs text-slate-400">Third-party platforms (cloud storage, payment processors) only access data required for specific operational tasks.</p>
            </div>
          </div>

          {/* Section 6 & 7 & 8 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-[#090d1a] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-white block flex items-center gap-1"><Cookie className="w-3 h-3 text-cyan-400" /> 6. Cookies</strong>
              <span className="text-slate-400">Cookies enhance navigation and experience. You can clear them in browser settings.</span>
            </div>
            <div className="bg-[#090d1a] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-white block flex items-center gap-1"><Lock className="w-3 h-3 text-cyan-400" /> 7. Data Security</strong>
              <span className="text-slate-400">We enforce administrative and technical safeguards for project data protection.</span>
            </div>
            <div className="bg-[#090d1a] p-3.5 rounded-xl border border-slate-800 space-y-1">
              <strong className="text-white block">8. Policy Updates</strong>
              <span className="text-slate-400">We reserve the right to update this policy anytime with updated dates.</span>
            </div>
          </div>

          {/* Section 9: Contact */}
          <section className="bg-gradient-to-r from-cyan-950 via-slate-900 to-[#070913] p-5 rounded-2xl border border-cyan-500/40 space-y-3">
            <h3 className="text-base font-bold text-white font-['Creato_Display'] flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-300" />
              <span>9. Contact Us</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <p><strong className="text-cyan-400">Agency:</strong> FramEmpire</p>
                <p><strong className="text-cyan-400">Website:</strong> <a href="https://www.framempire.com/" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-semibold">www.framempire.com</a></p>
                <p><strong className="text-cyan-400">Model:</strong> Remote / Digital Agency</p>
              </div>
              <div className="space-y-1">
                <p><strong className="text-cyan-400">Official Email:</strong> info@framempire.com / team.framempire@gmail.com</p>
                <p><strong className="text-cyan-400">Phone:</strong> +880 1615-288259</p>
              </div>
            </div>
          </section>

        </div>

        {/* Modal Bottom Action */}
        <div className="bg-[#090c19] border-t border-slate-800 p-4 flex items-center justify-between shrink-0 text-xs">
          <span className="text-slate-400">© 2026 FramEmpire Studio. Confidentiality Protected.</span>
          <button
            onClick={onClose}
            className="neon-button-secondary py-2 px-5 text-xs rounded-full font-bold shadow-[0_0_15px_rgba(0,243,255,0.2)]"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
}
