// ================================================================
//  📚  COMPLETE HIERARCHICAL DATA STRUCTURE
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
//  🚀 SEARCH ENGINE
// ================================================================

function buildSearchIndex() {
  const index = [];
  Object.entries(DATA.faculties).forEach(([facKey, fac]) => {
    index.push({
      type: "faculty",
      key: facKey,
      name: fac.name,
      icon: fac.icon,
      path: [],
      meta: "Faculty",
    });
    Object.entries(fac.programs).forEach(([progKey, prog]) => {
      index.push({
        type: "program",
        key: progKey,
        name: prog.name,
        icon: prog.icon,
        path: [facKey],
        meta: `Program · ${fac.name}`,
      });
      prog.semesters.forEach((sem) => {
        sem.subjects.forEach((sub) => {
          index.push({
            type: "subject",
            key: sub.code,
            name: sub.name,
            code: sub.code,
            icon: "fa-book",
            path: [facKey, progKey, sem.semester],
            meta: `Subject · Sem ${sem.semester} · ${prog.name}`,
            semester: sem.semester,
            faculty: facKey,
            program: progKey,
          });
        });
      });
    });
  });
  return index;
}

const SEARCH_INDEX = buildSearchIndex();

function performGlobalSearch(query) {
  if (!query || query.trim().length < 1) return [];
  const q = query.trim().toLowerCase();
  const results = [];
  SEARCH_INDEX.forEach((item) => {
    const nameMatch = item.name.toLowerCase().includes(q);
    const codeMatch = item.code && item.code.toLowerCase().includes(q);
    const metaMatch = item.meta && item.meta.toLowerCase().includes(q);
    if (nameMatch || codeMatch || metaMatch) {
      results.push(item);
    }
  });
  return results.slice(0, 10);
}

// ================================================================
//  SEARCH UI
// ================================================================

const searchInput = document.getElementById("globalSearchInput");
const mobileSearchInput = document.getElementById("mobileGlobalSearch");
const suggestionsBox = document.getElementById("searchSuggestions");
const mobileSuggestionsBox = document.getElementById("mobileSearchSuggestions");

let highlightedSuggestionIndex = -1;
let currentSuggestionItems = [];

function showSuggestions(results, targetBox) {
  targetBox.innerHTML = "";
  if (results.length === 0) {
    targetBox.innerHTML = `<div class="no-results">No results found</div>`;
    targetBox.classList.add("active");
    currentSuggestionItems = [];
    return;
  }

  let html = "";
  results.forEach((item) => {
    const icon = item.icon || "fa-folder";
    let metaHtml = `<span class="tag">${item.type}</span>`;
    if (item.type === "subject") {
      metaHtml += `<span><i class="fas fa-code"></i> ${item.code}</span>`;
      metaHtml += `<span><i class="fas fa-layer-group"></i> Sem ${item.semester}</span>`;
    }
    if (item.meta && item.type !== "subject") {
      metaHtml += `<span>${item.meta}</span>`;
    }

    const pathStr = JSON.stringify(item.path).replace(/"/g, "&quot;");
    html += `
            <div class="search-suggestion-item" 
                 onclick="handleSuggestionClick('${item.type}', '${item.key}', '${pathStr}')">
                <div class="suggestion-icon"><i class="fas ${icon}"></i></div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${item.name}</div>
                    <div class="suggestion-meta">${metaHtml}</div>
                </div>
            </div>
        `;
  });
  targetBox.innerHTML = html;
  targetBox.classList.add("active");
  currentSuggestionItems = targetBox.querySelectorAll(
    ".search-suggestion-item"
  );
  highlightedSuggestionIndex = -1;
}

function hideSuggestions() {
  suggestionsBox.classList.remove("active");
  mobileSuggestionsBox.classList.remove("active");
  currentSuggestionItems = [];
}

function handleSuggestionClick(type, key, pathJson) {
  let path = [];
  try {
    path = JSON.parse(pathJson);
  } catch (e) {
    path = [];
  }

  hideSuggestions();
  searchInput.value = "";
  mobileSearchInput.value = "";

  if (type === "faculty") {
    currentPath.faculty = key;
    currentPath.program = null;
    currentPath.semester = null;
    currentPath.subject = null;
    currentLevel = "programs";
  } else if (type === "program") {
    currentPath.faculty = path[0] || null;
    currentPath.program = key;
    currentPath.semester = null;
    currentPath.subject = null;
    currentLevel = "semesters";
  } else if (type === "subject") {
    currentPath.faculty = path[0] || null;
    currentPath.program = path[1] || null;
    currentPath.semester = path[2] || null;

    let foundSubject = null;
    if (
      currentPath.faculty &&
      currentPath.program &&
      currentPath.semester !== null
    ) {
      const facultyData = DATA.faculties[currentPath.faculty];
      const programData = facultyData?.programs[currentPath.program];
      const semesterData = programData?.semesters.find(
        (s) => s.semester === currentPath.semester
      );
      foundSubject = semesterData?.subjects.find((s) => s.code === key) || null;
    }

    if (!foundSubject) {
      for (const facKey in DATA.faculties) {
        const fac = DATA.faculties[facKey];
        for (const progKey in fac.programs) {
          const prog = fac.programs[progKey];
          for (const sem of prog.semesters) {
            const sub = sem.subjects.find((s) => s.code === key);
            if (sub) {
              foundSubject = sub;
              currentPath.faculty = facKey;
              currentPath.program = progKey;
              currentPath.semester = sem.semester;
              break;
            }
          }
          if (foundSubject) break;
        }
        if (foundSubject) break;
      }
    }

    if (foundSubject) {
      currentPath.subject = { ...foundSubject };
    } else {
      currentPath.subject = { code: key, name: key };
    }
    currentLevel = "resources";
  }

  renderNav();
  renderContent();
  if (window.innerWidth <= 768) toggleSidebar(false);
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const handleSearchInput = debounce((value) => {
  const results = performGlobalSearch(value);
  if (value.trim().length > 0) {
    if (window.innerWidth <= 768) {
      showSuggestions(results, mobileSuggestionsBox);
    } else {
      showSuggestions(results, suggestionsBox);
    }
  } else {
    suggestionsBox.classList.remove("active");
    mobileSuggestionsBox.classList.remove("active");
  }
}, 300);

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  mobileSearchInput.value = value;
  handleSearchInput(value);
});

