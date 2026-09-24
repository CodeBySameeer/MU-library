// ================================================================
//  MU Library — script.js
//  All pages (faculties, subjects, FAQ, About, Admin, Share) live
//  inside this SPA as hash routes: #/faq, #/about, #/admin, #/share
// ================================================================

// --- Runtime config (see index.html <script> block) ---
const MU_CONFIG = window.MU_CONFIG || {};
const SHEET_API_URL =
  MU_CONFIG.sheetApiUrl || "PASTE_YOUR_APPS_SCRIPT_URL_HERE";
const REPORT_EMAIL = MU_CONFIG.reportEmail || "mu-library@example.com";

const CONTRIBUTE = {
  email: MU_CONFIG.contributeEmail || "contribute@mulibrary.example",
  endpoint: "",
  maxFiles: 10,
  maxSizeMB: 25,
};

const ABOUT = {
  mission:
    "MU Library is a free, student-run study hub for Mid-West University. We collect, verify, and share notes, past papers, syllabi, and assignments across every faculty — so no student has to struggle alone.",
  goals: [
    {
      icon: "fa-book-open",
      title: "Every subject, covered",
      desc: "Syllabus for every course, notes for every semester, past papers for every year. No gaps.",
    },
    {
      icon: "fa-bolt",
      title: "Fast on any phone",
      desc: "Built to work on a cheap Android over 3G. No login, no ads, no tracking.",
    },
    {
      icon: "fa-wifi",
      title: "Offline-first",
      desc: "Once you open a file, it stays available without internet.",
    },
    {
      icon: "fa-hand-holding-heart",
      title: "Free, forever",
      desc: "No paywalls. No premium tier. Study material belongs to students.",
    },
  ],
  team: [
    {
      name: "Your Name",
      role: "Founder & Maintainer",
      bio: "Built this because finding the right notes shouldn't take three WhatsApp groups.",
      avatar: "",
      links: { email: "you@example.com" },
    },
    {
      name: "Contributor Name",
      role: "Content Curator",
      bio: "Collects, verifies, and organises PDFs from professors and seniors.",
      avatar: "",
      links: { email: "curator@example.com" },
    },
    {
      name: "Contributor Name",
      role: "Frontend & Design",
      bio: "Made the site fast, clean, and usable on low-end phones.",
      avatar: "",
      links: { email: "design@example.com" },
    },
  ],
  contacts: [
    {
      icon: "fa-envelope",
      label: "General",
      value: "hello@mulibrary.example",
      href: "mailto:hello@mulibrary.example",
    },
    {
      icon: "fa-paper-plane",
      label: "Telegram",
      value: "@mulibrary",
      href: "https://t.me/",
    },
    {
      icon: "fa-github",
      label: "GitHub",
      value: "mu-library",
      href: "https://github.com/",
    },
    {
      icon: "fa-flag",
      label: "Report a broken link",
      value: "report@mulibrary.example",
      href: "mailto:report@mulibrary.example?subject=Broken link report",
    },
  ],
  contribute: {
    title: "Have notes or past papers to share?",
    desc: "Anything helps — a single semester's notes, one past paper, a syllabus PDF. Send them over and we'll add them with credit.",
    cta: "Send resources",
  },
  thanks:
    "Built by students, for students. Thanks to every professor, senior, and classmate who has shared notes.",
};

const FAQ = [
  {
    q: "Is MU Library really free?",
    icon: "fa-circle-dollar-to-slot",
    a: "Yes — <strong>100% free, forever</strong>. No paywalls, no premium tier, no ads. Study material belongs to students.",
  },
  {
    q: "Do I need an account to download files?",
    icon: "fa-user-shield",
    a: "No login, no signup, no email required. Just tap <strong>Download</strong> on any file row.",
  },
  {
    q: "How do I download a file?",
    icon: "fa-download",
    a: "Tap the <strong>Download</strong> button next to any resource. It saves straight to your device's Downloads folder.",
  },
  {
    q: "Do downloads work offline?",
    icon: "fa-wifi",
    a: "Yes. Once you've opened or downloaded a file, your browser caches it — you can access it later without internet. You can also install MU Library as an app for a full offline experience.",
  },
  {
    q: "Can I install MU Library as an app?",
    icon: "fa-mobile-screen",
    a: "<strong>Android Chrome:</strong> Menu (⋮) → Install app.<br><strong>iPhone Safari:</strong> Share → Add to Home Screen.<br><strong>Desktop:</strong> Look for the install icon in the address bar.",
  },
  {
    q: "How do I contribute notes or past papers?",
    icon: "fa-hand-holding-heart",
    a: "Tap <strong>Send resources</strong> in the hero section, fill in the form, and we'll credit you. Any PDF, DOC, or image works — up to 25 MB per file, 10 files at a time.",
  },
  {
    q: "A link is broken. What do I do?",
    icon: "fa-flag",
    a: "Each file has a small <i class='fas fa-flag'></i> flag button. Tap it and it opens a pre-filled email report. We'll fix it as soon as possible.",
  },
  {
    q: "Why is some content missing?",
    icon: "fa-hourglass-half",
    a: "We're student-run and growing. Some semesters are fully loaded, others are still being collected. If you have notes for a missing subject, please contribute — it helps everyone.",
  },
  {
    q: "Is my data tracked?",
    icon: "fa-shield-halved",
    a: "No. Everything — favorites, downloads, recent searches — lives in your browser's local storage. Nothing is sent to any server except your chat messages (which are not stored).",
  },
  {
    q: "Can I share subjects with friends?",
    icon: "fa-share-nodes",
    a: "Yes. On any subject card, tap the <i class='fas fa-link'></i> copy-link button to get a shareable URL. It opens directly on that subject.",
  },
];

const FALLBACK_RESOURCES = {
  SH411: {
    syllabus: [
      {
        title: "Official Syllabus (2024)",
        url: "resources/be-civil-sem1/SH411-syllabus-2024.pdf",
        updated: "2024-08-01",
      },
    ],
    notes: [
      {
        title: "Unit 1-2: Limits Continuity & Derivatives",
        url: "resources/be-civil-sem1/SH411-notes-unit1-2.pdf",
        author: "Prof. R. Sharma",
        updated: "2024-09-12",
      },
      {
        title: "Unit 3-4: Integration & Applications",
        url: "resources/be-civil-sem1/SH411-notes-unit3-4.pdf",
        author: "Prof. R. Sharma",
        updated: "2024-09-12",
      },
      {
        title: "Unit 5: Vector Algebra",
        url: "resources/be-civil-sem1/SH411-notes-unit5.pdf",
        author: "Ms. K. Thapa",
        updated: "2024-09-20",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "resources/be-civil-sem1/SH411-pyq-2024.pdf",
        year: 2024,
      },
      {
        title: "End Semester Exam",
        url: "resources/be-civil-sem1/SH411-pyq-2023.pdf",
        year: 2023,
      },
      {
        title: "End Semester Exam",
        url: "resources/be-civil-sem1/SH411-pyq-2022.pdf",
        year: 2022,
      },
    ],
    assignments: [
      {
        title: "Assignment 1 — Limits & Continuity",
        url: "resources/be-civil-sem1/SH411-assign-1.pdf",
      },
      {
        title: "Assignment 2 — Derivatives",
        url: "resources/be-civil-sem1/SH411-assign-2.pdf",
      },
    ],
  },
  CE411: {
    syllabus: [
      {
        title: "Official Syllabus (2024)",
        url: "resources/be-civil-sem1/CE411-syllabus-2024.pdf",
      },
    ],
    notes: [
      {
        title: "Statics of Particles — Complete Notes",
        url: "resources/be-civil-sem1/CE411-notes-complete.pdf",
        author: "Dr. B. Adhikari",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "resources/be-civil-sem1/CE411-pyq-2024.pdf",
        year: 2024,
      },
    ],
    assignments: [],
  },
  SH412: {
    syllabus: [
      {
        title: "Official Syllabus (2024)",
        url: "resources/be-civil-sem1/SH412-syllabus-2024.pdf",
      },
    ],
    notes: [
      {
        title: "Optics & Wave Mechanics",
        url: "resources/be-civil-sem1/SH412-notes-optics.pdf",
      },
    ],
    pyq: [],
    assignments: [],
  },
  SH421: {
    syllabus: [
      {
        title: "Official Syllabus (2024)",
        url: "resources/be-civil-sem2/SH421-syllabus-2024.pdf",
      },
    ],
    notes: [
      {
        title: "Partial Derivatives & Multiple Integrals",
        url: "resources/be-civil-sem2/SH421-notes-unit1-2.pdf",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "resources/be-civil-sem2/SH421-pyq-2024.pdf",
        year: 2024,
      },
    ],
    assignments: [],
  },
  CE421: {
    syllabus: [
      {
        title: "Official Course Syllabus",
        url: "resources/be-civil-sem2/Applied%20Mechanics%20II%20(Dynamics)%20syllabus.pdf",
      },
    ],
    notes: [
      {
        title: "Lecture Slides — Impact, Vibration & Kinematics",
        url: "resources/be-civil-sem2/Applied%20Mechanics%20.pdf",
        author: "Amit Paudel",
      },
      {
        title: "Chapter 1 — Rectilinear Motion",
        url: "resources/be-civil-sem2/chap1.pdf",
      },
      {
        title: "Chapter 2 — Kinetics of Particles",
        url: "resources/be-civil-sem2/chap2.pdf",
      },
      {
        title: "Chapter 3 — Work, Energy, Impulse & Momentum",
        url: "resources/be-civil-sem2/chap3.pdf",
      },
      {
        title: "Chapter 4 — System of Particles",
        url: "resources/be-civil-sem2/chap4.pdf",
      },
      {
        title: "Chapter 6 — Mechanical Vibration",
        url: "resources/be-civil-sem2/chap6.pdf",
      },
    ],
    pyq: [
      {
        title: "Complete Solved Problems",
        url: "resources/be-civil-sem2/dynamics%20soln.pdf",
      },
    ],
    assignments: [
      {
        title: "Assignment 1 — Solved Numerical Problems",
        url: "resources/be-civil-sem2/Assignment1.pdf",
      },
    ],
  },
  CT411: {
    syllabus: [
      {
        title: "Official Syllabus (2024)",
        url: "resources/be-computer-sem1/CT411-syllabus-2024.pdf",
      },
    ],
    notes: [
      {
        title: "C Programming — Full Notes",
        url: "resources/be-computer-sem1/CT411-notes-c.pdf",
      },
      {
        title: "Pointers & Arrays Deep Dive",
        url: "resources/be-computer-sem1/CT411-notes-pointers.pdf",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "resources/be-computer-sem1/CT411-pyq-2024.pdf",
        year: 2024,
      },
    ],
    assignments: [
      {
        title: "Assignment 1 — Basics",
        url: "resources/be-computer-sem1/CT411-assign-1.pdf",
      },
    ],
  },
};

let RESOURCES = FALLBACK_RESOURCES;

function mergeResources(base, incoming) {
  const out = { ...base };
  if (!incoming || typeof incoming !== "object") return out;
  for (const [code, cats] of Object.entries(incoming)) {
    if (!cats || typeof cats !== "object") continue;
    out[code] = { ...(base[code] || {}), ...cats };
  }
  return out;
}

