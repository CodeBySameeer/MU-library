// ================================================================
//  📚  MU Library – Modern Dynamic Edition
// ================================================================
//  Fixes applied:
//  - Filters only show on subject (resources) page
//  - Each resource has View + Download buttons
//  - Download uses full subject name for the filename
// ================================================================

// ================================================================
//  RESOURCES
// ================================================================
const RESOURCES = {
  SH411: {
    syllabus: [
      {
        title: "Official Syllabus — Engineering Mathematics I (2024)",
        url: "pdfs/SH411-syllabus.pdf",
      },
    ],
    notes: [
      {
        title: "Unit 1–2: Limits, Continuity & Derivatives",
        url: "pdfs/SH411-notes-1.pdf",
        author: "Prof. R. Sharma",
      },
      {
        title: "Unit 3–4: Integration & Applications",
        url: "pdfs/SH411-notes-2.pdf",
        author: "Prof. R. Sharma",
      },
      {
        title: "Unit 5: Vector Algebra",
        url: "pdfs/SH411-notes-3.pdf",
        author: "Ms. K. Thapa",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "pdfs/SH411-pyq-2024.pdf",
        year: 2024,
      },
      {
        title: "End Semester Exam",
        url: "pdfs/SH411-pyq-2023.pdf",
        year: 2023,
      },
      {
        title: "End Semester Exam",
        url: "pdfs/SH411-pyq-2022.pdf",
        year: 2022,
      },
    ],
    assignments: [
      {
        title: "Assignment 1 — Limits & Continuity",
        url: "pdfs/SH411-assign-1.pdf",
      },
      { title: "Assignment 2 — Derivatives", url: "pdfs/SH411-assign-2.pdf" },
    ],
  },

  CE411: {
    syllabus: [
      { title: "Official Syllabus (2024)", url: "pdfs/CE411-syllabus.pdf" },
    ],
    notes: [
      {
        title: "Statics of Particles — Complete Notes",
        url: "pdfs/CE411-notes-1.pdf",
        author: "Dr. B. Adhikari",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "pdfs/CE411-pyq-2024.pdf",
        year: 2024,
      },
    ],
    assignments: [],
  },

  SH412: {
    syllabus: [
      { title: "Official Syllabus (2024)", url: "pdfs/SH412-syllabus.pdf" },
    ],
    notes: [
      { title: "Optics & Wave Mechanics", url: "pdfs/SH412-notes-1.pdf" },
    ],
    pyq: [],
    assignments: [],
  },

  SH421: {
    syllabus: [
      { title: "Official Syllabus (2024)", url: "pdfs/SH421-syllabus.pdf" },
    ],
    notes: [
      {
        title: "Partial Derivatives & Multiple Integrals",
        url: "pdfs/SH421-notes-1.pdf",
      },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "pdfs/SH421-pyq-2024.pdf",
        year: 2024,
      },
    ],
    assignments: [],
  },

  CT411: {
    syllabus: [
      { title: "Official Syllabus (2024)", url: "pdfs/CT411-syllabus.pdf" },
    ],
    notes: [
      { title: "C Programming — Full Notes", url: "pdfs/CT411-notes-1.pdf" },
      { title: "Pointers & Arrays Deep Dive", url: "pdfs/CT411-notes-2.pdf" },
    ],
    pyq: [
      {
        title: "End Semester Exam",
        url: "pdfs/CT411-pyq-2024.pdf",
        year: 2024,
      },
    ],
    assignments: [
      { title: "Assignment 1 — Basics", url: "pdfs/CT411-assign-1.pdf" },
    ],
  },
};