searchInput.addEventListener("blur", () =>
  setTimeout(() => suggestionsBox.classList.remove("active"), 300)
);

mobileSearchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  searchInput.value = value;
  handleSearchInput(value);
});

mobileSearchInput.addEventListener("blur", () =>
  setTimeout(() => mobileSuggestionsBox.classList.remove("active"), 300)
);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") triggerGlobalSearch();
});
mobileSearchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") triggerGlobalSearch();
});

document.addEventListener("keydown", (e) => {
  const isDesktopSearchFocused = document.activeElement === searchInput;
  const isMobileSearchFocused = document.activeElement === mobileSearchInput;
  if (!isDesktopSearchFocused && !isMobileSearchFocused) return;

  const items = currentSuggestionItems;
  if (items.length === 0) return;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    highlightedSuggestionIndex =
      (highlightedSuggestionIndex + 1) % items.length;
    highlightSuggestion(highlightedSuggestionIndex);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    highlightedSuggestionIndex =
      (highlightedSuggestionIndex - 1 + items.length) % items.length;
    highlightSuggestion(highlightedSuggestionIndex);
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (highlightedSuggestionIndex >= 0) {
      items[highlightedSuggestionIndex].click();
    } else {
      triggerGlobalSearch();
    }
  }
});

function highlightSuggestion(index) {
  currentSuggestionItems.forEach((item, i) => {
    item.style.background = i === index ? "var(--bg-hover)" : "";
  });
}

function triggerGlobalSearch() {
  const isMobile = window.innerWidth <= 768;
  const input = isMobile ? mobileSearchInput : searchInput;
  const val = input.value.trim();
  if (val.length > 0) {
    const results = performGlobalSearch(val);
    if (results.length === 1) {
      const item = results[0];
      handleSuggestionClick(item.type, item.key, JSON.stringify(item.path));
    } else if (results.length > 1) {
      showSuggestions(
        results,
        isMobile ? mobileSuggestionsBox : suggestionsBox
      );
      input.focus();
    } else {
      alert("No results found. Try a different keyword.");
    }
  }
}

// Recent searches
let recentSearches = JSON.parse(
  localStorage.getItem("muRecentSearches") || "[]"
);

function saveRecentSearch(query) {
  recentSearches = [query, ...recentSearches.filter((q) => q !== query)].slice(
    0,
    5
  );
  localStorage.setItem("muRecentSearches", JSON.stringify(recentSearches));
}

function showRecentSearches(targetBox) {
  if (recentSearches.length === 0) return;
  targetBox.innerHTML = recentSearches
    .map(
      (q) => `
    <div class="search-suggestion-item" onclick="useRecentSearch('${q}')">
      <div class="suggestion-icon"><i class="fas fa-history"></i></div>
      <div class="suggestion-info">
        <div class="suggestion-name">${q}</div>
        <div class="suggestion-meta"><span class="tag">Recent</span></div>
      </div>
    </div>
  `
    )
    .join("");
  targetBox.classList.add("active");
}