async function loadResources() {
  if (!SHEET_API_URL || SHEET_API_URL.includes("PASTE_")) {
    console.info("[CMS] Sheet URL not configured. Using fallback resources.");
    return;
  }
  try {
    const res = await fetch(SHEET_API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    if (data && typeof data === "object" && !data.error) {
      RESOURCES = mergeResources(FALLBACK_RESOURCES, data);
    }
  } catch (err) {
    console.warn("[CMS] Fallback used:", err);
  }
}

const DATA = {
  faculties: {
    be: {
      name: "BE Engineering",
      icon: "fa-microchip",
      subtitle: "Bachelor of Engineering",
      programs: {
        civil: {
          name: "Civil Engineering",
          icon: "fa-building",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "SH411", name: "Engineering Mathematics I" },
                { code: "CE411", name: "Applied Mechanics I (Statics)" },
                { code: "SH412", name: "Engineering Physics" },
                { code: "ME411", name: "Engineering Drawing I" },
                { code: "ME412", name: "Workshop Technology" },
                { code: "CE412", name: "Construction Materials" },
                {
                  code: "CO411",
                  name: "Basic Computer Concept and Programming",
                },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "SH421", name: "Engineering Mathematics II" },
                { code: "CE421", name: "Applied Mechanics II (Dynamics)" },
                { code: "SH422", name: "Engineering Chemistry" },
                { code: "ME421", name: "Engineering Drawing II" },
                {
                  code: "ME422",
                  name: "Fundamental of Thermodynamics and Heat Transfer",
                },
                { code: "EL421", name: "Basic Electrical Engineering" },
                { code: "EX421", name: "Basic Electronics Engineering" },
              ],
            },
            {
              semester: 3,
              subjects: [
                { code: "SH431", name: "Engineering Mathematics III" },
                { code: "CE431", name: "Strength of Materials" },
                { code: "CE432", name: "Fluid Mechanics" },
                { code: "CE433", name: "Surveying I" },
                { code: "CE434", name: "Engineering Geology" },
                {
                  code: "CE435",
                  name: "Building Construction and Building Drawings",
                },
                { code: "SH432", name: "Communication English" },
              ],
            },
            {
              semester: 4,
              subjects: [
                { code: "CE441", name: "Theory of Structures I" },
                { code: "SH441", name: "Probability and Statistics" },
                { code: "CE442", name: "Surveying II" },
                { code: "CE443", name: "Hydraulics" },
                { code: "CE444", name: "Soil Mechanics" },
                {
                  code: "CE445",
                  name: "Concrete Technology and Masonry Structures",
                },
                { code: "CO441", name: "Numerical Methods" },
              ],
            },
            {
              semester: 5,
              subjects: [
                { code: "CE451", name: "Theory of Structures II" },
                { code: "CE452", name: "Survey Camp" },
                {
                  code: "CE453",
                  name: "Water Supply and Sanitary Engineering",
                },
                { code: "MS451", name: "Engineering Economics" },
                { code: "CE454", name: "Foundation Engineering" },
                { code: "CE455", name: "Transportation Engineering I" },
                { code: "CE456", name: "Engineering Hydrology" },
              ],
            },
            {
              semester: 6,
              subjects: [
                {
                  code: "CE461",
                  name: "Design of Steel and Timber Structures",
                },
                { code: "CE462", name: "Transportation Engineering II" },
                { code: "CE463", name: "Irrigation Engineering" },
                { code: "CE464", name: "Sanitation Engineering" },
                { code: "MS461", name: "Project Management" },
                { code: "CE46E", name: "Elective I" },
                { code: "CE465", name: "Engineering Professional Practices" },
              ],
            },
            {
              semester: 7,
              subjects: [
                { code: "CE471", name: "Civil Engineering Project I" },
                { code: "CE472", name: "Hydropower Engineering" },
                { code: "MS471", name: "Construction Management" },
                { code: "CE473", name: "Estimating and Valuation" },
                { code: "CE47E1", name: "Elective II" },
                { code: "CE47E2", name: "Elective III" },
                {
                  code: "CE474",
                  name: "Design of Reinforced Cement Concrete Structures",
                },
              ],
            },
            {
              semester: 8,
              subjects: [
                { code: "CE481", name: "Civil Engineering Project II" },
                { code: "CE482", name: "Internship in Civil Engineering" },
              ],
            },
          ],
        },
        computer: {
          name: "Computer Engineering",
          icon: "fa-laptop-code",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "CT411", name: "Programming Fundamentals (C)" },
                { code: "CT412", name: "Digital Logic Design" },
                { code: "CT413", name: "Engineering Mathematics I" },
                { code: "CT414", name: "Physics for Computing" },
                { code: "CT415", name: "Computer Hardware Basics" },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "CT421", name: "Data Structures & Algorithms" },
                { code: "CT422", name: "Object Oriented Programming (Java)" },
                { code: "CT423", name: "Engineering Mathematics II" },
                { code: "CT424", name: "Computer Organization & Architecture" },
                { code: "CT425", name: "Discrete Mathematics" },
              ],
            },
            {
              semester: 3,
              subjects: [
                { code: "CT431", name: "Database Management Systems" },
                { code: "CT432", name: "Operating Systems" },
                { code: "CT433", name: "Probability & Statistics" },
                { code: "CT434", name: "Software Engineering" },
                { code: "CT435", name: "Numerical Methods" },
              ],
            },
            {
              semester: 4,
              subjects: [
                { code: "CT441", name: "Computer Networks" },
                { code: "CT442", name: "Theory of Computation" },
                { code: "CT443", name: "Microprocessors" },
                { code: "CT444", name: "Web Technology" },
                { code: "CT445", name: "Object Oriented Analysis & Design" },
              ],
            },
            {
              semester: 5,
              subjects: [
                { code: "CT451", name: "Machine Learning" },
                { code: "CT452", name: "Compiler Design" },
                { code: "CT453", name: "Cryptography & Network Security" },
                { code: "CT454", name: "Artificial Intelligence" },
                { code: "CT455", name: "Cloud Computing" },
              ],
            },
            {
              semester: 6,
              subjects: [
                { code: "CT461", name: "Big Data Analytics" },
                { code: "CT462", name: "Mobile Application Development" },
                { code: "CT463", name: "Distributed Systems" },
                { code: "CT464", name: "Data Science" },
                { code: "CT46E", name: "Elective I" },
              ],
            },
            {
              semester: 7,
              subjects: [
                { code: "CT471", name: "Computer Project I" },
                { code: "CT472", name: "Software Testing & Quality Assurance" },
                { code: "CT473", name: "Human Computer Interaction" },
                { code: "CT47E1", name: "Elective II" },
                { code: "CT47E2", name: "Elective III" },
              ],
            },
            {
              semester: 8,
              subjects: [
                { code: "CT481", name: "Computer Project II" },
                { code: "CT482", name: "Internship in Computer Engineering" },
              ],
            },
          ],
        },
        hydro: {
          name: "Hydropower Engineering",
          icon: "fa-water",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "HE411", name: "Engineering Mathematics I" },
                { code: "HE412", name: "Basic Hydraulics" },
                { code: "HE413", name: "Engineering Drawing" },
                { code: "HE414", name: "Physics" },
                { code: "HE415", name: "Workshop Technology" },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "HE421", name: "Fluid Mechanics" },
                { code: "HE422", name: "Hydropower Surveying" },
                { code: "HE423", name: "Engineering Mathematics II" },
                { code: "HE424", name: "Materials Science" },
                { code: "HE425", name: "Basic Electrical Engineering" },
              ],
            },
            {
              semester: 3,
              subjects: [
                { code: "HE431", name: "Engineering Hydrology" },
                { code: "HE432", name: "Strength of Materials" },
                { code: "HE433", name: "Geology for Hydropower" },
                { code: "HE434", name: "Engineering Mathematics III" },
                { code: "HE435", name: "Surveying I" },
              ],
            },
            {
              semester: 4,
              subjects: [
                { code: "HE441", name: "Hydropower Structures" },
                { code: "HE442", name: "Soil Mechanics" },
                { code: "HE443", name: "Hydraulics" },
                { code: "HE444", name: "Probability & Statistics" },
                { code: "HE445", name: "Theory of Structures I" },
              ],
            },
            {
              semester: 5,
              subjects: [
                { code: "HE451", name: "Hydropower Planning & Design" },
                { code: "HE452", name: "Dam Engineering" },
                { code: "HE453", name: "Tunnels & Underground Structures" },
                { code: "HE454", name: "Engineering Economics" },
                { code: "HE455", name: "Foundation Engineering" },
              ],
            },
            {
              semester: 6,
              subjects: [
                { code: "HE461", name: "Turbines & Pumps" },
                { code: "HE462", name: "Hydropower Electrical Systems" },
                { code: "HE463", name: "Irrigation & Water Resources" },
                { code: "HE464", name: "Project Management" },
                { code: "HE46E", name: "Elective I" },
              ],
            },
            {
              semester: 7,
              subjects: [
                { code: "HE471", name: "Hydropower Project I" },
                { code: "HE472", name: "Powerhouse Design" },
                { code: "HE473", name: "Environmental Impact Assessment" },
                { code: "HE47E1", name: "Elective II" },
                { code: "HE47E2", name: "Elective III" },
              ],
            },
            {
              semester: 8,
              subjects: [
                { code: "HE481", name: "Hydropower Project II" },
                { code: "HE482", name: "Internship in Hydropower Engineering" },
              ],
            },
          ],
        },
      },
    },
    bsc: {
      name: "BSc Science",
      icon: "fa-flask",
      subtitle: "Bachelor of Science",
      programs: {
        physics: {
          name: "Physics",
          icon: "fa-atom",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "PH411", name: "Classical Mechanics" },
                { code: "PH412", name: "Electrodynamics" },
                { code: "PH413", name: "Mathematics for Physics I" },
                { code: "PH414", name: "Thermodynamics" },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "PH421", name: "Quantum Mechanics" },
                { code: "PH422", name: "Statistical Physics" },
                { code: "PH423", name: "Mathematics for Physics II" },
                { code: "PH424", name: "Optics" },
              ],
            },
          ],
        },
        chemistry: {
          name: "Chemistry",
          icon: "fa-flask",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "CH411", name: "Organic Chemistry I" },
                { code: "CH412", name: "Inorganic Chemistry I" },
                { code: "CH413", name: "Physical Chemistry I" },
                { code: "CH414", name: "Analytical Chemistry" },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "CH421", name: "Organic Chemistry II" },
                { code: "CH422", name: "Inorganic Chemistry II" },
                { code: "CH423", name: "Physical Chemistry II" },
                { code: "CH424", name: "Biochemistry" },
              ],
            },
          ],
        },
      },
    },
    bba: {
      name: "BBA Management",
      icon: "fa-briefcase",
      subtitle: "Bachelor of Business Administration",
      programs: {
        general: {
          name: "General Management",
          icon: "fa-users",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "BA411", name: "Principles of Management" },
                { code: "BA412", name: "Business Economics" },
                { code: "BA413", name: "Financial Accounting" },
                { code: "BA414", name: "Business Communication" },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "BA421", name: "Organizational Behavior" },
                { code: "BA422", name: "Marketing Management" },
                { code: "BA423", name: "Human Resource Management" },
                { code: "BA424", name: "Business Law" },
              ],
            },
          ],
        },
        finance: {
          name: "Finance",
          icon: "fa-chart-line",
          semesters: [
            {
              semester: 1,
              subjects: [
                { code: "FN411", name: "Corporate Finance" },
                { code: "FN412", name: "Investment Analysis" },
                { code: "FN413", name: "Financial Markets" },
                { code: "FN414", name: "Managerial Economics" },
              ],
            },
            {
              semester: 2,
              subjects: [
                { code: "FN421", name: "International Finance" },
                { code: "FN422", name: "Portfolio Management" },
                { code: "FN423", name: "Risk Management" },
                { code: "FN424", name: "Financial Modeling" },
              ],
            },
          ],
        },
      },
    },
  },
};

function safeGet(key, fallback = null) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function safeSet(key, val) {
  try {
    localStorage.setItem(
      key,
      typeof val === "string" ? val : JSON.stringify(val)
    );
  } catch {}
}

const uiState = {
  strips: safeGet("muStripStates", {}),
  groups: safeGet("muGroupStates", {}),
};

function isMobile() {
  return window.innerWidth <= 768;
}

function isStripCollapsed(key) {
  if (Object.prototype.hasOwnProperty.call(uiState.strips, key))
    return uiState.strips[key];
  return isMobile();
}
function isGroupCollapsed(key) {
  if (Object.prototype.hasOwnProperty.call(uiState.groups, key))
    return uiState.groups[key];
  return isMobile();
}
function toggleStrip(key) {
  uiState.strips[key] = !isStripCollapsed(key);
  safeSet("muStripStates", uiState.strips);
  applyStripCollapse();
}
function toggleGroup(key, groupEl) {
  uiState.groups[key] = !isGroupCollapsed(key);
  safeSet("muGroupStates", uiState.groups);
  groupEl.classList.toggle("collapsed", uiState.groups[key]);
}
function applyStripCollapse() {
  const fav = document.getElementById("favoritesStrip");
  const rec = document.getElementById("recentStrip");
  if (fav) fav.classList.toggle("collapsed", isStripCollapsed("favorites"));
  if (rec) rec.classList.toggle("collapsed", isStripCollapsed("recent"));
}

