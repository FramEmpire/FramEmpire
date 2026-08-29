import React from 'react';
import { ArrowRight, Sparkles, Cpu, Layers, ShieldAlert, Code2, Monitor, Smartphone, Gamepad2 } from 'lucide-react';

export default function FeaturedGameSection({ onOpenGameDetails }) {
  return (
    <section id="game-feature" className="relative min-h-[80vh] flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#070913] via-[#0b0e21] to-[#070913] border-t border-cyan-500/30 overflow-hidden">
      
      {/* Background Neon Glow Orbs */}
      <div className="glow-orb-cyan top-1/4 -left-20 animate-pulse-glow" />
      <div className="glow-orb-blue bottom-10 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Single Section Clean Feature Card */}
        <div className="neon-card p-6 sm:p-8 lg:p-10 border-cyan-500/40 relative overflow-hidden bg-slate-950/85 backdrop-blur-xl shadow-[0_0_40px_rgba(0,243,255,0.18)] rounded-3xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3-App 3D Showcase Grid */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
                
                {/* Outer Ambient Glow */}
                <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-65 blur-2xl group-hover:opacity-90 transition-opacity duration-500 animate-pulse" />

                {/* 3D App Showcase Cards Layering */}
                <div className="relative rounded-[28px] bg-slate-950/95 border-2 border-cyan-500/50 p-5 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono">
                      <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
                      <span>FEAT SUITE SUITE</span>
                    </div>
                    <span className="text-[10px] bg-cyan-950 border border-cyan-500/40 text-cyan-300 px-2 py-0.5 rounded-full font-mono">
                      3 LIVE APPS
                    </span>
                  </div>

                  {/* 3 App Mini Preview Rows */}
                  <div className="space-y-2.5">
                    {/* FE Player */}
                    <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <img src="/fe_player_logo.png" alt="FE Player" className="w-9 h-9 object-contain rounded-lg shrink-0" />
                        <div className="text-left">
                          <span className="font-bold text-white text-xs block">FE Player</span>
                          <span className="text-[10px] text-slate-400">Windows • macOS • Android</span>
                        </div>
                      </div>
                      <span className="text-[9px] bg-cyan-950 text-cyan-400 border border-cyan-500/40 px-2 py-0.5 rounded-full font-mono">.EXE / .DMG</span>
                    </div>

                    {/* MessManager Pro */}
                    <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <img src="/mess_manager_logo.png" alt="MessManager Pro" className="w-9 h-9 object-contain rounded-lg shrink-0" />
                        <div className="text-left">
                          <span className="font-bold text-white text-xs block">MessManager Pro</span>
                          <span className="text-[10px] text-slate-400">Financial Hostel App</span>
                        </div>
                      </div>
                      <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">.APK</span>
                    </div>

                    {/* Tic Tac Toe */}
                    <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 hover:border-yellow-500/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <img src="/tictactoe_game_icon.png" alt="Tic Tac Toe GenZ" className="w-9 h-9 object-contain rounded-lg shrink-0" />
                        <div className="text-left">
                          <span className="font-bold text-white text-xs block">Tic Tac Toe: GenZ</span>
                          <span className="text-[10px] text-slate-400">Arcade Mobile Game</span>
                        </div>
                      </div>
                      <span className="text-[9px] bg-amber-950 text-amber-400 border border-amber-500/40 px-2 py-0.5 rounded-full font-mono">.APK</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: FEAT Division Introduction & See More Button */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <Cpu className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span className="text-xs font-bold text-cyan-300 tracking-wider uppercase">
                  FEAT • FRAMEMPIRE ADVANCE TECHNOLOGIES
                </span>
              </div>

              {/* Title & Division Credit */}
              <div className="space-y-1">
                <h2 className="font-['Creato_Display'] text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Software Engineering & <span className="text-gradient">Developer Division</span>
                </h2>
                <p className="text-cyan-300 font-bold text-sm">
                  FramEmpire Advance Technologies (FEAT)
                </p>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                <strong className="text-white font-['Creato_Display']">FramEmpire Advance Technologies (FEAT)</strong> is our specialized software engineering and R&D developer team. We design high-performance cross-platform software (<strong className="text-cyan-300">FE Player</strong>), automated financial apps (<strong className="text-emerald-300">MessManager Pro</strong>), and mobile games (<strong className="text-yellow-300">Tic Tac Toe: GenZ</strong>).
              </p>

              {/* Action Buttons Group */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                
                {/* PROMINENT "See More — Explore FEAT Developer Hub 🚀" Button */}
                <button
                  onClick={onOpenGameDetails}
                  className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,243,255,0.35)] hover:shadow-[0_0_35px_rgba(0,243,255,0.5)] transition-all border border-cyan-400 group cursor-pointer hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>See More — Explore FEAT Software Hub 🚀</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>

              </div>

              {/* Verified Direct Software Banner */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Verified Direct Downloads • Windows (.exe), macOS (.dmg) & Android (.apk)</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