function useRecentSearch(q) {
  searchInput.value = q;
  mobileSearchInput.value = q;
  hideSuggestions();
  handleSearchInput(q);
  saveRecentSearch(q);
}

searchInput.addEventListener("focus", () => {
  if (!searchInput.value.trim()) showRecentSearches(suggestionsBox);
});
mobileSearchInput.addEventListener("focus", () => {
  if (!mobileSearchInput.value.trim()) showRecentSearches(mobileSuggestionsBox);
});

// ================================================================
//  APP STATE
// ================================================================
let currentLevel = "faculties";
let currentPath = {
  faculty: null,
  program: null,
  semester: null,
  subject: null,
};

// ================================================================
//  DOM REFS (hero stats removed, header badge kept)
// ================================================================
const navList = document.getElementById("navList");
const navLabelText = document.getElementById("navLabelText");
const cardGrid = document.getElementById("cardGrid");
const breadcrumb = document.getElementById("breadcrumb");
const heroTitle = document.getElementById("heroTitle");
const heroSubtext = document.getElementById("heroSubtext");
const currentLevelDisplay = document.getElementById("currentLevelDisplay");
const currentItemDisplay = document.getElementById("currentItemDisplay");
const subtitleDisplay = document.getElementById("subtitleDisplay");
const footerStats = document.getElementById("footerStats");
const totalCount = document.getElementById("totalCount"); // header badge

function getCurrentFacultyData() {
  if (!currentPath.faculty) return null;
  return DATA.faculties[currentPath.faculty];
}

function getCurrentProgramData() {
  const faculty = getCurrentFacultyData();
  if (!faculty || !currentPath.program) return null;
  return faculty.programs[currentPath.program];
}

function getCurrentSemesterData() {
  const program = getCurrentProgramData();
  if (!program || currentPath.semester === null) return null;
  return program.semesters.find((s) => s.semester === currentPath.semester);
}

function getAllItems(level) {
  if (level === "faculties") {
    return Object.keys(DATA.faculties).map((key) => ({
      ...DATA.faculties[key],
      id: key,
    }));
  }
  if (level === "programs") {
    const faculty = getCurrentFacultyData();
    if (!faculty) return [];
    return Object.keys(faculty.programs).map((key) => ({
      ...faculty.programs[key],
      id: key,
    }));
  }
  if (level === "semesters") {
    const program = getCurrentProgramData();
    if (!program) return [];
    return program.semesters.map((s) => ({ ...s, id: s.semester }));
  }
  if (level === "subjects") {
    const semester = getCurrentSemesterData();
    if (!semester) return [];
    return semester.subjects.map((s, idx) => ({ ...s, id: s.code }));
  }
  return [];
}

// ================================================================
//  RENDER FUNCTIONS
// ================================================================

function renderNav() {
  const items = getAllItems(currentLevel);
  const levelNames = {
    faculties: "Faculties",
    programs: "Programs",
    semesters: "Semesters",
    subjects: "Subjects",
  };
  navLabelText.textContent = levelNames[currentLevel] || "Items";

  if (currentLevel === "resources") {
    navList.innerHTML = `
            <button class="nav-btn active" onclick="navigateTo('subjects')">
                <i class="fas fa-arrow-left"></i> 
                <span class="nav-text">Back to Subjects</span>
            </button>
        `;
    return;
  }

  if (items.length === 0) {
    navList.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 13px;">No items</div>`;
    return;
  }

  let html = "";
  items.forEach((item) => {
    let icon = item.icon || "fa-folder";
    let label = item.name || `Item ${item.id}`;
    let badge = "";
    let onClick = "";
    if (currentLevel === "faculties") {
      badge = Object.keys(item.programs || {}).length;
      onClick = `navigateToPrograms('${item.id}')`;
    } else if (currentLevel === "programs") {
      badge = (item.semesters || []).length;
      onClick = `navigateToSemesters('${item.id}')`;
    } else if (currentLevel === "semesters") {
      badge = (item.subjects || []).length;
      onClick = `navigateToSubjects(${item.id})`;
    } else if (currentLevel === "subjects") {
      badge = "📚";
      onClick = `navigateToResources('${item.id}')`;
    }
    html += `
            <button class="nav-btn" onclick="${onClick}">
                <i class="fas ${icon}"></i>
                <span class="nav-text">${label}</span>
                ${badge ? `<span class="badge">${badge}</span>` : ""}
            </button>
        `;
  });
  navList.innerHTML = html;
}