const state = {
  level: "faculties",
  path: { faculty: null, program: null, semester: null, subject: null },
  shareCodes: [],
  theme:
    localStorage.getItem("muTheme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
  accent: localStorage.getItem("muAccent") || "teal",
  favorites: safeGet("muFavorites", []),
  recent: [],
  recentSearches: safeGet("muRecentSearches", []),
  downloads: safeGet("muDownloads", {}),
  searchLog: safeGet("muSearchLog", []),
  currentFilter: "all",
  currentSort: "default",
  faqQuery: "",
};

const RECENT_TTL = 30 * 60 * 1000;
let recentTimer = null;
const SEARCH_LOG_MAX = 200;

const ACCENTS = {
  teal: { color: "#2d9cdb", hover: "#1a7aad", soft: "rgba(45,156,219,0.1)" },
  purple: { color: "#6c5ce7", hover: "#5a4fcf", soft: "rgba(108,92,231,0.1)" },
  pink: { color: "#ec4899", hover: "#db2777", soft: "rgba(236,72,153,0.1)" },
  emerald: { color: "#10b981", hover: "#059669", soft: "rgba(16,185,129,0.1)" },
  amber: { color: "#f59e0b", hover: "#d97706", soft: "rgba(245,158,11,0.1)" },
  rose: { color: "#f43f5e", hover: "#e11d48", soft: "rgba(244,63,94,0.1)" },
};

const $ = (s) => document.querySelector(s);
const E = {
  navList: $("#navList"),
  navLabelText: $("#navLabelText"),
  cardGrid: $("#cardGrid"),
  breadcrumb: $("#breadcrumb"),
  heroTitle: $("#heroTitle"),
  heroSubtext: $("#heroSubtext"),
  currentLevelDisplay: $("#currentLevelDisplay"),
  currentItemDisplay: $("#currentItemDisplay"),
  subtitleDisplay: $("#subtitleDisplay"),
  footerStats: $("#footerStats"),
  totalCount: $("#totalCount"),
  sidebar: $("#sidebar"),
  sidebarToggle: $("#sidebarToggle"),
  overlay: $("#sidebarOverlay"),
  hamburger: $("#hamburgerBtn"),
  sidebarCloseBtn: $("#sidebarCloseBtn"),
  searchInput: $("#globalSearchInput"),
  mobileSearchInput: $("#mobileGlobalSearch"),
  suggestionsBox: $("#searchSuggestions"),
  mobileSuggestionsBox: $("#mobileSearchSuggestions"),
  clearSearchBtn: $("#clearSearchBtn"),
  mobileClearSearchBtn: $("#mobileClearSearchBtn"),
  searchBtn: $("#searchBtn"),
  modal: $("#resourceModal"),
  modalTitle: $("#modalTitle"),
  modalBody: $("#modalBody"),
  modalClose: $("#resourceModal .modal-close"),
  backToTopBtn: $("#backToTop"),
  themeToggle: $("#themeToggle"),
  themeIcon: $("#themeToggle i"),
  quickThemeIcon: $("#quickThemeIcon"),
  contentArea: $("#contentArea"),
  toastContainer: $("#toastContainer"),
  scrollProgress: $("#scrollProgress"),
  accentToggle: $("#accentToggle"),
  accentMenu: $("#accentMenu"),
  commandPalette: $("#commandPalette"),
  commandInput: $("#commandInput"),
  commandResults: $("#commandResults"),
  openCommandPalette: $("#openCommandPalette"),
  favoritesStrip: $("#favoritesStrip"),
  favoritesStripBody: $("#favoritesStripBody"),
  recentStrip: $("#recentStrip"),
  recentStripBody: $("#recentStripBody"),
  favCount: $("#favCount"),
  recentCount: $("#recentCount"),
  sidebarQuick: $("#sidebarQuick"),
  filters: $("#filters"),
  sortBar: $("#sortBar"),
  netBanner: $("#netBanner"),
  heroBackBtn: $("#heroBackBtn"),
};

function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[
        c
      ])
  );
}
function safeUrl(url) {
  if (!url || typeof url !== "string") return null;
  try {
    const u = new URL(url, location.origin);
    if (!["http:", "https:"].includes(u.protocol)) return null;
    return u.href;
  } catch {
    return null;
  }
}
function highlight(text, q) {
  if (!q) return escapeHtml(text);
  const safe = escapeHtml(text);
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return safe.replace(re, "<mark>$1</mark>");
}
function debounce(fn, delay) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), delay);
  };
}
function persistFavorites() {
  safeSet("muFavorites", state.favorites);
}
function persistRecentSearches() {
  safeSet("muRecentSearches", state.recentSearches.slice(0, 5));
}
function fmtDate(str) {
  if (!str) return "";
  const d = new Date(str);
  if (isNaN(d)) return str;
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
function fmtSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

function recordDownload(code, url) {
  if (!code || !url) return;
  const arr = state.downloads[code] || [];
  if (!arr.includes(url)) {
    arr.push(url);
    state.downloads[code] = arr;
    safeSet("muDownloads", state.downloads);
  }
}
function isDownloaded(code, url) {
  return (state.downloads[code] || []).includes(url);
}
function getDownloadCount(code) {
  return (state.downloads[code] || []).length;
}
function getSubjectFileCount(code) {
  const files = RESOURCES[code];
  if (!files) return 0;
  return (
    (files.syllabus?.length || 0) +
    (files.notes?.length || 0) +
    (files.pyq?.length || 0) +
    (files.assignments?.length || 0)
  );
}

function logSearch(q, resultCount) {
  q = (q || "").trim().toLowerCase();
  if (!q || q.length < 2) return;
  const now = Date.now();
  const last = state.searchLog[0];
  if (last && last.q === q && now - last.ts < 5000) return;
  state.searchLog.unshift({ q, n: resultCount, ts: now });
  state.searchLog = state.searchLog.slice(0, SEARCH_LOG_MAX);
  safeSet("muSearchLog", state.searchLog);
}
function clearSearchLog() {
  state.searchLog = [];
  safeSet("muSearchLog", state.searchLog);
  showToast("Search log cleared", "info", "fa-broom");
}

function showToast(message, type = "info", icon = null) {
  const icons = {
    success: "fa-check-circle",
    error: "fa-times-circle",
    info: "fa-info-circle",
  };
  const c = E.toastContainer;
  if (!c) return;
  while (c.children.length >= 3) c.firstChild.remove();
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fas ${
    icon || icons[type] || icons.info
  }"></i><span>${escapeHtml(message)}</span>`;
  c.appendChild(el);
  setTimeout(() => {
    el.classList.add("removing");
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

function isFavorite(code) {
  return state.favorites.includes(code);
}

function toggleFavorite(code, name) {
  const idx = state.favorites.indexOf(code);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    showToast(`Removed "${name}" from favorites`, "info", "fa-star");
  } else {
    state.favorites.push(code);
    showToast(`Added "${name}" to favorites`, "success", "fa-star");
  }
  persistFavorites();
  updateQuickCounts();
  renderContent();
  updateStrips();
}

function removeFavorite(code) {
  const idx = state.favorites.indexOf(code);
  if (idx < 0) return;
  const found = findSubjectByCode(code);
  const name = found ? found.subject.name : code;
  state.favorites.splice(idx, 1);
  persistFavorites();
  updateQuickCounts();
  renderContent();
  updateStrips();
  showToast(`Removed "${name}" from favorites`, "info", "fa-star");
}

function clearFavorites() {
  if (state.favorites.length === 0)
    return showToast("No favorites to clear", "info", "fa-star");
  const n = state.favorites.length;
  state.favorites = [];
  persistFavorites();
  updateQuickCounts();
  renderContent();
  updateStrips();
  showToast(`Cleared ${n} favorite${n > 1 ? "s" : ""}`, "info", "fa-trash-can");
}

function addRecent(subject) {
  state.recent = [
    subject,
    ...state.recent.filter((s) => s.code !== subject.code),
  ].slice(0, 8);
  updateQuickCounts();
  updateStrips();
  if (recentTimer) clearTimeout(recentTimer);
  recentTimer = setTimeout(() => {
    if (state.recent.length === 0) return;
    state.recent = [];
    updateQuickCounts();
    updateStrips();
    showToast(
      "Recently viewed expired (30 min)",
      "info",
      "fa-clock-rotate-left"
    );
    recentTimer = null;
  }, RECENT_TTL);
}

function clearRecent() {
  if (state.recent.length === 0)
    return showToast(
      "No recent items to clear",
      "info",
      "fa-clock-rotate-left"
    );
  state.recent = [];
  if (recentTimer) {
    clearTimeout(recentTimer);
    recentTimer = null;
  }
  updateQuickCounts();
  updateStrips();
  showToast("Recently viewed cleared", "info", "fa-trash-can");
}

function addRecentSearch(q) {
  q = (q || "").trim();
  if (!q || q.length < 2) return;
  state.recentSearches = [
    q,
    ...state.recentSearches.filter((x) => x.toLowerCase() !== q.toLowerCase()),
  ].slice(0, 5);
  persistRecentSearches();
}

function clearRecentSearches() {
  state.recentSearches = [];
  persistRecentSearches();
  showToast("Recent searches cleared", "info", "fa-clock-rotate-left");
}

function findSubjectByCode(code) {
  for (const facKey in DATA.faculties) {
    const fac = DATA.faculties[facKey];
    for (const progKey in fac.programs) {
      const prog = fac.programs[progKey];
      for (const sem of prog.semesters) {
        const sub = sem.subjects.find((s) => s.code === code);
        if (sub)
          return {
            subject: sub,
            faculty: facKey,
            program: progKey,
            semester: sem.semester,
          };
      }
    }
  }
  return null;
}

function updateQuickCounts() {
  if (E.favCount) E.favCount.textContent = state.favorites.length;
  if (E.recentCount) E.recentCount.textContent = state.recent.length;
}

function updateStrips() {
  if (state.favorites.length > 0) {
    E.favoritesStrip.hidden = false;
    E.favoritesStripBody.innerHTML = state.favorites
      .map((code) => {
        const f = findSubjectByCode(code);
        const name = f ? f.subject.name : code;
        return `<div class="strip-chip has-remove" data-code="${escapeHtml(
          code
        )}" role="button" tabindex="0">
        <i class="fas fa-star"></i>
        <span class="chip-name">${escapeHtml(name)}</span>
        <span class="chip-code">${escapeHtml(code)}</span>
        <button class="chip-remove" data-remove="${escapeHtml(
          code
        )}" aria-label="Remove from favorites">
          <i class="fas fa-times"></i>
        </button>
      </div>`;
      })
      .join("");
  } else {
    E.favoritesStrip.hidden = true;
    E.favoritesStripBody.innerHTML = "";
  }

  if (state.recent.length > 0) {
    E.recentStrip.hidden = false;
    E.recentStripBody.innerHTML = state.recent
      .map(
        (sub) =>
          `<div class="strip-chip" data-code="${escapeHtml(
            sub.code
          )}" role="button" tabindex="0">
        <i class="fas fa-clock-rotate-left"></i>
        <span class="chip-name">${escapeHtml(sub.name)}</span>
        <span class="chip-code">${escapeHtml(sub.code)}</span>
      </div>`
      )
      .join("");
  } else {
    E.recentStrip.hidden = true;
    E.recentStripBody.innerHTML = "";
  }

  applyStripCollapse();
}

let searchIndex = null;
function buildSearchIndex() {
  const idx = [];
  Object.entries(DATA.faculties).forEach(([fk, f]) => {
    idx.push({
      type: "faculty",
      key: fk,
      name: f.name,
      icon: f.icon,
      path: [],
      meta: "Faculty",
    });
    Object.entries(f.programs).forEach(([pk, p]) => {
      idx.push({
        type: "program",
        key: pk,
        name: p.name,
        icon: p.icon,
        path: [fk],
        meta: `Program · ${f.name}`,
      });
      p.semesters.forEach((sem) => {
        sem.subjects.forEach((sub) => {
          idx.push({
            type: "subject",
            key: sub.code,
            name: sub.name,
            code: sub.code,
            icon: "fa-book",
            path: [fk, pk, sem.semester],
            meta: `Subject · Sem ${sem.semester} · ${p.name}`,
            semester: sem.semester,
            faculty: fk,
            program: pk,
          });
          const cats = RESOURCES[sub.code];
          if (cats) {
            ["syllabus", "notes", "pyq", "assignments"].forEach((cat) => {
              (cats[cat] || []).forEach((file) => {
                idx.push({
                  type: "resource",
                  key: `${sub.code}::${file.url}`,
                  name: file.title,
                  code: sub.code,
                  icon: "fa-file-pdf",
                  path: [fk, pk, sem.semester, sub.code],
                  meta: [
                    sub.code,
                    sub.name,
                    file.author,
                    file.year ? `(${file.year})` : "",
                  ]
                    .filter(Boolean)
                    .join(" · "),
                  author: file.author || "",
                  year: file.year || null,
                });
              });
            });
          }
        });
      });
    });
  });
  return idx;
}
function getSearchIndex() {
  if (!searchIndex) searchIndex = buildSearchIndex();
  return searchIndex;
}
function performSearch(query) {
  if (!query?.trim()) return [];
  const q = query.trim().toLowerCase();
  return getSearchIndex()
    .filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        (i.code && i.code.toLowerCase().includes(q)) ||
        (i.meta && i.meta.toLowerCase().includes(q)) ||
        (i.author && i.author.toLowerCase().includes(q)) ||
        (i.year && String(i.year).includes(q))
    )
    .slice(0, 15);
}

let highlightedIndex = -1;
let currentSuggestionItems = [];

function showSuggestions(results, box, query = "") {
  box.innerHTML = "";
  highlightedIndex = -1;
  currentSuggestionItems = [];

  if (!query) {
    if (state.recentSearches.length > 0) {
      box.innerHTML = `
        <div class="sug-header">
          <span>Recent searches</span>
          <button class="sug-clear" type="button" data-clear-recent-searches>Clear</button>
        </div>
        ${state.recentSearches
          .map(
            (q) => `
          <div class="search-suggestion-item" data-recent-search="${escapeHtml(
            q
          )}" role="option" aria-selected="false">
            <div class="suggestion-icon"><i class="fas fa-clock-rotate-left"></i></div>
            <div class="suggestion-info">
              <div class="suggestion-name">${escapeHtml(q)}</div>
            </div>
          </div>`
          )
          .join("")}`;
      box.classList.add("active");
      currentSuggestionItems = box.querySelectorAll(".search-suggestion-item");
      return;
    }
    box.classList.remove("active");
    return;
  }

  if (results.length === 0) {
    box.innerHTML = `
      <div class="no-results">
        <i class="fas fa-magnifying-glass"></i>
        <p>No results for "<strong>${escapeHtml(query)}</strong>"</p>
        <a class="no-results-cta" href="mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(
      "Request: " + query
    )}">
          Tell us what you're looking for →
        </a>
      </div>`;
    box.classList.add("active");
    return;
  }

  box.innerHTML = results
    .map((item, i) => {
      const icon = item.icon || "fa-folder";
      let meta = `<span class="tag">${item.type}</span>`;
      if (item.type === "subject") {
        meta += `<span>${escapeHtml(item.code)}</span><span>Sem ${
          item.semester
        }</span>`;
      } else if (item.type === "resource") {
        meta += `<span>${escapeHtml(item.code)}</span>`;
        if (item.author) meta += `<span>${escapeHtml(item.author)}</span>`;
        if (item.year) meta += `<span>${item.year}</span>`;
      } else if (item.meta) {
        meta += `<span>${escapeHtml(item.meta)}</span>`;
      }
      const path = JSON.stringify(item.path).replace(/"/g, "&quot;");
      return `<div class="search-suggestion-item" role="option" id="sug-${i}"
              data-type="${escapeHtml(item.type)}"
              data-key="${escapeHtml(item.key)}"
              data-path="${path}"
              aria-selected="false">
      <div class="suggestion-icon"><i class="fas ${icon}"></i></div>
      <div class="suggestion-info">
        <div class="suggestion-name">${highlight(item.name, query)}</div>
        <div class="suggestion-meta">${meta}</div>
      </div>
    </div>`;
    })
    .join("");

  box.classList.add("active");
  currentSuggestionItems = box.querySelectorAll(".search-suggestion-item");
}

function hideSuggestions() {
  E.suggestionsBox.classList.remove("active");
  E.mobileSuggestionsBox.classList.remove("active");
  currentSuggestionItems = [];
  highlightedIndex = -1;
}

function handleSuggestionClick(el) {
  if (!el) return;
  const recent = el.dataset.recentSearch;
  if (recent) {
    E.searchInput.value = recent;
    E.mobileSearchInput.value = recent;
    showSuggestions(performSearch(recent), E.suggestionsBox, recent);
    return;
  }
  const { type, key, path } = el.dataset;
  let pathArr = [];
  try {
    pathArr = JSON.parse(path);
  } catch {
    pathArr = [];
  }

  if (type === "resource") {
    const code = pathArr[3] || key.split("::")[0];
    addRecentSearch(E.searchInput.value || E.mobileSearchInput.value || "");
    hideSuggestions();
    E.searchInput.value = "";
    E.mobileSearchInput.value = "";
    window.location.hash = `/${pathArr[0]}/${pathArr[1]}/${pathArr[2]}/${code}`;
    showToast("Opening subject — scroll to find file", "info", "fa-file-pdf");
    return;
  }
  addRecentSearch(E.searchInput.value || E.mobileSearchInput.value || "");
  hideSuggestions();
  E.searchInput.value = "";
  E.mobileSearchInput.value = "";
  let hash = "";
  if (type === "faculty") hash = `/${key}`;
  else if (type === "program") hash = `/${pathArr[0]}/${key}`;
  else if (type === "subject")
    hash = `/${pathArr[0]}/${pathArr[1]}/${pathArr[2]}/${key}`;
  if (hash) window.location.hash = hash;
}

const handleSearchInput = debounce((value, box, clearBtn) => {
  const trimmed = value.trim();
  if (clearBtn) clearBtn.hidden = !trimmed;
  if (trimmed) showSuggestions(performSearch(trimmed), box, trimmed);
  else showSuggestions([], box, "");
}, 200);

E.searchInput?.addEventListener("input", (e) => {
  E.mobileSearchInput.value = e.target.value;
  E.mobileClearSearchBtn.hidden = !e.target.value.trim();
  handleSearchInput(e.target.value, E.suggestionsBox, E.clearSearchBtn);
});
E.mobileSearchInput?.addEventListener("input", (e) => {
  E.searchInput.value = e.target.value;
  E.clearSearchBtn.hidden = !e.target.value.trim();
  handleSearchInput(
    e.target.value,
    E.mobileSuggestionsBox,
    E.mobileClearSearchBtn
  );
});
E.searchInput?.addEventListener("focus", () => {
  showSuggestions(
    E.searchInput.value.trim() ? performSearch(E.searchInput.value) : [],
    E.suggestionsBox,
    E.searchInput.value.trim()
  );
});
E.mobileSearchInput?.addEventListener("focus", () => {
  showSuggestions(
    E.mobileSearchInput.value.trim()
      ? performSearch(E.mobileSearchInput.value)
      : [],
    E.mobileSuggestionsBox,
    E.mobileSearchInput.value.trim()
  );
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) hideSuggestions();
});

[E.suggestionsBox, E.mobileSuggestionsBox].forEach((box) => {
  box?.addEventListener("click", (e) => {
    if (e.target.closest("[data-clear-recent-searches]")) {
      clearRecentSearches();
      box.classList.remove("active");
      return;
    }
    const item = e.target.closest(".search-suggestion-item");
    if (item) handleSuggestionClick(item);
  });
});

