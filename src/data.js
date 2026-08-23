import cityBackground from "./assets/图库/背景.webp";
import scalextricVideo from "./assets/图库/scalextric_1.mp4";
import strange1 from "./assets/图库/strange_1.mp4";
import strange2 from "./assets/图库/strange_2.mp4";
import koe1 from "./assets/图库/koe_1.mp4";
import koe2 from "./assets/图库/koe_2.webp";
import shouqu1 from "./assets/图库/shouqu_1.webp";
import shouqu2 from "./assets/图库/shouqu_2.webp";
import shemei1 from "./assets/图库/社媒_1.webp";
import shemei2 from "./assets/图库/社媒_2.webp";
import shemei3 from "./assets/图库/社媒_3.webp";
import liquid1 from "./assets/图库/liquid_1.webp";
import liquid2 from "./assets/图库/liquid_2.webp";
import liquid3 from "./assets/图库/liquid3.webp";
import plant1 from "./assets/图库/plant_1.webp";
import plant2 from "./assets/图库/plant_2.webp";
import plant3 from "./assets/图库/plant_3.webp";
import seat1 from "./assets/图库/seat_1.webp";
import seat2 from "./assets/图库/seat_2.webp";
import seat3 from "./assets/图库/seat_3.webp";

export const site = {
  name: "Chengyu Wang",
  firstName: "Chengyu",
  lastName: "Wang",
  role: "DESIGN ENGINEER",
  tagline: "Design Engineer building hardware×AI interactive experiences — from prototype to live audience.",
  status:
    "MEng Design Engineering, Imperial College London · Class of 2027 · Available for 6-month placement internship (Apr–Sep 2026) · UK/EU/US/CN/Remote",
  stats: [
    { value: "+55%", label: "onsite engagement lift" },
  ],
  email: "cw2124@ic.ac.uk",
  phone: "+44 7741741955",
  city: "LONDON, UK / CHINA",
  cityImage: cityBackground,
  cv: "/cv.pdf",
  socials: [
    { label: "LINKEDIN ↗", href: "#" },
    { label: "GITHUB ↗", href: "#" },
    { label: "REDNOTE ↗", href: "#" },
    { label: "BILIBILI ↗", href: "#" },
    { label: "TIKTOK ↗", href: "#" },
    { label: "X ↗", href: "#" },
  ],
};

export const about = [
  "Heya! I'm Chengyu — a Design Engineering student at Imperial who builds interactive systems where hardware meets AI. I love taking things from prototype to live audience, and I kind of do everything along the way.",
  "Embedded. Web. ML inference. Content. I've shipped installations for CeX and SAGE, cut AI latency by 35%, boosted onsite engagement by 55%, and grew a platform to 50K followers. I prototype fast, I ship end-to-end, and I actually put my work in front of real people.",
  "Class of 2027. Looking for a 6-month placement (Apr–Sep 2026) — UK/EU/US/CN/remote. Fluent in Chinese, English, and Spanish. Let's build something cool.",
];

