import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import cert1 from "./assets/1st National.jpg";
import cert2 from "./assets/1 PBB.png";
import cert3 from "./assets/Umum.png";
import cert4 from "./assets/Workshop.jpg";
import fotoProfil from "./assets/FOTO PORTOOO.jpg";
import project1 from "./assets/project reuse.jpg";
import project2 from "./assets/project hotel.jpg";
import project3 from "./assets/project romantic.jpg";
import project4 from "./assets/project sekolah.png";
import project5 from "./assets/project link.jpg";
import project6 from "./assets/project clafa.png";
import design1 from "./assets/design poster.jpg";
import design2 from "./assets/design typography.jpg";
import design3 from "./assets/design sekolah.png";
import design4 from "./assets/design story 1.jpg";
import design5 from "./assets/design story 2.jpg";
import design6 from "./assets/design logo.png";
import cv from "./assets/CV_M. Fatih Syam_Resume.pdf";
import capcut from "./assets/capcut-logo.png";
import lightroom from "./assets/adobe-lr.png";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isDark, setIsDark] = useState(true);

  // Apply theme to <html>
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 250;
        const height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setSelectedCertificate(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navItems = ["home", "about", "skills", "projects", "certificates", "contact"];

  const experiences = [
    { title: "Informatics Engineering Student", company: "University of Lampung", year: "2025 - Now", desc: "Learning software engineering, FullStack development, and system design." },
    { title: "FullStack Developer", company: "Freelance / Personal Project", year: "2024 - Now", desc: "Build responsive web apps using React, Tailwind CSS, and modern UI animation." },
    { title: "UI & Visual Designer", company: "Freelance", year: "2023 - Now", desc: "Designing modern UI for web & mobile apps using Figma, Canva, and design tools." },
    { title: "Content Creator & Visual Editor", company: "Personal & Social Media", year: "2020 - Now", desc: "Creating visual content, posters, and social media designs." },
    { title: "Member of Novo Club Batch 4", company: "Paragon Corp", year: "2026 - Now", desc: "Participating in club activities and events." },
  ];

  const skillGroups = [
    {
      label: "Frontend",
      color: "text-cyan-500",
      glowColor: "rgba(34,211,238,0.55)",
      hoverBorder: "rgba(34,211,238,0.8)",
      hoverText: "group-hover:text-cyan-500",
      skills: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
      ],
    },
    {
      label: "Backend & DevOps",
      color: "text-purple-500",
      glowColor: "rgba(192,132,252,0.55)",
      hoverBorder: "rgba(192,132,252,0.8)",
      hoverText: "group-hover:text-purple-500",
      skills: [
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
        { name: "GitHub", icon: "https://cdn.simpleicons.org/github/000000" },
      ],
    },
    {
      label: "Design Tools",
      color: "text-pink-500",
      glowColor: "rgba(244,114,182,0.55)",
      hoverBorder: "rgba(244,114,182,0.8)",
      hoverText: "group-hover:text-pink-500",
      skills: [
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
        { name: "CorelDRAW", icon: "https://cdn.simpleicons.org/coreldraw/77BC1F" },
        { name: "Picsart", icon: "https://cdn.simpleicons.org/picsart/FF4F5A" },
      ],
    },
    {
      label: "Video & Editing",
      color: "text-yellow-500",
      glowColor: "rgba(250,204,21,0.55)",
      hoverBorder: "rgba(250,204,21,0.8)",
      hoverText: "group-hover:text-yellow-500",
      skills: [
        { name: "CapCut", icon: capcut },
        { name: "FilmoraGo", icon: "https://cdn.simpleicons.org/wondershare/1290EF" },
        { name: "Adobe Lightroom", icon: lightroom },
      ],
    },
  ];

  const allSkills = skillGroups.flatMap((g) => g.skills);

  const webProjects = [
    {
      title: "E-Commerce Website (ReUse) 🛒",
      desc: "Modern shopping website with responsive UI.",
      detail: "Built using React, Vite, TypeScript, and Tailwind CSS with modern responsive design and interactive shopping experience. This website is a campus project built based on SDLC methodology. Features product listing, cart, and checkout flow.",
      image: project1,
      gradient: "from-cyan-500/30 to-blue-500/30",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel", "GitHub"],
      demo: "https://reuse-project.vercel.app",
    },
    {
      title: "Hotel Reservation System 🏨",
      desc: "Hotel booking system with admin dashboard & REST API.",
      detail: "Full-stack hotel reservation system with booking management, admin dashboard, and backend REST API. Built with Next.js, Supabase as the database and auth provider, and Prisma ORM for data modeling. Supports online reservations and room availability tracking.",
      image: project2,
      gradient: "from-purple-500/30 to-pink-500/30",
      tech: ["Next.js", "Supabase", "Prisma", "TypeScript", "Vercel", "GitHub"],
    },
    {
      title: "Interactive Romantic Website 💝",
      desc: "Animated romantic web experience with games.",
      detail: "Interactive romantic website to attract the attention of someone you love, filled with romantic animations, interactive games, and music to create a memorable experience.",
      image: project3,
      gradient: "from-pink-500/30 to-rose-500/30",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "GitHub"],
    },
    {
      title: "School Website for Mts Nurul Falah 🏫",
      desc: "School website with responsive design, showcasing school info, news, and contact features.",
      detail: "Full-stack informative school website with Next.js and Supabase backend. Features include student and teacher data management, online registration, announcements, news, and an admin dashboard. Deployed on Vercel.",
      image: project4,
      gradient: "from-green-500/30 to-teal-500/30",
      tech: ["Next.js", "Supabase", "TypeScript", "Vercel", "Prisma", "GitHub"],
    },
    {
      title: "Vorblink — Link in Bio App 🌐",
      desc: "Showcase all your links in one place and share with everyone.",
      detail: "Vorblink is a full-stack link-in-bio platform built with Next.js and Supabase. Users can register, add custom links, and share their personal page. Features auth, real-time database, and custom slug URLs. Deployed on Vercel with GitHub CI/CD.",
      image: project5,
      gradient: "from-blue-500/30 to-cyan-500/30",
      tech: ["Next.js", "Supabase", "TypeScript", "Vercel", "GitHub"],
    },
    {
      title: "Clafa AI (Personal AI Chatbot) 🤖",
      desc: "Clafa AI is a personal AI chatbot It allows users to create their own AI assistant with customizable settings and personality.",
      detail: "Clafa AI is a personal AI chatbot built with Next.js, API from Groq and Supabase. It allows users to create their own AI assistant with customizable settings and personality. The app features real-time chat, user authentication, and a dashboard for managing AI profiles. Deployed on Vercel with GitHub CI/CD.",
      image: project6,
      gradient: "from-blue-500/30 to-cyan-500/30",
      tech: ["Next.js", "Supabase", "TypeScript", "Vercel", "GitHub"],
    },
  ];

  const designProjects = [
    {
      title: "Drama Poster Design 🎨",
      desc: "Silhouette design for a drama production.",
      detail: "A dramatic silhouette poster created for a school drama production. Designed to capture emotion and story through minimalist visual storytelling.",
      image: design1,
      gradient: "from-pink-500/30 to-purple-500/30",
      tech: ["Picsart", "Adobe Lightroom", "Canva"],
    },
    {
      title: "Digital Typography Design 📱",
      desc: "Modern digital typography designs for various applications.",
      detail: "A series of modern typography-based designs crafted for digital platforms and social media. Focused on font pairing, color harmony, and visual hierarchy.",
      image: design2,
      gradient: "from-orange-500/30 to-pink-500/30",
      tech: ["Picsart", "Canva", "CorelDRAW"],
    },
    {
      title: "School Registration Design 🏫",
      desc: "Design for a school registration system.",
      detail: "Visual design assets for a school online registration system including banners, forms UI mockup, and promotional materials.",
      image: design3,
      gradient: "from-green-500/30 to-teal-500/30",
      tech: ["Canva", "Figma", "CorelDRAW"],
    },
    {
      title: "Creative Story Content Design 1 📖",
      desc: "Creative story content design for social media and digital platforms.",
      detail: "A set of creative Instagram story designs with engaging layouts, typography, and color schemes tailored for social media audiences.",
      image: design4,
      gradient: "from-violet-500/30 to-purple-500/30",
      tech: ["Picsart", "Canva", "Adobe Lightroom"],
    },
    {
      title: "Creative Story Content Design 2 📖",
      desc: "Additional creative story content design for social media and digital platforms.",
      detail: "Continuation of the story content series with new themes and visual styles. Designed to maintain brand consistency while introducing fresh creative elements.",
      image: design5,
      gradient: "from-rose-500/30 to-orange-500/30",
      tech: ["Picsart", "Canva", "Adobe Lightroom"],
    },
    {
      title: "Logo Identity Design for Class 🏪",
      desc: "Logo design for a class project.",
      detail: "A complete logo identity design for a class business project. Includes primary logo, color palette, and basic brand guidelines for consistent usage.",
      image: design6,
      gradient: "from-yellow-500/30 to-orange-500/30",
      tech: ["CorelDRAW", "Canva", "Figma"],
    },
    {
      title: "Hotel Reservation UI Design 🏨",
      desc: "UI/UX design mockup for hotel reservation system.",
      detail: "Complete UI/UX design mockup for the Hotel Reservation System project. Covers user flow, wireframes, and high-fidelity screens for booking, room selection, and admin dashboard.",
      image: project2,
      gradient: "from-purple-500/30 to-pink-500/30",
      tech: ["Figma"],
    },
    {
      title: "ReUse Marketplace UI Design 🛒",
      desc: "UI/UX design mockup for e-commerce marketplace.",
      detail: "Full UI/UX design for the ReUse e-commerce marketplace. Includes product listing pages, cart flow, checkout screens, and mobile-responsive layouts designed in Figma.",
      image: project1,
      gradient: "from-cyan-500/30 to-blue-500/30",
      tech: ["Figma"],
    },
  ];

  const coursesBootcamps = [
    { title: "Software Development Bootcamp", desc: "Learned React, Next.js, Vite, Tailwind CSS, and responsive website development.", icon: "💻" },
    { title: "Data Analyst Bootcamp", desc: "Studied data analysis and visualization techniques.", icon: "📊" },
    { title: "JavaScript Fundamental", desc: "Completed JavaScript basic to intermediate programming course.", icon: "📚" },
  ];

  const certificates = [
    { title: "Juara 1 Nasional LKTI", issuer: "Universitas Muhammadiyah Metro", year: "2023", image: cert1 },
    { title: "Juara 1 Putra Lomba PBB Paskibra", issuer: "Dewan Alumni Paskibra Lampung", year: "2023", image: cert2 },
    { title: "Juara umum lomba PBB Paskibra", issuer: "Dewan Alumni Paskibra Lampung", year: "2023", image: cert3 },
    { title: "Workshop Participant: Coding, Design, and Communication", issuer: "Hima Elektro Unila", year: "2025", image: cert4 },
  ];

  const floatDurations = [3.2, 4.1, 3.7, 5.0, 4.4, 3.9, 4.7, 3.3, 4.9, 3.6, 4.2, 3.5, 4.6, 3.8, 5.1, 4.3, 3.4];
  const floatDelays   = [0, 0.5, 1.0, 1.5, 0.3, 0.8, 1.3, 0.2, 0.7, 1.1, 0.4, 0.6, 1.2, 0.9, 0.1, 1.4, 0.35];
  const topOffsets    = [35, 70, 90, 50, 75, 35, 70, 90, 50, 75, 60, 40, 80, 55, 65, 45, 85];

  // Theme
  const bg        = isDark ? "bg-[#020617]"        : "bg-slate-100";
  const text       = isDark ? "text-white"           : "text-slate-900";
  const textMuted  = isDark ? "text-gray-300"        : "text-slate-600";
  const textSubtle = isDark ? "text-gray-400"        : "text-slate-500";
  const card       = isDark
    ? "bg-white/10 border-white/20"
    : "bg-white border-slate-200 shadow-sm";
  const cardHover  = isDark ? "hover:bg-white/15"   : "hover:bg-slate-50";
  const navBg      = isDark ? "bg-white/10 border-white/20" : "bg-white/80 border-slate-200";
  const modalBg    = isDark ? "bg-[#0f172a]"         : "bg-white";
  const floatBg    = isDark ? "bg-white/5 border-white/10" : "bg-slate-200/60 border-slate-300/40";
  const accent     = "text-cyan-500";

  return (
    <div className={`min-h-screen ${bg} ${text} overflow-x-hidden relative transition-colors duration-300`}>

      {/* SEO hidden */}
      <section className="sr-only">
        <h1>M. Fatih Syam</h1>
        <h2>Summary</h2><p>FullStack Developer specializing in React, Next.js, Vite, TypeScript, Tailwind CSS, and UI Design.</p>
        <h2>Skills</h2><p>React, Next.js, Vite, TypeScript, JavaScript, Tailwind CSS, HTML, CSS, Figma</p>
        <h2>Experience</h2><p>Freelance FullStack Developer and UI Designer</p>
        <h2>Projects</h2><p>E-commerce platform, Hotel booking system, Interactive portfolio website, School System, Vorblink, Interactive Romantic Website</p>
      </section>

      {/* Cursor glow */}
      {isDark && (
        <div
          className="hidden md:block fixed w-40 h-40 rounded-full pointer-events-none blur-3xl opacity-20 bg-cyan-400 z-0"
          style={{ left: position.x - 80, top: position.y - 80, transition: "left 0.05s, top 0.05s" }}
        />
      )}

      {/* BG Blobs */}
      <div className={`absolute top-0 left-0 w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl animate-pulse ${isDark ? "bg-cyan-500 opacity-10 md:opacity-20" : "bg-cyan-300 opacity-20"}`} />
      <div className={`absolute bottom-0 right-0 w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl animate-pulse ${isDark ? "bg-purple-500 opacity-10 md:opacity-20" : "bg-purple-300 opacity-20"}`} />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 rounded-full blur-3xl animate-pulse ${isDark ? "bg-green-500 opacity-10 md:opacity-20" : "bg-teal-300 opacity-15"}`} />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-3 md:py-5">
        <div className={`max-w-6xl mx-auto ${navBg} border backdrop-blur-lg rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between shadow-xl transition-colors duration-300`}>
          <h1 className="text-lg md:text-2xl font-bold">M. Fatih Syam</h1>

          <ul className="hidden md:flex gap-6 lg:gap-8">
            {navItems.map((id) => (
              <a key={id} href={`#${id}`}>
                <li className={`transition cursor-pointer capitalize text-sm lg:text-base ${
                  activeSection === id
                    ? "text-cyan-500 drop-shadow-[0_0_8px_cyan]"
                    : `${textMuted} hover:text-cyan-500`
                }`}>
                  {id}
                </li>
              </a>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Dark/Light toggle */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              whileTap={{ scale: 0.88 }}
              whileHover={{ scale: 1.08 }}
              className={`p-2 rounded-xl border transition-colors duration-300 ${
                isDark
                  ? "border-white/20 text-yellow-300 hover:bg-white/10"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button
              className="md:hidden p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden mt-2 ${navBg} border backdrop-blur-lg rounded-2xl p-5 shadow-xl transition-colors duration-300`}
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((id) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  <li className={`transition cursor-pointer capitalize text-base ${
                    activeSection === id ? "text-cyan-500 font-semibold" : `${textMuted} hover:text-cyan-500`
                  }`}>
                    {id}
                  </li>
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="flex items-center justify-center min-h-[90dvh] md:min-h-screen relative z-10 px-4 md:px-6 pt-24 md:pt-28 pb-4 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${card} border backdrop-blur-lg rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl text-center max-w-3xl w-full transition-colors duration-300`}
        >
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <div className="w-2 h-10 md:h-16 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
              <div className="w-6 h-3 bg-cyan-400 rounded-sm shadow-[0_0_6px_cyan] mb-0.5" />
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`relative ${isDark ? "bg-[#0f172a]" : "bg-slate-50"} border-2 border-cyan-400/60 rounded-2xl p-3 md:p-4 shadow-[0_0_20px_rgba(0,255,255,0.2)] w-28 md:w-36 transition-colors duration-300`}
              >
                <div className="w-full h-24 md:h-32 rounded-xl overflow-hidden mb-2 border border-white/10">
                  <img src={fotoProfil} alt="M. Fatih Syam" className="w-full h-full object-cover" />
                </div>
                <p className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-widest text-center">M. FATIH SYAM</p>
                <p className={`${textSubtle} text-[10px] md:text-xs text-center`}>FullStack Dev</p>
                <div className="absolute top-2 right-2 w-2 md:w-2.5 h-2 md:h-2.5 bg-green-400 rounded-full shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
              </motion.div>
            </div>
          </div>
          <p className="text-cyan-500 mb-3 md:mb-4 text-base md:text-lg">Welcome to my portfolio</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span>Hi, I'm</span><br />
            <span className="text-cyan-500">
              <TypeAnimation
                sequence={["Fatih 👋", 2000, "FullStack Developer 🚀", 2000, "UI Designer 🎨", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className={`${textMuted} text-base md:text-xl mb-6 md:mb-8 px-2`}>
            FullStack Developer & UI Designer creating modern and aesthetic web experiences.
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <a href="#projects">
              <button className="bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_25px_cyan] px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold transition duration-300 text-sm md:text-base text-white">
                View Projects
              </button>
            </a>
            <a href="#contact">
              <button className={`border ${isDark ? "border-white/20 hover:bg-white/10 hover:border-cyan-400" : "border-slate-300 hover:bg-slate-100 hover:border-cyan-400"} px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold transition text-sm md:text-base`}>
                Contact Me
              </button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 px-4 md:px-6 pb-16 md:pb-24 pt-0 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1 }}
          className={`max-w-5xl mx-auto ${card} border backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transition-colors duration-300`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-5 md:mb-6">About Me</h2>
          <p className={`${textMuted} text-base md:text-lg leading-relaxed`}>
            Hi, I'm <span className="text-cyan-500 font-semibold">M. Fatih Syam</span>, an Informatics Engineering student focused on FullStack Development, UI Design, and Visual Editing.
            <br /><br />
            I have 3 years of experience in visual design and social media content editing, along with 2 years of programming experience building interactive and modern web applications.
            <br /><br />
            I enjoy creating aesthetic, functional, and user-friendly digital experiences using modern technologies like{" "}
            <span className="text-cyan-500">React</span>, <span className="text-cyan-500">Next.js</span>, <span className="text-cyan-500">Vite</span>, and <span className="text-cyan-500">Tailwind CSS</span>.
            <br /><br />
            I'm also experienced in using various design and editing tools such as{" "}
            <span className="text-cyan-500">Figma</span>, <span className="text-cyan-500">Canva</span>, <span className="text-cyan-500">CorelDRAW</span>,{" "}
            <span className="text-cyan-500">Picsart</span>, <span className="text-cyan-500">CapCut</span>, <span className="text-cyan-500">FilmoraGo</span>, and{" "}
            <span className="text-cyan-500">Adobe Lightroom</span> to create modern visual content and interactive designs.
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 px-4 md:px-6 pb-16 md:pb-24 pt-4 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34,211,238,0.4)", borderColor: "rgba(34,211,238,0.8)", transition: { duration: 0.2 } }}
                className={`${card} border backdrop-blur-lg rounded-2xl p-5 shadow-xl flex flex-col gap-2 text-center transition-colors duration-300`}
              >
                <h3 className="text-base md:text-lg font-bold">{experience.title}</h3>
                <p className="text-cyan-500 text-xs md:text-sm">{experience.company} · {experience.year}</p>
                <p className={`${textMuted} text-xs md:text-sm`}>{experience.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 px-4 md:px-6 pb-16 md:pb-24 pt-4 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center">Skills</h2>

          {skillGroups.map((group, gi) => (
            <div key={gi} className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-1.5 h-6 rounded-full ${group.color.replace("text-", "bg-")}`} />
                <h3 className={`text-lg md:text-xl font-bold ${group.color}`}>{group.label}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
                    whileHover={{
                      scale: 1.06,
                      boxShadow: `0 0 25px ${group.glowColor}`,
                      borderColor: group.hoverBorder,
                      transition: { duration: 0.15 },
                    }}
                    className={`group ${card} ${cardHover} border backdrop-blur-lg rounded-2xl p-4 md:p-5 text-center transition-colors duration-300 shadow-xl flex flex-col items-center gap-3 cursor-default`}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <img src={skill.icon} alt={skill.name} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
                    </div>
                    <span className={`text-sm md:text-base font-medium transition duration-300 ${group.hoverText}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Floating Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 relative"
          >
            <p className={`text-center ${textSubtle} text-xs tracking-widest uppercase mb-6`}>All Tools</p>
            <div className={`relative ${floatBg} border backdrop-blur-lg rounded-3xl overflow-hidden shadow-inner`} style={{ height: "180px" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-20 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
              {allSkills.map((skill, index) => {
                const leftPercent = (index / (allSkills.length - 1)) * 88 + 4;
                const topPx = topOffsets[index % topOffsets.length];
                return (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: floatDurations[index % floatDurations.length], delay: floatDelays[index % floatDelays.length], repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.3, zIndex: 10, transition: { duration: 0.15 } }}
                    className="absolute cursor-pointer group/float"
                    style={{ left: `${leftPercent}%`, top: `${topPx}px`, transform: "translateX(-50%)" }}
                    title={skill.name}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-cyan-500 font-semibold opacity-0 group-hover/float:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
                      {skill.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 px-4 md:px-6 pt-6 md:pt-16 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-14 text-center">Projects</h2>

          {/* Web Projects */}
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-2 h-7 md:h-8 bg-cyan-500 rounded-full" />
              <h3 className="text-xl md:text-3xl font-bold text-cyan-500">Web Projects</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {webProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(34,211,238,0.8)", boxShadow: "0 0 25px rgba(34,211,238,0.35)", transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className={`${card} border backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300 cursor-pointer`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-36 sm:h-44 md:h-48 object-cover" />
                  ) : (
                    <div className={`w-full h-36 sm:h-44 md:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-4xl">{project.icon}</span>
                    </div>
                  )}
                  <div className="p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 leading-snug">{project.title}</h3>
                    <p className={`${textMuted} text-xs md:text-sm mb-3 line-clamp-2`}>{project.desc}</p>
                    {project.tech && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((t, i) => (
                          <span key={i} className={`text-[10px] md:text-xs ${isDark ? "bg-white/10 border-white/20" : "bg-cyan-50 border-cyan-200"} border text-cyan-600 px-2 py-0.5 rounded-full`}>{t}</span>
                        ))}
                      </div>
                    )}
                    <span className="text-[11px] md:text-xs text-cyan-500 border border-cyan-500/30 px-2 py-1 rounded-full">View Details →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Design Projects */}
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-2 h-7 md:h-8 bg-pink-500 rounded-full" />
              <h3 className="text-xl md:text-3xl font-bold text-pink-500">Design Projects</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {designProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, borderColor: "rgba(244,114,182,0.8)", boxShadow: "0 0 25px rgba(244,114,182,0.35)", transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className={`${card} border backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300 cursor-pointer`}
                >
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-36 sm:h-44 md:h-48 object-cover" />
                  ) : (
                    <div className={`w-full h-36 sm:h-44 md:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <span className="text-4xl">{project.icon}</span>
                    </div>
                  )}
                  <div className="p-4 md:p-5">
                    <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 leading-snug">{project.title}</h3>
                    <p className={`${textMuted} text-xs md:text-sm mb-3 line-clamp-2`}>{project.desc}</p>
                    {project.tech && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((t, i) => (
                          <span key={i} className={`text-[10px] md:text-xs ${isDark ? "bg-white/10 border-white/20" : "bg-pink-50 border-pink-200"} border text-pink-600 px-2 py-0.5 rounded-full`}>{t}</span>
                        ))}
                      </div>
                    )}
                    <span className="text-[11px] md:text-xs text-pink-500 border border-pink-500/30 px-2 py-1 rounded-full">View Design →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* COURSES & BOOTCAMPS */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-2 h-7 md:h-8 bg-yellow-500 rounded-full" />
            <h3 className="text-xl md:text-3xl font-bold text-yellow-500">Courses & Bootcamps</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {coursesBootcamps.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(250,204,21,0.35)", borderColor: "rgba(250,204,21,0.8)", transition: { duration: 0.2 } }}
                className={`${card} border backdrop-blur-lg rounded-2xl p-5 md:p-6 shadow-xl flex flex-col items-center text-center gap-3 transition-colors duration-300`}
              >
                <span className="text-3xl md:text-4xl">{course.icon}</span>
                <h3 className="text-base md:text-lg font-bold">{course.title}</h3>
                <p className={`${textMuted} text-sm`}>{course.desc}</p>
                <span className="text-xs text-yellow-500 border border-yellow-500/30 px-3 py-1 rounded-full mt-1">Completed ✓</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CERTIFICATES */}
      <section id="certificates" className="relative z-10 px-4 md:px-6 pb-20 md:pb-32 pt-4 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-center">Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, borderColor: "rgba(34,211,238,0.8)", boxShadow: "0 0 25px rgba(34,211,238,0.35)", transition: { duration: 0.2 } }}
                onClick={() => setSelectedCertificate(cert)}
                className={`${card} border backdrop-blur-lg rounded-3xl p-5 md:p-8 shadow-2xl transition-colors duration-300 cursor-pointer`}
              >
                <img src={cert.image} alt={cert.title} className="w-full h-36 md:h-48 object-cover rounded-2xl mb-4 md:mb-6" />
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 leading-snug">{cert.title}</h3>
                <p className="text-cyan-500 text-sm mb-1">{cert.issuer}</p>
                <p className={`${textSubtle} text-sm`}>{cert.year}</p>
                <button className="mt-4 md:mt-6 bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_25px_cyan] px-5 py-2 rounded-xl font-semibold transition text-sm text-white">
                  Preview
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 px-4 md:px-6 pb-16 md:pb-24 pt-4 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 1 }}
          className={`max-w-4xl mx-auto ${card} border backdrop-blur-lg rounded-3xl p-7 md:p-10 shadow-2xl text-center transition-colors duration-300`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contact Me</h2>
          <p className={`${textMuted} mb-6 md:mb-8 text-base md:text-lg`}>I'm open for freelance, internships, and collaboration. 🚀</p>
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            <a href="mailto:fatihsyam1014@gmail.com">
              <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_25px_cyan] px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold transition text-sm md:text-base text-white">
                <img src="https://cdn.simpleicons.org/gmail/EA4335" className="w-4 h-4 md:w-5 md:h-5" alt="Gmail" /> Hire Me
              </button>
            </a>
            <a href="https://www.linkedin.com/in/m-fatih-syam" target="_blank" rel="noopener noreferrer">
              <button className={`flex items-center gap-2 border ${isDark ? "border-white/20 hover:border-cyan-400 hover:bg-white/10" : "border-slate-300 hover:border-cyan-400 hover:bg-slate-100"} px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base`}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-4 h-4 md:w-5 md:h-5" alt="LinkedIn" /> LinkedIn
              </button>
            </a>
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <button className={`flex items-center gap-2 border ${isDark ? "border-white/20 hover:border-cyan-400 hover:bg-white/10" : "border-slate-300 hover:border-cyan-400 hover:bg-slate-100"} px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base`}>
                <img src="https://api.iconify.design/vscode-icons:file-type-pdf2.svg" className="w-4 h-4 md:w-5 md:h-5" alt="CV" /> CV
              </button>
            </a>
            <a href="https://github.com/Syamm1410" target="_blank" rel="noopener noreferrer">
              <button className={`flex items-center gap-2 border ${isDark ? "border-white/20 hover:border-cyan-400 hover:bg-white/10" : "border-slate-300 hover:border-cyan-400 hover:bg-slate-100"} px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base`}>
                <img src={isDark ? "https://cdn.simpleicons.org/github/ffffff" : "https://cdn.simpleicons.org/github/000000"} className="w-4 h-4 md:w-5 md:h-5" alt="GitHub" /> GitHub
              </button>
            </a>
            <a href="https://instagram.com/syms.fatih_" target="_blank" rel="noopener noreferrer">
              <button className={`flex items-center gap-2 border ${isDark ? "border-white/20 hover:border-cyan-400 hover:bg-white/10" : "border-slate-300 hover:border-cyan-400 hover:bg-slate-100"} px-4 md:px-6 py-2.5 md:py-3 rounded-xl transition text-sm md:text-base`}>
                <img src="https://cdn.simpleicons.org/instagram/E4405F" className="w-4 h-4 md:w-5 md:h-5" alt="Instagram" /> Instagram
              </button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className={`${modalBg} border ${isDark ? "border-white/20" : "border-slate-200"} rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl relative max-h-[90vh] overflow-y-auto transition-colors duration-300`}
          >
            {selectedProject.image && (
              <div className="w-full h-44 md:h-52 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-5 md:p-8">
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-3 right-3 ${isDark ? "text-gray-400 bg-black/50" : "text-slate-500 bg-slate-100"} hover:text-white text-xl rounded-full w-8 h-8 flex items-center justify-center`}
              >
                ✕
              </button>
              <h2 className="text-xl md:text-2xl font-bold mb-3 pr-8">{selectedProject.title}</h2>
              <p className={`${textMuted} leading-relaxed mb-4 text-sm md:text-base`}>{selectedProject.detail || selectedProject.desc}</p>
              {selectedProject.tech && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className={`text-xs ${isDark ? "bg-white/10 border-white/20" : "bg-slate-100 border-slate-200"} border text-cyan-600 px-3 py-1 rounded-full`}>{t}</span>
                  ))}
                </div>
              )}
              <div className="flex gap-3 flex-wrap pt-1">
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_20px_cyan] px-4 py-2 rounded-xl text-sm font-semibold transition text-white">
                      🌐 Live Demo
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CERTIFICATE MODAL */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className={`${modalBg} border ${isDark ? "border-white/20" : "border-slate-200"} rounded-3xl p-5 md:p-8 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto transition-colors duration-300`}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className={`absolute top-3 right-3 text-2xl ${isDark ? "text-gray-400" : "text-slate-500"} hover:text-cyan-500`}
            >
              ✕
            </button>
            <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full rounded-2xl mb-5 md:mb-6" />
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 pr-6">{selectedCertificate.title}</h2>
            <p className="text-cyan-500 mb-1 text-sm md:text-base">{selectedCertificate.issuer}</p>
            <p className={`${textSubtle} text-sm md:text-base`}>{selectedCertificate.year}</p>
          </motion.div>
        </div>
      )}

      {/* FOOTER */}
      <footer className={`relative z-10 py-8 text-center ${textSubtle} text-sm`}>
        <p>© 2026 M. Fatih Syam. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;