// ================================================================
//  DATA
// ================================================================
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
                { code: "CE46*", name: "Elective I" },
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
                { code: "CE47*", name: "Elective II" },
                { code: "CE47*", name: "Elective III" },
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
                { code: "CT46*", name: "Elective I" },
              ],
            },
            {
              semester: 7,
              subjects: [
                { code: "CT471", name: "Computer Project I" },
                { code: "CT472", name: "Software Testing & Quality Assurance" },
                { code: "CT473", name: "Human Computer Interaction" },
                { code: "CT47*", name: "Elective II" },
                { code: "CT47*", name: "Elective III" },
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
                { code: "HE46*", name: "Elective I" },
              ],
            },
            {
              semester: 7,
              subjects: [
                { code: "HE471", name: "Hydropower Project I" },
                { code: "HE472", name: "Powerhouse Design" },
                { code: "HE473", name: "Environmental Impact Assessment" },
                { code: "HE47*", name: "Elective II" },
                { code: "HE47*", name: "Elective III" },
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

// ================================================================
//  STATE
// ================================================================
const state = {
  level: "faculties",
  path: { faculty: null, program: null, semester: null, subject: null },
  theme:
    localStorage.getItem("muTheme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"),
  accent: localStorage.getItem("muAccent") || "teal",
  favorites: JSON.parse(localStorage.getItem("muFavorites") || "[]"),
  recent: [],
  currentFilter: "all",
};

const RECENT_TTL = 30 * 60 * 1000;
let recentTimer = null;

const ACCENTS = {
  teal: { color: "#2d9cdb", hover: "#1a7aad", soft: "rgba(45,156,219,0.1)" },
  purple: { color: "#6c5ce7", hover: "#5a4fcf", soft: "rgba(108,92,231,0.1)" },
  pink: { color: "#ec4899", hover: "#db2777", soft: "rgba(236,72,153,0.1)" },
  emerald: { color: "#10b981", hover: "#059669", soft: "rgba(16,185,129,0.1)" },
  amber: { color: "#f59e0b", hover: "#d97706", soft: "rgba(245,158,11,0.1)" },
  rose: { color: "#f43f5e", hover: "#e11d48", soft: "rgba(244,63,94,0.1)" },
};

// ================================================================
//  DOM HELPERS
// ================================================================
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
};

// ================================================================
//  UTILITIES
// ================================================================
function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[
        c
      ])
  );
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
  localStorage.setItem("muFavorites", JSON.stringify(state.favorites));
}

// ================================================================
//  TOAST
// ================================================================
function showToast(message, type = "info", icon = null) {
  const icons = {
    success: "fa-check-circle",
    error: "fa-times-circle",
    info: "fa-info-circle",
  };
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fas ${
    icon || icons[type] || icons.info
  }"></i><span>${escapeHtml(message)}</span>`;
  E.toastContainer.appendChild(el);
  setTimeout(() => {
    el.classList.add("removing");
    setTimeout(() => el.remove(), 300);
  }, 3000);
}

// ================================================================
//  FAVORITES
// ================================================================
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
  if (state.favorites.length === 0) {
    showToast("No favorites to clear", "info", "fa-star");
    return;
  }
  const count = state.favorites.length;
  state.favorites = [];
  persistFavorites();
  updateQuickCounts();
  renderContent();
  updateStrips();
  showToast(
    `Cleared ${count} favorite${count > 1 ? "s" : ""}`,
    "info",
    "fa-trash-can"
  );
}

// ================================================================
//  RECENTLY VIEWED
// ================================================================
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
  if (state.recent.length === 0) {
    showToast("No recent items to clear", "info", "fa-clock-rotate-left");
    return;
  }
  state.recent = [];
  if (recentTimer) {
    clearTimeout(recentTimer);
    recentTimer = null;
  }
  updateQuickCounts();
  updateStrips();
  showToast("Recently viewed cleared", "info", "fa-trash-can");
}