export const experience = [
  {
    name: "ARCADE STRANGE",
    role: "TECHNICAL INTERN",
    years: "2026",
    location: "LONDON",
    summary: "Delivered 3 live exhibition installations for CeX and SAGE — AI latency −35%, onsite engagement +55%.",
    blocks: [
      {
        title: "Brainwave-Controlled Scalextric · CeX Mind Control Campaign",
        video: scalextricVideo,
        mediaPosition: "bottom",
        rows: [
          {
            label: "Situation",
            text: "CeX needed a high-impact interactive experience for a 3-day public exhibition at London Excel to drive brand engagement.",
          },
          {
            label: "Task",
            text: "Single-handedly build a racing game controlled by brainwave signals, reliable enough for thousands of public users.",
          },
          {
            label: "Action",
            text: "Architected the end-to-end pipeline: Raspberry Pi web app (Python) → serial → Arduino (C++), decoding Muse EEG focus signals into real-time PWM speed control. Implemented a safety speed-limiting layer to prevent sudden acceleration.",
          },
          {
            label: "Result",
            text: "Ran flawlessly across 3 days of heavy public use; onsite engagement lifted 55%.",
          },
        ],
      },
      {
        title: "AI Vending Machines · SAGE Exhibition",
        video: strange1,
        rows: [
          {
            label: "Action",
            text: "Tuned Tavus GenAI persona models for interactive AI vending machines; redesigned prompt structure and response flow to reduce wait time.",
          },
          {
            label: "Result",
            text: "Dialogue latency cut by 35%, creating a smoother experience at a high-traffic exhibition.",
          },
        ],
      },
      {
        title: "Real-Time 3D Hologram Installation",
        video: strange2,
        rows: [
          {
            label: "Action",
            text: "Integrated Looking Glass Bridge with Liteforms; debugged frame-dropping issues by optimizing the render pipeline and asset loading strategies.",
          },
          {
            label: "Result",
            text: "Stable real-time hologram output with zero frame drops across exhibition hours.",
          },
        ],
      },
    ],
  },
  {
    name: "DEXIN",
    role: "PROCESS ENGINEERING INTERN",
    years: "2025",
    location: "CHINA",
    summary: "Production documentation at 100% accuracy for audited processes.",
    blocks: [
      {
        title: "Process Documentation",
        rows: [
          {
            label: "Action",
            text: "Managed and standardized production documentation workflows.",
          },
          {
            label: "Result",
            text: "Achieved 100% documentation accuracy for audited processes.",
          },
        ],
      },
    ],
  },
];

export const beyondWork = [
  {
    name: "SHOUQU",
    role: "CANTON FAIR INTERPRETER",
    years: "2026",
    location: "GUANGZHOU",
    summary: "Spanish business interpretation at high-level negotiations — 3 on-site MOUs, ¥8.5M orders.",
    blocks: [
      {
        title: "Canton Fair Interpreting",
        images: [shouqu1, shouqu2],
        mediaPosition: "right",
        rows: [
          {
            label: "Action",
            text: "Provided Spanish business interpretation for Shouqu senior management, facilitating cross-language negotiations with Spanish and Argentinian clients.",
          },
          {
            label: "Result",
            text: "Secured 3 on-site MOUs representing ¥8.5M in follow-up orders.",
          },
        ],
      },
    ],
  },
  {
    name: "PERSONAL — CONTENT PLATFORM & TOOLS",
    role: "CONTENT CREATOR & SOCIAL MEDIA OPERATOR",
    years: "2024–PRESENT",
    location: "REMOTE",
    summary: "Grew an ACG content platform 0 → 50K followers as a solo creator across RedNote, Douyin, Bilibili, and TikTok.",
    blocks: [
      {
        title: "ACG Content Creator & Platform Operations",
        polaroids: [shemei1, shemei2, shemei3],
        rows: [
          {
            label: "Context",
            text: "Ran an ACG content platform as a solo creator — researching trends, scripting, producing, and shipping videos across Chinese social platforms.",
          },
          {
            label: "Action",
            text: "Grew 0 → 50K followers across RedNote, Douyin, Bilibili, and TikTok by analyzing trends; built in-house tools like KoePuppet to accelerate content production.",
          },
          {
            label: "Result",
            text: "3M+ aggregate likes; proven ability to build, ship, and measure audience response.",
          },
        ],
      },
    ],
  },
];

