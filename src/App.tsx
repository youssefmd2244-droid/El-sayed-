import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  MessageSquare,
  BookOpen,
  Clock,
  Mail,
  MapPin,
  Award,
  Heart,
  CheckCircle2,
  Star,
  Sparkles,
  Code,
  Globe,
  Scissors,
  Palette,
  ShoppingCart,
  Cpu,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  ThumbsUp,
  X,
  Wifi,
  WifiOff,
  UserCheck,
  Sun,
  Moon,
  Contrast,
  GraduationCap,
  Briefcase,
  Shield
} from "lucide-react";

// Educator Information Consts
const EDUCATOR_NAME = "El-Sayed Saeed Qotb";
const EDUCATOR_PHONE = "+201033130510";
const EDUCATOR_EMAIL = "el-sayed.qotb@email.com";
const EDUCATOR_LOCATION = "Shibin El Qanater, Qalyubia, Egypt";

// PWA / Offline Status Hook
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
}

type ThemeMode = "dark" | "white" | "blue";

export default function App() {
  const isOnline = useOnlineStatus();
  const [activeTab, setActiveTab] = useState<"portfolio" | "iconcode" | "cv">("portfolio");
  const [storyStep, setStoryStep] = useState<number>(0);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const interval = setInterval(() => {
      setStoryStep((prev) => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const cycleTheme = () => {
    setTheme(prev => {
      if (prev === "dark") return "white";
      if (prev === "white") return "blue";
      return "dark";
    });
  };

  // Theme classes
  const t = {
    dark: {
      bg: "bg-slate-950",
      bgCard: "bg-slate-900",
      bgCard2: "bg-slate-900/60",
      bgHeader: "bg-slate-900/60",
      bgFooter: "bg-slate-950/90",
      border: "border-slate-800",
      border2: "border-slate-850",
      text: "text-slate-100",
      textMuted: "text-slate-400",
      textMuted2: "text-slate-300",
      textDim: "text-slate-500",
      bannerBg: isOnline ? "bg-slate-900/90 border-emerald-500/30 text-emerald-400" : "bg-amber-500 text-slate-950 border-amber-600 font-semibold",
      statusBannerVersion: "text-slate-300",
      statusBannerVersionBg: "bg-slate-800",
      tabInactiveBg: "hover:bg-slate-900",
      tabInactiveText: "text-slate-400 hover:text-slate-100",
      skillCardBg: "bg-slate-900",
      skillCardBorder: "border-slate-850 hover:border-amber-500/20",
      storyBg: "bg-slate-950/70",
      storyBorder: "border-slate-800/60",
      bentoBoxBg: "bg-slate-900/40",
      bentoBorder: "border-slate-800",
      founderCardBg: "bg-slate-950/80",
      founderBorder: "border-slate-850",
      iconCodeCardBg: "bg-gradient-to-b from-slate-900 to-slate-950",
      icCapBg: "bg-slate-900",
      icCapBorder: "border-slate-800",
      footerBorder: "border-slate-900",
      footerDivider: "border-slate-950",
      footerAuthorBg: "bg-slate-900/50",
      footerAuthorBorder: "border-slate-850",
      bgInput: "bg-slate-800/80",
      themeLabel: "🌑 Dark",
    },
    white: {
      bg: "bg-gray-50",
      bgCard: "bg-white",
      bgCard2: "bg-white/80",
      bgHeader: "bg-white/95",
      bgFooter: "bg-gray-100",
      border: "border-gray-200",
      border2: "border-gray-200",
      text: "text-gray-900",
      textMuted: "text-gray-500",
      textMuted2: "text-gray-700",
      textDim: "text-gray-400",
      bannerBg: isOnline ? "bg-white border-emerald-400 text-emerald-700" : "bg-amber-400 text-gray-900 border-amber-500 font-semibold",
      statusBannerVersion: "text-gray-600",
      statusBannerVersionBg: "bg-gray-200",
      tabInactiveBg: "hover:bg-gray-100",
      tabInactiveText: "text-gray-500 hover:text-gray-900",
      skillCardBg: "bg-white",
      skillCardBorder: "border-gray-200 hover:border-amber-400",
      storyBg: "bg-gray-100",
      storyBorder: "border-gray-200",
      bentoBoxBg: "bg-white",
      bentoBorder: "border-gray-200",
      founderCardBg: "bg-gray-50",
      founderBorder: "border-gray-200",
      iconCodeCardBg: "bg-gradient-to-b from-white to-gray-50",
      icCapBg: "bg-white",
      icCapBorder: "border-gray-200",
      footerBorder: "border-gray-200",
      footerDivider: "border-gray-100",
      footerAuthorBg: "bg-gray-100",
      footerAuthorBorder: "border-gray-200",
      bgInput: "bg-gray-200",
      themeLabel: "☀️ White",
    },
    blue: {
      bg: "bg-blue-950",
      bgCard: "bg-blue-900",
      bgCard2: "bg-blue-900/60",
      bgHeader: "bg-blue-900/80",
      bgFooter: "bg-blue-950/90",
      border: "border-blue-700",
      border2: "border-blue-800",
      text: "text-blue-50",
      textMuted: "text-blue-300",
      textMuted2: "text-blue-100",
      textDim: "text-blue-400",
      bannerBg: isOnline ? "bg-blue-900/90 border-cyan-400/40 text-cyan-300" : "bg-amber-500 text-blue-950 border-amber-600 font-semibold",
      statusBannerVersion: "text-blue-200",
      statusBannerVersionBg: "bg-blue-800",
      tabInactiveBg: "hover:bg-blue-800",
      tabInactiveText: "text-blue-300 hover:text-blue-50",
      skillCardBg: "bg-blue-900",
      skillCardBorder: "border-blue-700 hover:border-amber-400/50",
      storyBg: "bg-blue-950/70",
      storyBorder: "border-blue-700/60",
      bentoBoxBg: "bg-blue-900/40",
      bentoBorder: "border-blue-700",
      founderCardBg: "bg-blue-950/80",
      founderBorder: "border-blue-800",
      iconCodeCardBg: "bg-gradient-to-b from-blue-900 to-blue-950",
      icCapBg: "bg-blue-900",
      icCapBorder: "border-blue-700",
      footerBorder: "border-blue-900",
      footerDivider: "border-blue-950",
      footerAuthorBg: "bg-blue-900/50",
      footerAuthorBorder: "border-blue-800",
      bgInput: "bg-blue-800/80",
      themeLabel: "🔵 Blue",
    }
  }[theme];

  const storySections = [
    {
      title: "Section 1: A Lifelong Love for English 💙📖",
      points: [
        "Fell in love with the language from an early age; the sounds and structure felt natural.",
        "Dreamed of becoming an English teacher, visualizing inspiring future generations.",
        "Constantly strived for fluency, devouring books and resources, mastering grammar and conversation.",
        "This early love transformed into a dedicated, skilled professional path."
      ]
    },
    {
      title: "Section 2: Proven Student Achievement 🏆🏅",
      points: [
        "Consistently helped numerous students achieve perfect or near-perfect final grades (Full Marks/Degree Final).",
        "Celebrating specific success stories:",
        "• Salma (Prep One): From struggling to a perfect final score, discovering her love for the language.",
        "• Adam (Grade Four): Developed incredible confidence, achieving top marks and leading his class.",
        "• Hassan (Prep Three): Cleared final exams with flawless results, prepared for advanced studies.",
        "• Hadeer (Sec One): Achieved distinction, setting a high standard for her academic future."
      ]
    },
    {
      title: "Section 3: Teaching with Empathy & Ethics 🤝🧭",
      points: [
        "More than a teacher: A mentor, companion, and ethical guide to my students.",
        "Deeply believe in 'Teaching with Heart': Fostering a supportive, humane learning environment.",
        "Instill critical life skills and values (honesty, teamwork, respect, and kindness) beyond grammar.",
        "This approach has built trust and a loving, lasting impact that fuels my passion."
      ]
    },
    {
      title: "Section 4: Building Core Foundations & Confidence 💪",
      points: [
        "Comprehensive coverage of English fundamentals: Grammar, vocabulary, pronunciation, reading, writing.",
        "Integrated psychological and motivational support to build every student's confidence.",
        "Personalized learning plans that recognize individual strengths and address unique challenges.",
        "Student praise is earned through love, dedication, and tireless effort."
      ]
    }
  ];

  const coreSkills = [
    { name: "English Language Mastery", pct: 100, color: "bg-amber-500", details: "Native/Educator fluency, complete phonetic precision" },
    { name: "Educational Leadership", pct: 95, color: "bg-cyan-500", details: "Curriculum development & scholastic administration" },
    { name: "Educational Technology", pct: 92, color: "bg-emerald-500", details: "Multi-platform online strategies, modern digital tools" },
    { name: "Educational Psychology", pct: 96, color: "bg-indigo-500", details: "Sub-department focus, high intelligence matching" },
    { name: "Communication Skills", pct: 100, color: "bg-rose-500", details: "Parent-student-teacher seamless bridging" },
    { name: "Self-Learning Architecture", pct: 98, color: "bg-violet-500", details: "Continual skill update & method improvements" }
  ];

  return (
    <div className={`min-h-screen ${t.bg} font-sans ${t.text} flex flex-col relative transition-colors duration-500`} id="main-viewport">

      {/* Online/Offline Banner */}
      <div className={`sticky top-0 z-50 transition-all duration-500 border-b ${t.bannerBg} backdrop-blur-md px-4 py-2 flex items-center justify-between text-xs sm:text-sm`}>
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          {isOnline ? (
            <>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Online Performance Live</span>
            </>
          ) : (
            <>
              <span className="w-3 h-3 rounded-full bg-slate-950 animate-ping absolute" />
              <span className="w-3 h-3 rounded-full bg-slate-950" />
              <span>Offline Mode Active • Saved local copy available</span>
            </>
          )}
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className={t.statusBannerVersion + " opacity-80"}>El-Sayed Saeed Qotb Portfolio v1.3</span>
          <span className={`px-2 py-0.5 rounded ${t.statusBannerVersionBg} text-[10px] ${t.textMuted2} font-mono`}>PWA Enabled</span>
        </div>
      </div>

      {/* Header */}
      <header className={`${t.bgHeader} backdrop-blur-lg border-b ${t.border} py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6`}>
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab("portfolio")}>
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
            <img
              src="/el_sayed_avatar.jpg"
              alt="El-Sayed Saeed Qotb Portrait"
              className="w-16 h-16 rounded-full object-cover relative border-2 border-slate-900 animate-spin-slow"
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 animate-blink-light" />
          </div>
          <div>
            <span className="block text-xl font-bold tracking-tight bg-gradient-to-r from-amber-400 via-yellow-200 to-cyan-400 bg-clip-text text-transparent hover:underline transition duration-350">
              EL-SAYED
            </span>
            <span className="block text-[11px] font-mono tracking-widest text-[#00a8cc] uppercase animate-pulse">
              ★ Educator & Strategist ★
            </span>
          </div>
        </div>

        <div className={`flex ${t.bg} p-1.5 rounded-2-xl border ${t.border}`}>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-350 ${
              activeTab === "portfolio"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20"
                : `${t.tabInactiveText} ${t.tabInactiveBg}`
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>MR. EL-SAYED PORTFOLIO</span>
          </button>
          <button
            onClick={() => setActiveTab("iconcode")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-350 ${
              activeTab === "iconcode"
                ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 shadow-lg shadow-cyan-500/20 animate-pulse"
                : `${t.tabInactiveText} ${t.tabInactiveBg}`
            }`}
          >
            <Code className="w-4 h-4" />
            <span>ICON CODE SYSTEMS</span>
          </button>
          <button
            onClick={() => setActiveTab("cv")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-350 ${
              activeTab === "cv"
                ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20"
                : `${t.tabInactiveText} ${t.tabInactiveBg}`
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>CURRICULUM VITAE</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-12 relative">

        {/* TAB 1: PORTFOLIO */}
        <AnimatePresence mode="wait">
          {activeTab === "portfolio" && (
            <motion.div
              key="portfolio-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column */}
              <div className="lg:col-span-4 space-y-8">
                <div className={`bg-gradient-to-b ${t.bgCard} to-${t.bg} rounded-3xl p-6 border-2 border-amber-500/30 shadow-xl relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full blur-sm opacity-75 animate-pulse" />
                      <img
                        src="/el_sayed_avatar.jpg"
                        alt="El-Sayed Saeed Qotb"
                        className="w-36 h-36 rounded-full object-cover border-4 border-slate-900"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent mb-1 font-display">
                      {EDUCATOR_NAME}
                    </h1>
                    <p className="text-cyan-400 text-sm tracking-wide uppercase font-semibold font-mono mb-6">
                      EDUCATOR & LEARNING STRATEGIST
                    </p>

                    <div className={`w-full space-y-3.5 text-left border-t ${t.border} pt-5`}>
                      <div className="flex items-center gap-3 text-sm">
                        <div className={`p-2 rounded ${t.bgInput} text-amber-500`}><Clock className="w-4 h-4" /></div>
                        <div>
                          <p className={`text-[11px] ${t.textMuted}`}>Professional Age</p>
                          <p className={`font-semibold ${t.text}`}>27 Years Dedicated</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className={`p-2 rounded ${t.bgInput} text-cyan-400`}><MapPin className="w-4 h-4" /></div>
                        <div>
                          <p className={`text-[11px] ${t.textMuted}`}>Location Base</p>
                          <p className={`font-semibold text-xs sm:text-sm ${t.text}`}>{EDUCATOR_LOCATION}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className={`p-2 rounded ${t.bgInput} text-emerald-400`}><Award className="w-4 h-4" /></div>
                        <div>
                          <p className={`text-[11px] ${t.textMuted}`}>Academic Qualification</p>
                          <p className={`font-semibold leading-tight ${t.text}`}>Bachelor of Education</p>
                          <p className={`text-[11px] ${t.textMuted}`}>Department of Psychology</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full mt-6 space-y-3">
                      <a
                        href={`tel:${EDUCATOR_PHONE}`}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all duration-350 shadow-md shadow-amber-500/10 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4 animate-bounce" />
                        <span>Call Mr. El-Sayed</span>
                      </a>
                      <a
                        href={`https://wa.me/${EDUCATOR_PHONE}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-350 shadow-md shadow-emerald-600/10 hover:-translate-y-0.5"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp Quick Chat</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`${t.bgCard} border ${t.border} rounded-3xl p-6`}>
                  <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2 font-display">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <span>Why Choose Me?</span>
                  </h3>
                  <p className={`text-sm ${t.textMuted2} leading-relaxed`}>
                    A detailed, dedicated, and professional English teacher with comprehensive classroom experience. Offers exceptional pedagogical skills, educational acumen, and in-depth knowledge of curriculum to deliver premium, tailored instruction.
                  </p>
                  <div className={`mt-4 pt-3 border-t ${t.border} flex items-center gap-2.5`}>
                    <span className="px-2.5 py-1 text-[10px] bg-cyan-950/50 border border-cyan-800/50 rounded-full text-cyan-400 font-mono">Teaching with Heart</span>
                    <span className="px-2.5 py-1 text-[10px] bg-amber-950/50 border border-amber-800/50 rounded-full text-amber-400 font-mono">Psychology Focus</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 space-y-8">

                {/* Experience */}
                <div className={`${t.bgCard2} border ${t.border} rounded-3xl p-6 md:p-8 space-y-6`}>
                  <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b ${t.border}`}>
                    <div>
                      <h2 className={`text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent font-display`}>
                        6 Years of Educational Excellence
                      </h2>
                      <p className={`${t.textMuted} text-sm`}>Professional English Language Educator</p>
                    </div>
                    <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-amber-400 font-bold text-xs font-mono">
                      <Star className="w-3.5 h-3.5 animate-spin" />
                      <span>Advanced Mastery Status</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-amber-500/40 space-y-2.5">
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-amber-500" />
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                        <h4 className="text-lg font-bold text-amber-300">English Language Teacher</h4>
                        <span className={`px-2.5 py-0.5 rounded-full ${t.bgInput} text-[11px] text-amber-400 font-mono font-semibold`}>Al-Yasmine School 🏫</span>
                      </div>
                      <p className={`text-sm ${t.textMuted2} leading-relaxed`}>
                        Responsible for crafting comprehensive lesson plans, driving interactive student-centered classrooms, managing motivating learning environments, and composing rigorous student progress sheets.
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-cyan-500/40 space-y-2.5">
                      <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-500" />
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                        <h4 className="text-lg font-bold text-cyan-300">Private Tutoring & Academic Advisor</h4>
                        <span className={`px-2.5 py-0.5 rounded-full ${t.bgInput} text-[11px] text-cyan-400 font-mono font-semibold`}>Custom Educational Programs</span>
                      </div>
                      <p className={`text-sm ${t.textMuted2} leading-relaxed`}>
                        Authoring customized syllabus content, acting as a direct psychological mentor, applying smart digital screens & online files, and administering targeted curriculum goals for outstanding student outcomes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Story Slider */}
                <div className={`bg-gradient-to-r ${t.bgCard} to-${t.bg} border ${t.border} rounded-3xl p-6 md:p-8 relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 p-3 text-[10px] text-amber-500 font-mono tracking-widest uppercase`}>
                    My Teaching Journey 🧭
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent font-display">
                      From Childhood Passion to Professional Excellence
                    </h3>
                    <p className={`${t.textMuted} text-xs`}>Sharing My Success Strategy and Ethos as an English Educator</p>
                  </div>
                  <div className={`min-h-[170px] ${t.storyBg} rounded-2xl p-5 border ${t.storyBorder} relative`}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={storyStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <h4 className={`text-semibold text-amber-300 font-medium font-mono text-sm sm:text-base`}>
                          {storySections[storyStep].title}
                        </h4>
                        <ul className={`space-y-2 text-xs sm:text-sm ${t.textMuted2}`}>
                          {storySections[storyStep].points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-500 mt-1">✦</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-1.5">
                      {storySections.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setStoryStep(idx)}
                          className={`w-7 h-2 rounded transition-all ${idx === storyStep ? "bg-amber-400 w-10 animate-pulse" : `${t.bgInput} hover:opacity-80`}`}
                          aria-label={`Go to step ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className={`text-xs ${t.textDim} font-mono`}>Interactive Auto-Shift On</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <h3 className={`text-lg font-bold ${t.textMuted2} pl-1 font-display`}>Core Educational Competencies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {coreSkills.map((skill, index) => (
                      <div key={index} className={`${t.skillCardBg} border ${t.skillCardBorder} p-4 rounded-2xl flex flex-col justify-between hover:border-amber-500/20 transition-all duration-300`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-sm font-semibold tracking-tight text-amber-200">{skill.name}</p>
                            <p className={`text-[11px] ${t.textMuted} mt-0.5`}>{skill.details}</p>
                          </div>
                          <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                            {skill.pct}%
                          </span>
                        </div>
                        <div className={`w-full ${t.storyBg} h-2 rounded-full overflow-hidden mt-2`}>
                          <motion.div
                            className={`h-full ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bento Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`${t.bentoBoxBg} border ${t.bentoBorder} p-6 rounded-3xl space-y-4 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl" />
                    <h4 className={`text-md font-bold text-cyan-300 font-display flex items-center gap-1.5`}>
                      <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                      <span>Supplementary Attributes</span>
                    </h4>
                    <div className="space-y-3.5">
                      <div className="flex items-start gap-2.5">
                        <span className="text-[11px] bg-cyan-950 text-cyan-400 px-2.5 py-0.5 rounded font-mono font-bold mt-0.5">VISION</span>
                        <p className={`text-xs ${t.textMuted2} leading-relaxed`}>Fostering critical thinking, creative expression, and preparing pupils for a globalized world.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-[11px] bg-emerald-950 text-emerald-400 px-2.5 py-0.5 rounded font-mono font-bold mt-0.5">GROWTH</span>
                        <p className={`text-xs ${t.textMuted2} leading-relaxed`}>Continuous research, educational platform tracking, and unwavering standard delivery.</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-[11px] bg-rose-950 text-rose-400 px-2.5 py-0.5 rounded font-mono font-bold mt-0.5">HUMAN</span>
                        <p className={`text-xs ${t.textMuted2} leading-relaxed`}>Prioritizing empathy, building mutual confidence, and driving values with a caring heart.</p>
                      </div>
                    </div>
                  </div>

                  <div className={`${t.bentoBoxBg} border ${t.bentoBorder} p-6 rounded-3xl flex flex-col justify-between space-y-4`}>
                    <div>
                      <h4 className={`text-md font-bold ${t.text} font-display`}>With Sincere Gratitude</h4>
                      <p className={`text-xs ${t.textMuted} mt-1`}>A Personal Message from El-Sayed Saeed Qotb</p>
                    </div>
                    <p className="text-xs text-amber-200/90 leading-relaxed italic">
                      "A successful career is built on mutual respect and shared goals. I value the potential to collaborate and grow with an institution that prioritizes academic excellence."
                    </p>
                    <div className={`pt-3 border-t ${t.border} flex justify-between items-center text-[10px] ${t.textDim} font-mono`}>
                      <span>EL-SAYED SAEED QOTB</span>
                      <span>SHIBIN EL QANATER • 2026</span>
                    </div>
                  </div>
                </div>

                {/* Military Service Section */}
                <div className={`${t.bgCard2} border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 space-y-5 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                  <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b ${t.border}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-3xl">🎖️</span>
                        <h2 className={`text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent font-display`}>
                          Military Service
                        </h2>
                      </div>
                      <p className={`${t.textMuted} text-xs`}>Armed Forces of Egypt — Completed with Honor</p>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-emerald-400 font-bold text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>✅ Completed — Exempt</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className={`${t.bgCard} border ${t.border} rounded-2xl p-4 flex flex-col gap-2 hover:border-amber-500/30 transition duration-300`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">🪖</span>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Status</span>
                      </div>
                      <p className={`font-bold text-sm ${t.text}`}>Completed Military Service</p>
                      <p className={`text-xs ${t.textMuted} leading-relaxed`}>
                        Fulfilled mandatory national service obligations with the Egyptian Armed Forces. Officially discharged and fully exempt from further service duties.
                      </p>
                    </div>

                    <div className={`${t.bgCard} border ${t.border} rounded-2xl p-4 flex flex-col gap-2 hover:border-emerald-500/30 transition duration-300`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">⭐</span>
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">Qualities Gained</span>
                      </div>
                      <ul className={`text-xs ${t.textMuted2} space-y-1.5`}>
                        <li className="flex items-center gap-1.5"><span className="text-emerald-400">✦</span> Discipline & Time Management</li>
                        <li className="flex items-center gap-1.5"><span className="text-emerald-400">✦</span> Leadership & Teamwork</li>
                        <li className="flex items-center gap-1.5"><span className="text-emerald-400">✦</span> Resilience Under Pressure</li>
                        <li className="flex items-center gap-1.5"><span className="text-emerald-400">✦</span> Responsibility & Commitment</li>
                      </ul>
                    </div>

                    <div className={`${t.bgCard} border ${t.border} rounded-2xl p-4 flex flex-col gap-2 hover:border-cyan-500/30 transition duration-300`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">📋</span>
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Employment Impact</span>
                      </div>
                      <p className={`font-semibold text-sm text-cyan-300`}>No Obligations Remaining</p>
                      <p className={`text-xs ${t.textMuted2} leading-relaxed`}>
                        Eligible for full-time employment without any military scheduling conflicts. Available to commit 100% to professional teaching duties and institutional responsibilities.
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-3 ${t.bgInput} rounded-xl p-3.5 border ${t.border} mt-2`}>
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <p className={`text-xs ${t.textMuted2} leading-relaxed`}>
                      <span className="font-bold text-emerald-400">Military Service Completed & Exempt.</span> El-Sayed Saeed Qotb has fulfilled all national military obligations required by the Arab Republic of Egypt. Full documentation available upon institutional request.
                    </p>
                  </div>
                </div>

                {/* ICON Code Co-founders in portfolio */}
                <div className={`${t.bgCard2} border ${t.border} rounded-3xl p-6 md:p-8 space-y-6`}>
                  <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b ${t.border}`}>
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 shrink-0 hover:scale-125 transition-transform duration-500">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-[#00a8cc] to-emerald-500 rounded-full blur opacity-80 animate-pulse-glow" />
                        <img
                          src="/icon_code_logo.jpg"
                          alt="ICON Code Brand Logo"
                          className="w-14 h-14 rounded-full object-cover relative border-2 border-slate-900 animate-spin-slow"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full text-cyan-400 font-mono font-bold text-[10px] mb-2 animate-pulse">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
                          <span>TECHNOLOGY PARTNERS 🚀</span>
                        </div>
                        <h2 className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent font-display`}>
                          ICON CODE SYSTEMS
                        </h2>
                        <p className={`${t.textMuted} text-xs`}>The expert development and design powers behind this digital suite</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] bg-cyan-950/50 border border-cyan-850 rounded-full text-cyan-400 font-mono">
                      Founded 2023 ☄️
                    </span>
                  </div>

                  <p className={`text-xs ${t.textMuted2} leading-relaxed`}>
                    ICON Code is a multi-national development and design powerhouse established in 2023. Our primary directive is implementing clean code structures, functional internet databases, interactive mobile layouts, beautiful graphic designs, clothing patterns, and GRC structural design blueprints across multiple territories.
                  </p>

                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">FOUNDERS & LEADERSHIP</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Youssef */}
                      <div className={`${t.founderCardBg} border ${t.founderBorder} p-4 rounded-2xl flex flex-col justify-between space-y-4 group hover:border-cyan-500/30 transition duration-300`}>
                        <div>
                          <div className="relative w-16 h-16 mb-3 hover:scale-125 transition-transform duration-500">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-amber-400 rounded-full blur opacity-80 animate-blink-light" />
                            <img
                              src="/yousef_avatar.jpg"
                              alt="Eng. Youssef Mohamed El-Sayed Mohamed"
                              className="w-16 h-16 rounded-full object-cover object-top relative border-2 border-slate-900 animate-spin-slow"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-[9px] font-mono tracking-widest text-[#00a8cc] uppercase">CHIEF EXECUTIVE FOUNDER</span>
                          <h5 className={`font-bold text-sm ${t.text} group-hover:text-cyan-300 transition duration-300 mt-0.5`}>
                            Eng. Youssef Mohamed El-Sayed Mohamed
                          </h5>
                          <p className={`text-[11px] ${t.textMuted} italic`}>Co-Founder, Chief Applications Architect</p>
                          <p className={`text-xs ${t.textMuted2} mt-2 leading-relaxed`}>
                            Web/App Engineering division specialized in custom full-stack web applications, interactive portals, responsive admin panels with robust database frameworks and lightning load speeds.
                          </p>
                        </div>
                        <div className={`pt-3 border-t ${t.border} flex flex-col gap-2`}>
                          <p className={`text-[9px] ${t.textDim} uppercase font-mono`}>CONTACT SYSTEM: <span className="text-cyan-300 font-semibold">+201094555299</span></p>
                          <div className="grid grid-cols-2 gap-2">
                            <a href="tel:+201094555299" className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[11px] font-bold py-1.5 rounded-lg hover:scale-[1.02] transition">
                              <Phone className="w-3 h-3 animate-bounce" /><span>Call</span>
                            </a>
                            <a href="https://wa.me/201094555299" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-[11px] font-bold py-1.5 rounded-lg hover:scale-[1.02] transition">
                              <MessageSquare className="w-3 h-3" /><span>WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Omar */}
                      <div className={`${t.founderCardBg} border ${t.founderBorder} p-4 rounded-2xl flex flex-col justify-between space-y-4 group hover:border-cyan-500/30 transition duration-300`}>
                        <div>
                          <div className="relative w-16 h-16 mb-3 hover:scale-125 transition-transform duration-500">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-amber-400 rounded-full blur opacity-80 animate-blink-light" />
                            <img
                              src="/omar_avatar.jpg"
                              alt="Eng. Omar Mohamed El-Sayed Mohamed"
                              className="w-16 h-16 rounded-full object-cover object-top relative border-2 border-slate-900 animate-spin-slow"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="text-[9px] font-mono tracking-widest text-[#00a8cc] uppercase">CHIEF TECHNOLOGY OFFICER</span>
                          <h5 className={`font-bold text-sm ${t.text} group-hover:text-cyan-300 transition duration-300 mt-0.5`}>
                            Eng. Omar Mohamed El-Sayed Mohamed
                          </h5>
                          <p className={`text-[11px] ${t.textMuted} italic`}>Co-Founder, Systems Infrastructure Director</p>
                          <p className={`text-xs ${t.textMuted2} mt-2 leading-relaxed`}>
                            Specialized divisions in Systems infrastructure, GRC (Glass Reinforced Concrete) structural graphics, apparel patterns, and post-production creative montage works.
                          </p>
                        </div>
                        <div className={`pt-3 border-t ${t.border} flex flex-col gap-2`}>
                          <p className={`text-[9px] ${t.textDim} uppercase font-mono`}>CONTACT SYSTEM: <span className="text-cyan-300 font-semibold">+201102293350</span></p>
                          <div className="grid grid-cols-2 gap-2">
                            <a href="tel:+201102293350" className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[11px] font-bold py-1.5 rounded-lg hover:scale-[1.02] transition">
                              <Phone className="w-3 h-3 animate-bounce" /><span>Call</span>
                            </a>
                            <a href="https://wa.me/201102293350" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-[11px] font-bold py-1.5 rounded-lg hover:scale-[1.02] transition">
                              <MessageSquare className="w-3 h-3" /><span>WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TAB 2: ICON CODE */}
        <AnimatePresence mode="wait">
          {activeTab === "iconcode" && (
            <motion.div
              key="iconcode-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {/* Hero Banner */}
              <div className={`bg-gradient-to-r ${t.bgCard} via-${t.bg} to-${t.bgCard} border-2 border-cyan-500/30 rounded-3xl p-6 md:p-12 relative overflow-hidden`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                  <div className="space-y-5 text-center lg:text-left max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/40 px-4 py-1.5 rounded-full text-cyan-400 font-mono font-bold text-xs">
                      <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
                      <span>FOUNDED IN 2023 🚀</span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-black font-display tracking-tight ${t.text} flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4`}>
                      <span>ICON CODE</span>
                      <span className="inline-block animate-spin-slow">☄️</span>
                    </h2>
                    <p className="text-cyan-200 text-lg sm:text-xl font-medium tracking-wide">
                      Industrial-Grade Software Engineering & Creative Multimedia Development
                    </p>
                    <p className={`text-sm ${t.textMuted2} leading-relaxed max-w-xl`}>
                      A multi-national development and design powerhouse established in 2023. Our primary directive is implementing clean code structures, functional internet databases, interactive mobile layouts, beautiful graphic designs, clothing patterns, and GRC structural design blueprints across multiple territories.
                    </p>
                    <div className="space-y-3 pt-3">
                      <p className="text-xs font-mono font-bold tracking-widest text-[#00a8cc] uppercase">SUCCESSFUL GLOBAL PRESENCE</p>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        {[["🇪🇬", "Egypt Office"], ["🇸🇦", "Saudi Arabia Projects"], ["🇦🇪", "UAE Operations"]].map(([flag, label]) => (
                          <div key={label} className={`flex items-center gap-2 ${t.founderCardBg} px-4 py-2 rounded-xl border ${t.border} hover:border-cyan-500/30 transition shadow`}>
                            <span className="text-2xl animate-bounce">{flag}</span>
                            <span className={`text-xs font-semibold ${t.text}`}>{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative group hover:scale-110 transition-transform duration-500">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-[#00a8cc] to-emerald-500 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />
                    <img
                      src="/icon_code_logo.jpg"
                      alt="ICON Code Brand Logo"
                      className="w-56 h-56 rounded-full object-cover relative border-4 border-slate-900 animate-spin-slow"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="space-y-5">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-300 font-display">Specialized Capabilities</h3>
                  <p className={`text-xs ${t.textMuted} mt-1`}>Industrial divisions providing custom-tailored programming and creative assets</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { emoji: "💻", title: "Web/App Engineering", color: "text-cyan-200", bg: "bg-cyan-950", desc: "Custom full-stack web applications, interactive portals, responsive admin panels with robust database frameworks and lightning load speeds." },
                    { emoji: "🧾", title: "E-Stores & POS Cashier", color: "text-emerald-300", bg: "bg-emerald-950", desc: "E-commerce shopping structures, inventory managers, cash register systems, automated receipt printing, sales analytics." },
                    { emoji: "🎨", title: "Design & Montage", color: "text-amber-300", bg: "bg-amber-950", desc: "High-end branding vectors, Photoshop composites, video montage edits (post-production, transitions, sounds, subtitles)." },
                    { emoji: "🏛️", title: "GRC & Textile Graphics", color: "text-purple-300", bg: "bg-purple-950", desc: "Glass Reinforced Concrete (GRC) molding templates, technical structure mockups, and digital garment patterns / apparel designs." },
                  ].map((cap) => (
                    <div key={cap.title} className={`${t.icCapBg} border ${t.icCapBorder} p-5 rounded-2xl space-y-3.5 hover:border-cyan-500/40 hover:-translate-y-1 transition duration-350`}>
                      <div className={`w-10 h-10 rounded-lg ${cap.bg} flex items-center justify-center font-bold text-lg`}>{cap.emoji}</div>
                      <h4 className={`font-bold ${cap.color}`}>{cap.title}</h4>
                      <p className={`text-xs ${t.textMuted2} leading-relaxed`}>{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founders */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className={`text-2xl font-bold ${t.text} font-display`}>Founders & Leadership Council</h3>
                  <p className={`text-xs ${t.textMuted}`}>The expert software architects and managers behind ICON Code Systems</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                    { role: "CHIEF EXECUTIVE FOUNDER", name: "Eng. Youssef Mohamed El-Sayed Mohamed", title: "Co-Founder, Chief Applications Architect", phone: "+201094555299", wa: "201094555299", icon: "🛠️", photo: "/yousef_avatar.jpg" },
                    { role: "CHIEF TECHNOLOGY OFFICER", name: "Eng. Omar Mohamed El-Sayed Mohamed", title: "Co-Founder, Systems Infrastructure Director", phone: "+201102293350", wa: "201102293350", icon: "⚙️", photo: "/omar_avatar.jpg" },
                  ].map((f) => (
                    <div key={f.name} className={`${t.iconCodeCardBg} rounded-3xl p-6 border-2 border-cyan-500/20 hover:border-cyan-500/40 transition duration-350 relative overflow-hidden flex flex-col justify-between group`}>
                      <div className={`absolute top-0 right-0 w-12 h-12 bg-cyan-500/10 rounded-bl-3xl border-l border-b border-cyan-500/10 flex items-center justify-center text-lg animate-pulse`}>{f.icon}</div>
                      <div>
                        <div className="relative w-20 h-20 mb-4 hover:scale-125 transition-transform duration-500">
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-amber-400 rounded-full blur opacity-80 animate-blink-light" />
                          <img
                            src={f.photo}
                            alt={f.name}
                            className="w-20 h-20 rounded-full object-cover object-top relative border-2 border-slate-900 animate-spin-slow"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="text-[11px] font-mono tracking-widest text-[#00a8cc] uppercase">{f.role}</h4>
                        <h3 className={`text-xl font-bold ${t.text} group-hover:text-cyan-300 transition duration-350 font-display mt-1`}>{f.name}</h3>
                        <p className={`text-xs ${t.textMuted} mt-1 italic`}>{f.title}</p>
                      </div>
                      <div className={`mt-6 pt-5 border-t ${t.border} space-y-4`}>
                        <div>
                          <p className={`text-[10px] ${t.textMuted} uppercase font-mono`}>CONTACT SYSTEM</p>
                          <p className="text-sm font-semibold text-cyan-200 mt-0.5">{f.phone}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          <a href={`tel:${f.phone}`} className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs font-bold py-2 rounded-xl">
                            <Phone className="w-3 animate-bounce" /><span>Call Dialer</span>
                          </a>
                          <a href={`https://wa.me/${f.wa}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 bg-emerald-600 text-white text-xs font-bold py-2 rounded-xl">
                            <MessageSquare className="w-3" /><span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ===== THEME TOGGLE BUTTON ===== */}
                <div className="flex justify-center pt-8">
                  <motion.button
                    onClick={cycleTheme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base shadow-2xl transition-all duration-500 border-2 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600 text-slate-100 shadow-slate-900/60"
                        : theme === "white"
                        ? "bg-gradient-to-r from-gray-100 to-white border-gray-300 text-gray-800 shadow-gray-300/60"
                        : "bg-gradient-to-r from-blue-600 to-blue-500 border-blue-400 text-white shadow-blue-900/60"
                    }`}
                  >
                    {theme === "dark" && <Moon className="w-5 h-5 text-slate-300" />}
                    {theme === "white" && <Sun className="w-5 h-5 text-amber-500" />}
                    {theme === "blue" && <Contrast className="w-5 h-5 text-blue-100" />}
                    <span>{t.themeLabel} Mode</span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                      theme === "dark" ? "bg-slate-700 text-slate-300"
                      : theme === "white" ? "bg-gray-200 text-gray-600"
                      : "bg-blue-700 text-blue-200"
                    }`}>
                      {theme === "dark" ? "→ White" : theme === "white" ? "→ Blue" : "→ Dark"}
                    </span>
                  </motion.button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TAB 3: CURRICULUM VITAE */}
        <AnimatePresence mode="wait">
          {activeTab === "cv" && (
            <motion.div
              key="cv-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              {/* CV Card */}
              <div className={`${t.bgCard} border ${t.border} rounded-3xl overflow-hidden shadow-2xl`}>

                {/* CV Top Bar */}
                <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 px-8 py-3 flex items-center justify-between">
                  <span className="text-slate-950 font-mono font-bold text-xs tracking-widest uppercase">📄 Official Curriculum Vitae</span>
                  <span className="text-slate-950 font-mono text-xs">El-Sayed Saeed Qotb • 2026</span>
                </div>

                {/* CV Body — two column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 min-h-[700px]">

                  {/* ── LEFT SIDEBAR ── */}
                  <div className="bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-800 p-6 flex flex-col gap-6">

                    {/* Photo */}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full blur-sm opacity-75 animate-pulse" />
                        <img
                          src="/el_sayed_avatar.jpg"
                          alt="El-Sayed Saeed Qotb"
                          className="w-28 h-28 rounded-full object-cover border-4 border-slate-900 relative"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h2 className="text-base font-bold text-amber-400 font-display leading-tight">El-Sayed Saeed Qotb</h2>
                      <p className="text-cyan-400 text-[10px] tracking-widest uppercase font-mono mt-1">English Educator</p>
                    </div>

                    {/* Personal Info */}
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest border-b border-slate-700 pb-2 mb-3 flex items-center gap-1.5">
                        <span>👤</span> Personal Information
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-base">🧑</span>
                          <span><strong className="text-white">El-Sayed Saeed Qotb</strong></span>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-base">🎂</span>
                          <span>Age: 27</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-base">📍</span>
                          <span>Shibin El Qanater,<br/>Qalyubia, Egypt</span>
                        </div>
                      </div>
                    </div>

                    {/* Core Skills */}
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest border-b border-slate-700 pb-2 mb-3 flex items-center gap-1.5">
                        <span>🛠️</span> Core Skills
                      </div>

                      {/* English bar */}
                      <div className="mb-3">
                        <div className="flex items-center gap-2 text-xs text-slate-300 mb-1.5">
                          <span>🇬🇧</span> English Language
                        </div>
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                        <p className="text-[10px] text-amber-400 text-right mt-1 font-mono">Advanced / Mastery</p>
                      </div>

                      <div className="space-y-2">
                        {[
                          { icon: "🏆", label: "Educational Leadership" },
                          { icon: "🖥️", label: "Educational Technology" },
                          { icon: "🧠", label: "Educational Psychology" },
                          { icon: "💬", label: "Communication Skills" },
                          { icon: "😌", label: "Self-Learning" },
                        ].map((s) => (
                          <div key={s.label} className="flex items-center gap-2 text-xs text-slate-300">
                            <span>{s.icon}</span> <span>{s.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why Choose Me */}
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest border-b border-slate-700 pb-2 mb-3 flex items-center gap-1.5">
                        <span>🤔</span> Why Choose Me?
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed border-l-2 border-amber-500/50 pl-3">
                        A detailed, dedicated, and professional English teacher with comprehensive classroom experience. Offers exceptional pedagogical skills, educational acumen, and in-depth knowledge of curriculum to deliver premium, tailored instruction.
                      </p>
                    </div>

                    {/* Military Badge */}
                    <div>
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest border-b border-slate-700 pb-2 mb-3 flex items-center gap-1.5">
                        <span>🎖️</span> Military Service
                      </div>
                      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 space-y-1.5">
                        <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">🇪🇬 Egyptian Armed Forces</div>
                        <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">✅ Completed &amp; Exempt</div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">All obligations fulfilled. Available for full-time employment immediately.</p>
                      </div>
                    </div>

                  </div>

                  {/* ── RIGHT MAIN ── */}
                  <div className={`md:col-span-2 ${t.bgCard} p-6 md:p-8 flex flex-col gap-6`}>

                    {/* Title */}
                    <div>
                      <p className="font-serif italic text-3xl font-black text-amber-400">Curriculum Vitae</p>
                      <p className="text-xl font-bold text-white mt-0.5">El-Sayed Saeed Qotb</p>
                    </div>

                    {/* Professional Summary */}
                    <div>
                      <div className={`text-sm font-bold ${t.text} border-b border-amber-500/40 pb-2 mb-3 flex items-center gap-2`}>
                        🏆 Professional Summary
                      </div>
                      <p className={`text-sm ${t.textMuted2} leading-relaxed`}>
                        <strong className={t.text}>In 27 years, dedicated and professional English Teacher with over 6 years practical experience.</strong>{" "}
                        Innovative teaching style, content creation, classroom management, superior motivating capability,
                        exceptional English communication skills. Perfect for educational institutions striving for excellence.
                      </p>
                    </div>

                    {/* Academic Qualifications */}
                    <div>
                      <div className={`text-sm font-bold ${t.text} border-b border-amber-500/40 pb-2 mb-3 flex items-center gap-2`}>
                        🎓 Academic Qualifications
                      </div>
                      <p className={`text-sm ${t.textMuted2} leading-relaxed`}>
                        <strong className={t.text}>Bachelor of Education</strong> – Department of Psychology.
                        Strong background in educational psychology.
                      </p>
                    </div>

                    {/* Professional Experience */}
                    <div>
                      <div className={`text-sm font-bold ${t.text} border-b border-amber-500/40 pb-2 mb-3 flex items-center gap-2`}>
                        ⭐ Professional Experience
                      </div>
                      <p className={`text-xs font-bold ${t.textMuted} mb-4`}>(6 Years of Excellence)</p>

                      {/* Role 1 */}
                      <div className="relative pl-5 border-l-2 border-amber-500/40 mb-5">
                        <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-amber-500" />
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-sm font-bold ${t.text}`}>🏫 English Language Teacher</span>
                          <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full font-mono">Al-Yasmine School</span>
                        </div>
                        <ul className={`space-y-1 text-xs ${t.textMuted2}`}>
                          {["Comprehensive lesson plans,", "interactive teaching,", "classroom environment management,", "performance reports."].map(i => (
                            <li key={i} className="flex items-start gap-2"><span className="text-amber-500 mt-0.5">•</span>{i}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Role 2 */}
                      <div className="relative pl-5 border-l-2 border-cyan-500/40">
                        <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-cyan-500" />
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-sm font-bold ${t.text}`}>🏠 English Language Teacher</span>
                          <span className="text-[10px] bg-cyan-500 text-slate-950 font-bold px-2.5 py-0.5 rounded-full font-mono">Private Tutoring &amp; Academic Guidance</span>
                        </div>
                        <ul className={`space-y-1 text-xs ${t.textMuted2}`}>
                          {["Training curricula, academic mentor,", "digital tools and online resources;", "personalized learning strategies;", "proven outstanding results."].map(i => (
                            <li key={i} className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">•</span>{i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Military Service Full */}
                    <div>
                      <div className={`text-sm font-bold ${t.text} border-b border-amber-500/40 pb-2 mb-3 flex items-center gap-2`}>
                        🎖️ Military Service
                      </div>
                      <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-2xl p-4 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold px-3 py-1 rounded-full">✅ Completed — Officially Exempt</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className={`${t.bgCard} rounded-xl p-3 border ${t.border}`}>
                            <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1.5">🪖 Service Status</p>
                            <p className={`text-xs ${t.textMuted2} leading-relaxed`}><strong className={t.text}>Completed Military Service.</strong> Fulfilled all mandatory national obligations with the Egyptian Armed Forces. Officially discharged and fully exempt.</p>
                          </div>
                          <div className={`${t.bgCard} rounded-xl p-3 border ${t.border}`}>
                            <p className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1.5">⭐ Qualities Gained</p>
                            <div className={`text-xs ${t.textMuted2} space-y-1`}>
                              {["✦ Discipline & Time Management", "✦ Leadership & Teamwork", "✦ Resilience Under Pressure", "✦ Responsibility & Commitment"].map(q => (
                                <div key={q}>{q}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className={`${t.bgCard} rounded-xl p-3 border ${t.border} flex items-start gap-2.5`}>
                          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <p className={`text-xs ${t.textMuted2} leading-relaxed`}>
                            <strong className="text-emerald-400">No Remaining Obligations.</strong> Eligible for immediate full-time employment. Available to commit 100% to professional duties. Full documentation available upon institutional request.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Footer */}
                    <div className={`border-t ${t.border} pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3`}>
                      <div>
                        <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">📞 Contact Details</p>
                        <p className={`text-xs ${t.textMuted2} flex items-center gap-1.5`}><span>📱</span> +20 10 33130510</p>
                        <p className={`text-xs ${t.textMuted2} flex items-center gap-1.5 mt-1`}><span>✉️</span> el-sayed.qotb@email.com</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">🤝 References</p>
                        <p className={`text-xs ${t.textMuted2}`}>📄 Available upon request.</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">🔗 Professional Links</p>
                        <a href="https://linkedin.com/in/elsayed-qotb" target="_blank" rel="noreferrer" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5">
                          <span>💼</span> LinkedIn/in/elsayed-qotb
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-40">
        <motion.a
          href={`tel:${EDUCATOR_PHONE}`}
          whileHover={{ scale: 1.15, rotate: 12 }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 3, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 relative group cursor-pointer"
          aria-label="Phone Dialer Mr. El-Sayed"
        >
          <Phone className="w-6 h-6 animate-bounce" />
          <span className="absolute right-16 bg-slate-900 border border-slate-800 text-amber-400 font-mono text-[10px] py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Call Mr. El-Sayed
          </span>
        </motion.a>
        <motion.a
          href={`https://wa.me/${EDUCATOR_PHONE}`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15, rotate: -12 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 relative group cursor-pointer border-2 border-white/20"
          aria-label="WhatsApp Mr. El-Sayed"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-16 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[10px] py-1 px-2.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>

      {/* Footer */}
      <footer className={`${t.bgFooter} border-t ${t.footerBorder} py-12 px-6 text-center ${t.textDim} z-20 space-y-6`}>
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 text-xs tracking-wide`}>
          <div className="flex items-center gap-2">
            <span className={`font-bold ${t.textMuted2} flex items-center gap-2`}>
              <span className="text-amber-500 animate-spin-slow">🌟</span>
              <span>El-Sayed Saeed Qotb Educational Suite</span>
            </span>
          </div>
          <span className={`hidden sm:inline ${t.textDim}`}>|</span>
          <p>© 2026 Core Portfolio System. Optimized for browser offline operations.</p>
        </div>
        <div className={`pt-4 border-t ${t.footerDivider} flex flex-col items-center justify-center gap-3`}>
          <div className={`flex items-center gap-2 ${t.footerAuthorBg} px-4 py-2 rounded-2-xl border ${t.footerAuthorBorder}`}>
            <span className={`text-[11px] ${t.textMuted} uppercase font-mono`}>Designed & Engineered by</span>
            <span className="font-black tracking-wider text-cyan-400 flex items-center gap-1.5">
              <span>ICON Code</span>
              <motion.span
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="inline-block text-cyan-300"
              >⚡</motion.span>
            </span>
          </div>
          <p className={`text-[10px] ${t.textDim} leading-tight`}>
            Developed by Eng. Youssef Mohamed & Eng. Omar Mohamed.<br />
            Shibin El Qanater, Qalyubia, Egypt
          </p>
        </div>
      </footer>

    </div>
  );
}