// ================================================================
//  HELPERS
// ================================================================
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
        const found = findSubjectByCode(code);
        const name = found ? found.subject.name : code;
        return `<div class="strip-chip has-remove" data-code="${escapeHtml(
          code
        )}" role="button" tabindex="0">
          <i class="fas fa-star"></i>
          <span class="chip-name">${escapeHtml(name)}</span>
          <span class="chip-code">${escapeHtml(code)}</span>
          <button class="chip-remove" data-remove="${escapeHtml(
            code
          )}" aria-label="Remove from favorites" title="Remove">
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
}

// ================================================================
//  SEARCH ENGINE
// ================================================================
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
        (i.meta && i.meta.toLowerCase().includes(q))
    )
    .slice(0, 12);
}

// ================================================================
//  SEARCH UI
// ================================================================
let highlightedIndex = -1;
let currentSuggestionItems = [];

function showSuggestions(results, box, query = "") {
  box.innerHTML = "";
  highlightedIndex = -1;
  currentSuggestionItems = [];

  if (results.length === 0) {
    box.innerHTML = `<div class="no-results">No results found</div>`;
    box.classList.add("active");
    return;
  }

  box.innerHTML = results
    .map((item, i) => {
      const icon = item.icon || "fa-folder";
      let meta = `<span class="tag">${item.type}</span>`;
      if (item.type === "subject") {
        meta += `<span><i class="fas fa-code"></i> ${escapeHtml(
          item.code
        )}</span>`;
        meta += `<span><i class="fas fa-layer-group"></i> Sem ${item.semester}</span>`;
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
  const { type, key, path } = el.dataset;
  let pathArr = [];
  try {
    pathArr = JSON.parse(path);
  } catch {
    pathArr = [];
  }

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
  else hideSuggestions();
}, 220);

E.searchInput.addEventListener("input", (e) => {
  E.mobileSearchInput.value = e.target.value;
  E.mobileClearSearchBtn.hidden = !e.target.value.trim();
  handleSearchInput(e.target.value, E.suggestionsBox, E.clearSearchBtn);
});

E.mobileSearchInput.addEventListener("input", (e) => {
  E.searchInput.value = e.target.value;
  E.clearSearchBtn.hidden = !e.target.value.trim();
  handleSearchInput(
    e.target.value,
    E.mobileSuggestionsBox,
    E.mobileClearSearchBtn
  );
});

E.searchInput.addEventListener("focus", () => {
  if (!E.searchInput.value.trim()) hideSuggestions();
});
E.mobileSearchInput.addEventListener("focus", () => {
  if (!E.mobileSearchInput.value.trim()) hideSuggestions();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) hideSuggestions();
});

[E.suggestionsBox, E.mobileSuggestionsBox].forEach((box) => {
  box.addEventListener("click", (e) => {
    const item = e.target.closest(".search-suggestion-item");
    if (item) handleSuggestionClick(item);
  });
});

E.clearSearchBtn.addEventListener("click", () => {
  E.searchInput.value = "";
  E.mobileSearchInput.value = "";
  E.clearSearchBtn.hidden = true;
  E.mobileClearSearchBtn.hidden = true;
  hideSuggestions();
  E.searchInput.focus();
});

E.mobileClearSearchBtn.addEventListener("click", () => {
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
  const results = performSearch(q);
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

// ================================================================
//  COMMAND PALETTE
// ================================================================
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
    html += `<div style="padding: 6px 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 1px;">Actions</div>`;
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
    html += `<div style="padding: 6px 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); letter-spacing: 1px;">Results</div>`;
    html += results
      .map((item, i) => {
        const icon = item.icon || "fa-folder";
        let meta = `<span class="tag">${item.type}</span>`;
        if (item.type === "subject")
          meta += `<span>Sem ${item.semester}</span>`;
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
      commandItems.forEach((x) => x.setAttribute("aria-selected", "false"));
      el.setAttribute("aria-selected", "true");
      commandHighlight = parseInt(el.dataset.cmdIndex);
    });
  });
}

function executeCommandItem(el) {
  const type = el.dataset.cmdType;
  const idx = parseInt(el.dataset.cmdIndex);
  const query = E.commandInput.value.trim();

  if (type === "action") {
    const allActions = getCommandActions();
    const filtered = query
      ? allActions.filter((a) =>
          a.name.toLowerCase().includes(query.toLowerCase())
        )
      : allActions;
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
  } else if (e.key === "Escape") {
    closeCommand();
  }
});

function updateCommandHighlight() {
  commandItems.forEach((el, i) =>
    el.setAttribute("aria-selected", i === commandHighlight ? "true" : "false")
  );
  commandItems[commandHighlight]?.scrollIntoView({ block: "nearest" });
}

// ================================================================
//  ROUTER
// ================================================================
function parseHash() {
  const parts = location.hash.replace("#", "").split("/").filter(Boolean);
  const path = { faculty: null, program: null, semester: null, subject: null };
  let level = "faculties";

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
  const { path, level } = parseHash();
  state.path = path;
  state.level = level;
  state.currentFilter = "all";
  if (level === "resources" && path.subject) addRecent(path.subject);
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

// ================================================================
//  RENDER
// ================================================================
const LEVEL_NAMES = {
  faculties: "Faculties",
  programs: "Programs",
  semesters: "Semesters",
  subjects: "Subjects",
  resources: "Resources",
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
        <button class="nav-btn active" data-action="back-to-subjects" type="button">
            <i class="fas fa-arrow-left"></i>
            <span class="nav-text">Back to Subjects</span>
        </button>`;
    return;
  }

  if (items.length === 0) {
    E.navList.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 13px;">No items</div>`;
    return;
  }

  E.navList.innerHTML = items
    .map((item) => {
      const icon = item.icon || "fa-folder";
      let label = item.name || `Item ${item.id}`;
      let badge = "",
        action = "",
        dataId = "";

      if (state.level === "faculties") {
        badge = Object.keys(item.programs || {}).length;
        action = "programs";
        dataId = item.id;
      } else if (state.level === "programs") {
        badge = (item.semesters || []).length;
        action = "semesters";
        dataId = item.id;
      } else if (state.level === "semesters") {
        label = `Semester ${item.semester}`;
        badge = (item.subjects || []).length;
        action = "subjects";
        dataId = item.semester;
      } else if (state.level === "subjects") {
        badge = "📚";
        action = "resources";
        dataId = item.id;
      }

      return `<button class="nav-btn" data-action="${action}" data-id="${escapeHtml(
        String(dataId)
      )}" type="button">
        <i class="fas ${icon}"></i>
        <span class="nav-text">${escapeHtml(label)}</span>
        ${badge ? `<span class="badge">${badge}</span>` : ""}
    </button>`;
    })
    .join("");
}

