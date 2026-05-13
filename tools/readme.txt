# TOOLS - Build locale
# Il Ministero delle Eccezioni

--------------------------------------------------
REQUISITI
--------------------------------------------------

Installare Pandoc:

    brew install pandoc

Verifica:

    pandoc --version


--------------------------------------------------
STRUTTURA VERSIONI
--------------------------------------------------

Versione Codex attiva:

    capitoli (V0.1.codex)/

Versione Claude/reference:

    capitoli (V0.1.claude)/


--------------------------------------------------
GENERARE EPUB
--------------------------------------------------

Versione Codex:

    ./build.sh --version v0.1.codex

Genera:

    build/ministero-delle-eccezioni-v0.1.codex.epub

Versione Claude/reference:

    ./build.sh --version v0.1.claude

Genera:

    build/ministero-delle-eccezioni-v0.1.claude.epub


--------------------------------------------------
GENERARE EPUB + HTML
--------------------------------------------------

    ./build.sh --version v0.1.codex --html


--------------------------------------------------
NOTE
--------------------------------------------------

- build/ contiene output generati.
- Lo script include solo i file narrativi con prefisso numerico.
- I documenti di progetto restano in progetto/.
- La lettura online usa index.html e assets/js/app.js.
