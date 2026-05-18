import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import cert1 from "./assets/1st National.jpg";
import cert2 from "./assets/1 PBB.png";
import cert3 from "./assets/Umum.png";
import cert4 from "./assets/Workshop.jpg";  
import fotoProfil from "./assets/FOTO PORTOOO.jpg";
import project1 from "./assets/project reuse.jpg";
import project2 from "./assets/project hotel.jpg";
import project3 from "./assets/project romantic.jpg";

function App() {
  const [position, setPosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {

  const moveCursor = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };

}, []);

  useEffect(() => {

  const sections = document.querySelectorAll("section");

  const handleScroll = () => {

    sections.forEach((section) => {

      const top = window.scrollY;
      const offset = section.offsetTop - 200;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        setActiveSection(id);
      }

    });

  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const skills = [
   {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "CorelDRAW",
    icon: "https://cdn.simpleicons.org/coreldraw/77BC1F",
  },
  {
    name: "Picsart",
    icon: "https://cdn.simpleicons.org/picsart/FF4F5A",
  },
  {
    name: "CapCut",
    icon: "https://shorturl.at/6N4KL",
  },
  {
    name: "FilmoraGo",
    icon: "https://cdn.simpleicons.org/wondershare/1290EF",
  },

  ];

 const projects = [
  {
    title: "E-Commerce Website (ReUse) 🛒",
    desc: "Modern shopping website with responsive UI.",
    detail:
      "Built using React and Tailwind CSS with modern responsive design and interactive shopping experience. " +
      "This website is a campus project that needs to be created based on SDLC in software.",
    image: project1,
    gradient: "from-cyan-500/30 to-blue-500/30",
  },

  {
    title: "Hotel Reservation System 🏨",
    desc: "Hotel booking system with admin dashboard.",
    detail:
      "Complete hotel reservation system with booking management and admin features. " +
      "This website is a campus project and is still in the design stage. It can accept hotel reservations online.",
    image: project2,
    gradient: "from-purple-500/30 to-pink-500/30",
  },

  {
    title: "Interactive Romantic Website 💝",
    desc: "Animated romantic web experience with games.",
    detail:
      "Interactive romantic website to attract the attention of someone you love, " +
      "filled with romantic animations, interactive games, and music to create a memorable experience.",
    image: project3,
    gradient: "from-pink-500/30 to-rose-500/30",
  },

  {
    title: "School Website for Mts Nurul Falah Tanjung Baru ",
    desc: "School website with responsive design, showcasing school info, news, and contact features",
    detail:
      "Informative school website designed to meet the needs of the institution. It offers numerous features, " +
      "including viewing student and teacher data, online registration, announcements, news, and more.",
    image: null,
    gradient: "from-green-500/30 to-teal-500/30",
    icon: "🏫",
  },
];

  const certificates = [
  {
    title: "Juara 1 Nasional LKTI",
    issuer: "Universitas Muhammadiyah Metro",
    year: "2023",
    image: cert1,
  },

  {
    title: "Juara 1 Putra Lomba PBB Paskibra",
    issuer: "Dewan Alumni Paskibra Lampung",
    year: "2023",
    image: cert2,
  },

  {
    title: "Juara umum lomba PBB Paskibra",
    issuer: "Dewan Alumni Paskibra Lampung",
    year: "2023",
    image: cert3,
  },

  {
    title: "Workshop Patricipant: Coding, Design, and Communication",
    issuer: "Hima Elektro Unila",
    year: "2025",
    image: cert4,
  },
];

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">
      {/* Custom Cursor Glow */}
  <div
    className="
      fixed
      w-40
      h-40
      rounded-full
      pointer-events-none
      blur-3xl
      opacity-20
     bg-cyan-400
      z-0
      transition-transform
      duration-75
    "
  style={{
    left: position.x - 80,
    top: position.y - 80,
  }}
></div>



      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5">

        <div
          className="
            max-w-6xl mx-auto
            bg-white/10
            border border-white/20
            backdrop-blur-lg
            rounded-2xl
            px-6 py-4
            flex items-center justify-between
            shadow-xl
          "
        >

          <h1 className="text-2xl font-bold">
            M. Fatih Syam
          </h1>

          {/* Desktop Menu */}
<ul className="hidden md:flex gap-8 text-gray-300">

 <a href="#home">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      Home
    </li>
  </a>

  <a href="#about">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      About
    </li>
  </a>

  <a href="#skills">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      Skills
    </li>
  </a>

  <a href="#projects">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      Projects
    </li>
  </a>

  <a href="#certificates">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      Certificates
    </li>
  </a>

  <a href="#contact">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      Contact
    </li>
  </a>

</ul>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div
            className="
              md:hidden
              mt-4
              bg-white/10
              border border-white/20
              backdrop-blur-lg
              rounded-2xl
              p-6
              shadow-xl
            "
          >

            <ul className="flex flex-col gap-6 text-gray-300">

               <a href="#home">
    <li className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_cyan] transition cursor-pointer">
      Home
    </li>
  </a>

  <a href="#about">
    <li className="hover:text-cyan-400 transition cursor-pointer">
      About
    </li>
  </a>

  <a href="#skills">
    <li className="hover:text-cyan-400 transition cursor-pointer">
      Skills
    </li>
  </a>

  <a href="#projects">
    <li className="hover:text-cyan-400 transition cursor-pointer">
      Projects
    </li>
  </a>

  <a href="#certificates">
    <li className="hover:text-cyan-400 transition cursor-pointer">
      Certificates
    </li>
  </a>

  <a href="#contact">
    <li className="hover:text-cyan-400 transition cursor-pointer">
      Contact
    </li>
  </a>

            </ul>

          </div>

        )}

      </nav>

      {/* Hero */}