function renderContent() {
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
  if (state.level !== "faculties") {
    let label = "",
      action = "";
    if (state.level === "programs") {
      label = "Back to Faculties";
      action = "faculties";
    } else if (state.level === "semesters") {
      label = "Back to Programs";
      action = "programs";
    } else if (state.level === "subjects") {
      label = "Back to Semesters";
      action = "semesters";
    } else if (state.level === "resources") {
      label = "Back to Subjects";
      action = "subjects";
    }

    const backNav = document.createElement("div");
    backNav.className = "back-nav";
    backNav.innerHTML = `<button class="back-btn" data-action="${action}" type="button">
        <i class="fas fa-arrow-left"></i> ${label}
    </button>`;
    E.contentArea.insertBefore(backNav, E.cardGrid);
  }

  // Hide filters when NOT on resources page
  if (E.filters && state.level !== "resources") E.filters.hidden = true;

  // Restore default grid layout when not showing resources
  if (state.level !== "resources") {
    E.cardGrid.style.gridTemplateColumns = "";
  }

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
        badge = "📚 Resources";
        action = "resources";
        dataId = item.id;
      }

      const isSubject = state.level === "subjects";
      const isFav = isSubject && isFavorite(item.code);

      return `<div class="card ${isSubject ? "subject-card" : ""}"
                 data-action="${action}"
                 data-id="${escapeHtml(String(dataId))}"
                 tabindex="0"
                 role="button">
        ${
          isSubject
            ? `<button class="fav-btn ${isFav ? "active" : ""}"
                       data-fav="${escapeHtml(item.code)}"
                       data-name="${escapeHtml(item.name)}"
                       aria-label="Toggle favorite"
                       type="button">
                   <i class="${isFav ? "fas" : "far"} fa-star"></i>
               </button>
               <button class="copy-link-btn"
                       data-code="${escapeHtml(item.code)}"
                       aria-label="Copy link"
                       title="Copy link to this subject"
                       type="button">
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
            ? `<div class="card-tags">
                   <span>📘 Syllabus</span>
                   <span>📝 Notes</span>
                   <span>📄 PYQs</span>
                   <span>📋 Assignments</span>
               </div>`
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
  }
}