function renderContent() {
  const items = getAllItems(currentLevel);
  const levelNames = {
    faculties: "Faculties",
    programs: "Programs",
    semesters: "Semesters",
    subjects: "Subjects",
    resources: "Resources",
  };

  currentLevelDisplay.textContent = levelNames[currentLevel] || "Items";
  currentItemDisplay.textContent =
    items.length > 0
      ? `(${items.length} ${levelNames[currentLevel]?.toLowerCase()})`
      : "";

  // Update header badge count
  totalCount.textContent = `${items.length} ${levelNames[
    currentLevel
  ]?.toLowerCase()}`;

  // Update Hero
  if (currentLevel === "faculties") {
    heroTitle.innerHTML =
      'Welcome to <br /><span class="gradient-text">MU Digital Library</span>';
    heroSubtext.textContent =
      "Use the search bar above or browse via the sidebar.";
    subtitleDisplay.textContent = "Mid-West University";
  } else if (currentLevel === "programs") {
    const faculty = getCurrentFacultyData();
    heroTitle.innerHTML = `${
      faculty?.name || "Programs"
    } <br /><span class="gradient-text">Explore Programs</span>`;
    heroSubtext.textContent = `Select a program under ${
      faculty?.name || "this faculty"
    }.`;
    subtitleDisplay.textContent = faculty?.name || "Mid-West University";
  } else if (currentLevel === "semesters") {
    const program = getCurrentProgramData();
    heroTitle.innerHTML = `${
      program?.name || "Semesters"
    } <br /><span class="gradient-text">Choose a Semester</span>`;
    heroSubtext.textContent = `Select a semester to view subjects.`;
    subtitleDisplay.textContent = program?.name || "Mid-West University";
  } else if (currentLevel === "subjects") {
    const semester = getCurrentSemesterData();
    const program = getCurrentProgramData();
    heroTitle.innerHTML = `Semester ${
      currentPath.semester
    } <br /><span class="gradient-text">${program?.name || "Subjects"}</span>`;
    heroSubtext.textContent = `Select a subject to access resources.`;
    subtitleDisplay.textContent = `${program?.name || ""} – Semester ${
      currentPath.semester
    }`;
  } else if (currentLevel === "resources") {
    const subject = currentPath.subject;
    heroTitle.innerHTML = `${
      subject?.name || "Subject"
    } <br /><span class="gradient-text">Resources</span>`;
    heroSubtext.textContent = `Access syllabus, notes, past papers, and assignments.`;
    subtitleDisplay.textContent = subject?.name || "Mid-West University";
  }

  footerStats.textContent = `${items.length} ${levelNames[
    currentLevel
  ]?.toLowerCase()}`;

  if (items.length === 0 && currentLevel !== "resources") {
    cardGrid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h3>No items found</h3></div>`;
    return;
  }

  // Back button
  const contentArea = document.getElementById("contentArea");
  let backNav = contentArea.querySelector(".back-nav");
  if (backNav) backNav.remove();
  if (currentLevel !== "faculties") {
    let backLabel = "",
      backLevel = "";
    if (currentLevel === "programs") {
      backLabel = "Back to Faculties";
      backLevel = "faculties";
    } else if (currentLevel === "semesters") {
      backLabel = "Back to Programs";
      backLevel = "programs";
    } else if (currentLevel === "subjects") {
      backLabel = "Back to Semesters";
      backLevel = "semesters";
    } else if (currentLevel === "resources") {
      backLabel = "Back to Subjects";
      backLevel = "subjects";
    }
    backNav = document.createElement("div");
    backNav.className = "back-nav";
    backNav.innerHTML = `<button class="back-btn" onclick="navigateTo('${backLevel}')"><i class="fas fa-arrow-left"></i> ${backLabel}</button>`;
    contentArea.insertBefore(backNav, cardGrid);
  }

  if (currentLevel === "resources") {
    renderResources();
    return;
  }

  let html = "";
  items.forEach((item) => {
    let icon = item.icon || "fa-folder";
    let title = item.name || `Item ${item.id}`;
    let subtitle = "",
      badge = "",
      onClick = "";
    if (currentLevel === "faculties") {
      subtitle = item.subtitle || "Faculty";
      badge = Object.keys(item.programs || {}).length + " Programs";
      onClick = `navigateToPrograms('${item.id}')`;
    } else if (currentLevel === "programs") {
      subtitle = `${(item.semesters || []).length} Semesters`;
      badge = `${(item.semesters || []).length} Sem`;
      onClick = `navigateToSemesters('${item.id}')`;
    } else if (currentLevel === "semesters") {
      subtitle = `${(item.subjects || []).length} Subjects`;
      badge = `${(item.subjects || []).length} Subjects`;
      onClick = `navigateToSubjects(${item.id})`;
    } else if (currentLevel === "subjects") {
      icon = "fa-book";
      subtitle = item.code || "Subject";
      badge = "📚 Resources";
      onClick = `navigateToResources('${item.id}')`;
    }
    html += `
      <div class="card ${
        currentLevel === "subjects" ? "subject-card" : ""
      }" onclick="${onClick}">
        ${badge ? `<span class="card-badge">${badge}</span>` : ""}
        <div class="card-icon"><i class="fas ${icon}"></i></div>
        <div class="card-title">${title}</div>
        ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ""}
        ${
          currentLevel === "subjects"
            ? `
          <div class="card-tags">
            <span>📘 Syllabus</span>
            <span>📝 Notes</span>
            <span>📄 PYQs</span>
            <span>📋 Assignments</span>
          </div>
        `
            : ""
        }
      </div>
    `;
  });
  cardGrid.innerHTML = html;
  updateBreadcrumb();
  updateHash();
}

function renderResources() {
  const subject = currentPath.subject;
  if (!subject) {
    cardGrid.innerHTML = `<div class="empty-state"><h3>No subject selected</h3></div>`;
    return;
  }

  const resources = generateResourceContent(subject);

  const html = `
    <div class="card resource-card">
        <div class="resource-header"><i class="fas fa-book-open"></i><h4>Syllabus</h4></div>
        <p>${resources.syllabus}</p>
        <div class="btn-group">
            <button class="btn-download" onclick="openResourceModal('syllabus','${
              subject.code
            }','${subject.name}','${resources.syllabusPdf || ""}')">
                <i class="fas fa-eye"></i> View
            </button>
            <button class="btn-download download" onclick="downloadResource('syllabus','${
              subject.code
            }','${subject.name}','${resources.syllabusPdf || ""}')">
                <i class="fas fa-download"></i> Download
            </button>
        </div>
    </div>
    <div class="card resource-card">
        <div class="resource-header"><i class="fas fa-file-alt"></i><h4>Notes</h4></div>
        <ul>${resources.notes
          .map((t) => `<li><i class="fas fa-check-circle"></i> ${t}</li>`)
          .join("")}</ul>
        <div class="btn-group">
            <button class="btn-download" onclick="openResourceModal('notes','${
              subject.code
            }','${subject.name}','${resources.notesPdf || ""}')">
                <i class="fas fa-eye"></i> View
            </button>
            <button class="btn-download download" onclick="downloadResource('notes','${
              subject.code
            }','${subject.name}','${resources.notesPdf || ""}')">
                <i class="fas fa-download"></i> Download
            </button>
        </div>
    </div>
    <div class="card resource-card">
        <div class="resource-header"><i class="fas fa-file-pdf"></i><h4>Past Year Questions</h4></div>
        <ul>${resources.pyq
          .map((t) => `<li><i class="fas fa-check-circle"></i> ${t}</li>`)
          .join("")}</ul>
        <div class="btn-group">
            <button class="btn-download" onclick="openResourceModal('pyq','${
              subject.code
            }','${subject.name}','${resources.pyqPdf || ""}')">
                <i class="fas fa-eye"></i> View
            </button>
            <button class="btn-download download" onclick="downloadResource('pyq','${
              subject.code
            }','${subject.name}','${resources.pyqPdf || ""}')">
                <i class="fas fa-download"></i> Download
            </button>
        </div>
    </div>
    <div class="card resource-card">
        <div class="resource-header"><i class="fas fa-tasks"></i><h4>Assignments</h4></div>
        <ul>${resources.assignments
          .map((t) => `<li><i class="fas fa-check-circle"></i> ${t}</li>`)
          .join("")}</ul>
        <div class="btn-group">
            <button class="btn-download" onclick="openResourceModal('assignments','${
              subject.code
            }','${subject.name}','${resources.assignmentsPdf || ""}')">
                <i class="fas fa-eye"></i> View
            </button>
            <button class="btn-download download" onclick="downloadResource('assignments','${
              subject.code
            }','${subject.name}','${resources.assignmentsPdf || ""}')">
                <i class="fas fa-download"></i> Download
            </button>
        </div>
    </div>
  `;

  cardGrid.innerHTML = html;
  updateBreadcrumb();
  updateHash();
}

function generateResourceContent(subject) {
  let syllabusText = `Complete syllabus as per the latest curriculum.`;
  const name = subject.name;
  if (name.includes("Mathematics") || name.includes("Maths"))
    syllabusText =
      "Calculus, algebra, differential equations, transforms, and numerical methods.";
  else if (name.includes("Programming") || name.includes("Data Structures"))
    syllabusText =
      "Algorithms, data structures, OOP, and software development fundamentals.";
  else if (name.includes("Hydraulics") || name.includes("Fluid"))
    syllabusText =
      "Fluid properties, statics, dynamics, pipe flow, and open channel hydraulics.";
  else if (name.includes("Database") || name.includes("DBMS"))
    syllabusText =
      "SQL, normalization, transaction management, and database design.";
  else if (name.includes("Networks") || name.includes("CN"))
    syllabusText =
      "OSI model, TCP/IP, routing, switching, and network security.";
  else if (name.includes("Machine Learning") || name.includes("AI"))
    syllabusText =
      "Supervised/unsupervised learning, neural networks, NLP, and computer vision.";
  else if (name.includes("Dam") || name.includes("Turbine"))
    syllabusText =
      "Dam types, design, turbine selection, and powerhouse layout.";
  else if (name.includes("Management") || name.includes("Business"))
    syllabusText =
      "Management principles, OB, marketing, finance, and business strategy.";
  else if (name.includes("Physics"))
    syllabusText =
      "Mechanics, electromagnetism, thermodynamics, quantum physics, and optics.";

  const topics = [
    "Introduction & fundamental concepts",
    "Core principles & theorems",
    "Problem-solving techniques",
    "Case studies & applications",
    "Advanced topics",
  ];
  const pyqTopics = [
    "End semester papers (latest 5 years)",
    "Mid-semester test papers",
    "Tutorial & practice problems",
    "Solution sets with explanations",
    "Model answer keys",
  ];
  const assignTopics = [
    "Assignment 1: Basic problems",
    "Assignment 2: Intermediate problems",
    "Assignment 3: Advanced problems",
    "Mini-project / practical work",
    "Group discussion topics",
  ];

  const pdfMap = {
    CE411_notes: "resources/applied_mechanics-I_note.pdf",
    SH421_syllabus: "resources/mathematics-II_syllabus.pdf",
  };

  const getPdfUrl = (type) => {
    const key = `${subject.code}_${type}`;
    return pdfMap[key] || null;
  };

  return {
    syllabus: syllabusText,
    notes: topics,
    pyq: pyqTopics,
    assignments: assignTopics,
    syllabusPdf: getPdfUrl("syllabus"),
    notesPdf: getPdfUrl("notes"),
    pyqPdf: getPdfUrl("pyq"),
    assignmentsPdf: getPdfUrl("assignments"),
  };
}

function openResourceModal(type, code, name, pdfUrl = null) {
  const modal = document.getElementById("resourceModal");
  const title = document.getElementById("modalTitle");
  const body = document.getElementById("modalBody");

  if (pdfUrl && pdfUrl.trim() !== "") {
    body.innerHTML = `
      <div class="pdf-viewer">
        <iframe src="${pdfUrl}" width="100%" height="500px" style="border: none; border-radius: 8px;"></iframe>
      </div>
    `;
  } else {
    let pagesHtml = "";
    for (let i = 1; i <= 5; i++) {
      pagesHtml += `
        <div class="pdf-page">
          <h4>${name} – ${
        type.charAt(0).toUpperCase() + type.slice(1)
      } (Page ${i})</h4>
          <p>This is page ${i} of the ${type} document for ${name}. Here you can add detailed content, diagrams, or explanations related to the topic. The content is currently simulated but can be replaced with actual PDF pages or images.</p>
        </div>
      `;
    }
    body.innerHTML = `<div class="pdf-scroll-container">${pagesHtml}</div>`;
  }

  title.textContent = `${name} (${code}) - ${
    type.charAt(0).toUpperCase() + type.slice(1)
  }`;
  modal.style.display = "flex";
}

function downloadResource(type, code, name, pdfUrl = null) {
  if (pdfUrl && pdfUrl.trim() !== "") {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = `${name.replace(/\s+/g, "_")}_${type}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    const content = `Resource: ${name} (${code})\nType: ${type}\nThis is a simulated download. Replace with actual file.`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s+/g, "_")}_${type}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

