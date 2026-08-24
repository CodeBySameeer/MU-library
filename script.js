// ================================================================
//  📚  MU Library – Refactored JavaScript
// ================================================================
//  Improvements:
//  - Hash-only routing: all navigation changes window.location.hash;
//    the hashchange handler updates state and renders.
//  - Event delegation: no inline onclick in generated HTML.
//  - Lazy search index building.
//  - Accessibility: modal dialog, listbox for suggestions, clear search.
//  - Modular structure with clear separation of concerns.
//  - Data inline for now – move to data.json with fetch for production.
// ================================================================

// ================================================================
//  DATA (move to data.json in production)
// ================================================================
const DATA = {
  /* ... same as original ... */
};

// ================================================================
//  APP STATE
// ================================================================
const state = {
  level: "faculties",
  path: {
    faculty: null,
    program: null,
    semester: null,
    subject: null,
  },
};

// ================================================================
//  DOM REFERENCES
// ================================================================
const elements = {
  navList: document.getElementById("navList"),
  navLabelText: document.getElementById("navLabelText"),
  cardGrid: document.getElementById("cardGrid"),
  breadcrumb: document.getElementById("breadcrumb"),
  heroTitle: document.getElementById("heroTitle"),
  heroSubtext: document.getElementById("heroSubtext"),
  currentLevelDisplay: document.getElementById("currentLevelDisplay"),
  currentItemDisplay: document.getElementById("currentItemDisplay"),
  subtitleDisplay: document.getElementById("subtitleDisplay"),
  footerStats: document.getElementById("footerStats"),
  totalCount: document.getElementById("totalCount"),
  sidebar: document.getElementById("sidebar"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  overlay: document.getElementById("sidebarOverlay"),
  hamburger: document.getElementById("hamburgerBtn"),
  sidebarCloseBtn: document.getElementById("sidebarCloseBtn"),
  searchInput: document.getElementById("globalSearchInput"),
  mobileSearchInput: document.getElementById("mobileGlobalSearch"),
  suggestionsBox: document.getElementById("searchSuggestions"),
  mobileSuggestionsBox: document.getElementById("mobileSearchSuggestions"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  modal: document.getElementById("resourceModal"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  backToTopBtn: document.getElementById("backToTop"),
  themeToggle: document.getElementById("themeToggle"),
  themeIcon: themeToggle.querySelector("i"),
};

// ================================================================
//  SEARCH ENGINE (lazy index)
// ================================================================
let searchIndex = null;

function buildSearchIndex() {
  const index = [];
  // ... same as original buildSearchIndex ...
  return index;
}

function getSearchIndex() {
  if (!searchIndex) {
    searchIndex = buildSearchIndex();
  }
  return searchIndex;
}

function performGlobalSearch(query) {
  if (!query || query.trim().length < 1) return [];
  const q = query.trim().toLowerCase();
  return getSearchIndex()
    .filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(q);
      const codeMatch = item.code && item.code.toLowerCase().includes(q);
      const metaMatch = item.meta && item.meta.toLowerCase().includes(q);
      return nameMatch || codeMatch || metaMatch;
    })
    .slice(0, 10);
}

// ================================================================
//  SEARCH UI
// ================================================================
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
  results.forEach((item, idx) => {
    const icon = item.icon || "fa-folder";
    let metaHtml = `<span class="tag">${item.type}</span>`;
    if (item.type === "subject") {
      metaHtml += `<span><i class="fas fa-code"></i> ${item.code}</span>`;
      metaHtml += `<span><i class="fas fa-layer-group"></i> Sem ${item.semester}</span>`;
    }
    if (item.meta && item.type !== "subject") {
      metaHtml += `<span>${item.meta}</span>`;
    }

    html += `
      <div class="search-suggestion-item" 
           role="option"
           id="suggestion-${idx}"
           data-type="${item.type}" 
           data-key="${item.key}" 
           data-path="${JSON.stringify(item.path).replace(/"/g, "&quot;")}">
        <div class="suggestion-icon"><i class="fas ${icon}"></i></div>
        <div class="suggestion-info">
          <div class="suggestion-name">${item.name}</div>
          <div class="suggestion-meta">${metaHtml}</div>
        </div>
      </div>
    `;
  });
  targetBox.innerHTML = html;
  targetBox.setAttribute("role", "listbox");
  targetBox.classList.add("active");
  currentSuggestionItems = targetBox.querySelectorAll(
    ".search-suggestion-item"
  );
  highlightedSuggestionIndex = -1;
}