// ================================================================
//  RESOURCES VIEW
// ================================================================
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
      label: "Past Papers",
      items: files.pyq || [],
    },
    {
      key: "assignments",
      icon: "fa-tasks",
      label: "Assignments",
      items: files.assignments || [],
    },
  ];

  // Show filters ONLY here
  if (E.filters) {
    E.filters.hidden = false;
    E.filters.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle(
        "active",
        chip.dataset.filter === state.currentFilter
      );
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
          )}</strong> haven't been uploaded yet. Check back later!</p>
      </div>`;
    updateBreadcrumb();
    return;
  }

  E.cardGrid.style.gridTemplateColumns = "1fr";
  E.cardGrid.innerHTML = visible
    .map(
      (g) => `
    <div class="res-group">
        <div class="res-group-head">
            <i class="fas ${g.icon}"></i>
            <h4>${g.label}</h4>
            <span class="count">${g.items.length}</span>
        </div>
        <div class="res-list">
            ${
              g.items.length > 0
                ? g.items
                    .map(
                      (file) => `
                  <div class="res-item">
                      <i class="fas fa-file-pdf"></i>
                      <div class="res-info">
                          <div class="res-title">${escapeHtml(file.title)}</div>
                          ${
                            file.year || file.author
                              ? `<div class="res-meta">${[
                                  file.year,
                                  file.author,
                                ]
                                  .filter(Boolean)
                                  .map(escapeHtml)
                                  .join(" · ")}</div>`
                              : ""
                          }
                      </div>
                      <div class="res-actions">
                          <button class="res-btn view"
                                  data-url="${escapeHtml(file.url)}"
                                  type="button"
                                  title="Open in new tab">
                              <i class="fas fa-eye"></i> View
                          </button>
                          <button class="res-btn download"
                                  data-url="${escapeHtml(file.url)}"
                                  data-subject="${escapeHtml(subject.name)}"
                                  data-code="${escapeHtml(subject.code)}"
                                  data-title="${escapeHtml(file.title)}"
                                  type="button"
                                  title="Download PDF">
                              <i class="fas fa-download"></i> Download
                          </button>
                      </div>
                  </div>
              `
                    )
                    .join("")
                : `<div class="res-empty"><i class="fas fa-clock"></i> Coming soon</div>`
            }
        </div>
    </div>
  `
    )
    .join("");

  updateBreadcrumb();
}

function updateBreadcrumb() {
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

// ================================================================
//  MODAL (kept for compatibility)
// ================================================================
function openModal(type, code, name, pdfUrl) {
  if (pdfUrl) {
    E.modalBody.innerHTML = `<div class="pdf-viewer"><iframe src="${escapeHtml(
      pdfUrl
    )}" title="${escapeHtml(name)} ${escapeHtml(
      type
    )}" loading="lazy"></iframe></div>`;
  } else {
    let pages = "";
    for (let i = 1; i <= 5; i++) {
      pages += `<div class="pdf-page">
          <h4>${escapeHtml(name)} – ${escapeHtml(type)} (Page ${i})</h4>
          <p>Simulated preview content.</p>
      </div>`;
    }
    E.modalBody.innerHTML = `<div class="pdf-scroll-container">${pages}</div>`;
  }
  E.modalTitle.textContent = `${name} (${code}) - ${type}`;
  E.modal.hidden = false;
  document.body.style.overflow = "hidden";
  E.modalClose.focus();
}

function closeModal() {
  E.modal.hidden = true;
  document.body.style.overflow = "";
}

// ================================================================
//  EVENT DELEGATION
// ================================================================
E.navList.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-btn");
  if (!btn) return;
  const { action, id } = btn.dataset;
  if (action === "back-to-subjects") return navSubjects(state.path.semester);
  if (action === "programs") navPrograms(id);
  else if (action === "semesters") navSemesters(id);
  else if (action === "subjects") navSubjects(id);
  else if (action === "resources") navResources(id);
});

// Filter chip handler
E.filters?.addEventListener("click", (e) => {
  const chip = e.target.closest(".filter-chip");
  if (!chip) return;
  state.currentFilter = chip.dataset.filter;
  renderResources();
});

