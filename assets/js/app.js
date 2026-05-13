const VERSIONS = {
  "v0.1.claude": {
    label: "V0.1.claude",
    base: "capitoli%20%28V0.1.claude%29",
    chapters: [
      { n: 0, slug: "introduzione", title: "Introduzione", label: "Introduzione", file: "00_introduzione.md" },
      { n: 1, slug: "capitolo-1", title: "Una convocazione cortese", label: "Capitolo 1", file: "01_capitolo_1.md" },
      { n: 2, slug: "capitolo-2", title: "La città che non attraversa", label: "Capitolo 2", file: "02_capitolo_2.md" },
      { n: 3, slug: "capitolo-3", title: "Otto colleghi, sette di troppo", label: "Capitolo 3", file: "03_capitolo_3.md" },
      { n: 4, slug: "capitolo-4", title: "Lo scantinato", label: "Capitolo 4", file: "04_capitolo_4.md" },
      { n: 5, slug: "capitolo-5", title: "Il sonno è una pratica non ottimizzata", label: "Capitolo 5", file: "05_capitolo_5.md" },
      { n: 6, slug: "capitolo-6", title: "Una guerra in attesa di chiusura", label: "Capitolo 6", file: "06_capitolo_6.md" },
      { n: 7, slug: "capitolo-7", title: "Il meteo censurato", label: "Capitolo 7", file: "07_capitolo_7.md" },
      { n: 8, slug: "capitolo-8", title: "La regione che non c'è", label: "Capitolo 8", file: "08_capitolo_8.md" },
      { n: 9, slug: "capitolo-9", title: "Greta dice tre parole", label: "Capitolo 9", file: "09_capitolo_9.md" },
      { n: 10, slug: "capitolo-10", title: "Il servizio funerario predittivo", label: "Capitolo 10", file: "10_capitolo_10.md" },
      { n: 11, slug: "capitolo-11", title: "Riunione interdicasteriale", label: "Capitolo 11", file: "11_capitolo_11.md" },
      { n: 12, slug: "capitolo-12", title: "Bothwell racconta qualcosa", label: "Capitolo 12", file: "12_capitolo_12.md" },
      { n: 13, slug: "capitolo-13", title: "Il distributore di caffè parla", label: "Capitolo 13", file: "13_capitolo_13.md" },
      { n: 14, slug: "capitolo-14", title: "Ada dice no", label: "Capitolo 14", file: "14_capitolo_14.md" },
      { n: 15, slug: "capitolo-15", title: "La verità su Bothwell", label: "Capitolo 15", file: "15_capitolo_15.md" },
      { n: 16, slug: "capitolo-16", title: "L'audit arriva", label: "Capitolo 16", file: "16_capitolo_16.md" }
    ]
  },
  "v0.1.codex": {
    label: "V0.1.codex",
    base: "capitoli%20%28V0.1.codex%29",
    chapters: [
      { n: 0, slug: "introduzione", title: "Introduzione", label: "Introduzione", file: "00_introduzione.md" },
      { n: 1, slug: "capitolo-1", title: "Una convocazione cortese", label: "Capitolo 1", file: "01_capitolo_1.md" },
      { n: 2, slug: "capitolo-2", title: "La città che non attraversa", label: "Capitolo 2", file: "02_capitolo_2.md" },
      { n: 3, slug: "capitolo-3", title: "Otto colleghi, sette di troppo", label: "Capitolo 3", file: "03_capitolo_3.md" },
      { n: 4, slug: "capitolo-4", title: "Lo scantinato", label: "Capitolo 4", file: "04_capitolo_4.md" },
      { n: 5, slug: "capitolo-5", title: "Il sonno è una pratica non ottimizzata", label: "Capitolo 5", file: "05_capitolo_5.md" },
      { n: 6, slug: "capitolo-6", title: "Una guerra in attesa di chiusura", label: "Capitolo 6", file: "06_capitolo_6.md" },
      { n: 7, slug: "capitolo-7", title: "Il meteo censurato", label: "Capitolo 7", file: "07_capitolo_7.md" },
      { n: 8, slug: "capitolo-8", title: "La regione che non c'è", label: "Capitolo 8", file: "08_capitolo_8.md" },
      { n: 9, slug: "capitolo-9", title: "Greta dice tre parole", label: "Capitolo 9", file: "09_capitolo_9.md" },
      { n: 10, slug: "capitolo-10", title: "Il servizio funerario predittivo", label: "Capitolo 10", file: "10_capitolo_10.md" },
      { n: 11, slug: "capitolo-11", title: "Riunione interdicasteriale", label: "Capitolo 11", file: "11_capitolo_11.md" },
      { n: 12, slug: "capitolo-12", title: "Bothwell racconta qualcosa", label: "Capitolo 12", file: "12_capitolo_12.md" },
      { n: 13, slug: "capitolo-13", title: "Il distributore di caffè parla", label: "Capitolo 13", file: "13_capitolo_13.md" },
      { n: 14, slug: "capitolo-14", title: "Ada dice no", label: "Capitolo 14", file: "14_capitolo_14.md" },
      { n: 15, slug: "capitolo-15", title: "La verità su Bothwell", label: "Capitolo 15", file: "15_capitolo_15.md" },
      { n: 16, slug: "capitolo-16", title: "L'audit arriva", label: "Capitolo 16", file: "16_capitolo_16.md" },
      { n: 17, slug: "capitolo-17", title: "Preparativi", label: "Capitolo 17", file: "17_capitolo_17.md" },
      { n: 18, slug: "capitolo-18", title: "L'edificio dell'udienza", label: "Capitolo 18", file: "18_capitolo_18.md" },
      { n: 19, slug: "capitolo-19", title: "L'udienza, parte prima", label: "Capitolo 19", file: "19_capitolo_19.md" },
      { n: 20, slug: "capitolo-20", title: "L'udienza, parte seconda", label: "Capitolo 20", file: "20_capitolo_20.md" },
      { n: 21, slug: "capitolo-21", title: "La virgola", label: "Capitolo 21", file: "21_capitolo_21.md" },
      { n: 22, slug: "capitolo-22", title: "Funerale di Bothwell", label: "Capitolo 22", file: "22_capitolo_22.md" },
      { n: 23, slug: "capitolo-23", title: "Riassunzioni", label: "Capitolo 23", file: "23_capitolo_23.md" },
      { n: 24, slug: "epilogo", title: "Una notifica", label: "Epilogo", file: "24_epilogo.md" }
    ]
  }
};