function hideSuggestions() {
  elements.suggestionsBox.classList.remove("active");
  elements.mobileSuggestionsBox.classList.remove("active");
  elements.suggestionsBox.removeAttribute("role");
  elements.mobileSuggestionsBox.removeAttribute("role");
  currentSuggestionItems = [];
}

function handleSuggestionClick(item) {
  const { type, key, path } = item.dataset;
  let pathArr = [];
  try {
    pathArr = JSON.parse(path);
  } catch (e) {
    pathArr = [];
  }

  hideSuggestions();
  elements.searchInput.value = "";
  elements.mobileSearchInput.value = "";

  // Set new hash based on type
  let newHash = "";
  if (type === "faculty") {
    newHash = `/${key}`;
  } else if (type === "program") {
    newHash = `/${pathArr[0]}/${key}`;
  } else if (type === "subject") {
    newHash = `/${pathArr[0]}/${pathArr[1]}/${pathArr[2]}/${key}`;
  }
  if (newHash) {
    window.location.hash = newHash;
  }
}

// Event delegation for suggestion clicks
elements.suggestionsBox.addEventListener("click", (e) => {
  const item = e.target.closest(".search-suggestion-item");
  if (item) handleSuggestionClick(item);
});

elements.mobileSuggestionsBox.addEventListener("click", (e) => {
  const item = e.target.closest(".search-suggestion-item");
  if (item) handleSuggestionClick(item);
});

// Search input handlers
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
    const target =
      window.innerWidth <= 768
        ? elements.mobileSuggestionsBox
        : elements.suggestionsBox;
    showSuggestions(results, target);
  } else {
    hideSuggestions();
  }
}, 300);

elements.searchInput.addEventListener("input", (e) => {
  elements.mobileSearchInput.value = e.target.value;
  handleSearchInput(e.target.value);
});

elements.mobileSearchInput.addEventListener("input", (e) => {
  elements.searchInput.value = e.target.value;
  handleSearchInput(e.target.value);
});

elements.searchInput.addEventListener("blur", () =>
  setTimeout(() => elements.suggestionsBox.classList.remove("active"), 300)
);
elements.mobileSearchInput.addEventListener("blur", () =>
  setTimeout(
    () => elements.mobileSuggestionsBox.classList.remove("active"),
    300
  )
);

// Clear button
elements.clearSearchBtn.addEventListener("click", () => {
  elements.searchInput.value = "";
  elements.mobileSearchInput.value = "";
  hideSuggestions();
  elements.searchInput.focus();
});

// Keyboard navigation in search
document.addEventListener("keydown", (e) => {
  const isDesktopSearchFocused =
    document.activeElement === elements.searchInput;
  const isMobileSearchFocused =
    document.activeElement === elements.mobileSearchInput;
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
      // Trigger search with first result if any
      const results = performGlobalSearch(
        elements.searchInput.value.trim() ||
          elements.mobileSearchInput.value.trim()
      );
      if (results.length === 1) {
        handleSuggestionClick({
          dataset: {
            type: results[0].type,
            key: results[0].key,
            path: JSON.stringify(results[0].path),
          },
        });
      } else if (results.length > 1) {
        const target =
          window.innerWidth <= 768
            ? elements.mobileSuggestionsBox
            : elements.suggestionsBox;
        showSuggestions(results, target);
      }
    }
  }
});