// Card grid click handler — handles fav, copy link, view, download, and card nav
E.cardGrid.addEventListener("click", (e) => {
  // Favorite toggle
  const fav = e.target.closest(".fav-btn");
  if (fav) {
    e.stopPropagation();
    toggleFavorite(fav.dataset.fav, fav.dataset.name);
    return;
  }

  // Copy link
  const copyBtn = e.target.closest(".copy-link-btn");
  if (copyBtn) {
    e.stopPropagation();
    const code = copyBtn.dataset.code;
    const url = `${location.origin}${location.pathname}#${state.path.faculty}/${state.path.program}/${state.path.semester}/${code}`;
    (async () => {
      try {
        await navigator.clipboard.writeText(url);
        showToast("Link copied to clipboard", "success", "fa-link");
      } catch {
        const ta = document.createElement("textarea");
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        showToast("Link copied", "success", "fa-link");
      }
    })();
    return;
  }

  // View button
  const viewBtn = e.target.closest(".res-btn.view");
  if (viewBtn) {
    e.stopPropagation();
    window.open(viewBtn.dataset.url, "_blank", "noopener");
    return;
  }

  // Download button (with full subject name in the filename)
  const dlBtn = e.target.closest(".res-btn.download");
  if (dlBtn) {
    e.stopPropagation();
    const url = dlBtn.dataset.url;
    const subjectName = dlBtn.dataset.subject || "Resource";
    const title = dlBtn.dataset.title || "File";
    const ext = (url.split("?")[0].split(".").pop() || "pdf").toLowerCase();

    // "Engineering Mathematics I - Unit 1-2 Limits, Continuity & Derivatives.pdf"
    const filename = `${subjectName} - ${title}.${ext}`
      .replace(/[\\/:*?"<>|]/g, "_")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);

    (async () => {
      try {
        const res = await fetch(url, { mode: "cors" });
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
        // Fallback: direct link (browser may override filename)
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.target = "_blank";
        a.rel = "noopener";
        document.body.appendChild(a);
        a.click();
        a.remove();
        showToast(`Opening "${title}"`, "info", "fa-download");
      }
    })();
    return;
  }

  // Card navigation (for hierarchy levels)
  const card = e.target.closest(".card");
  if (!card || card.classList.contains("resource-card")) return;
  const { action, id } = card.dataset;
  if (action === "programs") navPrograms(id);
  else if (action === "semesters") navSemesters(id);
  else if (action === "subjects") navSubjects(id);
  else if (action === "resources") navResources(id);
});

E.cardGrid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".card:not(.resource-card)");
  if (!card) return;
  e.preventDefault();
  card.click();
});

E.breadcrumb.addEventListener("click", (e) => {
  const item = e.target.closest(".breadcrumb-item");
  if (!item || item.classList.contains("active")) return;
  const { action } = item.dataset;
  if (action === "faculties") navFaculties();
  else if (action === "programs") navPrograms(state.path.faculty);
  else if (action === "semesters") navSemesters(state.path.program);
  else if (action === "subjects") navSubjects(state.path.semester);
});

document.addEventListener("click", (e) => {
  const backBtn = e.target.closest(".back-btn");
  if (backBtn) {
    const { action } = backBtn.dataset;
    if (action === "faculties") navFaculties();
    else if (action === "programs") navPrograms(state.path.faculty);
    else if (action === "semesters") navSemesters(state.path.program);
    else if (action === "subjects") navSubjects(state.path.semester);
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
    if (found) {
      location.hash = `/${found.faculty}/${found.program}/${found.semester}/${found.code}`;
    }
    return;
  }

  const clear = e.target.closest(".strip-clear");
  if (clear) {
    if (clear.dataset.clear === "favorites") clearFavorites();
    else if (clear.dataset.clear === "recent") clearRecent();
    return;
  }

  const quick = e.target.closest(".quick-btn");
  if (quick) {
    const q = quick.dataset.quick;
    if (q === "favorites") {
      if (state.favorites.length === 0)
        showToast(
          "No favorites yet — click ⭐ on any subject",
          "info",
          "fa-star"
        );
      else
        E.favoritesStrip.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (q === "recent") {
      if (state.recent.length === 0)
        showToast(
          "No recently viewed subjects",
          "info",
          "fa-clock-rotate-left"
        );
      else E.recentStrip.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (q === "command") {
      openCommand();
    }
  }
});

E.modal?.addEventListener("click", (e) => {
  if (e.target === E.modal) closeModal();
});
E.modalClose?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !E.modal.hidden) closeModal();
});

// ================================================================
//  SIDEBAR
// ================================================================
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
  if (icon) {
    icon.className = E.sidebar.classList.contains("collapsed")
      ? "fas fa-chevron-right"
      : "fas fa-chevron-left";
  }
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