E.clearSearchBtn?.addEventListener("click", () => {
  E.searchInput.value = "";
  E.mobileSearchInput.value = "";
  E.clearSearchBtn.hidden = true;
  E.mobileClearSearchBtn.hidden = true;
  hideSuggestions();
  E.searchInput.focus();
});
E.mobileClearSearchBtn?.addEventListener("click", () => {
  E.searchInput.value = "";
  E.mobileSearchInput.value = "";
  E.clearSearchBtn.hidden = true;
  E.mobileClearSearchBtn.hidden = true;
  hideSuggestions();
  E.mobileSearchInput.focus();
});

E.searchBtn?.addEventListener("click", () => {
  const q = E.searchInput.value.trim();
  if (!q) return;
  addRecentSearch(q);
  const results = performSearch(q);
  logSearch(q, results.length);
  if (results.length === 1) {
    const item = results[0];
    if (item.type === "faculty") window.location.hash = `/${item.key}`;
    else if (item.type === "program")
      window.location.hash = `/${item.path[0]}/${item.key}`;
    else if (item.type === "subject")
      window.location.hash = `/${item.path[0]}/${item.path[1]}/${item.path[2]}/${item.key}`;
  } else {
    showSuggestions(results, E.suggestionsBox, q);
  }
});

document.addEventListener("keydown", (e) => {
  const active = document.activeElement;
  const isSearchFocused =
    active === E.searchInput || active === E.mobileSearchInput;
  if (!isSearchFocused || currentSuggestionItems.length === 0) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    highlightedIndex = (highlightedIndex + 1) % currentSuggestionItems.length;
    currentSuggestionItems.forEach((el, i) =>
      el.setAttribute("aria-selected", i === highlightedIndex)
    );
    currentSuggestionItems[highlightedIndex].scrollIntoView({
      block: "nearest",
    });
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    highlightedIndex =
      (highlightedIndex - 1 + currentSuggestionItems.length) %
      currentSuggestionItems.length;
    currentSuggestionItems.forEach((el, i) =>
      el.setAttribute("aria-selected", i === highlightedIndex)
    );
    currentSuggestionItems[highlightedIndex].scrollIntoView({
      block: "nearest",
    });
  } else if (e.key === "Enter" && highlightedIndex >= 0) {
    e.preventDefault();
    currentSuggestionItems[highlightedIndex].click();
  }
});

function trapFocus(container, e) {
  if (e.key !== "Tab") return;
  const focusables = container.querySelectorAll(
    'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;
  const first = focusables[0],
    last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

let commandItems = [];
let commandHighlight = -1;

function openCommand() {
  E.commandPalette.hidden = false;
  document.body.style.overflow = "hidden";
  E.commandInput.value = "";
  E.commandInput.focus();
  renderCommandResults("");
}
function closeCommand() {
  E.commandPalette.hidden = true;
  document.body.style.overflow = "";
  commandHighlight = -1;
}
function getCommandActions() {
  return [
    {
      name: "Toggle Theme",
      icon: "fa-moon",
      shortcut: "Ctrl+J",
      action: () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
        closeCommand();
      },
    },
    {
      name: "Toggle Sidebar",
      icon: "fa-bars",
      shortcut: "Ctrl+B",
      action: () => {
        if (window.innerWidth > 768) E.sidebar.classList.toggle("collapsed");
        else toggleSidebar();
        closeCommand();
      },
    },
    {
      name: "Go to Home",
      icon: "fa-house",
      shortcut: "",
      action: () => {
        window.location.hash = "";
        closeCommand();
      },
    },
    {
      name: "Open FAQ",
      icon: "fa-circle-question",
      shortcut: "",
      action: () => {
        window.location.hash = "/faq";
        closeCommand();
      },
    },
    {
      name: "About & Contact",
      icon: "fa-circle-info",
      shortcut: "",
      action: () => {
        window.location.hash = "/about";
        closeCommand();
      },
    },
    {
      name: "Send resources",
      icon: "fa-paper-plane",
      shortcut: "",
      action: () => {
        closeCommand();
        openContributeModal();
      },
    },
    {
      name: "Insights (maintainer)",
      icon: "fa-chart-line",
      shortcut: "",
      action: () => {
        window.location.hash = "/admin";
        closeCommand();
      },
    },
    {
      name: "Reload Resources",
      icon: "fa-rotate",
      shortcut: "",
      action: () => {
        loadResources().then(() => {
          searchIndex = null;
          renderApp();
          showToast("Resources reloaded", "success", "fa-rotate");
        });
        closeCommand();
      },
    },
    {
      name: "Clear Favorites",
      icon: "fa-star",
      shortcut: "",
      action: () => {
        clearFavorites();
        closeCommand();
      },
    },
    {
      name: "Clear Recently Viewed",
      icon: "fa-clock-rotate-left",
      shortcut: "",
      action: () => {
        clearRecent();
        closeCommand();
      },
    },
    {
      name: "Clear Recent Searches",
      icon: "fa-magnifying-glass",
      shortcut: "",
      action: () => {
        clearRecentSearches();
        closeCommand();
      },
    },
  ];
}
function renderCommandResults(query) {
  const allActions = getCommandActions();
  const q = query.trim().toLowerCase();
  const filteredActions = q
    ? allActions.filter((a) => a.name.toLowerCase().includes(q))
    : allActions;
  const results = q ? performSearch(query) : getSearchIndex().slice(0, 8);
  let html = "";
  if (filteredActions.length) {
    html += `<div class="command-section">Actions</div>`;
    html += filteredActions
      .map(
        (a, i) => `
      <div class="command-item" data-cmd-type="action" data-cmd-index="${i}" aria-selected="false">
        <div class="cmd-icon"><i class="fas ${a.icon}"></i></div>
        <div class="cmd-info"><div class="cmd-name">${escapeHtml(
          a.name
        )}</div></div>
        ${a.shortcut ? `<span class="cmd-shortcut">${a.shortcut}</span>` : ""}
      </div>`
      )
      .join("");
  }
  if (results.length) {
    html += `<div class="command-section">Results</div>`;
    html += results
      .map((item, i) => {
        const icon = item.icon || "fa-folder";
        let meta = `<span class="tag">${item.type}</span>`;
        if (item.type === "subject")
          meta += `<span>Sem ${item.semester}</span>`;
        if (item.type === "resource") {
          meta += `<span>${escapeHtml(item.code)}</span>`;
          if (item.year) meta += `<span>${item.year}</span>`;
        }
        return `<div class="command-item" data-cmd-type="search" data-cmd-index="${i}" aria-selected="false">
        <div class="cmd-icon"><i class="fas ${icon}"></i></div>
        <div class="cmd-info">
          <div class="cmd-name">${highlight(item.name, query)}</div>
          <div class="cmd-meta">${meta}</div>
        </div>
      </div>`;
      })
      .join("");
  }
  if (!html)
    html = `<div class="command-empty"><i class="fas fa-search"></i>No results</div>`;
  E.commandResults.innerHTML = html;
  commandItems = E.commandResults.querySelectorAll(".command-item");
  commandHighlight = -1;
  commandItems.forEach((el) => {
    el.addEventListener("click", () => executeCommandItem(el));
    el.addEventListener("mouseenter", () => {
      const idx = Array.from(commandItems).indexOf(el);
      commandItems.forEach((x) => x.setAttribute("aria-selected", "false"));
      el.setAttribute("aria-selected", "true");
      commandHighlight = idx;
    });
  });
}
function executeCommandItem(el) {
  const type = el.dataset.cmdType;
  const idx = parseInt(el.dataset.cmdIndex);
  const query = E.commandInput.value.trim();
  if (type === "action") {
    const all = getCommandActions();
    const filtered = query
      ? all.filter((a) => a.name.toLowerCase().includes(query.toLowerCase()))
      : all;
    filtered[idx]?.action?.();
  } else {
    const results = query ? performSearch(query) : getSearchIndex().slice(0, 8);
    const item = results[idx];
    if (item) {
      let hash = "";
      if (item.type === "faculty") hash = `/${item.key}`;
      else if (item.type === "program") hash = `/${item.path[0]}/${item.key}`;
      else if (item.type === "subject")
        hash = `/${item.path[0]}/${item.path[1]}/${item.path[2]}/${item.key}`;
      if (hash) window.location.hash = hash;
      closeCommand();
    }
  }
}

E.openCommandPalette?.addEventListener("click", openCommand);
E.commandPalette?.addEventListener("click", (e) => {
  if (e.target === E.commandPalette) closeCommand();
});
E.commandInput?.addEventListener("input", (e) =>
  renderCommandResults(e.target.value)
);
E.commandInput?.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    commandHighlight =
      (commandHighlight + 1) % Math.max(commandItems.length, 1);
    updateCommandHighlight();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    commandHighlight =
      (commandHighlight - 1 + commandItems.length) %
      Math.max(commandItems.length, 1);
    updateCommandHighlight();
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (commandHighlight >= 0 && commandItems[commandHighlight])
      commandItems[commandHighlight].click();
  } else if (e.key === "Escape") closeCommand();
  else if (e.key === "Tab") trapFocus(E.commandPalette, e);
});
function updateCommandHighlight() {
  commandItems.forEach((el, i) =>
    el.setAttribute("aria-selected", i === commandHighlight ? "true" : "false")
  );
  commandItems[commandHighlight]?.scrollIntoView({ block: "nearest" });
}