<section id="home" className="flex items-center justify-center min-h-screen relative z-10 px-5">
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-12 shadow-2xl text-center max-w-3xl hover:shadow-cyan-500/20 transition duration-500"
  >

    {/* Lanyard */}
    <div className="flex justify-center mb-6">
      <div className="flex flex-col items-center">

        {/* Tali lanyard */}
        <div className="w-2 h-16 bg-linear-to-b from-cyan-400 to-cyan-600 rounded-full shadow-[0_0_8px_rgba(0,255,255,0.6)]" />

        {/* Klip */}
        <div className="w-6 h-3 bg-cyan-400 rounded-sm shadow-[0_0_6px_cyan] mb-0.5" />

        {/* Card ID */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative bg-[#0f172a] border-2 border-cyan-400/60 rounded-2xl p-4 shadow-[0_0_20px_rgba(0,255,255,0.2)] w-36"
        >
          {/* Foto */}
          <div className="w-full h-32 rounded-xl overflow-hidden mb-2 border border-white/10">
            <img
              src={fotoProfil}
              alt="M. Fatih Syam"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info ID Card */}
          <p className="text-cyan-400 text-xs font-bold tracking-widest text-center">M. FATIH SYAM</p>
          <p className="text-gray-400 text-[12px] text-center">Frontend Dev</p>

          {/* dot online */}
          <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
        </motion.div>

      </div>
    </div>

    <p className="text-cyan-400 mb-4 text-lg">Welcome to my portofolio</p>

    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      <span className="text-white">Hi, I'm</span>
      <br />
      <span className="text-cyan-400">
        <TypeAnimation
          sequence={["Fatih 👋", 2000, "Frontend Developer 🚀", 2000, "UI Designer 🎨", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </span>
    </h1>

    <p className="text-gray-300 text-xl mb-8">
      Frontend Developer & UI Designer creating modern and aesthetic web experiences.
    </p>

    <div className="flex gap-4 justify-center flex-wrap">
      <a href="#projects">
        <button className="bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_25px_cyan] px-6 py-3 rounded-xl font-semibold transition duration-300">
          View Projects
        </button>
      </a>
      <a href="#contact">
        <button className="border border-white/20 hover:bg-white/10 hover:border-cyan-400 px-6 py-3 rounded-xl font-semibold transition">
          Contact Me
        </button>
      </a>
    </div>

  </motion.div>
</section>

{/* About */}
<section
  id="about"
  className="relative z-10 px-6 pb-24"
>

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}

    className="
      max-w-5xl mx-auto
      bg-white/10
      border border-white/20
      backdrop-blur-lg
      rounded-3xl
      p-10
      shadow-2xl
    "
  >

    <h2 className="text-4xl font-bold mb-6">
      About Me
    </h2>

<p 
  className="text-gray-300 text-lg leading-relaxed hover:text-white hover:drop-shadow-[0_0_4px_white] transition duration-300"
>

  Hi, I'm <span className="text-cyan-300 font-semibold hover:drop-shadow-[0_0_10px_cyan] transition duration-300">
    M. Fatih Syam
  </span>,
  an Informatics Engineering student focused on
  Frontend Development, UI Design, and Visual Editing.

  <br /><br />

  I have 3 years of experience in visual design and
  social media content editing, along with 2 years
  of programming experience building interactive and
  modern web applications.

  <br /><br />

  I enjoy creating aesthetic, functional, and
  user-friendly digital experiences using modern
  technologies like <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300">React</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> JavaScript</span>, and 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> Tailwind CSS</span>.

  <br /><br />

  I'm also experienced in using various design and
  editing tools such as <span className="hover:text-cyan-400 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> Figma</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> Canva</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> CorelDRAW</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> Picsart</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> CapCut</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> VN</span>, 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> FilmoraGo</span>, and 
  <span className="hover:text-cyan-300 hover:drop-shadow-[0_0_7px_cyan] transition duration-300"> Microsoft Office</span>
  to create modern visual content and interactive designs.

</p>

  </motion.div>

</section>

{/* Skills */}
<section id="skills" className="relative z-10 px-6 pb-24">

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto"
  >

    <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="
            group
            bg-white/10
            border border-white/20
            backdrop-blur-lg
            rounded-2xl
            p-6
            text-center
            font-semibold
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-[0_0_25px_cyan]
            hover:bg-white/15
            transition
            duration-300
            shadow-xl
            flex flex-col items-center gap-4
            cursor-default
          "
        >
          <div
            className="
              w-16 h-16
              rounded-full
              flex items-center justify-center
              group-hover:scale-110
              group-hover:shadow-[0_0_18px_rgba(0,255,255,0.5)]
              transition
              duration-300
            "
            style={{ backgroundColor: skill.bg }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-9 h-9 object-contain"
            />
          </div>

          <span className="text-lg group-hover:text-cyan-400 transition duration-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>

{/* Floating Logos Area */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="mt-16 relative"
>
  <p className="text-center text-gray-500 text-sm mb-8 tracking-widest uppercase">
    The Tools
  </p>

  <div
    className="relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-inner"
    style={{ height: "220px" }}
  >

    {/* Inner glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

    {skills.map((skill, index) => {
      const leftPercent = (index / (skills.length - 1)) * 88 + 4;
      const topOffsets = [20, 60, 100, 40, 80, 20, 60, 100, 40, 80, 60];
      const topPx = topOffsets[index % topOffsets.length];
      const durations = [3.2, 4.1, 3.7, 5.0, 4.4, 3.9, 4.7, 3.3, 4.9, 3.6, 4.2];
      const delays = [0, 0.5, 1.0, 1.5, 0.3, 0.8, 1.3, 0.2, 0.7, 1.1, 0.4];

      return (
        <motion.div
          key={index}
          animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
          transition={{
            duration: durations[index % durations.length],
            delay: delays[index % delays.length],
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.3,
            filter: "drop-shadow(0 0 14px rgba(0,255,255,0.8))",
            zIndex: 10,
          }}
          className="absolute cursor-pointer group/float"
          style={{ left: `${leftPercent}%`, top: `${topPx}px`, transform: "translateX(-50%)" }}
          title={skill.name}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            style={{ backgroundColor: skill.bg }}
          >
            <img src={skill.icon} alt={skill.name} className="w-7 h-7 object-contain" />
          </div>

          {/* Tooltip */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-cyan-400 font-semibold opacity-0 group-hover/float:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
            {skill.name}
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.div>

  </motion.div>

</section>

{/* Projects */}
<section id="projects" className="relative z-10 px-6 pb-32">
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto"
  >
    <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          onClick={() => setSelectedProject(project)}
          className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_30px_cyan] transition duration-300 cursor-pointer"
        >
          {/* Preview Image / Placeholder */}
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className={`w-full h-48 bg-linear-to-br ${project.gradient} flex items-center justify-center`}>
              <span className="text-6xl">{project.icon}</span>
            </div>
          )}

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.desc}</p>
            <div className="flex gap-3">
              <span className="text-xs text-cyan-400 border border-cyan-400/30 px-3 py-1 rounded-full">
                View Details →
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


{/* Certificates */}
<section id="certificates" className="relative z-10 px-6 pb-32">

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto"
  >

    <h2 className="text-4xl font-bold mb-10 text-center">
      Certificates
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          onClick={() => setSelectedCertificate(cert)}
          className="
            bg-white/10
            border border-white/20
            backdrop-blur-lg
            rounded-3xl
            p-8
            shadow-2xl
            hover:scale-105
            hover:border-cyan-400
            hover:shadow-[0_0_30px_cyan]
            transition
            duration-300
            cursor-pointer
          "
        >

          <img
            src={cert.image}
            alt={cert.title}
            className="
              w-full
              h-48
              object-cover
              rounded-2xl
              mb-6
            "
          />

          <h3 className="text-2xl font-bold mb-4">
            {cert.title}
          </h3>

          <p className="text-cyan-400 mb-2">
            {cert.issuer}
          </p>

          <p className="text-gray-400">
            {cert.year}
          </p>

          <button
            className="
              mt-6
              bg-cyan-500 hover:bg-cyan-400
              hover:shadow-[0_0_25px_cyan]
              px-5 py-2
              rounded-xl
              font-semibold
              transition
            "
          >
            Preview
          </button>

        </motion.div>

      ))}
    </div>

  </motion.div>