// ================================================================
//  THEME & ACCENT
// ================================================================
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    E.themeIcon.className = "fas fa-sun";
    E.themeToggle.setAttribute("aria-label", "Switch to light mode");
  } else {
    document.documentElement.removeAttribute("data-theme");
    E.themeIcon.className = "fas fa-moon";
    E.themeToggle.setAttribute("aria-label", "Switch to dark mode");
  }
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
  E.accentMenu.querySelectorAll("button").forEach((b) => {
    b.classList.toggle("active", b.dataset.accent === name);
  });
}

E.themeToggle?.addEventListener("click", () => {
  applyTheme(state.theme === "dark" ? "light" : "dark");
});

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

// ================================================================
//  SCROLL PROGRESS + BACK TO TOP
// ================================================================
window.addEventListener(
  "scroll",
  () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    E.scrollProgress.style.width =
      h > 0 ? `${(window.scrollY / h) * 100}%` : "0%";
    E.backToTopBtn.classList.toggle("visible", window.scrollY > 300);
  },
  { passive: true }
);

E.backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================================================
//  GLOBAL SHORTCUTS
// ================================================================
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
  } else if (mod && e.key.toLowerCase() === "j") {
    e.preventDefault();
    E.themeToggle.click();
  } else if (e.key === "/" && !isTyping) {
    e.preventDefault();
    (window.innerWidth <= 768 ? E.mobileSearchInput : E.searchInput).focus();
  }
});

// ================================================================
//  FINE INTERACTIVE GRID
// ================================================================
function initInteractiveGrid() {
  const grid = document.getElementById("bgGrid");
  if (!grid) return;

  const CELL = 56;
  const RADIUS = 220;
  const MAX_OPACITY = 0.85;

  let cols = 0,
    rows = 0;
  let cellByRC = [];
  let activeSet = new Set();

  let pendingX = -9999,
    pendingY = -9999;
  let mouseX = -9999,
    mouseY = -9999;
  let isActive = false;
  let rafId = null;

  function build() {
    const w = window.innerWidth;
    const h = window.innerHeight;
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
        activeSet.forEach((cell) =>
          cell.style.setProperty("--cell-opacity", "0")
        );
        activeSet.clear();
      }
      return;
    }

    const minC = Math.max(0, Math.floor((mouseX - RADIUS) / CELL));
    const maxC = Math.min(cols - 1, Math.ceil((mouseX + RADIUS) / CELL));
    const minR = Math.max(0, Math.floor((mouseY - RADIUS) / CELL));
    const maxR = Math.min(rows - 1, Math.ceil((mouseY + RADIUS) / CELL));

    activeSet.forEach((cell) => {
      const r = +cell.dataset.r;
      const c = +cell.dataset.c;
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
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          const t = 1 - dist / RADIUS;
          const eased = t * t * t;
          const opacity = (eased * MAX_OPACITY).toFixed(3);
          cell.style.setProperty("--cell-opacity", opacity);
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

  window.addEventListener(
    "touchstart",
    (e) => {
      if (!e.touches[0]) return;
      pendingX = e.touches[0].clientX;
      pendingY = e.touches[0].clientY;
      isActive = true;
      schedule();
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (!e.touches[0]) return;
      pendingX = e.touches[0].clientX;
      pendingY = e.touches[0].clientY;
      isActive = true;
      schedule();
    },
    { passive: true }
  );

  window.addEventListener("touchend", () => {
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

// ================================================================
//  PWA INSTALL BANNER
// ================================================================
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
    <div class="ib-text">
      <strong>Install MU Library</strong>
      <small>Add to home screen for offline access</small>
    </div>
    <button class="ib-install">Install</button>
    <button class="ib-dismiss" aria-label="Dismiss"><i class="fas fa-times"></i></button>
  `;
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

// ================================================================
//  INIT
// ================================================================
function renderApp() {
  renderNav();
  renderContent();
}

updateQuickCounts();
updateStrips();
handleHash();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initInteractiveGrid);
} else {
  initInteractiveGrid();
}

console.log(
  "%c📚 MU Library — Modern Edition",
  "font-size: 16px; font-weight: bold; color: #2d9cdb;"
);
console.log(
  "%c⌨️  Ctrl+K command palette · Ctrl+B sidebar · Ctrl+J theme · / search",
  "color: #64748b;"
);