export const projects = [
  {
    emoji: "🎤",
    title: "KoePuppet",
    subtitle: "Auto Lip-Sync Singing Generator",
    client: "PERSONAL",
    year: "2026",
    video: koe1,
    images: [koe2],
    context: "Surge in lip-sync meme demand with no accessible tooling — shipped a browser-only virtual singer app to fill the gap.",
    role: "Independent build — frontend, ML inference and render/export across the whole pipeline.",
    tech: "React 19 + TypeScript + Vite · SOFA alignment model on onnxruntime-web (WASM) with Viterbi decoding + G2P phoneme conversion (pinyin-pro + CN/JP/EN dictionaries) · Demucs vocal separation · WebCodecs (H.264/AAC) + mp4-muxer deterministic offline rendering · Cache API chunked loading of 400MB+ models with progress + resume",
    result: "Auto-aligns character art to lyrics and beat from NetEase/QQ Music links or local MP3+LRC, exporting H.264 video with no backend; a single launch post drove +5K followers and 1M+ cumulative plays.",
    links: [
      { icon: "github", label: "GITHUB", href: "https://github.com/ChengYuuuuuu/KoePuppet" },
      { icon: "globe", label: "LIVE", href: "https://koepuppet.cc.cd/" },
    ],
    link: "#",
  },
  {
    emoji: "🧠",
    title: "Brainwave-Driven Scalextric",
    subtitle: "CeX Mind Control Campaign",
    client: "ARCADE STRANGE / CEX",
    year: "2026",
    video: scalextricVideo,
    context: "Brainwave-driven Scalextric racing for CeX's Mind Control campaign at SAGE Exhibition (London Excel).",
    role: "Sole owner of the working prototype in a 3-person team.",
    tech: "Raspberry Pi web app streaming Muse EEG attention scores over serial to an Arduino · MOSFET-based PWM track speed control · speed-limiter layer",
    result: "Lifted onsite engagement by 55%.",
    link: "#",
  },
  {
    emoji: "💧",
    title: "Liquid Level Indicator",
    subtitle: "Product Design Engineering",
    client: "IMPERIAL COLLEGE LONDON",
    year: "2026",
    images: [liquid1, liquid2, liquid3],
    context: "Assistive liquid level indicator designed for blind users.",
    role: "Co-developed concept → functional prototype with a 4-person team; served as CIO establishing technical partnerships and executing 3+ collaborative sprints with Beyond Sight.",
    tech: "ESP32 · enclosure modeling + PCB integration",
    result: "Achieved ±2ml accuracy with <100ms haptic feedback latency.",
    link: "#",
  },
  {
    emoji: "🌿",
    title: "Kinetic Plant Companion",
    subtitle: "Physical Computing",
    client: "IMPERIAL COLLEGE LONDON",
    year: "2025",
    images: [plant1, plant2, plant3],
    context: "Physical computing brief — a kinetic plant companion that responds to its environment.",
    role: "Modeled the assembly in Fusion 360; programmed the ESP32 in Arduino C++ for sensor fusion and motor control.",
    tech: "Fusion 360 · ESP32 · Arduino C++ · MATLAB (kinematics + power budgets)",
    result: "Reduced prototype iterations by 50%; <50ms motor response; 12–16 hours runtime at 95% positioning accuracy.",
    link: "#",
  },
  {
    emoji: "✈️",
    title: "Modular Aircraft Seat",
    subtitle: "Sustainable Design Engineering",
    client: "IMPERIAL COLLEGE LONDON",
    year: "2025",
    images: [seat1, seat2, seat3],
    context: "Sustainable design brief — a modular aircraft seat applying circular economy principles.",
    role: "Designed the modular seat in Rhino applying circular economy principles.",
    tech: "Rhino · Granta Eco Audit (full lifecycle assessment)",
    result: "35% mass reduction, >95% material recovery; validated 54,000 kg CO2e savings per seat.",
    link: "#",
  },
];

export const moreProjects = [
  { name: "Rummikub web game", link: "#" },
  { name: "Lobster Hologram — Arcade Strange", link: "#" },
  { name: "AI Vending Machines — SAGE", link: "#" },
  { name: "SENDTech Hackathon", link: "#" },
];

export const toolkit = {
  columns: [
    {
      title: "Embedded & Hardware",
      items: ["ESP32", "Arduino C++", "Raspberry Pi", "Muse EEG", "MOSFET PWM", "Sensor fusion"],
    },
    {
      title: "Frontend & Web",
      items: ["React 19", "TypeScript", "Vite", "WebCodecs", "Cache API", "mp4-muxer"],
    },
    {
      title: "ML & AI",
      items: ["ONNX runtime-web (WASM inference)", "Tavus GenAI", "Demucs vocal separation"],
    },
    {
      title: "CAD & Design",
      items: ["Fusion 360", "SolidWorks", "Rhino", "Figma"],
    },
  ],
  languages: "Chinese (native) · English (C1) · Spanish (B2)",
};

export const contactNote = "OPEN TO PLACEMENT-YEAR INTERNSHIP (APR–SEP) — RESUME ON REQUEST";