function highlightSuggestion(index) {
  currentSuggestionItems.forEach((item, i) => {
    item.style.background = i === index ? "var(--bg-hover)" : "";
    item.setAttribute("aria-selected", i === index ? "true" : "false");
  });
  const input =
    window.innerWidth <= 768
      ? elements.mobileSearchInput
      : elements.searchInput;
  input.setAttribute("aria-activedescendant", `suggestion-${index}`);
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
    <div class="search-suggestion-item" role="option" data-recent="${q}">
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
  targetBox.setAttribute("role", "listbox");
  currentSuggestionItems = targetBox.querySelectorAll(
    ".search-suggestion-item"
  );
  highlightedSuggestionIndex = -1;
}

elements.searchInput.addEventListener("focus", () => {
  if (!elements.searchInput.value.trim())
    showRecentSearches(elements.suggestionsBox);
});
elements.mobileSearchInput.addEventListener("focus", () => {
  if (!elements.mobileSearchInput.value.trim())
    showRecentSearches(elements.mobileSuggestionsBox);
});

// ================================================================
//  NAVIGATION & ROUTING (Hash-only)
// ================================================================
function parseHash() {
  const parts = window.location.hash
    .replace("#", "")
    .split("/")
    .filter(Boolean);
  const path = { faculty: null, program: null, semester: null, subject: null };
  let level = "faculties";

  if (parts.length >= 1 && DATA.faculties[parts[0]]) {
    path.faculty = parts[0];
    level = "programs";
    if (parts.length >= 2 && DATA.faculties[parts[0]].programs[parts[1]]) {
      path.program = parts[1];
      level = "semesters";
      if (parts.length >= 3) {
        const semNum = parseInt(parts[2]);
        const prog = DATA.faculties[parts[0]].programs[parts[1]];
        const sem = prog.semesters.find((s) => s.semester === semNum);
        if (sem) {
          path.semester = semNum;
          level = "subjects";
          if (parts.length >= 4) {
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
  renderApp();
}

window.addEventListener("hashchange", handleHash);

// Navigation functions now just change hash
function navigateToFaculties() {
  window.location.hash = "";
}
function navigateToPrograms(facultyId) {
  window.location.hash = `/${facultyId}`;
}
function navigateToSemesters(programId) {
  window.location.hash = `/${state.path.faculty}/${programId}`;
}
function navigateToSubjects(semester) {
  window.location.hash = `/${state.path.faculty}/${state.path.program}/${semester}`;
}
function navigateToResources(subjectCode) {
  window.location.hash = `/${state.path.faculty}/${state.path.program}/${state.path.semester}/${subjectCode}`;
}

// ================================================================
//  RENDER FUNCTIONS
// ================================================================
function getCurrentFacultyData() {
  return state.path.faculty ? DATA.faculties[state.path.faculty] : null;
}
function getCurrentProgramData() {
  const faculty = getCurrentFacultyData();
  return faculty && state.path.program
    ? faculty.programs[state.path.program]
    : null;
}
function getCurrentSemesterData() {
  const program = getCurrentProgramData();
  return program && state.path.semester !== null
    ? program.semesters.find((s) => s.semester === state.path.semester)
    : null;
}
function getItems(level) {
  switch (level) {
    case "faculties":
      return Object.keys(DATA.faculties).map((key) => ({
        ...DATA.faculties[key],
        id: key,
      }));
    case "programs": {
      const faculty = getCurrentFacultyData();
      return faculty
        ? Object.keys(faculty.programs).map((key) => ({
            ...faculty.programs[key],
            id: key,
          }))
        : [];
    }
    case "semesters": {
      const program = getCurrentProgramData();
      return program
        ? program.semesters.map((s) => ({ ...s, id: s.semester }))
        : [];
    }
    case "subjects": {
      const semester = getCurrentSemesterData();
      return semester
        ? semester.subjects.map((s) => ({ ...s, id: s.code }))
        : [];
    }
    default:
      return [];
  }
}

function renderNav() {
  const level = state.level;
  const items = getItems(level);
  const levelNames = {
    faculties: "Faculties",
    programs: "Programs",
    semesters: "Semesters",
    subjects: "Subjects",
    resources: "Resources",
  };
  elements.navLabelText.textContent = levelNames[level] || "Items";

  if (level === "resources") {
    elements.navList.innerHTML = `
      <button class="nav-btn active" data-action="back-to-subjects">
        <i class="fas fa-arrow-left"></i> 
        <span class="nav-text">Back to Subjects</span>
      </button>
    `;
    return;
  }

  if (items.length === 0) {
    elements.navList.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 13px;">No items</div>`;
    return;
  }

  let html = "";
  items.forEach((item) => {
    const icon = item.icon || "fa-folder";
    const label = item.name || `Item ${item.id}`;
    let badge = "";
    let action = "";
    let dataId = "";
    if (level === "faculties") {
      badge = Object.keys(item.programs || {}).length;
      action = "programs";
      dataId = item.id;
    } else if (level === "programs") {
      badge = (item.semesters || []).length;
      action = "semesters";
      dataId = item.id;
    } else if (level === "semesters") {
      badge = (item.subjects || []).length;
      action = "subjects";
      dataId = item.id;
    } else if (level === "subjects") {
      badge = "📚";
      action = "resources";
      dataId = item.id;
    }
    html += `
      <button class="nav-btn" data-action="${action}" data-id="${dataId}">
        <i class="fas ${icon}"></i>
        <span class="nav-text">${label}</span>
        ${badge ? `<span class="badge">${badge}</span>` : ""}
      </button>
    `;
  });
  elements.navList.innerHTML = html;
}

function renderContent() {
  const items = getItems(state.level);
  const levelNames = {
    faculties: "Faculties",
    programs: "Programs",
    semesters: "Semesters",
    subjects: "Subjects",
    resources: "Resources",
  };

  elements.currentLevelDisplay.textContent = levelNames[state.level] || "Items";
  elements.currentItemDisplay.textContent =
    items.length > 0
      ? `(${items.length} ${levelNames[state.level]?.toLowerCase()})`
      : "";
  elements.totalCount.textContent = `${items.length} ${levelNames[
    state.level
  ]?.toLowerCase()}`;

  // Update Hero
  updateHero();

  // Footer stats
  elements.footerStats.textContent = `${items.length} ${levelNames[
    state.level
  ]?.toLowerCase()}`;

  // Back button (if not at top)
  const contentArea = document.getElementById("contentArea");
  let backNav = contentArea.querySelector(".back-nav");
  if (backNav) backNav.remove();
  if (state.level !== "faculties") {
    let backLabel = "",
      backAction = "";
    if (state.level === "programs") {
      backLabel = "Back to Faculties";
      backAction = "faculties";
    } else if (state.level === "semesters") {
      backLabel = "Back to Programs";
      backAction = "programs";
    } else if (state.level === "subjects") {
      backLabel = "Back to Semesters";
      backAction = "semesters";
    } else if (state.level === "resources") {
      backLabel = "Back to Subjects";
      backAction = "subjects";
    }
    backNav = document.createElement("div");
    backNav.className = "back-nav";
    backNav.innerHTML = `<button class="back-btn" data-action="${backAction}"><i class="fas fa-arrow-left"></i> ${backLabel}</button>`;
    contentArea.insertBefore(backNav, elements.cardGrid);
  }

  if (state.level === "resources") {
    renderResources();
    return;
  }

  if (items.length === 0) {
    elements.cardGrid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h3>No items found</h3></div>`;
    return;
  }

  let html = "";
  items.forEach((item) => {
    const icon = item.icon || "fa-folder";
    const title = item.name || `Item ${item.id}`;
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
      subtitle = `${(item.subjects || []).length} Subjects`;
      badge = `${(item.subjects || []).length} Subjects`;
      action = "subjects";
      dataId = item.id;
    } else if (state.level === "subjects") {
      subtitle = item.code || "Subject";
      badge = "📚 Resources";
      action = "resources";
      dataId = item.id;
    }
    html += `
      <div class="card ${
        state.level === "subjects" ? "subject-card" : ""
      }" data-action="${action}" data-id="${dataId}">
        ${badge ? `<span class="card-badge">${badge}</span>` : ""}
        <div class="card-icon"><i class="fas ${icon}"></i></div>
        <div class="card-title">${title}</div>
        ${subtitle ? `<div class="card-subtitle">${subtitle}</div>` : ""}
        ${
          state.level === "subjects"
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
  elements.cardGrid.innerHTML = html;
  updateBreadcrumb();
}

function updateHero() {
  const level = state.level;
  if (level === "faculties") {
    elements.heroTitle.innerHTML =
      'Welcome to <br /><span class="gradient-text">MU Digital Library</span>';
    elements.heroSubtext.textContent =
      "Use the search bar above or browse via the sidebar.";
    elements.subtitleDisplay.textContent = "Mid-West University";
  } else if (level === "programs") {
    const faculty = getCurrentFacultyData();
    elements.heroTitle.innerHTML = `${
      faculty?.name || "Programs"
    } <br /><span class="gradient-text">Explore Programs</span>`;
    elements.heroSubtext.textContent = `Select a program under ${
      faculty?.name || "this faculty"
    }.`;
    elements.subtitleDisplay.textContent =
      faculty?.name || "Mid-West University";
  } else if (level === "semesters") {
    const program = getCurrentProgramData();
    elements.heroTitle.innerHTML = `${
      program?.name || "Semesters"
    } <br /><span class="gradient-text">Choose a Semester</span>`;
    elements.heroSubtext.textContent = `Select a semester to view subjects.`;
    elements.subtitleDisplay.textContent =
      program?.name || "Mid-West University";
  } else if (level === "subjects") {
    const program = getCurrentProgramData();
    elements.heroTitle.innerHTML = `Semester ${
      state.path.semester
    } <br /><span class="gradient-text">${program?.name || "Subjects"}</span>`;
    elements.heroSubtext.textContent = `Select a subject to access resources.`;
    elements.subtitleDisplay.textContent = `${program?.name || ""} – Semester ${
      state.path.semester
    }`;
  } else if (level === "resources") {
    const subject = state.path.subject;
    elements.heroTitle.innerHTML = `${
      subject?.name || "Subject"
    } <br /><span class="gradient-text">Resources</span>`;
    elements.heroSubtext.textContent = `Access syllabus, notes, past papers, and assignments.`;
    elements.subtitleDisplay.textContent =
      subject?.name || "Mid-West University";
  }
}

function renderResources() {
  const subject = state.path.subject;
  if (!subject) {
    elements.cardGrid.innerHTML = `<div class="empty-state"><h3>No subject selected</h3></div>`;
    return;
  }

  const resources = generateResourceContent(subject);
  const html = `
    <div class="card resource-card">
      <div class="resource-header"><i class="fas fa-book-open"></i><h4>Syllabus</h4></div>
      <p>${resources.syllabus}</p>
      <div class="btn-group">
        <button class="btn-download" data-action="view" data-type="syllabus" data-code="${
          subject.code
        }" data-name="${subject.name}" data-pdf="${
    resources.syllabusPdf || ""
  }"><i class="fas fa-eye"></i> View</button>
        <button class="btn-download download" data-action="download" data-type="syllabus" data-code="${
          subject.code
        }" data-name="${subject.name}" data-pdf="${
    resources.syllabusPdf || ""
  }"><i class="fas fa-download"></i> Download</button>
      </div>
    </div>
    <!-- ... similar for notes, pyq, assignments ... -->
  `;
  elements.cardGrid.innerHTML = html;
  updateBreadcrumb();
}

function generateResourceContent(subject) {
  // ... same as original generateResourceContent ...
  return {
    syllabus: "Sample syllabus text",
    notes: ["Note 1", "Note 2"],
    pyq: ["PYQ 1"],
    assignments: ["Assignment 1"],
    syllabusPdf: null,
    notesPdf: null,
    pyqPdf: null,
    assignmentsPdf: null,
  };
}

function updateBreadcrumb() {
  let items = [{ label: "🏛️ Faculties", level: "faculties" }];
  if (state.path.faculty) {
    items.push({
      label: DATA.faculties[state.path.faculty]?.name || state.path.faculty,
      level: "programs",
    });
  }
  if (state.path.program) {
    const program = getCurrentProgramData();
    items.push({
      label: program?.name || state.path.program,
      level: "semesters",
    });
  }
  if (state.path.semester !== null) {
    items.push({ label: `Semester ${state.path.semester}`, level: "subjects" });
  }
  if (state.level === "resources" && state.path.subject) {
    items.push({ label: state.path.subject.name, level: "resources" });
  }

  let html = "";
  items.forEach((item, index) => {
    const isActive = index === items.length - 1;
    html += `
      <span class="breadcrumb-item ${isActive ? "active" : ""}" 
            data-action="${item.level}" 
            style="${isActive ? "" : "cursor:pointer;"}">
        ${item.label}
      </span>
    `;
  });
  elements.breadcrumb.innerHTML = html;
}

// ================================================================
//  MODAL HANDLING
// ================================================================
function openResourceModal(type, code, name, pdfUrl = null) {
  if (pdfUrl) {
    elements.modalBody.innerHTML = `<div class="pdf-viewer"><iframe src="${pdfUrl}" width="100%" height="500px" style="border: none; border-radius: 8px;"></iframe></div>`;
  } else {
    let pagesHtml = "";
    for (let i = 1; i <= 5; i++) {
      pagesHtml += `<div class="pdf-page"><h4>${name} – ${type} (Page ${i})</h4><p>Simulated content...</p></div>`;
    }
    elements.modalBody.innerHTML = `<div class="pdf-scroll-container">${pagesHtml}</div>`;
  }
  elements.modalTitle.textContent = `${name} (${code}) - ${type}`;
  elements.modal.style.display = "flex";
  elements.modal.querySelector(".modal-close").focus();
}

function closeResourceModal() {
  elements.modal.style.display = "none";
}

function downloadResource(type, code, name, pdfUrl = null) {
  if (pdfUrl) {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = `${name.replace(/\s+/g, "_")}_${type}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    const content = `Resource: ${name} (${code})\nType: ${type}\nThis is a simulated download.`;
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

// ================================================================
//  EVENT DELEGATION (cards and nav)
// ================================================================
elements.navList.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-btn");
  if (!btn) return;
  const { action, id } = btn.dataset;
  if (action === "back-to-subjects") {
    navigateToSubjects(state.path.semester);
    return;
  }
  switch (action) {
    case "faculties":
      navigateToFaculties();
      break;
    case "programs":
      navigateToPrograms(id);
      break;
    case "semesters":
      navigateToSemesters(id);
      break;
    case "subjects":
      navigateToSubjects(id);
      break;
    case "resources":
      navigateToResources(id);
      break;
  }
});

elements.cardGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  if (card.classList.contains("resource-card")) {
    // Handle resource buttons
    const btn = e.target.closest(".btn-download");
    if (btn) {
      const { action, type, code, name, pdf } = btn.dataset;
      if (action === "view") openResourceModal(type, code, name, pdf);
      else if (action === "download") downloadResource(type, code, name, pdf);
      return;
    }
  } else {
    const { action, id } = card.dataset;
    switch (action) {
      case "programs":
        navigateToPrograms(id);
        break;
      case "semesters":
        navigateToSemesters(id);
        break;
      case "subjects":
        navigateToSubjects(id);
        break;
      case "resources":
        navigateToResources(id);
        break;
    }
  }
});

// Breadcrumb clicks
elements.breadcrumb.addEventListener("click", (e) => {
  const item = e.target.closest(".breadcrumb-item");
  if (!item || item.classList.contains("active")) return;
  const { action } = item.dataset;
  if (action === "faculties") navigateToFaculties();
  else if (action === "programs") navigateToPrograms(state.path.faculty);
  else if (action === "semesters") navigateToSemesters(state.path.program);
  else if (action === "subjects") navigateToSubjects(state.path.semester);
});

// Back buttons
document.addEventListener("click", (e) => {
  const backBtn = e.target.closest(".back-btn");
  if (!backBtn) return;
  const { action } = backBtn.dataset;
  if (action === "faculties") navigateToFaculties();
  else if (action === "programs") navigateToPrograms(state.path.faculty);
  else if (action === "semesters") navigateToSemesters(state.path.program);
  else if (action === "subjects") navigateToSubjects(state.path.semester);
});

// ================================================================
//  MODAL CLOSE
// ================================================================
elements.modal.addEventListener("click", (e) => {
  if (e.target === elements.modal) closeResourceModal();
});
elements.modal
  .querySelector(".modal-close")
  .addEventListener("click", closeResourceModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && elements.modal.style.display === "flex")
    closeResourceModal();
});

// ================================================================
//  SIDEBAR TOGGLE
// ================================================================
function loadSidebarState() {
  const saved = localStorage.getItem("muSidebarCollapsed");
  if (saved === "true") {
    elements.sidebar.classList.add("collapsed");
    elements.sidebarToggle.querySelector("i").className =
      "fas fa-chevron-right";
  } else {
    elements.sidebar.classList.remove("collapsed");
    elements.sidebarToggle.querySelector("i").className = "fas fa-chevron-left";
  }
}
function saveSidebarState() {
  localStorage.setItem(
    "muSidebarCollapsed",
    elements.sidebar.classList.contains("collapsed")
  );
}
elements.sidebarToggle.addEventListener("click", () => {
  elements.sidebar.classList.toggle("collapsed");
  const icon = elements.sidebarToggle.querySelector("i");
  icon.className = elements.sidebar.classList.contains("collapsed")
    ? "fas fa-chevron-right"
    : "fas fa-chevron-left";
  saveSidebarState();
});
loadSidebarState();

function toggleSidebar(open) {
  if (window.innerWidth <= 768) {
    elements.sidebar.classList.remove("collapsed");
  }
  if (open === undefined) {
    elements.sidebar.classList.toggle("open");
    elements.overlay.classList.toggle("active");
  } else {
    elements.sidebar.classList.toggle("open", open);
    elements.overlay.classList.toggle("active", open);
  }
  const isOpen = elements.sidebar.classList.contains("open");
  elements.hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}
elements.hamburger.addEventListener("click", () => toggleSidebar());
elements.overlay.addEventListener("click", () => toggleSidebar(false));
elements.sidebarCloseBtn.addEventListener("click", () => toggleSidebar(false));
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && elements.sidebar.classList.contains("open")) {
    toggleSidebar(false);
  }
  if (window.innerWidth <= 768) {
    elements.sidebar.classList.remove("collapsed");
  }
});

// ================================================================
//  THEME TOGGLE
// ================================================================
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    elements.themeIcon.className = "fas fa-sun";
    localStorage.setItem("muTheme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    elements.themeIcon.className = "fas fa-moon";
    localStorage.setItem("muTheme", "light");
  }
}
elements.themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});
applyTheme(localStorage.getItem("muTheme") || "light");

// ================================================================
//  BACK TO TOP
// ================================================================
window.addEventListener("scroll", () => {
  elements.backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});
elements.backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================================================
//  INITIALIZATION
// ================================================================
function renderApp() {
  renderNav();
  renderContent();
}

// Initial render based on current hash
if (window.location.hash) {
  handleHash();
} else {
  handleHash(); // will parse empty hash and set faculties
}