function parseHash() {
  const parts = location.hash.replace("#", "").split("/").filter(Boolean);
  const path = { faculty: null, program: null, semester: null, subject: null };
  let level = "faculties";
  if (parts[0] === "about") return { path, level: "about" };
  if (parts[0] === "faq") return { path, level: "faq" };
  if (parts[0] === "admin") return { path, level: "admin" };
  if (parts[0] === "share") {
    const codes = (parts[1] || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    return { path, level: "share", shareCodes: codes };
  }
  if (parts[0] && DATA.faculties[parts[0]]) {
    path.faculty = parts[0];
    level = "programs";
    if (parts[1] && DATA.faculties[parts[0]].programs[parts[1]]) {
      path.program = parts[1];
      level = "semesters";
      if (parts[2]) {
        const semNum = parseInt(parts[2]);
        const sem = DATA.faculties[parts[0]].programs[parts[1]].semesters.find(
          (s) => s.semester === semNum
        );
        if (sem) {
          path.semester = semNum;
          level = "subjects";
          if (parts[3]) {
            const sub = sem.subjects.find((s) => s.code === parts[3]);
            if (sub) {
              path.subject = sub;
              level = "resources";
            }
          }
        }
      }
    }
  }
  return { path, level };
}

function handleHash() {
  const parsed = parseHash();
  state.path = parsed.path;
  state.level = parsed.level;
  state.shareCodes = parsed.shareCodes || [];
  state.currentFilter = "all";
  state.currentSort = "default";
  if (state.level === "faq") state.faqQuery = "";
  if (state.level === "resources" && state.path.subject)
    addRecent(state.path.subject);
  renderApp();
}
window.addEventListener("hashchange", handleHash);

function navFaculties() {
  location.hash = "";
}
function navPrograms(id) {
  location.hash = `/${id}`;
}
function navSemesters(id) {
  location.hash = `/${state.path.faculty}/${id}`;
}
function navSubjects(sem) {
  location.hash = `/${state.path.faculty}/${state.path.program}/${sem}`;
}
function navResources(code) {
  location.hash = `/${state.path.faculty}/${state.path.program}/${state.path.semester}/${code}`;
}
function navAbout() {
  location.hash = "/about";
}
function navFaq() {
  location.hash = "/faq";
}

function goBackOneLevel() {
  switch (state.level) {
    case "programs":
      return navFaculties();
    case "semesters":
      return navPrograms(state.path.faculty);
    case "subjects":
      return navSemesters(state.path.program);
    case "resources":
      return navSubjects(state.path.semester);
    case "about":
      return navFaculties();
    case "faq":
      return navFaculties();
    case "admin":
      return navFaculties();
    case "share":
      return navFaculties();
    default:
      return;
  }
}

const LEVEL_NAMES = {
  faculties: "Faculties",
  programs: "Programs",
  semesters: "Semesters",
  subjects: "Subjects",
  resources: "Resources",
  about: "About",
  admin: "Insights",
  share: "Shared",
  faq: "FAQ",
};
function getFaculty() {
  return state.path.faculty ? DATA.faculties[state.path.faculty] : null;
}
function getProgram() {
  const f = getFaculty();
  return f && state.path.program ? f.programs[state.path.program] : null;
}
function getSemester() {
  const p = getProgram();
  return p && state.path.semester !== null
    ? p.semesters.find((s) => s.semester === state.path.semester)
    : null;
}
function getItems(level) {
  if (level === "faculties")
    return Object.keys(DATA.faculties).map((k) => ({
      ...DATA.faculties[k],
      id: k,
    }));
  if (level === "programs") {
    const f = getFaculty();
    return f
      ? Object.keys(f.programs).map((k) => ({ ...f.programs[k], id: k }))
      : [];
  }
  if (level === "semesters") {
    const p = getProgram();
    return p ? p.semesters.map((s) => ({ ...s, id: s.semester })) : [];
  }
  if (level === "subjects") {
    const s = getSemester();
    return s ? s.subjects.map((sub) => ({ ...sub, id: sub.code })) : [];
  }
  return [];
}

function renderNav() {
  const items = getItems(state.level);
  E.navLabelText.textContent = LEVEL_NAMES[state.level] || "Items";
  if (state.level === "resources") {
    E.navList.innerHTML = `
      <button class="nav-btn active" data-action="back-to-subjects" type="button" aria-current="page">
        <i class="fas fa-arrow-left"></i>
        <span class="nav-text">Back to Subjects</span>
      </button>`;
    return;
  }
  if (
    ["about", "admin", "share", "faq"].includes(state.level) ||
    items.length === 0
  ) {
    E.navList.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 13px;">No items</div>`;
    return;
  }
  E.navList.innerHTML = items
    .map((item) => {
      const icon = item.icon || "fa-folder";
      let label = item.name || `Item ${item.id}`;
      let badge = "",
        action = "",
        dataId = "",
        isActive = false;
      if (state.level === "faculties") {
        badge = Object.keys(item.programs || {}).length;
        action = "programs";
        dataId = item.id;
        isActive = state.path.faculty === item.id;
      } else if (state.level === "programs") {
        badge = (item.semesters || []).length;
        action = "semesters";
        dataId = item.id;
        isActive = state.path.program === item.id;
      } else if (state.level === "semesters") {
        label = `Semester ${item.semester}`;
        badge = (item.subjects || []).length;
        action = "subjects";
        dataId = item.semester;
        isActive = state.path.semester === item.semester;
      } else if (state.level === "subjects") {
        badge = "📚";
        action = "resources";
        dataId = item.id;
        isActive = state.path.subject?.code === item.id;
      }
      return `<button class="nav-btn${isActive ? " active" : ""}"
              data-action="${action}"
              data-id="${escapeHtml(String(dataId))}"
              type="button" ${isActive ? 'aria-current="page"' : ""}>
      <i class="fas ${icon}"></i>
      <span class="nav-text">${escapeHtml(label)}</span>
      ${badge ? `<span class="badge">${badge}</span>` : ""}
    </button>`;
    })
    .join("");
}

function updateHeroControls() {
  if (!E.heroBackBtn) return;
  const showBack = !["faculties"].includes(state.level);
  E.heroBackBtn.hidden = !showBack;
}

function renderContent() {
  const isFullPage = ["about", "admin", "share", "faq"].includes(state.level);
  E.cardGrid.classList.toggle("about-mode", isFullPage);
  updateHeroControls();

  if (state.level === "about") {
    E.currentLevelDisplay.textContent = "About";
    E.currentItemDisplay.textContent = "";
    E.totalCount.textContent = "About";
    E.footerStats.textContent = "About";
    updateHero();
    E.contentArea.querySelector(".back-nav")?.remove();
    if (E.filters) E.filters.hidden = true;
    if (E.sortBar) E.sortBar.hidden = true;
    renderAbout();
    updateBreadcrumb();
    return;
  }

  if (state.level === "faq") {
    E.currentLevelDisplay.textContent = "FAQ";
    E.currentItemDisplay.textContent = "";
    E.totalCount.textContent = "FAQ";
    E.footerStats.textContent = "FAQ";
    updateHero();
    E.contentArea.querySelector(".back-nav")?.remove();
    if (E.filters) E.filters.hidden = true;
    if (E.sortBar) E.sortBar.hidden = true;
    renderFaq();
    updateBreadcrumb();
    return;
  }

  if (state.level === "admin") {
    E.currentLevelDisplay.textContent = "Insights";
    E.currentItemDisplay.textContent = "";
    E.totalCount.textContent = "Insights";
    E.footerStats.textContent = "Insights";
    updateHero();
    E.contentArea.querySelector(".back-nav")?.remove();
    if (E.filters) E.filters.hidden = true;
    if (E.sortBar) E.sortBar.hidden = true;
    renderAdmin();
    updateBreadcrumb();
    return;
  }

  if (state.level === "share") {
    E.currentLevelDisplay.textContent = "Shared with you";
    E.currentItemDisplay.textContent = "";
    E.totalCount.textContent = "Shared";
    E.footerStats.textContent = "Shared";
    updateHero();
    E.contentArea.querySelector(".back-nav")?.remove();
    if (E.filters) E.filters.hidden = true;
    if (E.sortBar) E.sortBar.hidden = true;
    renderShare();
    updateBreadcrumb();
    return;
  }

  const items = getItems(state.level);
  const levelName = LEVEL_NAMES[state.level] || "Items";
  const lower = levelName.toLowerCase();
  E.currentLevelDisplay.textContent = levelName;
  E.currentItemDisplay.textContent =
    items.length > 0 ? `(${items.length} ${lower})` : "";
  E.totalCount.textContent = `${items.length} ${lower}`;
  E.footerStats.textContent = `${items.length} ${lower}`;
  updateHero();

  E.contentArea.querySelector(".back-nav")?.remove();
  if (E.filters && state.level !== "resources") E.filters.hidden = true;
  if (E.sortBar && state.level !== "resources") E.sortBar.hidden = true;
  if (state.level !== "resources") E.cardGrid.style.gridTemplateColumns = "";

  if (state.level === "resources") {
    renderResources();
    return;
  }

  if (items.length === 0) {
    E.cardGrid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h3>No items found</h3></div>`;
    return;
  }

  E.cardGrid.innerHTML = items
    .map((item) => {
      const icon = item.icon || "fa-folder";
      let title = item.name || `Item ${item.id}`;
      let subtitle = "",
        badge = "",
        action = "",
        dataId = "";
      if (state.level === "faculties") {
        subtitle = item.subtitle || "Faculty";
        badge = Object.keys(item.programs || {}).length + " Programs";
        action = "programs";
        dataId = item.id;
      } else if (state.level === "programs") {
        subtitle = `${(item.semesters || []).length} Semesters`;
        badge = `${(item.semesters || []).length} Sem`;
        action = "semesters";
        dataId = item.id;
      } else if (state.level === "semesters") {
        title = `Semester ${item.semester}`;
        subtitle = `${(item.subjects || []).length} Subjects`;
        badge = `${(item.subjects || []).length} Subjects`;
        action = "subjects";
        dataId = item.semester;
      } else if (state.level === "subjects") {
        subtitle = item.code || "Subject";
        const total = getSubjectFileCount(item.code);
        const done = getDownloadCount(item.code);
        if (total > 0 && done > 0) badge = `${done}/${total} downloaded`;
        else if (total > 0) badge = `${total} files`;
        else badge = "Coming soon";
        action = "resources";
        dataId = item.id;
      }
      const isSubject = state.level === "subjects";
      const isFav = isSubject && isFavorite(item.code);
      const total = isSubject ? getSubjectFileCount(item.code) : 0;
      const done = isSubject ? getDownloadCount(item.code) : 0;
      const pct =
        total > 0 ? Math.min(100, Math.round((done / total) * 100)) : 0;
      return `<div class="card ${isSubject ? "subject-card" : ""}"
                 data-action="${action}"
                 data-id="${escapeHtml(String(dataId))}"
                 tabindex="0"
                 role="button">
      ${
        isSubject
          ? `
        <button class="fav-btn ${isFav ? "active" : ""}" data-fav="${escapeHtml(
              item.code
            )}"
                data-name="${escapeHtml(
                  item.name
                )}" aria-label="Toggle favorite" type="button">
          <i class="${isFav ? "fas" : "far"} fa-star"></i>
        </button>
        <button class="copy-link-btn" data-code="${escapeHtml(
          item.code
        )}" aria-label="Copy link" type="button">
          <i class="fas fa-link"></i>
        </button>`
          : ""
      }
      ${badge ? `<span class="card-badge">${badge}</span>` : ""}
      <div class="card-icon"><i class="fas ${icon}"></i></div>
      <div class="card-title">${escapeHtml(title)}</div>
      ${
        subtitle
          ? `<div class="card-subtitle">${escapeHtml(subtitle)}</div>`
          : ""
      }
      ${
        isSubject
          ? `
        <div class="card-tags">
          <span>📘 Syllabus</span><span>📝 Notes</span><span>📄 PYQs</span><span>📋 Assignments</span>
        </div>`
          : ""
      }
      ${
        isSubject && pct > 0
          ? `
        <div class="card-progress"><div class="card-progress-bar" style="width: ${pct}%"></div></div>`
          : ""
      }
    </div>`;
    })
    .join("");

  updateBreadcrumb();
  updateStrips();
}

function updateHero() {
  const lvl = state.level;
  if (lvl === "faculties") {
    E.heroTitle.innerHTML =
      'Welcome to <br /><span class="gradient-text">MU Digital Library</span>';
    E.heroSubtext.textContent =
      "Use the search bar above or browse via the sidebar.";
    E.subtitleDisplay.textContent = "Mid-West University";
  } else if (lvl === "programs") {
    const f = getFaculty();
    E.heroTitle.innerHTML = `${escapeHtml(
      f?.name || "Programs"
    )} <br /><span class="gradient-text">Explore Programs</span>`;
    E.heroSubtext.textContent = `Select a program under ${
      f?.name || "this faculty"
    }.`;
    E.subtitleDisplay.textContent = f?.name || "Mid-West University";
  } else if (lvl === "semesters") {
    const p = getProgram();
    E.heroTitle.innerHTML = `${escapeHtml(
      p?.name || "Semesters"
    )} <br /><span class="gradient-text">Choose a Semester</span>`;
    E.heroSubtext.textContent = "Select a semester to view subjects.";
    E.subtitleDisplay.textContent = p?.name || "Mid-West University";
  } else if (lvl === "subjects") {
    const p = getProgram();
    E.heroTitle.innerHTML = `Semester ${
      state.path.semester
    } <br /><span class="gradient-text">${escapeHtml(
      p?.name || "Subjects"
    )}</span>`;
    E.heroSubtext.textContent = "Select a subject to access resources.";
    E.subtitleDisplay.textContent = `${p?.name || ""} – Semester ${
      state.path.semester
    }`;
  } else if (lvl === "resources") {
    const s = state.path.subject;
    E.heroTitle.innerHTML = `${escapeHtml(
      s?.name || "Subject"
    )} <br /><span class="gradient-text">Resources</span>`;
    E.heroSubtext.textContent =
      "Access syllabus, notes, past papers, and assignments.";
    E.subtitleDisplay.textContent = s?.name || "Mid-West University";
  } else if (lvl === "about") {
    E.heroTitle.innerHTML =
      'About <br /><span class="gradient-text">MU Library</span>';
    E.heroSubtext.textContent =
      "Who we are, what we're building, and how to reach us.";
    E.subtitleDisplay.textContent = "About";
  } else if (lvl === "faq") {
    E.heroTitle.innerHTML =
      'Frequently <br /><span class="gradient-text">Asked Questions</span>';
    E.heroSubtext.textContent =
      "Quick answers about downloads, offline use, contributing, and privacy.";
    E.subtitleDisplay.textContent = "FAQ";
  } else if (lvl === "admin") {
    E.heroTitle.innerHTML =
      'Insights <br /><span class="gradient-text">for maintainers</span>';
    E.heroSubtext.textContent =
      "Local analytics — search log, empty searches, content gaps.";
    E.subtitleDisplay.textContent = "Maintainer tools";
  } else if (lvl === "share") {
    E.heroTitle.innerHTML =
      'Someone shared <br /><span class="gradient-text">their favorites</span>';
    E.heroSubtext.textContent =
      "Add these subjects to your favorites to keep track.";
    E.subtitleDisplay.textContent = "Shared favorites";
  }
}

function sortItems(items, sort) {
  const copy = [...items];
  if (sort === "title") copy.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "year-new")
    copy.sort((a, b) => (b.year || 0) - (a.year || 0));
  else if (sort === "year-old")
    copy.sort((a, b) => (a.year || 0) - (b.year || 0));
  return copy;
}

function renderResources() {
  const subject = state.path.subject;
  if (!subject) {
    E.cardGrid.style.gridTemplateColumns = "";
    E.cardGrid.innerHTML = `<div class="empty-state"><h3>No subject selected</h3></div>`;
    return;
  }
  const files = RESOURCES[subject.code] || {
    syllabus: [],
    notes: [],
    pyq: [],
    assignments: [],
  };
  const groups = [
    {
      key: "syllabus",
      icon: "fa-book-open",
      label: "Syllabus",
      items: files.syllabus || [],
    },
    {
      key: "notes",
      icon: "fa-file-alt",
      label: "Notes",
      items: files.notes || [],
    },
    {
      key: "pyq",
      icon: "fa-file-pdf",
      label: "Past Papers & Solutions",
      items: files.pyq || [],
    },
    {
      key: "assignments",
      icon: "fa-tasks",
      label: "Assignments",
      items: files.assignments || [],
    },
  ];

  if (E.filters) {
    E.filters.hidden = false;
    E.filters.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle(
        "active",
        chip.dataset.filter === state.currentFilter
      );
    });
  }
  if (E.sortBar) {
    E.sortBar.hidden = false;
    E.sortBar.querySelectorAll(".sort-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.sort === state.currentSort);
    });
  }

  const visible =
    state.currentFilter === "all"
      ? groups
      : groups.filter((g) => g.key === state.currentFilter);
  const totalFiles = groups.reduce((sum, g) => sum + g.items.length, 0);

  if (totalFiles === 0) {
    E.cardGrid.style.gridTemplateColumns = "";
    E.cardGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <i class="fas fa-clock"></i>
        <h3>Resources coming soon</h3>
        <p>Files for <strong>${escapeHtml(
          subject.name
        )}</strong> haven't been uploaded yet.</p>
        <button class="no-results-cta" type="button" data-contribute>
          Have resources? Send them →
        </button>
      </div>`;
    updateBreadcrumb();
    return;
  }

  const done = getDownloadCount(subject.code);
  const pct = Math.round((done / totalFiles) * 100);
  const progressBanner =
    done > 0
      ? `
    <div class="subject-progress">
      <div class="subject-progress-info">
        <i class="fas fa-circle-check"></i>
        <span>You've downloaded <strong>${done}</strong> of <strong>${totalFiles}</strong> files</span>
      </div>
      <div class="subject-progress-track"><div class="subject-progress-fill" style="width: ${pct}%"></div></div>
    </div>`
      : "";

  E.cardGrid.style.gridTemplateColumns = "1fr";
  E.cardGrid.innerHTML =
    progressBanner +
    visible
      .map((g) => {
        const sorted = sortItems(g.items, state.currentSort);
        const isCollapsed = isGroupCollapsed(g.key);
        return `
    <div class="res-group ${isCollapsed ? "collapsed" : ""}" data-group-key="${
          g.key
        }">
      <div class="res-group-head" role="button" tabindex="0" aria-expanded="${!isCollapsed}">
        <i class="fas ${g.icon}"></i>
        <h4>${g.label}</h4>
        <span class="count">${g.items.length}</span>
        <i class="fas fa-chevron-down res-chevron"></i>
      </div>
      <div class="res-list">
        ${
          g.items.length > 0
            ? sorted
                .map((file) => {
                  const reportHref = `mailto:${REPORT_EMAIL}?subject=${encodeURIComponent(
                    "Broken link: " + file.title
                  )}`;
                  const metaParts = [];
                  if (file.year) metaParts.push(String(file.year));
                  if (file.author) metaParts.push(file.author);
                  if (file.updated)
                    metaParts.push("Updated " + fmtDate(file.updated));
                  const meta = metaParts.map(escapeHtml).join(" · ");
                  const already = isDownloaded(subject.code, file.url);
                  return `
          <div class="res-item${already ? " is-downloaded" : ""}">
            <i class="fas fa-file-pdf"></i>
            <div class="res-info">
              <div class="res-title">
                ${escapeHtml(file.title)}
                ${
                  file.verified
                    ? '<i class="fas fa-check-circle verified-badge"></i>'
                    : ""
                }
                ${
                  already
                    ? '<i class="fas fa-circle-check downloaded-badge"></i>'
                    : ""
                }
              </div>
              ${meta ? `<div class="res-meta">${meta}</div>` : ""}
            </div>
            <div class="res-actions">
              <button class="res-btn icon-only copy-file-link" data-url="${escapeHtml(
                file.url
              )}"
                      data-title="${escapeHtml(
                        file.title
                      )}" type="button" title="Copy link">
                <i class="fas fa-link"></i>
              </button>
              <a class="res-btn icon-only report-link" href="${reportHref}" title="Report broken link">
                <i class="fas fa-flag"></i>
              </a>
              <button class="res-btn view" data-url="${escapeHtml(
                file.url
              )}" type="button" title="Open in new tab">
                <i class="fas fa-eye"></i> <span class="res-btn-label">View</span>
              </button>
              <button class="res-btn download"
                      data-url="${escapeHtml(file.url)}"
                      data-subject="${escapeHtml(subject.name)}"
                      data-code="${escapeHtml(subject.code)}"
                      data-title="${escapeHtml(file.title)}"
                      type="button"
                      title="Download PDF">
                <i class="fas fa-download"></i> <span class="res-btn-label">Download</span>
              </button>
            </div>
          </div>`;
                })
                .join("")
            : `<div class="res-empty"><i class="fas fa-clock"></i> Coming soon</div>`
        }
      </div>
    </div>`;
      })
      .join("");

  updateBreadcrumb();
}