</section>

      {/* Contact */}
<section
  id="contact"
  className="relative z-10 px-6 pb-24"
>

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      max-w-4xl mx-auto
      bg-white/10
      border border-white/20
      backdrop-blur-lg
      rounded-3xl
      p-10
      shadow-2xl
      text-center
    "
  >

    <h2 className="text-4xl font-bold mb-6">
      Contact Me
    </h2>

    <p className="text-gray-300 mb-8 text-lg">
      Let's build something amazing together 🚀
    </p>

    <div className="flex justify-center gap-4 flex-wrap">

    <a
      href="https://instagram.com/syms.fatih_"
      target="_blank"
    >
        <button
        className="
          bg-cyan-500 hover:bg-cyan-400
          hover:shadow-[0_0_25px_cyan]
          px-6 py-3
          rounded-xl
          font-semibold
          transition
        "
      >
        Instagram
      </button>
    </a>

    <a href="mailto:fatihsyam1014@gmail.com">
      <button
  className="
    border border-white/20
    hover:border-cyan-400
    hover:bg-white/10
    px-6 py-3
    rounded-xl
    font-semibold
    transition
  "
>
  Email
</button>
</a>


      <button
        className="
          border border-white/20
          hover:border-cyan-400
          hover:bg-white/10
          px-6 py-3
          rounded-xl
          font-semibold
          transition
        "
      >
        GitHub
      </button>

    </div>

  </motion.div>