function closeResourceModal() {
  document.getElementById("resourceModal").style.display = "none";
}

document
  .getElementById("resourceModal")
  .addEventListener("click", function (e) {
    if (e.target === this) closeResourceModal();
  });

// ================================================================
//  BREADCRUMB & NAVIGATION
// ================================================================

function updateBreadcrumb() {
  let items = [{ label: "🏛️ Faculties", level: "faculties" }];
  if (currentPath.faculty) {
    const faculty = DATA.faculties[currentPath.faculty];
    items.push({
      label: faculty?.name || currentPath.faculty,
      level: "programs",
    });
  }
  if (currentPath.program) {
    const program = getCurrentProgramData();
    items.push({
      label: program?.name || currentPath.program,
      level: "semesters",
    });
  }
  if (currentPath.semester !== null) {
    items.push({
      label: `Semester ${currentPath.semester}`,
      level: "subjects",
    });
  }
  if (currentLevel === "resources" && currentPath.subject) {
    items.push({ label: currentPath.subject.name, level: "resources" });
  }

  let html = "";
  items.forEach((item, index) => {
    const isActive = index === items.length - 1;
    html += `
            <span class="breadcrumb-item ${isActive ? "active" : ""}" 
                  onclick="${isActive ? "" : `navigateTo('${item.level}')`}"
                  style="${isActive ? "" : "cursor:pointer;"}">
                ${item.label}
            </span>
        `;
  });
  breadcrumb.innerHTML = html;
}

