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

Versione corrente:

    capitoli (V0.1)/

Versione precedente:

    capitoli (V0.0.1)/


--------------------------------------------------
GENERARE EPUB
--------------------------------------------------

Versione corrente:

    ./build.sh --version v0.1

Genera:

    build/ministero-delle-eccezioni-v0.1.epub

Versione precedente:

    ./build.sh --version v0.0.1

Genera:

    build/ministero-delle-eccezioni-v0.0.1.epub


--------------------------------------------------
GENERARE EPUB + HTML
--------------------------------------------------

    ./build.sh --version v0.1 --html


--------------------------------------------------
NOTE
--------------------------------------------------

- build/ contiene output generati.
- Lo script include solo i file narrativi con prefisso numerico.
- I documenti di progetto restano in progetto/.
- La lettura online usa index.html e assets/js/app.js.
