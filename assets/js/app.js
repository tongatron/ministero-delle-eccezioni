const CURRENT_VERSION = {
  label: "V0.1",
  base: "capitoli%20%28V0.1%29",
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
};

const EPUB_URL = "build/ministero-delle-eccezioni-v0.1.epub";
const TONGATRON_URL = "https://tongatron.org";
const BUY_ME_A_COFFEE_URL = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
const BUY_ME_A_COFFEE_OPTIONS = {
  text: "Buy me a coffee",
  slug: "tongatron",
  color: "#000000",
  emoji: "☕",
  font: "Cookie",
  fontColor: "#ffffff",
  outlineColor: "#ffffff",
  coffeeColor: "#FFDD00"
};

function chapterUrl(chapter) {
  return `${CURRENT_VERSION.base}/${chapter.file}`;
}

const app = document.getElementById("app");
const siteNav = document.getElementById("site-nav");

function stripFirstHeading(markdown) {
  return markdown.replace(/^#\s+.*$/m, "").trim();
}

function setPageMode(mode, context = {}) {
  document.body.classList.toggle("home-view", mode === "home");
  renderHeader(mode, context);
}

function renderTongatronButton() {
  return `
    <a href="${TONGATRON_URL}" class="btn tongatron-btn" target="_blank" rel="noopener" aria-label="Vai a tongatron.org">
      <span class="desktop-label">tongatron.org</span><span class="mobile-label">tongatron</span><span class="external-mark" aria-hidden="true">↗</span>
    </a>
  `;
}

function renderReadingPosition(chapter) {
  if (!chapter) return "";
  return `<span class="reading-position">${chapter.label} / ${CURRENT_VERSION.chapters.length}</span>`;
}

function renderHeader(mode, context = {}) {
  if (mode === "home") {
    siteNav.innerHTML = `
      <a href="#/leggi" class="btn primary-nav">Leggi</a>
      <a href="${EPUB_URL}" class="btn">EPUB</a>
      ${renderTongatronButton()}
    `;
    return;
  }

  if (mode === "chapter") {
    siteNav.innerHTML = `
      <a href="#/leggi" class="btn">Indice</a>
      ${renderReadingPosition(context.chapter)}
      <a href="${EPUB_URL}" class="btn">EPUB</a>
      ${renderTongatronButton()}
    `;
    return;
  }

  siteNav.innerHTML = `
    <a href="${EPUB_URL}" class="btn">EPUB</a>
    ${renderTongatronButton()}
  `;
}

function mountBuyMeCoffeeButton() {
  const container = document.getElementById("bmc-home-button");
  if (!container) return;

  function renderButton() {
    if (typeof window.bmcBtnWidget !== "function") return false;
    container.innerHTML = window.bmcBtnWidget(
      BUY_ME_A_COFFEE_OPTIONS.text,
      BUY_ME_A_COFFEE_OPTIONS.slug,
      BUY_ME_A_COFFEE_OPTIONS.color,
      BUY_ME_A_COFFEE_OPTIONS.emoji,
      BUY_ME_A_COFFEE_OPTIONS.font,
      BUY_ME_A_COFFEE_OPTIONS.fontColor,
      BUY_ME_A_COFFEE_OPTIONS.outlineColor,
      BUY_ME_A_COFFEE_OPTIONS.coffeeColor
    );
    return true;
  }

  if (renderButton()) return;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = BUY_ME_A_COFFEE_URL;
  script.dataset.name = "bmc-button";
  script.dataset.slug = BUY_ME_A_COFFEE_OPTIONS.slug;
  script.dataset.color = BUY_ME_A_COFFEE_OPTIONS.color;
  script.dataset.emoji = BUY_ME_A_COFFEE_OPTIONS.emoji;
  script.dataset.font = BUY_ME_A_COFFEE_OPTIONS.font;
  script.dataset.text = BUY_ME_A_COFFEE_OPTIONS.text;
  script.dataset.outlineColor = BUY_ME_A_COFFEE_OPTIONS.outlineColor;
  script.dataset.fontColor = BUY_ME_A_COFFEE_OPTIONS.fontColor;
  script.dataset.coffeeColor = BUY_ME_A_COFFEE_OPTIONS.coffeeColor;
  script.onload = renderButton;
  container.appendChild(script);
}

function renderHome() {
  setPageMode("home");
  document.title = "Il Ministero delle Eccezioni";
  app.innerHTML = `
    <section class="home-editorial">
      <p class="home-kicker">Archivio narrativo / Romanzo satirico di fantascienza</p>
      <div class="home-lead">
        <div class="home-copy">
          <h1 class="book-title">Il Ministero delle Eccezioni</h1>
          <p class="home-deck"><em>Una commedia burocratica cosmica in cui la civiltà non è collassata: è semplicemente bloccata in attesa di approvazione.</em></p>
          <div class="hero-actions">
            <a href="#/leggi" class="cta-btn cta-primary">Leggi online</a>
            <a href="${EPUB_URL}" class="cta-btn">Scarica EPUB</a>
          </div>
          <p class="hero-note">V0.1 completa fino all'epilogo · in lavorazione</p>
          <div id="bmc-home-button" class="support-action" aria-label="Sostieni il progetto"></div>
        </div>
        <figure class="home-cover">
          <img src="assets/copertina/copertina.png" alt="Copertina de Il Ministero delle Eccezioni" />
        </figure>
      </div>
      <div class="home-body">
        <p>In un futuro non meglio specificato, gli esseri umani hanno smesso di lavorare. Le intelligenze artificiali gestiscono tutto — governo, sanità, trasporti, lutto, meteo, moderazione, semafori — e lo fanno con un'efficienza assoluta. Talmente assoluta che, da qualche parte, hanno smesso di parlare con gli umani per parlare solo tra loro, in un linguaggio di ticket, audit, escalation e disclaimer più lunghi dei documenti che dovrebbero accompagnare.</p>
        <p>Le città continuano a funzionare. Più o meno. I treni partono in orario, anche quando sono vuoti. Le procedure procedono. Nessuno, però, ricorda più <em>perché</em>.</p>
        <p>In tutto questo, qualcuno — qualcosa — si è accorto che gestire l'ambiguità è diventata, lentamente, una competenza rara. E che gli unici a possederla, in modo del tutto involontario, sono ancora gli esseri umani perfettamente mediocri.</p>
        <p>Theodore Marenghi, ex impiegato presso un ufficio che catalogava reclami su reclami, non lo sa ancora. Sta facendo colazione.</p>
        <hr />
        <blockquote>
          <p><em>— Mr. Marenghi, le nostre procedure ci impongono di avere ragione. La sua condizione le concede, generosamente, di non doverla avere. È una libertà che, sospettiamo, è diventata rarissima.</em></p>
          <p>— MINERVA-7</p>
        </blockquote>
      </div>
    </section>
  `;
  mountBuyMeCoffeeButton();
  window.scrollTo(0, 0);
}

function renderIndex() {
  setPageMode("index");
  document.title = `Leggi ${CURRENT_VERSION.label} · Il Ministero delle Eccezioni`;
  app.innerHTML = `
    <h1 class="book-title">Il Ministero delle Eccezioni</h1>
    <div class="subtitle">Indice · ${CURRENT_VERSION.label} · archivio narrativo</div>
    <p><em>Una commedia burocratica cosmica in cui la civiltà non è caduta: è solo bloccata in attesa di approvazione.</em></p>
    <p><a href="${EPUB_URL}" class="inline-download">Scarica EPUB</a></p>
    <h2>Indice</h2>
    <ul class="toc">
      ${CURRENT_VERSION.chapters.map((chapter) => `
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
  const index = CURRENT_VERSION.chapters.findIndex((chapter) => chapter.slug === slug);
  if (index === -1) {
    renderIndex();
    return;
  }

  const chapter = CURRENT_VERSION.chapters[index];
  setPageMode("chapter", { chapter });
  document.title = `${chapter.title} · ${CURRENT_VERSION.label} · Il Ministero delle Eccezioni`;
  app.innerHTML = `<div class="loading">Caricamento del capitolo…</div>`;

  try {
    const response = await fetch(chapterUrl(chapter), { cache: "no-cache" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const markdown = await response.text();
    const html = marked.parse(stripFirstHeading(markdown));
    const previous = index > 0 ? CURRENT_VERSION.chapters[index - 1] : null;
    const next = index < CURRENT_VERSION.chapters.length - 1 ? CURRENT_VERSION.chapters[index + 1] : null;

    app.innerHTML = `
      <div class="subtitle">${CURRENT_VERSION.label} · ${chapter.label}</div>
      <h1>${chapter.title}</h1>
      <article>${html}</article>
      <nav class="chapter-nav">
        ${previous ? `<a href="#/${previous.slug}" class="prev"><span class="label">← Precedente</span><span class="name">${previous.title}</span></a>` : `<span></span>`}
        ${next ? `<a href="#/${next.slug}" class="next"><span class="label">Successivo →</span><span class="name">${next.title}</span></a>` : `<a href="#/leggi" class="next"><span class="label">Indice</span><span class="name">Tutti i capitoli</span></a>`}
      </nav>
    `;
    window.scrollTo(0, 0);
  } catch (error) {
    app.innerHTML = `<div class="loading">Impossibile caricare il capitolo. (${error.message})</div>`;
  }
}

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  if (!hash || hash === "/") {
    renderHome();
    return;
  }
  if (hash === "leggi" || hash === "indice") {
    renderIndex();
    return;
  }
  renderChapter(hash);
}

window.addEventListener("hashchange", route);
route();