function navigateTo(level) {
  if (level === "faculties") {
    currentPath = {
      faculty: null,
      program: null,
      semester: null,
      subject: null,
    };
    currentLevel = "faculties";
  } else if (level === "programs") {
    currentLevel = "programs";
    currentPath.semester = null;
    currentPath.subject = null;
  } else if (level === "semesters") {
    currentLevel = "semesters";
    currentPath.subject = null;
  } else if (level === "subjects") {
    currentLevel = "subjects";
    currentPath.subject = null;
  }
  renderNav();
  renderContent();
  if (window.innerWidth <= 768) toggleSidebar(false);
}

function navigateToPrograms(facultyId) {
  currentPath.faculty = facultyId;
  currentPath.program = null;
  currentPath.semester = null;
  currentPath.subject = null;
  currentLevel = "programs";
  renderNav();
  renderContent();
  if (window.innerWidth <= 768) toggleSidebar(false);
}

function navigateToSemesters(programId) {
  currentPath.program = programId;
  currentPath.semester = null;
  currentPath.subject = null;
  currentLevel = "semesters";
  renderNav();
  renderContent();
  if (window.innerWidth <= 768) toggleSidebar(false);
}

function navigateToSubjects(semester) {
  currentPath.semester = semester;
  currentPath.subject = null;
  currentLevel = "subjects";
  renderNav();
  renderContent();
  if (window.innerWidth <= 768) toggleSidebar(false);
}