function updateBreadcrumb() {
  if (["about", "admin", "share", "faq"].includes(state.level)) {
    const label =
      state.level === "about"
        ? "About"
        : state.level === "admin"
        ? "Insights"
        : state.level === "faq"
        ? "FAQ"
        : "Shared with you";
    E.breadcrumb.innerHTML = `
      <span class="breadcrumb-item" data-action="faculties">🏛️ Faculties</span>
      <span class="breadcrumb-item active">${label}</span>`;
    return;
  }
  const items = [{ label: "🏛️ Faculties", level: "faculties" }];
  if (state.path.faculty)
    items.push({
      label: DATA.faculties[state.path.faculty]?.name || state.path.faculty,
      level: "programs",
    });
  if (state.path.program)
    items.push({
      label: getProgram()?.name || state.path.program,
      level: "semesters",
    });
  if (state.path.semester !== null)
    items.push({ label: `Semester ${state.path.semester}`, level: "subjects" });
  if (state.level === "resources" && state.path.subject)
    items.push({ label: state.path.subject.name, level: "resources" });
  E.breadcrumb.innerHTML = items
    .map((item, i) => {
      const isActive = i === items.length - 1;
      return `<span class="breadcrumb-item ${
        isActive ? "active" : ""
      }" data-action="${item.level}">${escapeHtml(item.label)}</span>`;
    })
    .join("");
}

function renderShare() {
  const codes = state.shareCodes || [];
  const valid = codes
    .map((c) => ({ code: c, found: findSubjectByCode(c) }))
    .filter((x) => x.found);
  if (valid.length === 0) {
    E.cardGrid.innerHTML = `<div class="share-page"><div class="empty-state"><i class="fas fa-link-slash"></i><h3>No valid subjects in this link</h3></div></div>`;
    return;
  }
  const list = valid
    .map(({ code, found }) => {
      const s = found.subject;
      return `<div class="share-item">
        <div class="share-item-icon"><i class="fas fa-book"></i></div>
        <div class="share-item-info">
          <div class="share-item-name">${escapeHtml(s.name)}</div>
          <div class="share-item-meta">${escapeHtml(code)} · Semester ${
        found.semester
      }</div>
        </div>
        <button class="share-item-btn" data-share-go="${escapeHtml(
          code
        )}" type="button"><i class="fas fa-arrow-right"></i></button>
      </div>`;
    })
    .join("");
  E.cardGrid.innerHTML = `
    <div class="share-page">
      <div class="share-hero">
        <div class="share-hero-icon"><i class="fas fa-share-nodes"></i></div>
        <h2>Someone shared <span class="gradient-text">${valid.length} subject${
    valid.length > 1 ? "s" : ""
  }</span> with you</h2>
        <p>Add them to your favorites so you can find them quickly next time.</p>
      </div>
      <div class="share-list">${list}</div>
      <div class="share-actions">
        <button class="share-add-all" type="button" data-share-add-all><i class="fas fa-star"></i> Add all to my favorites</button>
        <button class="share-skip" type="button" data-share-skip>Skip</button>
      </div>
    </div>`;
}

// ================================================================
//  ABOUT PAGE (in-SPA, route: #/about)
// ================================================================
function renderAbout() {
  const goalItems = ABOUT.goals
    .map(
      (g, i) => `
    <div class="goal-item reveal" style="--delay: ${i * 90}ms">
      <div class="goal-number">0${i + 1}</div>
      <div class="goal-icon"><i class="fas ${g.icon}"></i></div>
      <div class="goal-content"><h4>${escapeHtml(g.title)}</h4><p>${escapeHtml(
        g.desc
      )}</p></div>
    </div>`
    )
    .join("");

  const teamItems = ABOUT.team
    .map((m, i) => {
      const initials = m.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
      const avatar = m.avatar
        ? `<img src="${escapeHtml(m.avatar)}" alt="${escapeHtml(m.name)}" />`
        : `<span>${escapeHtml(initials)}</span>`;
      return `<div class="member reveal" style="--delay: ${i * 110}ms">
        <div class="member-avatar">${avatar}</div>
        <h4 class="member-name">${escapeHtml(m.name)}</h4>
        <p class="member-role">${escapeHtml(m.role)}</p>
        <p class="member-bio">${escapeHtml(m.bio)}</p>
      </div>`;
    })
    .join("");

  const contactItems = ABOUT.contacts
    .map(
      (c) => `
    <a class="contact-pill" href="${escapeHtml(c.href)}" ${
        c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""
      }>
      <i class="fas ${c.icon}"></i><span>${escapeHtml(c.label)}</span>
    </a>`
    )
    .join("");

  E.cardGrid.innerHTML = `
    <div class="about-page">
      <section class="about-hero-new">
        <div class="about-orbs"><span class="orb orb-1"></span><span class="orb orb-2"></span><span class="orb orb-3"></span></div>
        <div class="about-hero-inner">
          <span class="about-eyebrow"><span class="about-dot"></span> About</span>
          <h1 class="about-title">By students,<br /><span class="gradient-text">for students.</span></h1>
          <p class="about-lede">${escapeHtml(ABOUT.mission)}</p>
        </div>
      </section>
      <section class="about-block">
        <header class="about-block-head">
          <span class="about-eyebrow-sm">01 — What we're building</span>
          <h2>Four things we care about</h2>
        </header>
        <div class="goals-list">${goalItems}</div>
      </section>
      <section class="about-block">
        <header class="about-block-head">
          <span class="about-eyebrow-sm">02 — The people</span>
          <h2>Who's behind MU Library</h2>
        </header>
        <div class="team-row">${teamItems}</div>
      </section>
      <section class="about-block">
        <header class="about-block-head">
          <span class="about-eyebrow-sm">03 — Reach us</span>
          <h2>Say hello</h2>
        </header>
        <div class="contact-row">${contactItems}</div>
      </section>
      <section class="about-cta">
        <div class="cta-glow"></div>
        <div class="cta-inner">
          <h3>${escapeHtml(ABOUT.contribute.title)}</h3>
          <p>${escapeHtml(ABOUT.contribute.desc)}</p>
          <button class="cta-button" type="button" data-contribute>
            <i class="fas fa-paper-plane"></i> ${escapeHtml(
              ABOUT.contribute.cta
            )}
          </button>
        </div>
      </section>
      <p class="about-thanks-new"><i class="fas fa-heart"></i> ${escapeHtml(
        ABOUT.thanks
      )}</p>
    </div>`;

  requestAnimationFrame(() => {
    E.cardGrid
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("reveal-in"));
  });
}

// ================================================================
//  FAQ PAGE (in-SPA, route: #/faq)
// ================================================================
function renderFaq() {
  const q = state.faqQuery || "";
  let shown = 0;

  const itemsHtml = FAQ.map((f, i) => {
    const match =
      !q ||
      f.q.toLowerCase().includes(q) ||
      f.a
        .toLowerCase()
        .replace(/<[^>]+>/g, "")
        .includes(q);
    if (match) shown++;
    const open = q && match ? " open" : "";
    return `
    <details class="faq-item" data-faq-index="${i}"${open} ${
      match ? "" : "hidden"
    }>
      <summary>
        <span class="faq-item-icon"><i class="fas ${f.icon}"></i></span>
        <span class="faq-item-q">${escapeHtml(f.q)}</span>
        <i class="fas fa-chevron-down faq-item-chevron"></i>
      </summary>
      <div class="faq-item-body">${f.a}</div>
    </details>`;
  }).join("");

  E.cardGrid.innerHTML = `
    <div class="faq-page">
      <section class="faq-hero">
        <div class="faq-hero-icon"><i class="fas fa-circle-question"></i></div>
        <h1>Frequently asked <span class="gradient-text">questions</span></h1>
        <p>Everything you need to know about MU Library — downloads, offline use, contributing, and privacy.</p>
        <div class="faq-search">
          <i class="fas fa-magnifying-glass"></i>
          <input type="text" id="faqSearchInput" placeholder="Search FAQs…" autocomplete="off" aria-label="Search FAQs" value="${escapeHtml(
            q
          )}" />
        </div>
      </section>

      <div class="faq-list" id="faqList">${itemsHtml}</div>

      <p class="faq-empty" id="faqEmpty" ${shown > 0 ? "hidden" : ""}>
        <i class="fas fa-magnifying-glass"></i>
        No matching questions. Try a different search term.
      </p>

      <section class="faq-footer-cta">
        <h3>Still have a question?</h3>
        <p>Our chat assistant can help — or reach out and we'll get back to you.</p>
        <div class="faq-cta-buttons">
          <a class="faq-cta-btn primary" href="#/about">
            <i class="fas fa-circle-info"></i> Contact us
          </a>
          <button class="faq-cta-btn ghost" type="button" id="faqOpenChat">
            <i class="fas fa-robot"></i> Ask the assistant
          </button>
        </div>
      </section>
    </div>`;

  // --- Live search ---
  const input = document.getElementById("faqSearchInput");
  const list = document.getElementById("faqList");
  const empty = document.getElementById("faqEmpty");

  const filterFaqs = debounce((raw) => {
    state.faqQuery = raw.trim().toLowerCase();
    let visible = 0;
    list.querySelectorAll(".faq-item").forEach((el) => {
      const idx = parseInt(el.dataset.faqIndex);
      const item = FAQ[idx];
      const bodyText = item.a.replace(/<[^>]+>/g, "").toLowerCase();
      const match =
        !state.faqQuery ||
        item.q.toLowerCase().includes(state.faqQuery) ||
        bodyText.includes(state.faqQuery);
      el.hidden = !match;
      if (match) {
        visible++;
        if (state.faqQuery) el.open = true;
      }
    });
    empty.hidden = visible > 0;
  }, 150);

  input?.addEventListener("input", (e) => filterFaqs(e.target.value));

  // --- Open chat ---
  document.getElementById("faqOpenChat")?.addEventListener("click", () => {
    const fab = document.getElementById("chatFab");
    if (fab) fab.click();
  });

  // --- Exclusive accordion ---
  list?.addEventListener(
    "toggle",
    (e) => {
      const open = e.target;
      if (open.open) {
        list.querySelectorAll("details[open]").forEach((d) => {
          if (d !== open) d.open = false;
        });
      }
    },
    true
  );
}

// ================================================================
//  ADMIN PAGE
// ================================================================
function computeSiteStats() {
  let subjects = 0,
    withFiles = 0,
    totalFiles = 0;
  const missing = [];
  Object.entries(DATA.faculties).forEach(([fk, f]) => {
    Object.entries(f.programs).forEach(([pk, p]) => {
      p.semesters.forEach((sem) => {
        sem.subjects.forEach((sub) => {
          subjects++;
          const n = getSubjectFileCount(sub.code);
          if (n > 0) {
            withFiles++;
            totalFiles += n;
          } else
            missing.push({
              faculty: fk,
              program: pk,
              semester: sem.semester,
              code: sub.code,
              name: sub.name,
            });
        });
      });
    });
  });
  return { subjects, withFiles, totalFiles, missing };
}

function renderAdmin() {
  const stats = computeSiteStats();
  const log = state.searchLog;
  const counts = {};
  log.forEach((e) => {
    counts[e.q] = (counts[e.q] || 0) + 1;
  });
  const topQueries = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);
  const emptySet = new Map();
  log
    .filter((e) => e.n === 0)
    .forEach((e) => {
      emptySet.set(e.q, (emptySet.get(e.q) || 0) + 1);
    });
  const emptyQueries = [...emptySet.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 25);
  const pctCoverage =
    stats.subjects > 0
      ? Math.round((stats.withFiles / stats.subjects) * 100)
      : 0;

  const renderQueryList = (arr) =>
    arr.length === 0
      ? `<div class="insight-empty">Nothing yet</div>`
      : arr
          .map(
            ([q, n]) =>
              `<div class="insight-row"><span class="insight-q">${escapeHtml(
                q
              )}</span><span class="insight-n">${n}×</span></div>`
          )
          .join("");

  const missingList = stats.missing
    .slice(0, 40)
    .map(
      (m) => `
    <a class="missing-row" href="#/${m.faculty}/${m.program}/${m.semester}/${
        m.code
      }">
      <span class="missing-code">${escapeHtml(m.code)}</span>
      <span class="missing-name">${escapeHtml(m.name)}</span>
      <span class="missing-loc">${escapeHtml(m.program)} · Sem ${
        m.semester
      }</span>
    </a>`
    )
    .join("");

  E.cardGrid.innerHTML = `
    <div class="admin-page">
      <div class="admin-hero">
        <div class="admin-hero-icon"><i class="fas fa-chart-line"></i></div>
        <h2>Insights for maintainers</h2>
        <p>Local analytics from this device only.</p>
      </div>
      <div class="insight-stats">
        <div class="insight-stat"><div class="insight-stat-value">${
          stats.subjects
        }</div><div class="insight-stat-label">Subjects defined</div></div>
        <div class="insight-stat"><div class="insight-stat-value">${
          stats.withFiles
        }</div><div class="insight-stat-label">With files</div></div>
        <div class="insight-stat"><div class="insight-stat-value">${pctCoverage}%</div><div class="insight-stat-label">Coverage</div></div>
        <div class="insight-stat"><div class="insight-stat-value">${
          stats.totalFiles
        }</div><div class="insight-stat-label">Files total</div></div>
      </div>
      <section class="insight-block">
        <header class="insight-head"><h3><i class="fas fa-magnifying-glass"></i> Searches with no results</h3>
        <span class="insight-sub">Content users look for but can't find. Add these first.</span></header>
        <div class="insight-list">${renderQueryList(emptyQueries)}</div>
      </section>
      <section class="insight-block">
        <header class="insight-head"><h3><i class="fas fa-fire"></i> Top searches</h3></header>
        <div class="insight-list">${renderQueryList(topQueries)}</div>
      </section>
      <section class="insight-block">
        <header class="insight-head"><h3><i class="fas fa-folder-open"></i> Subjects missing files</h3>
        <span class="insight-sub">${stats.missing.length} subject${
    stats.missing.length === 1 ? "" : "s"
  } with no content yet.</span></header>
        <div class="missing-list">${missingList}</div>
      </section>
      <section class="insight-block">
        <header class="insight-head"><h3><i class="fas fa-database"></i> Your device's data</h3></header>
        <div class="insight-actions">
          <button class="insight-btn" type="button" data-clear-search-log><i class="fas fa-broom"></i> Clear search log (${
            state.searchLog.length
          })</button>
          <button class="insight-btn" type="button" data-copy-insights><i class="fas fa-copy"></i> Copy insights as text</button>
        </div>
      </section>
    </div>`;
}