let currentVersionKey = "v0.1.codex";

function currentVersion() {
  return VERSIONS[currentVersionKey] || VERSIONS["v0.1.codex"];
}

function chapterUrl(chapter) {
  const version = currentVersion();
  return `${version.base}/${chapter.file}`;
}

const PROJECT_FILES = [
  { slug: "outline", title: "Outline", file: "progetto/01_outline.md" },
  { slug: "personaggi", title: "Personaggi", file: "progetto/02_personaggi.md" },
  { slug: "worldbuilding", title: "Worldbuilding", file: "progetto/03_worldbuilding.md" },
  { slug: "struttura-capitoli", title: "Struttura capitoli", file: "progetto/04_struttura_capitoli.md" },
  { slug: "temi-running-jokes", title: "Temi e running jokes", file: "progetto/05_temi_e_running_jokes.md" },
  { slug: "scene-chiave", title: "Scene chiave", file: "progetto/06_scene_chiave.md" },
  { slug: "dialoghi-memorabili", title: "Dialoghi memorabili", file: "progetto/07_dialoghi_memorabili.md" },
  { slug: "varianti-presentazione", title: "Varianti presentazione", file: "progetto/08_varianti_presentazione.md" },
  { slug: "guida-prosecuzione", title: "Guida alla prosecuzione", file: "progetto/09_proposta_prosecuzione.md" },
  { slug: "regole-di-voce", title: "Regole di voce", file: "progetto/10_regole_di_voce.md" },
  { slug: "continuita-e-fili", title: "Continuità e fili narrativi", file: "progetto/11_continuita_e_fili.md" },
  { slug: "readme-archivio-claude", title: "README archivio Claude", file: "progetto/12_readme_archivio_claude.md" }
];

const app = document.getElementById("app");
const versionSelect = document.getElementById("version-select");

versionSelect.addEventListener("change", () => {
  currentVersionKey = versionSelect.value;
  route();
});