</section>

{/* Project Modal */}
{selectedProject && (

  <div
    className="
      fixed inset-0
      bg-black/50
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      px-6
    "
  >

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
        bg-[#0f172a]
        border border-white/20
        rounded-3xl
        p-10
        max-w-lg w-full
        shadow-2xl
        relative
      "
    >

      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="
          absolute top-4 right-4
          text-gray-400
          hover:text-white
          text-2xl
        "
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold mb-4">
        {selectedProject.title}
      </h2>

      <p className="text-gray-300 leading-relaxed">
        {selectedProject.detail}
      </p>

    </motion.div>

  </div>

)}

{/* Certificate Modal */}
{selectedCertificate && (

  <div
    className="
      fixed inset-0
      bg-black/50
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      px-6
    "
  >

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
        bg-[#0f172a]
        border border-white/20
        rounded-3xl
        p-8
        max-w-2xl w-full
        shadow-2xl
        relative
      "
    >

      {/* Close */}
      <button
        onClick={() => setSelectedCertificate(null)}
        className="
          absolute top-4 right-4
          text-2xl
          text-gray-400
          hover:text-white
        "
      >
        ✕
      </button>

      <img
        src={selectedCertificate.image}
        alt={selectedCertificate.title}
        className="
          w-full
          rounded-2xl
          mb-6
        "
      />

      <h2 className="text-3xl font-bold mb-4">
        {selectedCertificate.title}
      </h2>

      <p className="text-cyan-400 mb-2">
        {selectedCertificate.issuer}
      </p>

      <p className="text-gray-400 mb-6">
        {selectedCertificate.year}
      </p>

      <p className="text-gray-300 leading-relaxed">
        {selectedCertificate.detail}
      </p>

    </motion.div>

  </div>

)}

{/* Footer */}
<footer className="relative z-10 pb-10 text-center text-gray-400">

  <p>
    © 2026 Fatih Portofolio. All rights reserved.
  </p>

</footer>

    </div>
  )
}

export default App