function navigateToResources(subjectId) {
  const semester = getCurrentSemesterData();
  if (!semester) return;
  const subject = semester.subjects.find((s) => s.code === subjectId);
  if (!subject) return;
  currentPath.subject = subject;
  currentLevel = "resources";
  renderNav();
  renderContent();
  if (window.innerWidth <= 768) toggleSidebar(false);
}

// ================================================================
//  HASH ROUTING
// ================================================================
function updateHash() {
  let hash = "";
  if (currentPath.faculty) hash += `/${currentPath.faculty}`;
  if (currentPath.program) hash += `/${currentPath.program}`;
  if (currentPath.semester !== null) hash += `/${currentPath.semester}`;
  if (currentLevel === "resources" && currentPath.subject)
    hash += `/${currentPath.subject.code}`;
  window.location.hash = hash || "";
}

function handleHash() {
  const hash = window.location.hash.replace("#", "");
  if (!hash) {
    currentLevel = "faculties";
    currentPath = {
      faculty: null,
      program: null,
      semester: null,
      subject: null,
    };
    renderNav();
    renderContent();
    return;
  }
  const parts = hash.split("/").filter(Boolean);
  if (parts.length === 0) {
    currentLevel = "faculties";
    currentPath = {
      faculty: null,
      program: null,
      semester: null,
      subject: null,
    };
    renderNav();
    renderContent();
    return;
  }

  const facultyId = parts[0];
  if (DATA.faculties[facultyId]) {
    currentPath.faculty = facultyId;
    if (parts.length >= 2) {
      const programId = parts[1];
      const faculty = DATA.faculties[facultyId];
      if (faculty.programs[programId]) {
        currentPath.program = programId;
        if (parts.length >= 3) {
          const semesterNum = parseInt(parts[2]);
          const program = faculty.programs[programId];
          const semester = program.semesters.find(
            (s) => s.semester === semesterNum
          );
          if (semester) {
            currentPath.semester = semesterNum;
            if (parts.length >= 4) {
              const subjectCode = parts[3];
              const subject = semester.subjects.find(
                (s) => s.code === subjectCode
              );
              if (subject) {
                currentPath.subject = subject;
                currentLevel = "resources";
                renderNav();
                renderContent();
                return;
              }
            }
            currentLevel = "subjects";
            renderNav();
            renderContent();
            return;
          }
        }
        currentLevel = "semesters";
        renderNav();
        renderContent();
        return;
      }
    }
    currentLevel = "programs";
    renderNav();
    renderContent();
    return;
  }
  currentLevel = "faculties";
  currentPath = { faculty: null, program: null, semester: null, subject: null };
  renderNav();
  renderContent();
}