function stripFirstHeading(markdown) {
  return markdown.replace(/^#\s+.*$/m, "").trim();
}

function renderIndex() {
  const version = currentVersion();
  document.title = `${version.label} · Il Ministero delle Eccezioni`;
  app.innerHTML = `
    <h1 class="book-title">Il Ministero delle Eccezioni</h1>
    <div class="subtitle">Un romanzo in lavorazione · ${version.label}</div>
    <p><em>Una commedia burocratica cosmica in cui la civiltà non è caduta: è solo bloccata in attesa di approvazione.</em></p>
    <h2>Indice</h2>
    <ul class="toc">
      ${version.chapters.map((chapter) => `
        <li><a href="#/${chapter.slug}">
          <span class="num">${chapter.n === 0 ? "—" : String(chapter.n).padStart(2, "0")}</span>
          <span class="title">${chapter.title}</span>
        </a></li>
      `).join("")}
    </ul>
  `;
  window.scrollTo(0, 0);
}

async function renderChapter(slug) {
  const version = currentVersion();
  const index = version.chapters.findIndex((chapter) => chapter.slug === slug);
  if (index === -1) {
    renderIndex();
    return;
  }

  const chapter = version.chapters[index];
  document.title = `${chapter.title} · ${version.label} · Il Ministero delle Eccezioni`;
  app.innerHTML = `<div class="loading">Caricamento del capitolo…</div>`;

  try {
    const response = await fetch(chapterUrl(chapter), { cache: "no-cache" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const markdown = await response.text();
    const html = marked.parse(stripFirstHeading(markdown));
    const previous = index > 0 ? version.chapters[index - 1] : null;
    const next = index < version.chapters.length - 1 ? version.chapters[index + 1] : null;

    app.innerHTML = `
      <div class="subtitle">${version.label} · ${chapter.label}</div>
      <h1>${chapter.title}</h1>
      <article>${html}</article>
      <nav class="chapter-nav">
        ${previous ? `<a href="#/${previous.slug}" class="prev"><span class="label">← Precedente</span><span class="name">${previous.title}</span></a>` : `<span></span>`}
        ${next ? `<a href="#/${next.slug}" class="next"><span class="label">Successivo →</span><span class="name">${next.title}</span></a>` : `<a href="#/" class="next"><span class="label">Indice</span><span class="name">Tutti i capitoli</span></a>`}
      </nav>
    `;
    window.scrollTo(0, 0);
  } catch (error) {
    app.innerHTML = `<div class="loading">Impossibile caricare il capitolo. (${error.message})</div>`;
  }
}

function renderProjectIndex() {
  document.title = "Progetto · Il Ministero delle Eccezioni";
  app.innerHTML = `
    <div class="subtitle">Materiali di lavorazione</div>
    <h1>Progetto</h1>
    <p><em>Documenti dietro le quinte: outline, personaggi, mondo, struttura, regole di voce. Non fanno parte del romanzo — sono lo scheletro su cui è costruito.</em></p>
    <ul class="toc">
      ${PROJECT_FILES.map((projectFile, index) => `
        <li><a href="#/progetto/${projectFile.slug}">
          <span class="num">${String(index + 1).padStart(2, "0")}</span>
          <span class="title">${projectFile.title}</span>
        </a></li>
      `).join("")}
    </ul>
  `;
  window.scrollTo(0, 0);
}

async function renderProjectDoc(slug) {
  const index = PROJECT_FILES.findIndex((projectFile) => projectFile.slug === slug);
  if (index === -1) {
    renderProjectIndex();
    return;
  }

  const doc = PROJECT_FILES[index];
  document.title = `${doc.title} · Progetto · Il Ministero delle Eccezioni`;
  app.innerHTML = `<div class="loading">Caricamento…</div>`;

  try {
    const response = await fetch(doc.file, { cache: "no-cache" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const markdown = await response.text();
    const html = marked.parse(stripFirstHeading(markdown));
    const previous = index > 0 ? PROJECT_FILES[index - 1] : null;
    const next = index < PROJECT_FILES.length - 1 ? PROJECT_FILES[index + 1] : null;

    app.innerHTML = `
      <div class="subtitle">Progetto</div>
      <h1>${doc.title}</h1>
      <article>${html}</article>
      <nav class="chapter-nav">
        ${previous ? `<a href="#/progetto/${previous.slug}" class="prev"><span class="label">← Precedente</span><span class="name">${previous.title}</span></a>` : `<a href="#/progetto" class="prev"><span class="label">← Progetto</span><span class="name">Indice</span></a>`}
        ${next ? `<a href="#/progetto/${next.slug}" class="next"><span class="label">Successivo →</span><span class="name">${next.title}</span></a>` : `<a href="#/progetto" class="next"><span class="label">Progetto</span><span class="name">Indice</span></a>`}
      </nav>
    `;
    window.scrollTo(0, 0);
  } catch (error) {
    app.innerHTML = `<div class="loading">Impossibile caricare il documento. (${error.message})</div>`;
  }
}

function route() {
  versionSelect.value = currentVersionKey;
  const hash = location.hash.replace(/^#\/?/, "");
  if (!hash || hash === "/") {
    renderIndex();
    return;
  }
  if (hash === "progetto") {
    renderProjectIndex();
    return;
  }
  if (hash.startsWith("progetto/")) {
    renderProjectDoc(hash.slice("progetto/".length));
    return;
  }
  renderChapter(hash);
}

window.addEventListener("hashchange", route);
route();