function buildInsightsText() {
  const stats = computeSiteStats();
  const log = state.searchLog;
  const counts = {};
  log.forEach((e) => {
    counts[e.q] = (counts[e.q] || 0) + 1;
  });
  const top = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  const emptySet = new Map();
  log
    .filter((e) => e.n === 0)
    .forEach((e) => emptySet.set(e.q, (emptySet.get(e.q) || 0) + 1));
  const empty = [...emptySet.entries()].sort((a, b) => b[1] - a[1]);
  return [
    `MU Library — Insights (${new Date().toISOString()})`,
    ``,
    `COVERAGE`,
    `  Subjects defined: ${stats.subjects}`,
    `  With files: ${stats.withFiles}`,
    `  Missing files: ${stats.missing.length}`,
    `  Total files: ${stats.totalFiles}`,
    ``,
    `TOP SEARCHES`,
    ...top.map(([q, n]) => `  ${n}× ${q}`),
    ``,
    `EMPTY SEARCHES`,
    ...empty.map(([q, n]) => `  ${n}× ${q}`),
  ].join("\n");
}

// ================================================================
//  CONTRIBUTE MODAL
// ================================================================
let contributeFiles = [];

function ensureContributeModal() {
  if (document.getElementById("contribModal"))
    return document.getElementById("contribModal");
  const el = document.createElement("div");
  el.className = "contrib-overlay";
  el.id = "contribModal";
  el.hidden = true;
  el.innerHTML = `
    <div class="contrib-panel" role="dialog" aria-modal="true" aria-labelledby="contribTitle">
      <button class="contrib-close" type="button" aria-label="Close">×</button>
      <div class="contrib-head">
        <div class="contrib-icon"><i class="fas fa-hand-holding-heart"></i></div>
        <h3 id="contribTitle">Share your resources</h3>
        <p>Notes, past papers, syllabi — anything helps. We'll credit you on the site.</p>
      </div>
      <form class="contrib-form" novalidate>
        <div class="contrib-row">
          <label><span>Your name <em>(optional)</em></span><input type="text" name="name" placeholder="e.g. Sita Rai" /></label>
          <label><span>Email <em>(optional)</em></span><input type="email" name="email" placeholder="you@example.com" /></label>
        </div>
        <div class="contrib-row">
          <label><span>Subject <em>(required)</em></span><input type="text" name="subject" placeholder="e.g. CE421 — Dynamics" required /></label>
          <label><span>Semester</span><input type="text" name="semester" placeholder="e.g. 2" /></label>
        </div>
        <label class="contrib-full"><span>Message <em>(optional)</em></span><textarea name="message" rows="3" placeholder="Anything we should know?"></textarea></label>
        <div class="contrib-drop" id="contribDrop">
          <i class="fas fa-cloud-arrow-up"></i>
          <p>Drop files here, or <button type="button" class="contrib-browse">browse</button></p>
          <small>PDF, DOC, images · up to ${CONTRIBUTE.maxFiles} files · ${CONTRIBUTE.maxSizeMB} MB each</small>
          <input type="file" id="contribFileInput" multiple hidden />
        </div>
        <div class="contrib-files" id="contribFiles"></div>
        <div class="contrib-note">
          <i class="fas fa-circle-info"></i>
          <span>We'll open your email app with all details prefilled — just attach the selected files and send.</span>
        </div>
        <button type="submit" class="contrib-submit"><i class="fas fa-paper-plane"></i> Send resources</button>
      </form>
    </div>`;
  document.body.appendChild(el);

  const drop = el.querySelector("#contribDrop");
  const fileInput = el.querySelector("#contribFileInput");
  const browseBtn = el.querySelector(".contrib-browse");
  const closeBtn = el.querySelector(".contrib-close");
  const form = el.querySelector(".contrib-form");

  closeBtn.addEventListener("click", closeContributeModal);
  el.addEventListener("click", (e) => {
    if (e.target === el) closeContributeModal();
  });
  browseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
  });
  fileInput.addEventListener("change", () =>
    addContributeFiles(fileInput.files)
  );

  ["dragenter", "dragover"].forEach((evt) =>
    drop.addEventListener(evt, (e) => {
      e.preventDefault();
      drop.classList.add("dragging");
    })
  );
  ["dragleave", "drop"].forEach((evt) =>
    drop.addEventListener(evt, (e) => {
      e.preventDefault();
      drop.classList.remove("dragging");
    })
  );
  drop.addEventListener("drop", (e) => {
    if (e.dataTransfer?.files?.length) addContributeFiles(e.dataTransfer.files);
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitContribution(form);
  });

  document.addEventListener("keydown", (e) => {
    if (el.hidden) return;
    if (e.key === "Escape") closeContributeModal();
    else if (e.key === "Tab") trapFocus(el.querySelector(".contrib-panel"), e);
  });
  return el;
}

function addContributeFiles(fileList) {
  const incoming = Array.from(fileList || []);
  for (const f of incoming) {
    if (contributeFiles.length >= CONTRIBUTE.maxFiles) {
      showToast(`Max ${CONTRIBUTE.maxFiles} files`, "error");
      break;
    }
    if (f.size > CONTRIBUTE.maxSizeMB * 1024 * 1024) {
      showToast(`"${f.name}" is over ${CONTRIBUTE.maxSizeMB} MB`, "error");
      continue;
    }
    if (contributeFiles.some((x) => x.name === f.name && x.size === f.size))
      continue;
    contributeFiles.push(f);
  }
  renderContributeFiles();
}

function renderContributeFiles() {
  const list = document.getElementById("contribFiles");
  if (!list) return;
  if (!contributeFiles.length) {
    list.innerHTML = "";
    return;
  }
  list.innerHTML = contributeFiles
    .map(
      (f, i) => `
    <div class="contrib-file">
      <i class="fas fa-file"></i>
      <span class="contrib-file-name">${escapeHtml(f.name)}</span>
      <span class="contrib-file-size">${fmtSize(f.size)}</span>
      <button type="button" class="contrib-file-remove" data-idx="${i}" aria-label="Remove file"><i class="fas fa-times"></i></button>
    </div>`
    )
    .join("");
  list.querySelectorAll(".contrib-file-remove").forEach((btn) => {
    btn.addEventListener("click", () => {
      contributeFiles.splice(parseInt(btn.dataset.idx), 1);
      renderContributeFiles();
    });
  });
}

function openContributeModal() {
  const el = ensureContributeModal();
  contributeFiles = [];
  renderContributeFiles();
  el.querySelector(".contrib-form").reset();
  el.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => el.classList.add("open"));
  setTimeout(() => el.querySelector('input[name="subject"]')?.focus(), 120);
}

function closeContributeModal() {
  const el = document.getElementById("contribModal");
  if (!el) return;
  el.classList.remove("open");
  setTimeout(() => {
    el.hidden = true;
    document.body.style.overflow = "";
  }, 180);
}

async function submitContribution(form) {
  const fd = new FormData(form);
  const name = (fd.get("name") || "").toString().trim();
  const email = (fd.get("email") || "").toString().trim();
  const subject = (fd.get("subject") || "").toString().trim();
  const semester = (fd.get("semester") || "").toString().trim();
  const message = (fd.get("message") || "").toString().trim();

  if (!subject) {
    showToast("Please add a subject", "error");
    form.querySelector('input[name="subject"]')?.focus();
    return;
  }
  if (contributeFiles.length === 0) {
    showToast("Pick at least one file", "error");
    return;
  }

  const lines = [
    "Hi MU Library team,",
    "",
    "I'd like to contribute resources.",
    "",
    name ? `Name: ${name}` : null,
    email ? `Email: ${email}` : null,
    `Subject: ${subject}`,
    semester ? `Semester: ${semester}` : null,
    "",
    message ? `Message:\n${message}\n` : null,
    "Files (please attach in this email):",
    ...contributeFiles.map((f) => `  • ${f.name} (${fmtSize(f.size)})`),
    "",
    "Thanks!",
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${CONTRIBUTE.email}?subject=${encodeURIComponent(
    "Resource contribution — " + subject
  )}&body=${encodeURIComponent(lines)}`;
  window.location.href = mailto;
  setTimeout(() => {
    showToast("Opening your email app", "info", "fa-envelope");
    closeContributeModal();
  }, 400);
}

function closeModal() {
  if (!E.modal) return;
  E.modal.hidden = true;
  document.body.style.overflow = "";
}
E.modal?.addEventListener("click", (e) => {
  if (e.target === E.modal) closeModal();
});
E.modalClose?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && E.modal && !E.modal.hidden) closeModal();
  if (E.modal && !E.modal.hidden && e.key === "Tab") trapFocus(E.modal, e);
});

// ================================================================
//  EVENT DELEGATION
// ================================================================

E.navList?.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-btn");
  if (!btn) return;
  const { action, id } = btn.dataset;
  if (action === "back-to-subjects") navSubjects(state.path.semester);
  else if (action === "programs") navPrograms(id);
  else if (action === "semesters") navSemesters(id);
  else if (action === "subjects") navSubjects(id);
  else if (action === "resources") navResources(id);

  if (window.innerWidth <= 768) toggleSidebar(false);
});

E.filters?.addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  state.currentFilter = chip.dataset.filter;
  renderResources();
});
E.sortBar?.addEventListener("click", (e) => {
  const chip = e.target.closest(".sort-chip");
  if (!chip) return;
  state.currentSort = chip.dataset.sort;
  renderResources();
});

document.addEventListener("click", (e) => {
  const header = e.target.closest(".strip-header[data-strip-toggle]");
  if (!header) return;
  if (e.target.closest("button")) return;
  toggleStrip(header.dataset.stripToggle);
});

document.addEventListener("click", (e) => {
  const head = e.target.closest(".res-group-head");
  if (!head) return;
  const group = head.closest(".res-group");
  if (!group) return;
  const key = group.dataset.groupKey;
  if (!key) return;
  toggleGroup(key, group);
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const stripHead = e.target.closest(".strip-header[data-strip-toggle]");
  if (stripHead) {
    e.preventDefault();
    stripHead.click();
    return;
  }
  const groupHead = e.target.closest(".res-group-head");
  if (groupHead) {
    e.preventDefault();
    groupHead.click();
    return;
  }
});

E.cardGrid?.addEventListener("click", (e) => {
  if (e.target.closest("[data-clear-search-log]")) {
    clearSearchLog();
    renderAdmin();
    return;
  }
  if (e.target.closest("[data-copy-insights]")) {
    copyToClipboard(buildInsightsText(), "Insights copied");
    return;
  }

  const shareGo = e.target.closest("[data-share-go]");
  if (shareGo) {
    const code = shareGo.dataset.shareGo;
    const found = findSubjectByCode(code);
    if (found)
      location.hash = `/${found.faculty}/${found.program}/${found.semester}/${code}`;
    return;
  }
  if (e.target.closest("[data-share-add-all]")) {
    addSharedToFavorites(state.shareCodes);
    location.hash = "";
    return;
  }
  if (e.target.closest("[data-share-skip]")) {
    location.hash = "";
    return;
  }

  const contributeBtn = e.target.closest("[data-contribute]");
  if (contributeBtn) {
    e.preventDefault();
    openContributeModal();
    return;
  }

  const fav = e.target.closest(".fav-btn");
  if (fav) {
    e.stopPropagation();
    toggleFavorite(fav.dataset.fav, fav.dataset.name);
    return;
  }

  const copyBtn = e.target.closest(".copy-link-btn");
  if (copyBtn) {
    e.stopPropagation();
    const code = copyBtn.dataset.code;
    const url = `${location.origin}${location.pathname}#${state.path.faculty}/${state.path.program}/${state.path.semester}/${code}`;
    copyToClipboard(url, "Link copied to clipboard");
    return;
  }

  const copyFile = e.target.closest(".copy-file-link");
  if (copyFile) {
    e.stopPropagation();
    const url = safeUrl(copyFile.dataset.url);
    if (!url) return showToast("Invalid link", "error");
    copyToClipboard(url, "File link copied");
    return;
  }

  const viewBtn = e.target.closest(".res-btn.view");
  if (viewBtn) {
    e.stopPropagation();
    const safe = safeUrl(viewBtn.dataset.url);
    if (!safe) return showToast("Invalid link", "error");
    window.open(safe, "_blank", "noopener");
    return;
  }

  const dlBtn = e.target.closest(".res-btn.download");
  if (dlBtn) {
    e.stopPropagation();
    const url = dlBtn.dataset.url;
    const safe = safeUrl(url);
    if (!safe) return showToast("Invalid link", "error");
    const subjectCode = dlBtn.dataset.code || "";
    const subjectName = dlBtn.dataset.subject || "Resource";
    const title = dlBtn.dataset.title || "File";
    const ext = (url.split("?")[0].split(".").pop() || "pdf").toLowerCase();
    const filename = `${subjectName} - ${title}.${ext}`
      .replace(/[\\/:*?"<>|]/g, "_")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);
    (async () => {
      try {
        const res = await fetch(safe, { mode: "cors" });
        if (!res.ok) throw new Error("Network response not ok");
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
        showToast(`Downloading "${filename}"`, "success", "fa-download");
      } catch {
        const a = document.createElement("a");
        a.href = safe;
        a.download = filename;
        a.target = "_blank";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
        showToast(`Opening "${title}"`, "info", "fa-download");
      } finally {
        recordDownload(subjectCode, url);
        if (state.level === "resources") renderResources();
      }
    })();
    return;
  }

  const card = e.target.closest(".card");
  if (!card || card.classList.contains("resource-card")) return;
  const { action, id } = card.dataset;
  if (action === "programs") navPrograms(id);
  else if (action === "semesters") navSemesters(id);
  else if (action === "subjects") navSubjects(id);
  else if (action === "resources") navResources(id);
});

async function copyToClipboard(text, msg = "Copied") {
  try {
    await navigator.clipboard.writeText(text);
    showToast(msg, "success", "fa-link");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast(msg, "success", "fa-link");
  }
}

E.cardGrid?.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  if (e.target.closest("button, a, input, textarea, select")) return;
  const card = e.target.closest(".card:not(.resource-card)");
  if (!card) return;
  e.preventDefault();
  card.click();
});

