import React, { useState, useEffect, useRef } from 'react';
import { Download, Github, Gamepad2, Star, ShieldAlert, MapPin, Cpu, UserCheck, Award, X, Sparkles, ChevronLeft, ChevronRight, Share2, Check, Smartphone, Monitor, Layers, ArrowRight, ExternalLink, Zap, CheckCircle2, ShieldCheck, Filter, Terminal, Play, RefreshCw, Activity, Code2, Bot, Copy, CheckSquare, Settings2, Sliders, Server, HardDrive } from 'lucide-react';
import Footer from './Footer';

export default function TicTacToeGamePage({ onBackToHome, onOpenEstimator }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  
  // FEAT Live AI Neural Code Engine State
  const [activePreset, setActivePreset] = useState('minimax');
  const [isTyping, setIsTyping] = useState(false);
  const [displayedCodeIndex, setDisplayedCodeIndex] = useState(0);
  const [executionLogs, setExecutionLogs] = useState([]);
  const [executionMetrics, setExecutionMetrics] = useState({
    fps: 120.0,
    latencyMs: 3.8,
    tensorThreads: 64,
    vramGb: 192,
    confidence: '99.9%'
  });

  // Interactive Live Sliders Parameters
  const [paramDepth, setParamDepth] = useState(12);
  const [paramGpuNodes, setParamGpuNodes] = useState(24);
  const [paramBazaarExpense, setParamBazaarExpense] = useState(18500);

  const codeSnippets = {
    minimax: {
      fileName: 'MinimaxAI.ts',
      language: 'TypeScript',
      badge: 'GAME AI • 100 FENI VILLAGES MAP',
      code: `import { FEATNeuralEngine, VillageMapNode } from '@feat/core';

export async function evalMinimaxDepth(
  gridState: number[][],
  depth: number = ${paramDepth},
  alpha: number = -Infinity,
  beta: number = Infinity
): Promise<{ score: number; bestMove: [number, number] }> {
  // FEAT Alpha-Beta Pruning Algorithm for 100 Feni Villages Grid
  const validMoves = FEATNeuralEngine.extractLegalMoves(gridState);
  let bestScore = -Infinity;
  let optimalMove: [number, number] = [0, 0];

  for (const [r, c] of validMoves) {
    const projectedState = FEATNeuralEngine.simulateMove(gridState, r, c);
    const score = await FEATNeuralEngine.evaluateVillageNode(projectedState, depth - 1, alpha, beta);
    if (score > bestScore) {
      bestScore = score;
      optimalMove = [r, c];
    }
    alpha = Math.max(alpha, bestScore);
    if (beta <= alpha) break; // Alpha-Beta Cutoff
  }

  return { score: bestScore, bestMove: optimalMove };
}`
    },
    octane: {
      fileName: 'OctaneMeshRender.py',
      language: 'Python 3.11',
      badge: '3D RAY TRACING • OCTANE CLUSTER',
      code: `from feat.ai import OctaneCluster, TensorMesh, RayTracer

async def render_octane_3d_mesh(scene_id: str = "framempire_3d", target_fps: int = 120):
    """FEAT Octane 3D Render Cluster AI Acceleration Pass"""
    cluster = OctaneCluster.connect(nodes=${paramGpuNodes}, vram_gb=192)
    mesh = TensorMesh.load_geometry(scene_id)
    
    # AI Ray-Tracing Light Bounces & Denoising Matrix
    bounces = cluster.compute_light_bounces(mesh, samples_per_pixel=1024)
    denoised_frame = RayTracer.apply_ai_denoise(bounces, engine="FEAT-TensorV4")
    
    status = await cluster.verify_fps_target(denoised_frame, min_fps=target_fps)
    return {"status": "SUCCESS", "resolution": "4K_ULTRA", "fps": status.measured_fps}`
    },
    messmanager: {
      fileName: 'MessManagerAudit.ts',
      language: 'TypeScript',
      badge: 'FINANCIAL AUDIT • MESSMANAGER PRO',
      code: `import { FEATAuditMatrix, HostelMemberLedger } from '@feat/finances';

export function calculateMessMealRateAudit(
  totalBazaarExpense: number = ${paramBazaarExpense},
  totalMealsConsumed: number = 425,
  members: HostelMemberLedger[] = []
): { mealRate: number; status: string } {
  // FEAT Automated Meal Rate Calculation & Audit Algorithm
  const calculatedMealRate = totalBazaarExpense / Math.max(1, totalMealsConsumed);
  
  // Real-time Balance Split Integrity Verification
  const isAuditValid = FEATAuditMatrix.verifyLedgerZeroSum(members, calculatedMealRate);
  
  return { 
    mealRate: Number(calculatedMealRate.toFixed(2)), 
    status: isAuditValid ? "AUDIT_VERIFIED_100%" : "DISCREPANCY_FLAGGED" 
  };
}`
    },
    feplayer: {
      fileName: 'FEPlayerDSPStream.cpp',
      language: 'C++20 SIMD',
      badge: 'HARDWARE DSP • FEPLAYER ENGINE',
      code: `#include <feat/feplayer/hardware_dsp.hpp>
#include <feat/feplayer/audio_spatial.hpp>

namespace FEAT::AudioEngine {
    FE_INLINE Result<DSPStreamState> Process8KHardwareAudio(const AudioBuffer& rawBuffer) {
        // FEAT Hardware-Accelerated DSP Filter Matrix for FEPlayer
        auto dspContext = HardwareDSP::CreateContext(CodecType::AV1_8K_HIGH);
        dspContext.ApplySpatializationFilter(AudioSpatial::SURROUND_7_1_4);
        dspContext.EnableLowLatencyBuffer(3.8 /* ms */);

        if (!dspContext.VerifyHardwareDecode()) {
            return Result<DSPStreamState>::Error("Hardware Decode Fallback Active");
        }

        return Result<DSPStreamState>::Ok(dspContext.GetActiveStreamState());
    }
}`
    }
  };

  const currentSnippet = codeSnippets[activePreset];

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.title = "FEAT — FramEmpire Advance Technologies | Software & AI IDE Sandbox";
    } catch (e) {}

    runLiveCodeSynthesis(activePreset);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentSnippet.code);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  // Live Real-Time Code Synthesis & Terminal Output Execution Simulation
  const runLiveCodeSynthesis = (presetKey) => {
    setActivePreset(presetKey);
    setIsTyping(true);
    setDisplayedCodeIndex(0);

    const fullText = codeSnippets[presetKey].code;
    const textLength = fullText.length;
    
    // Live Terminal Log Stream Setup
    let logs = [];
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });

    if (presetKey === 'minimax') {
      logs = [
        `[FEAT-IDE ${timestamp}] Compiling MinimaxAI.ts via V8 JIT + WebAssembly SIMD...`,
        `[FEAT-IDE ${timestamp}] Evaluating 100 Feni Villages Map Node (Betagaon / Depth: ${paramDepth})...`,
        `[FEAT-IDE ${timestamp}] Alpha-Beta Pruning: 54,210 dead branches eliminated in 2.1ms`,
        `[FEAT-IDE ${timestamp}] >> SUCCESS: Next Optimal Move: Grid [Row: 4, Col: 7] (Confidence: 99.92%)`
      ];
      setExecutionMetrics({ fps: 120.0, latencyMs: 3.8, tensorThreads: 64, vramGb: 192, confidence: '99.92%' });
    } else if (presetKey === 'octane') {
      logs = [
        `[FEAT-IDE ${timestamp}] Initializing PyOctane Cluster across ${paramGpuNodes} Active GPU Nodes...`,
        `[FEAT-IDE ${timestamp}] Synthesizing Glassmorphism Ray-Tracing Light Bounces (1024 SPP)...`,
        `[FEAT-IDE ${timestamp}] AI Denoising Pass 16/16 Complete • 120 FPS Target Met`,
        `[FEAT-IDE ${timestamp}] >> SUCCESS: 4K Ultra Frame Rendered in 14.1ms`
      ];
      setExecutionMetrics({ fps: 120.0, latencyMs: 14.1, tensorThreads: 128, vramGb: 192, confidence: '100%' });
    } else if (presetKey === 'messmanager') {
      logs = [
        `[FEAT-IDE ${timestamp}] Ingesting MessManager Pro Financial Ledger (Total Bazaar: ৳${paramBazaarExpense})...`,
        `[FEAT-IDE ${timestamp}] Calculating Dynamic Meal Rate (425 Meals Consumed)...`,
        `[FEAT-IDE ${timestamp}] Auditing Hostel Deposits, Shared Expenses & Individual Balance Split...`,
        `[FEAT-IDE ${timestamp}] >> SUCCESS: Meal Rate: ৳${(paramBazaarExpense / 425).toFixed(2)}/meal • Balance Integrity: 100% VERIFIED`
      ];
      setExecutionMetrics({ fps: 60.0, latencyMs: 1.2, tensorThreads: 32, vramGb: 64, confidence: '100%' });
    } else if (presetKey === 'feplayer') {
      logs = [
        `[FEAT-IDE ${timestamp}] Initializing C++20 Hardware Accelerated DSP Audio Engine...`,
        `[FEAT-IDE ${timestamp}] Decoding 8K AV1 Stream via Hardware SIMD Accelerators...`,
        `[FEAT-IDE ${timestamp}] Applying 7.1.4 Surround Sound Spatialization Matrix Filter...`,
        `[FEAT-IDE ${timestamp}] >> SUCCESS: Ultra-Low Latency Buffer Active at 3.8ms`
      ];
      setExecutionMetrics({ fps: 120.0, latencyMs: 3.8, tensorThreads: 64, vramGb: 128, confidence: '99.9%' });
    }

    setExecutionLogs([logs[0]]);

    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx += Math.floor(Math.random() * 8) + 6;
      if (currentIdx >= textLength) {
        setDisplayedCodeIndex(textLength);
        setIsTyping(false);
        setExecutionLogs(logs);
        clearInterval(interval);
      } else {
        setDisplayedCodeIndex(currentIdx);
        if (currentIdx > textLength * 0.3 && logs[1] && executionLogs.length < 2) {
          setExecutionLogs(logs.slice(0, 2));
        } else if (currentIdx > textLength * 0.7 && logs[2] && executionLogs.length < 3) {
          setExecutionLogs(logs.slice(0, 3));
        }
      }
    }, 25);
  };

  // Rich Syntax Highlighting Engine for Code Display
  const renderFormattedCode = (rawCodeText) => {
    const lines = rawCodeText.substring(0, displayedCodeIndex).split('\n');
    return lines.map((line, lineIdx) => {
      // Syntax Colorizing Regex Rules
      let highlightedLine = line
        // Comments
        .replace(/(\/\/.*|#.*|\/\*.*\*\/)/g, '<span class="text-[#6272a4] italic font-mono">$1</span>')
        // Keywords
        .replace(/\b(import|from|export|function|async|await|return|const|let|var|for|of|if|else|break|def|class|namespace|using|auto|struct)\b/g, '<span class="text-[#ff79c6] font-bold">$1</span>')
        // Types & Special Identifiers
        .replace(/\b(number|string|boolean|Promise|void|Map|Array|Result|DSPStreamState|CodecType|AudioBuffer|OctaneCluster|TensorMesh|RayTracer|FEATNeuralEngine|HostelMemberLedger|FEATAuditMatrix)\b/g, '<span class="text-[#89ddff] font-semibold">$1</span>')
        // Functions
        .replace(/\b(evalMinimaxDepth|render_octane_3d_mesh|calculateMessMealRateAudit|Process8KHardwareAudio|extractLegalMoves|simulateMove|evaluateVillageNode|connect|compute_light_bounces|apply_ai_denoise|verify_fps_target|verifyLedgerZeroSum|CreateContext|ApplySpatializationFilter|EnableLowLatencyBuffer|VerifyHardwareDecode)\b/g, '<span class="text-[#50fa7b] font-semibold">$1</span>')
        // Strings
        .replace(/("[^"]*"|'[^']*'|`[^`]*`)/g, '<span class="text-[#f1fa8c]">$1</span>')
        // Numbers
        .replace(/\b(\d+(\.\d+)?)\b/g, '<span class="text-[#bd93f9] font-mono">$1</span>');

      return (
        <div key={lineIdx} className="table-row leading-relaxed hover:bg-slate-900/60 px-2 py-0.5 rounded transition-colors">
          <span className="table-cell text-right text-slate-600 font-mono text-xs pr-4 select-none w-8">
            {lineIdx + 1}
          </span>
          <span 
            className="table-cell font-mono text-xs sm:text-sm text-slate-200 whitespace-pre"
            dangerouslySetInnerHTML={{ __html: highlightedLine }}
          />
        </div>
      );
    });
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
              <span className="hidden xs:inline">{copiedLink ? 'Link Copied!' : 'Share /FEAT'}</span>
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
      <header className="relative pt-28 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-cyan-500/20 overflow-hidden bg-gradient-to-b from-[#090d1f] via-[#060813] to-[#060813]">
        <div className="glow-orb-cyan top-10 -left-20 animate-pulse-glow" />
        <div className="glow-orb-blue top-20 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto space-y-5 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold shadow-[0_0_20px_rgba(0,243,255,0.2)]">
            <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>FEAT • FRAMEMPIRE ADVANCE TECHNOLOGIES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-['Creato_Display'] tracking-tight leading-tight max-w-4xl mx-auto">
            FramEmpire Advance Technologies <span className="text-gradient">(FEAT)</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="text-white font-['Creato_Display']">FEAT</strong> — the core software engineering, AI algorithms & technology R&D division of FramEmpire Studio. Explore our live software, Android apps, and interactive AI Code IDE.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
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

      {/* ULTRA-IMPRESSIVE LIVE AI CODE IDE SANDBOX SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#030611] border border-cyan-500/40 rounded-3xl p-5 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(0,243,255,0.18)] relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/90 pb-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono bg-cyan-950/80 px-3.5 py-1 rounded-full border border-cyan-500/40 shadow-sm">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>FEAT LIVE AI CODE IDE • NEURAL SYNTHESIS ENGINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Creato_Display']">
                FEAT Live Interactive AI Code & Matrix Engine
              </h2>
            </div>

            {/* Metrics Live Badge Bar */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300 bg-[#070b19] px-4 py-2.5 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>FPS: {executionMetrics.fps}</span>
              </div>
              <span className="text-slate-600">•</span>
              <span>Latency: <strong className="text-cyan-300">{executionMetrics.latencyMs} ms</strong></span>
              <span className="text-slate-600">•</span>
              <span>Threads: <strong className="text-purple-300">{executionMetrics.tensorThreads} Tensor Cores</strong></span>
            </div>
          </div>

          {/* Preset Code Tabs & Live Parameter Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            
            {/* Left 8 Cols: File Tabs Selector */}
            <div className="lg:col-span-8 flex flex-wrap items-center gap-2">
              {[
                { id: 'minimax', name: 'MinimaxAI.ts', lang: 'TypeScript' },
                { id: 'octane', name: 'OctaneMeshRender.py', lang: 'Python' },
                { id: 'messmanager', name: 'MessManagerAudit.ts', lang: 'TypeScript' },
                { id: 'feplayer', name: 'FEPlayerDSPStream.cpp', lang: 'C++20' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => runLiveCodeSynthesis(tab.id)}
                  disabled={isTyping}
                  className={`py-2 px-4 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                    activePreset === tab.id
                      ? 'bg-slate-900 text-cyan-300 border-cyan-400 shadow-[0_0_12px_rgba(0,243,255,0.2)] scale-105'
                      : 'bg-slate-950/90 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{tab.name}</span>
                  <span className="text-[9px] bg-slate-950 px-1.5 py-0.2 rounded text-slate-400">{tab.lang}</span>
                </button>
              ))}
            </div>

            {/* Right 4 Cols: Live Action Buttons */}
            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
              <button
                onClick={() => runLiveCodeSynthesis(activePreset)}
                disabled={isTyping}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-extrabold text-xs py-2.5 px-5 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer disabled:opacity-50"
              >
                {isTyping ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isTyping ? 'Synthesizing...' : '▶ RUN FEAT AI CODE'}</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                title="Copy Active Code"
              >
                {codeCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span className="hidden sm:inline">{codeCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

          </div>

          {/* Real-time Interactive Parameter Tweaker Bar */}
          <div className="bg-[#070b19] p-3.5 rounded-2xl border border-slate-800 flex flex-wrap items-center gap-6 text-xs font-mono">
            <span className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Sliders className="w-4 h-4" />
              <span>LIVE AI PARAMETERS:</span>
            </span>

            {activePreset === 'minimax' && (
              <div className="flex items-center gap-3">
                <span className="text-slate-300">Minimax Depth: <strong className="text-yellow-400">{paramDepth}</strong></span>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={paramDepth} 
                  onChange={(e) => {
                    setParamDepth(Number(e.target.value));
                    runLiveCodeSynthesis('minimax');
                  }}
                  className="accent-cyan-400 cursor-pointer w-28 sm:w-36"
                />
              </div>
            )}

            {activePreset === 'octane' && (
              <div className="flex items-center gap-3">
                <span className="text-slate-300">GPU Nodes: <strong className="text-cyan-400">{paramGpuNodes} Nodes</strong></span>
                <input 
                  type="range" 
                  min="4" 
                  max="64" 
                  step="4"
                  value={paramGpuNodes} 
                  onChange={(e) => {
                    setParamGpuNodes(Number(e.target.value));
                    runLiveCodeSynthesis('octane');
                  }}
                  className="accent-cyan-400 cursor-pointer w-28 sm:w-36"
                />
              </div>
            )}

            {activePreset === 'messmanager' && (
              <div className="flex items-center gap-3">
                <span className="text-slate-300">Total Bazaar: <strong className="text-emerald-400">৳{paramBazaarExpense}</strong></span>
                <input 
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="500"
                  value={paramBazaarExpense} 
                  onChange={(e) => {
                    setParamBazaarExpense(Number(e.target.value));
                    runLiveCodeSynthesis('messmanager');
                  }}
                  className="accent-emerald-400 cursor-pointer w-28 sm:w-36"
                />
              </div>
            )}
          </div>

          {/* REAL VS CODE STYLE SYNTAX-HIGHLIGHTED CODE EDITOR CONTAINER */}
          <div className="bg-[#011627] rounded-2xl border border-cyan-500/40 overflow-hidden shadow-2xl relative">
            
            {/* Editor Window Header Bar */}
            <div className="bg-[#070d1e] px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-cyan-300 font-bold pl-2 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  {currentSnippet.fileName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-500/40">
                  {currentSnippet.badge}
                </span>
              </div>
            </div>

            {/* Code Line Display Body */}
            <div className="p-4 sm:p-6 overflow-x-auto max-h-[420px] custom-scrollbar bg-[#011627] relative">
              <div className="table w-full">
                {renderFormattedCode(currentSnippet.code)}
              </div>
              {isTyping && (
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1 align-middle" />
              )}
            </div>

            {/* REAL-TIME TERMINAL STDOUT STACK LOG OUTPUT BELOW EDITOR */}
            <div className="bg-[#04060f] border-t border-slate-800 p-4 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-900 pb-2">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>LIVE EXECUTION OUTPUT (STDOUT STREAM):</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-bold">FEAT-V8 Engine • 0 Errors</span>
              </div>

              <div className="space-y-1 text-slate-300 min-h-[70px]">
                {executionLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed animate-fadeIn">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <span className={log.includes('SUCCESS') || log.includes('VERIFIED') ? 'text-emerald-400 font-bold' : log.includes('Compiling') || log.includes('Initializing') ? 'text-cyan-300' : 'text-slate-300'}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
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
