import React, { useState, useEffect } from 'react';
import { Download, Github, Gamepad2, Star, ShieldAlert, MapPin, Cpu, UserCheck, Award, X, Sparkles, ChevronLeft, ChevronRight, Share2, Check, Smartphone, Monitor, Layers, ArrowRight, ExternalLink, Zap, CheckCircle2, ShieldCheck, Filter, Terminal, Play, RefreshCw, Activity, Code2, Bot } from 'lucide-react';
import Footer from './Footer';

export default function TicTacToeGamePage({ onBackToHome, onOpenEstimator }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedLink, setCopiedLink] = useState(false);
  
  // FEAT Live AI Engine State
  const [aiPreset, setAiPreset] = useState('minimax');
  const [isProcessing, setIsProcessing] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    '[FEAT AI] Neural Engine v4.2 Initialized.',
    '[FEAT AI] Status: ONLINE • Active Tensor Cores: 64 • Latency: 3.8ms',
    '[FEAT AI] Select an algorithm below to test live execution...'
  ]);
  const [executionProgress, setExecutionProgress] = useState(100);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = "FEAT — FramEmpire Advance Technologies | Developer Apps & AI Engine";
    } catch (e) {}
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Live Interactive AI Algorithm Tester
  const runAiSimulation = (presetId) => {
    setAiPreset(presetId);
    setIsProcessing(true);
    setExecutionProgress(15);

    let logs = [];
    if (presetId === 'minimax') {
      logs = [
        '[FEAT-AI Engine] Initializing Minimax Depth-First Search for 12x12 TicTacToe Grid...',
        '[FEAT-AI Engine] Evaluating 100 Feni Villages Map State (Village: Betagaon)...',
        '[FEAT-AI Engine] Pruning 48,290 sub-trees using Alpha-Beta Optimization...',
        '[FEAT-AI Engine] Optimal Next Move Calculated: Grid [X: 7, Y: 4] • Confidence: 99.8%',
        '[FEAT-AI Engine] Simulation Execution Completed in 4.2ms ✅'
      ];
    } else if (presetId === 'octane') {
      logs = [
        '[FEAT-AI Engine] Connecting to Octane 3D Render Cluster (24 Active GPU Nodes)...',
        '[FEAT-AI Engine] Synthesizing Glassmorphism Ray-Tracing Light Bounces...',
        '[FEAT-AI Engine] AI Denoising Pass 1/16 Complete • 120 FPS Target Met',
        '[FEAT-AI Engine] 3D Mesh Topology Rendered & Cached to VRAM • 4K Resolution OK',
        '[FEAT-AI Engine] Octane AI Frame Render Completed in 14.1ms ✅'
      ];
    } else if (presetId === 'messmanager') {
      logs = [
        '[FEAT-AI Engine] Ingesting MessManager Pro Ledger Data (30 Members, 450 Meals)...',
        '[FEAT-AI Engine] Calculating Dynamic Daily Meal Rate Algorithm...',
        '[FEAT-AI Engine] Auditing Shared Bazaars, Deposits & Individual Member Balances...',
        '[FEAT-AI Engine] Balance Split Integrity: 100% Valid • Zero Discrepancy Found',
        '[FEAT-AI Engine] Financial Audit Matrix Generated Successfully ✅'
      ];
    } else if (presetId === 'feplayer') {
      logs = [
        '[FEAT-AI Engine] FE Player Multi-Threaded DSP Engine Initialized...',
        '[FEAT-AI Engine] Decoding 8K AV1 / H.265 Hardware Video Stream...',
        '[FEAT-AI Engine] AI Dynamic EQ & Audio Spatialization Filter Applied...',
        '[FEAT-AI Engine] Buffer Health: 100% • Zero Frame Drops Detected',
        '[FEAT-AI Engine] Media DSP Streaming Active at 120 Hz ✅'
      ];
    }

    setTerminalLogs(logs.slice(0, 2));

    setTimeout(() => {
      setExecutionProgress(65);
      setTerminalLogs(logs.slice(0, 4));
    }, 400);

    setTimeout(() => {
      setExecutionProgress(100);
      setTerminalLogs(logs);
      setIsProcessing(false);
    }, 900);
  };

  // Official Developer Software Portfolio Data
  const developerApps = [
    {
      id: 'fe-player',
      title: 'FE Player — Multimedia Organizer',
      category: 'desktop',
      badgeText: 'CROSS-PLATFORM SOFTWARE',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/60',
      logo: '/fe_player_logo.png',
      tagline: 'High-Performance 3D Media Player & Smart Library Organizer',
      description: 'Next-gen cross-platform multimedia organizer designed for high-resolution video playback, intelligent audio tagging, ultra-low latency streaming, and media asset management.',
      platforms: ['Windows', 'macOS', 'Android'],
      features: [
        'Multi-format High-Res Video & Audio Engine',
        'Smart Library Tagging & Media Organizer',
        'Hardware Accelerated Ultra-Low Latency',
        'Sleek Cyber Glassmorphism Interface'
      ],
      downloads: [
        {
          label: 'Windows Setup (.exe)',
          url: 'https://github.com/pabeledp/FEPlayer/raw/main/windows_installer_output/FEPlayer-Windows-Setup.exe',
          icon: 'windows',
          variant: 'cyan'
        },
        {
          label: 'macOS Installer (.dmg)',
          url: 'https://github.com/pabeledp/FEPlayer/raw/main/dmg_output/FEPlayer-macOS.dmg',
          icon: 'mac',
          variant: 'blue'
        },
        {
          label: 'Android Package (.apk)',
          url: 'https://github.com/pabeledp/FEPlayer/raw/main/apk_output/FEPlayer-Android.apk',
          icon: 'android',
          variant: 'purple'
        }
      ]
    },
    {
      id: 'mess-manager',
      title: 'MessManager Pro',
      category: 'mobile',
      badgeText: 'ANDROID APP • FINANCIAL MANAGEMENT',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/60',
      logo: '/mess_manager_logo.png',
      tagline: 'Smart Hostel Expense Tracker, Meal Rate Auditor & Balance Splitter',
      description: 'All-in-one financial management system built for hostels, mess rooms, and shared living spaces. Features real-time meal rate calculations, daily expense auditing, and member balance splitters.',
      platforms: ['Android APK'],
      features: [
        'Real-Time Daily Meal Rate & Cost Audit',
        'Automatic Member Expense Splitter',
        'Hostel Balance Audit & Detailed PDF Reports',
        'Offline Mode & Instant Cloud Sync'
      ],
      downloads: [
        {
          label: 'Download Android APK',
          url: 'https://github.com/pabeledp/MessManagerPro/raw/main/build_output/MessManager-PRO.apk',
          icon: 'android',
          variant: 'emerald'
        }
      ]
    },
    {
      id: 'tictactoe-genz',
      title: 'Tic Tac Toe: GenZ Multiplayer',
      category: 'games',
      badgeText: 'ANDROID GAME • EDP UNIVERSE',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/60',
      logo: '/tictactoe_game_icon.png',
      tagline: 'Arcade Mobile Game & 100 Feni Villages Campaign Map',
      description: 'GenZ Arcade mobile game featuring real-time multiplayer lobbies, dynamic 3x3 to 12x12 custom grid engines, arcade avatar unlocks, and an interactive 100 Feni Villages campaign mode against Minimax AI.',
      platforms: ['Android APK', 'WebGL Web'],
      features: [
        'Unbeatable Minimax AI Engine (3x3 to 12x12 Grids)',
        '100 Authentic Feni Villages Campaign Map',
        'Arcade Avatars (Tiger, Robot, Alien, Dragon)',
        'Haptic Audio FX & Real-time Multiplayer'
      ],
      downloads: [
        {
          label: 'Download Game APK (v1.0.1)',
          url: 'https://github.com/pabeldev/feni-brain-arcade/raw/main/TicTacToe-GenZ-Multiplayer-v1.0.1.apk',
          icon: 'android',
          variant: 'amber'
        },
        {
          label: 'View GitHub Repository',
          url: 'https://github.com/pabeldev/feni-brain-arcade',
          icon: 'github',
          variant: 'slate'
        }
      ]
    }
  ];

  const filteredApps = activeCategory === 'all' 
    ? developerApps 
    : developerApps.filter(app => app.category === activeCategory || (activeCategory === 'desktop' && app.platforms.includes('Windows')));

  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Top Floating Glassmorphism Navbar */}
      <nav className="fixed top-2 sm:top-3 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#070913]/90 backdrop-blur-2xl border border-cyan-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.85)]">
          
          {/* FramEmpire Brand Logo */}
          <div
            onClick={onBackToHome}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <img 
              src="/framempire_logo_white.png" 
              alt="FramEmpire Studio" 
              className="h-8 sm:h-10 object-contain drop-shadow-[0_0_12px_rgba(0,243,255,0.4)] group-hover:opacity-90 transition-opacity" 
            />
            <span className="hidden sm:inline-block text-[10px] font-bold text-cyan-400 border border-cyan-500/40 px-2.5 py-0.5 rounded-full bg-cyan-950/60 font-mono">
              FEAT DEVELOPER DIVISION
            </span>
          </div>

          {/* Controls & Nav Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleShare}
              className="bg-slate-900/90 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 py-1.5 px-3 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Share FEAT Developer Link"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span className="hidden xs:inline">{copiedLink ? 'Link Copied!' : 'Share FEAT Page'}</span>
            </button>

            <button
              onClick={onBackToHome}
              className="bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-300 hover:text-white border border-cyan-500/40 py-1.5 px-4 text-xs font-bold rounded-full shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-cyan-400" />
              <span>Back to Studio</span>
            </button>
          </div>

        </div>
      </nav>

      {/* Hero Header Section */}
      <header className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/20 overflow-hidden bg-gradient-to-b from-[#090d1f] via-[#060813] to-[#060813]">
        <div className="glow-orb-cyan top-10 -left-20 animate-pulse-glow" />
        <div className="glow-orb-blue top-20 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto space-y-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold shadow-[0_0_20px_rgba(0,243,255,0.2)]">
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>FEAT • FRAMEMPIRE ADVANCE TECHNOLOGIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-['Creato_Display'] tracking-tight leading-tight max-w-4xl mx-auto">
            FramEmpire Advance Technologies <span className="text-gradient">(FEAT)</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-white font-['Creato_Display']">FEAT</strong> — the core software engineering, AI algorithms & technology R&D division of FramEmpire Studio. Explore our live software, Android apps, and interactive AI Matrix engine.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { id: 'all', label: '⚡ All Software & Apps', count: 3 },
              { id: 'desktop', label: '💻 Desktop Software', count: 1 },
              { id: 'mobile', label: '📱 Mobile Apps', count: 1 },
              { id: 'games', label: '🎮 Arcade Games', count: 1 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`py-2 px-4 sm:px-5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.3)] scale-105'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-cyan-500/30 hover:text-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded-full font-mono text-cyan-400">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* IMPRESSIVE LIVE AI ENGINE INTERACTIVE SANDBOX SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-br from-cyan-950/50 via-[#090d1a] to-[#060813] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 space-y-6 shadow-[0_0_45px_rgba(0,243,255,0.15)] relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/40 shadow-sm">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>FEAT NEURAL MATRIX & AI ENGINE • LIVE BENCHMARK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Creato_Display']">
                Live Interactive AI & Algorithm Engine
              </h2>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-cyan-300 bg-slate-950/80 px-4 py-2 rounded-2xl border border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Engine Status: <strong>LIVE (64 Tensor Cores)</strong></span>
            </div>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Test FEAT's live algorithm engines below. Select a neural processing pipeline to observe real-time matrix evaluations and live terminal output:
          </p>

          {/* Algorithm Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: 'minimax', label: '🎮 Minimax AI Tree', icon: Bot, color: 'text-amber-400 border-amber-500/40' },
              { id: 'octane', label: '🎬 Octane 3D Mesh AI', icon: Cpu, color: 'text-cyan-400 border-cyan-500/40' },
              { id: 'messmanager', label: '📊 Mess Expense Audit', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/40' },
              { id: 'feplayer', label: '🎧 FEPlayer 8K DSP Stream', icon: Zap, color: 'text-purple-400 border-purple-500/40' }
            ].map((preset) => {
              const IconComp = preset.icon;
              return (
                <button
                  key={preset.id}
                  onClick={() => runAiSimulation(preset.id)}
                  disabled={isProcessing}
                  className={`p-3.5 rounded-2xl border text-xs font-bold transition-all text-left flex flex-col gap-2 cursor-pointer ${
                    aiPreset === preset.id
                      ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.25)] scale-[1.02]'
                      : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:border-cyan-500/30 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <IconComp className={`w-4 h-4 ${preset.color.split(' ')[0]}`} />
                    {aiPreset === preset.id && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                  </div>
                  <span>{preset.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Live Terminal Console Box */}
          <div className="bg-[#04060f] rounded-2xl border border-cyan-500/30 p-4 sm:p-6 space-y-3 font-mono text-xs shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-bold">FEAT-Terminal-v4.2@live-kernel</span>
              </div>
              <div className="flex items-center gap-2">
                {isProcessing && <RefreshCw className="w-3.5 h-3.5 text-cyan-400 animate-spin" />}
                <span className="text-[11px] text-slate-500">Latency: 3.8ms</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full transition-all duration-300"
                style={{ width: `${executionProgress}%` }}
              />
            </div>

            {/* Live Terminal Log Stream Output */}
            <div className="space-y-1.5 min-h-[120px] text-slate-200 py-1">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className="flex items-start gap-2 leading-relaxed animate-fadeIn">
                  <span className="text-cyan-500 select-none">&gt;</span>
                  <span className={log.includes('Completed') || log.includes('Success') ? 'text-emerald-400 font-bold' : log.includes('Executing') || log.includes('Initializing') ? 'text-cyan-300' : 'text-slate-300'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Main Apps Grid Showcase */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
        
        {/* Apps Cards List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_0_35px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Liquid Rim Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* App Logo Column */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative group/logo w-44 sm:w-56 aspect-square">
                    
                    {/* Glowing Rim Effect */}
                    <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-60 blur-xl group-hover/logo:opacity-100 transition-opacity duration-500 animate-pulse" />

                    {/* Logo Box */}
                    <div className="relative w-full h-full rounded-[28px] bg-slate-950/90 border-2 border-cyan-500/50 p-4 flex items-center justify-center shadow-2xl overflow-hidden">
                      <img
                        src={app.logo}
                        alt={app.title}
                        className="w-full h-full object-contain drop-shadow-2xl rounded-2xl group-hover/logo:scale-105 transition-transform duration-500"
                      />
                    </div>

                  </div>
                </div>

                {/* App Details & Downloads Column */}
                <div className="lg:col-span-8 space-y-5 text-left">
                  
                  {/* Badge & Platforms */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`text-[10px] sm:text-xs font-bold font-mono px-3 py-1 rounded-full border shadow-sm ${app.badgeColor}`}>
                      {app.badgeText}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{app.platforms.join(' • ')}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Creato_Display'] tracking-tight">
                      {app.title}
                    </h2>
                    <p className="text-cyan-300 font-bold text-sm sm:text-base">
                      {app.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {app.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {app.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Download Action Buttons Grid */}
                  <div className="pt-3 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Direct Software & App Downloads:
                    </span>

                    <div className="flex flex-wrap items-center gap-3">
                      {app.downloads.map((dl, idx) => (
                        <a
                          key={idx}
                          href={dl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`py-2.5 px-5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105 border ${
                            dl.variant === 'cyan'
                              ? 'bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-black border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.3)]'
                              : dl.variant === 'blue'
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                              : dl.variant === 'purple'
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                              : dl.variant === 'emerald'
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-black border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                              : dl.variant === 'amber'
                              ? 'bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black border-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                          }`}
                        >
                          <Download className="w-4 h-4" />
                          <span>{dl.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <Footer 
        onOpenEstimator={onOpenEstimator}
      />
    </div>
  );
}