window.addEventListener("hashchange", handleHash);

// ================================================================
//  SIDEBAR TOGGLE (Collapse/Expand)
// ================================================================
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

function loadSidebarState() {
  const saved = localStorage.getItem("muSidebarCollapsed");
  if (saved === "true") {
    sidebar.classList.add("collapsed");
    const icon = sidebarToggle?.querySelector("i");
    if (icon) icon.className = "fas fa-chevron-right";
  } else {
    sidebar.classList.remove("collapsed");
    const icon = sidebarToggle?.querySelector("i");
    if (icon) icon.className = "fas fa-chevron-left";
  }
}

function saveSidebarState() {
  localStorage.setItem(
    "muSidebarCollapsed",
    sidebar.classList.contains("collapsed")
  );
}

if (sidebarToggle) {
  sidebarToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    sidebar.classList.toggle("collapsed");
    const icon = this.querySelector("i");
    if (icon) {
      if (sidebar.classList.contains("collapsed")) {
        icon.className = "fas fa-chevron-right";
      } else {
        icon.className = "fas fa-chevron-left";
      }
    }
    saveSidebarState();
  });
}

loadSidebarState();

// ================================================================
//  HAMBURGER (Mobile) & CLOSE BUTTON
// ================================================================
const overlay = document.getElementById("sidebarOverlay");
const hamburger = document.getElementById("hamburgerBtn");
const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");

function toggleSidebar(open) {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("collapsed");
  }

  if (open === undefined) {
    sidebar.classList.toggle("open");
    overlay.classList.toggle("active");
  } else {
    sidebar.classList.toggle("open", open);
    overlay.classList.toggle("active", open);
  }
  const isOpen = sidebar.classList.contains("open");
  hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburger.addEventListener("click", () => toggleSidebar());
overlay.addEventListener("click", () => toggleSidebar(false));
sidebarCloseBtn.addEventListener("click", () => toggleSidebar(false));
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && sidebar.classList.contains("open")) {
    toggleSidebar(false);
  }
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("collapsed");
  }
});

// Focus trap
sidebar.addEventListener("keydown", (e) => {
  if (
    e.key === "Tab" &&
    window.innerWidth <= 768 &&
    sidebar.classList.contains("open")
  ) {
    const focusable = sidebar.querySelectorAll(
      'button, a, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Swipe gestures
let touchStartX = 0;
let touchEndX = 0;
const mainContent = document.querySelector(".main-content");
mainContent.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
mainContent.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const swipeDistance = touchEndX - touchStartX;
  if (swipeDistance > 80) {
    toggleSidebar(true);
  } else if (swipeDistance < -80) {
    toggleSidebar(false);
  }
});

// ================================================================
//  BACK TO TOP
// ================================================================
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// ================================================================
//  DARK MODE TOGGLE
// ================================================================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("muTheme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.className = "fas fa-moon";
    localStorage.setItem("muTheme", "light");
  }
}

const savedTheme = localStorage.getItem("muTheme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

// ================================================================
//  INIT
// ================================================================
currentLevel = "faculties";
currentPath = { faculty: null, program: null, semester: null, subject: null };

if (window.location.hash) {
  handleHash();
} else {
  renderNav();
  renderContent();
}

console.log("📚 MU Library – Fully Loaded!");
console.log("🏛️ Faculties:", Object.keys(DATA.faculties).join(", "));
console.log(
  "🔍 Search: Works on both desktop and mobile with live suggestions."
);
console.log("📐 Sidebar: Collapse button is always visible at top-right.");
console.log("🌓 Dark mode: Click the moon/sun icon in the header.");
console.log("📱 Mobile: Use hamburger menu and close (×) button.");
console.log(
  "📄 PDFs: Integrated for Applied Mechanics I (Notes) and Mathematics II (Syllabus)."
);