E.breadcrumb?.addEventListener("click", (e) => {
  const item = e.target.closest(".breadcrumb-item");
  if (!item || item.classList.contains("active")) return;
  const { action } = item.dataset;
  if (action === "faculties") navFaculties();
  else if (action === "programs") navPrograms(state.path.faculty);
  else if (action === "semesters") navSemesters(state.path.program);
  else if (action === "subjects") navSubjects(state.path.semester);
});

document.addEventListener("click", (e) => {
  const heroBack = e.target.closest("#heroBackBtn");
  if (heroBack) {
    e.preventDefault();
    goBackOneLevel();
    return;
  }

  if (e.target.closest("#footerBackToTop")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const contributeBtn = e.target.closest("[data-contribute]");
  if (contributeBtn) {
    e.preventDefault();
    openContributeModal();
    return;
  }

  const aboutBtn = e.target.closest("[data-about]");
  if (aboutBtn) {
    e.preventDefault();
    navAbout();
    if (window.innerWidth <= 768) toggleSidebar(false);
    return;
  }

  const faqBtn = e.target.closest("[data-faq]");
  if (faqBtn) {
    e.preventDefault();
    navFaq();
    if (window.innerWidth <= 768) toggleSidebar(false);
    return;
  }

  const removeBtn = e.target.closest(".chip-remove");
  if (removeBtn) {
    e.stopPropagation();
    e.preventDefault();
    const code = removeBtn.dataset.remove;
    if (code) removeFavorite(code);
    return;
  }

  const chip = e.target.closest(".strip-chip");
  if (chip && chip.dataset.code) {
    const found = findSubjectByCode(chip.dataset.code);
    if (found)
      location.hash = `/${found.faculty}/${found.program}/${found.semester}/${found.code}`;
    return;
  }

  const clear = e.target.closest(".strip-clear");
  if (clear) {
    e.stopPropagation();
    if (clear.dataset.clear === "favorites") clearFavorites();
    else if (clear.dataset.clear === "recent") clearRecent();
    return;
  }

  const quick = e.target.closest(".quick-btn");
  if (quick) {
    const q = quick.dataset.quick;
    if (q === "favorites") {
      if (state.favorites.length === 0)
        showToast("No favorites yet", "info", "fa-star");
      else {
        uiState.strips.favorites = false;
        safeSet("muStripStates", uiState.strips);
        applyStripCollapse();
        E.favoritesStrip.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.innerWidth <= 768) toggleSidebar(false);
      }
    } else if (q === "recent") {
      if (state.recent.length === 0)
        showToast(
          "No recently viewed subjects",
          "info",
          "fa-clock-rotate-left"
        );
      else {
        uiState.strips.recent = false;
        safeSet("muStripStates", uiState.strips);
        applyStripCollapse();
        E.recentStrip.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.innerWidth <= 768) toggleSidebar(false);
      }
    } else if (q === "theme") {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    } else if (q === "command") {
      openCommand();
      if (window.innerWidth <= 768) toggleSidebar(false);
    }
  }
});

function addSharedToFavorites(codes) {
  let added = 0;
  codes.forEach((code) => {
    const found = findSubjectByCode(code);
    if (found && !state.favorites.includes(code)) {
      state.favorites.push(code);
      added++;
    }
  });
  if (added > 0) {
    persistFavorites();
    updateQuickCounts();
    updateStrips();
    showToast(
      `Added ${added} subject${added > 1 ? "s" : ""} to favorites`,
      "success",
      "fa-star"
    );
  } else {
    showToast("Already in your favorites", "info", "fa-star");
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const chip = e.target.closest(".strip-chip");
  if (!chip) return;
  if (e.target.closest(".chip-remove")) return;
  e.preventDefault();
  chip.click();
});

function loadSidebar() {
  if (
    localStorage.getItem("muSidebarCollapsed") === "true" &&
    window.innerWidth > 768
  ) {
    E.sidebar.classList.add("collapsed");
    const icon = E.sidebarToggle.querySelector("i");
    if (icon) icon.className = "fas fa-chevron-right";
  }
}
function saveSidebar() {
  localStorage.setItem(
    "muSidebarCollapsed",
    E.sidebar.classList.contains("collapsed")
  );
}
E.sidebarToggle?.addEventListener("click", () => {
  E.sidebar.classList.toggle("collapsed");
  const icon = E.sidebarToggle.querySelector("i");
  if (icon)
    icon.className = E.sidebar.classList.contains("collapsed")
      ? "fas fa-chevron-right"
      : "fas fa-chevron-left";
  saveSidebar();
});
loadSidebar();

function toggleSidebar(open) {
  if (window.innerWidth <= 768) E.sidebar.classList.remove("collapsed");
  if (open === undefined) {
    E.sidebar.classList.toggle("open");
    E.overlay.classList.toggle("active");
  } else {
    E.sidebar.classList.toggle("open", open);
    E.overlay.classList.toggle("active", open);
  }
  const isOpen = E.sidebar.classList.contains("open");
  E.hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}
E.hamburger?.addEventListener("click", () => toggleSidebar());
E.overlay?.addEventListener("click", () => toggleSidebar(false));
E.sidebarCloseBtn?.addEventListener("click", () => toggleSidebar(false));

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && E.sidebar.classList.contains("open"))
    toggleSidebar(false);
  if (window.innerWidth <= 768) E.sidebar.classList.remove("collapsed");
});

function applyTheme(theme) {
  const isDark = theme === "dark";
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    E.themeIcon.className = "fas fa-sun";
  } else {
    document.documentElement.removeAttribute("data-theme");
    E.themeIcon.className = "fas fa-moon";
  }
  if (E.quickThemeIcon)
    E.quickThemeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("muTheme", theme);
  state.theme = theme;
}

function applyAccent(name) {
  const a = ACCENTS[name] || ACCENTS.teal;
  document.documentElement.style.setProperty("--accent", a.color);
  document.documentElement.style.setProperty("--accent-hover", a.hover);
  document.documentElement.style.setProperty("--accent-soft", a.soft);
  localStorage.setItem("muAccent", name);
  state.accent = name;
  E.accentMenu
    ?.querySelectorAll("button")
    .forEach((b) => b.classList.toggle("active", b.dataset.accent === name));
}
E.themeToggle?.addEventListener("click", () =>
  applyTheme(state.theme === "dark" ? "light" : "dark")
);
E.accentToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  E.accentMenu.classList.toggle("active");
});
E.accentMenu?.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-accent]");
  if (!btn) return;
  applyAccent(btn.dataset.accent);
  E.accentMenu.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".accent-picker"))
    E.accentMenu?.classList.remove("active");
});
applyTheme(state.theme);
applyAccent(state.accent);

window.addEventListener(
  "scroll",
  () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (E.scrollProgress)
      E.scrollProgress.style.width =
        h > 0 ? `${(window.scrollY / h) * 100}%` : "0%";
    E.backToTopBtn?.classList.toggle("visible", window.scrollY > 300);
  },
  { passive: true }
);

E.backToTopBtn?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

document.addEventListener("keydown", (e) => {
  const isMac = navigator.platform.toUpperCase().includes("MAC");
  const mod = isMac ? e.metaKey : e.ctrlKey;
  const tag = document.activeElement?.tagName;
  const isTyping = tag === "INPUT" || tag === "TEXTAREA";
  if (mod && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openCommand();
  } else if (mod && e.key.toLowerCase() === "b") {
    e.preventDefault();
    if (window.innerWidth > 768) E.sidebarToggle.click();
    else toggleSidebar();
  } else if (mod && e.key.toLowerCase() === "j") {
    e.preventDefault();
    E.themeToggle.click();
  } else if (e.key === "/" && !isTyping) {
    e.preventDefault();
    (window.innerWidth <= 768 ? E.mobileSearchInput : E.searchInput)?.focus();
  }
});

function updateNetStatus() {
  const online = navigator.onLine;
  if (E.netBanner) E.netBanner.hidden = online;
  document.body.classList.toggle("is-offline", !online);
}
window.addEventListener("online", () => {
  updateNetStatus();
  showToast("Back online", "success", "fa-wifi");
});
window.addEventListener("offline", () => {
  updateNetStatus();
  showToast("You're offline", "info", "fa-wifi-slash");
});

window.addEventListener("sw-update-ready", () => {
  const c = E.toastContainer;
  if (!c) return;
  while (c.children.length >= 3) c.firstChild.remove();
  const el = document.createElement("div");
  el.className = "toast info";
  el.innerHTML = `<i class="fas fa-rotate"></i><span>New version available</span><button class="toast-action" type="button">Refresh</button>`;
  el.querySelector(".toast-action").addEventListener("click", () => {
    navigator.serviceWorker
      .getRegistration()
      .then((r) => r?.waiting?.postMessage("SKIP_WAITING"));
  });
  c.appendChild(el);
  setTimeout(() => {
    el.classList.add("removing");
    setTimeout(() => el.remove(), 300);
  }, 8000);
});

function initInteractiveGrid() {
  const grid = document.getElementById("bgGrid");
  if (!grid) return;
  if (window.innerWidth <= 768) {
    grid.innerHTML = "";
    return;
  }

  const CELL = 56,
    RADIUS = 220,
    MAX_OPACITY = 0.85;
  let cols = 0,
    rows = 0,
    cellByRC = [],
    activeSet = new Set();
  let pendingX = -9999,
    pendingY = -9999,
    mouseX = -9999,
    mouseY = -9999;
  let isActive = false,
    rafId = null;

  function build() {
    const w = window.innerWidth,
      h = window.innerHeight;
    cols = Math.ceil(w / CELL) + 1;
    rows = Math.ceil(h / CELL) + 1;
    grid.style.gridTemplateColumns = `repeat(${cols}, ${CELL}px)`;
    grid.style.gridAutoRows = `${CELL}px`;
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    cellByRC = [];
    for (let r = 0; r < rows; r++) {
      const rowArr = new Array(cols);
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.r = r;
        cell.dataset.c = c;
        frag.appendChild(cell);
        rowArr[c] = cell;
      }
      cellByRC.push(rowArr);
    }
    grid.appendChild(frag);
    activeSet.clear();
  }

  function paint() {
    rafId = null;
    mouseX = pendingX;
    mouseY = pendingY;
    if (!isActive) {
      if (activeSet.size > 0) {
        activeSet.forEach((c) => c.style.setProperty("--cell-opacity", "0"));
        activeSet.clear();
      }
      return;
    }
    const minC = Math.max(0, Math.floor((mouseX - RADIUS) / CELL));
    const maxC = Math.min(cols - 1, Math.ceil((mouseX + RADIUS) / CELL));
    const minR = Math.max(0, Math.floor((mouseY - RADIUS) / CELL));
    const maxR = Math.min(rows - 1, Math.ceil((mouseY + RADIUS) / CELL));

    activeSet.forEach((cell) => {
      const r = +cell.dataset.r,
        c = +cell.dataset.c;
      if (r < minR || r > maxR || c < minC || c > maxC) {
        cell.style.setProperty("--cell-opacity", "0");
        activeSet.delete(cell);
      }
    });

    for (let r = minR; r <= maxR; r++) {
      const rowArr = cellByRC[r];
      if (!rowArr) continue;
      const cy = r * CELL + CELL / 2;
      for (let c = minC; c <= maxC; c++) {
        const cell = rowArr[c];
        if (!cell) continue;
        const cx = c * CELL + CELL / 2;
        const dx = mouseX - cx,
          dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS;
          cell.style.setProperty(
            "--cell-opacity",
            (t * t * t * MAX_OPACITY).toFixed(3)
          );
          activeSet.add(cell);
        } else if (activeSet.has(cell)) {
          cell.style.setProperty("--cell-opacity", "0");
          activeSet.delete(cell);
        }
      }
    }
  }

  function schedule() {
    if (!rafId) rafId = requestAnimationFrame(paint);
  }

  window.addEventListener(
    "mousemove",
    (e) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      isActive = true;
      schedule();
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    isActive = false;
    schedule();
  });
  window.addEventListener("blur", () => {
    isActive = false;
    schedule();
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 180);
  });
  build();
}

let deferredInstallPrompt = null;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const lastDismiss = parseInt(
    localStorage.getItem("muInstallDismissed") || "0"
  );
  if (Date.now() - lastDismiss < 7 * 24 * 60 * 60 * 1000) return;
  const banner = document.createElement("div");
  banner.className = "install-banner";
  banner.innerHTML = `
    <div class="ib-icon"><i class="fas fa-graduation-cap"></i></div>
    <div class="ib-text"><strong>Install MU Library</strong><small>Add to home screen for offline access</small></div>
    <button class="ib-install">Install</button>
    <button class="ib-dismiss" aria-label="Dismiss"><i class="fas fa-times"></i></button>`;
  document.body.appendChild(banner);
  requestAnimationFrame(() => banner.classList.add("show"));
  banner.querySelector(".ib-install").addEventListener("click", async () => {
    banner.classList.remove("show");
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    setTimeout(() => banner.remove(), 400);
  });
  banner.querySelector(".ib-dismiss").addEventListener("click", () => {
    banner.classList.remove("show");
    localStorage.setItem("muInstallDismissed", String(Date.now()));
    setTimeout(() => banner.remove(), 400);
  });
});
window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  showToast("MU Library installed!", "success", "fa-download");
});

function renderApp() {
  renderNav();
  renderContent();
}

(async function init() {
  updateNetStatus();
  if (E.cardGrid) {
    E.cardGrid.innerHTML = Array.from({ length: 6 })
      .map(() => `<div class="skeleton-card"></div>`)
      .join("");
  }
  await loadResources();
  searchIndex = null;
  updateQuickCounts();
  updateStrips();
  handleHash();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initInteractiveGrid);
  } else {
    initInteractiveGrid();
  }
})();

// Expose a live view of RESOURCES via a getter so external modules
// (e.g. chat.js) always read the current value after loadResources().
window.MULibrary = {
  DATA,
  FAQ,
  ABOUT,
  get RESOURCES() {
    return RESOURCES;
  },
  state,
  REPORT_EMAIL,
  showToast,
  openContributeModal,
  performSearch,
  findSubjectByCode,
  navFaq,
  navAbout,
};

console.log(
  "%c📚 MU Library",
  "font-size: 16px; font-weight: bold; color: #2d9cdb;"
);
console.log(
  "%c⌨️  Ctrl+K palette · Ctrl+B sidebar · Ctrl+J theme · / search",
  "color: #64748b;"
);
console.log(
  "%c🛠️  Maintainer insights: add #/admin to the URL",
  "color: #64748b;"
);
