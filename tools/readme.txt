# TOOLS — Build e Preview locale
# Il Ministero delle Eccezioni

--------------------------------------------------
REQUISITI
--------------------------------------------------

Installare Python 3

Verifica:

    python3 --version

Installare Pandoc:

    brew install pandoc

Installare libreria markdown per Python:

    pip3 install markdown


--------------------------------------------------
STRUTTURA PROGETTO
--------------------------------------------------

tools/
├── build_epub.py
└── build_preview.py

build/
└── (file generati automaticamente)


--------------------------------------------------
GENERARE EPUB
--------------------------------------------------

Versione base:

    python3 tools/build_epub.py

Genera:

    build/ministero-delle-eccezioni-AAAA-MM-GG.epub


--------------------------------------------------
GENERARE EPUB CON NOME PERSONALIZZATO
--------------------------------------------------

Esempio:

    python3 tools/build_epub.py --name ministero-v2

Genera:

    build/ministero-v2-AAAA-MM-GG.epub


--------------------------------------------------
GENERARE EPUB SENZA DATA
--------------------------------------------------

Esempio:

    python3 tools/build_epub.py --name ministero-final --no-date

Genera:

    build/ministero-final.epub


--------------------------------------------------
SELEZIONARE VERSIONE LIBRO
--------------------------------------------------

Versione Claude:

    python3 tools/build_epub.py --version claude

Versione Codex:

    python3 tools/build_epub.py --version codex


--------------------------------------------------
GENERARE PREVIEW LOCALE HTML
--------------------------------------------------

Genera un file HTML statico leggibile anche senza server web.

Comando:

    python3 tools/build_preview.py

Genera:

    build/index-local.html


--------------------------------------------------
APRIRE PREVIEW LOCALE SU MACOS
--------------------------------------------------

    open build/index-local.html


--------------------------------------------------
NOTE
--------------------------------------------------

- build/ contiene solo file generati automaticamente
- index-local.html NON dipende da GitHub Pages
- La preview locale funziona anche con doppio click
- Se la preview online funziona ma quella locale no,
  il problema è quasi sempre dovuto ai fetch()
  bloccati dal browser in modalità file://


--------------------------------------------------
IDEA FUTURA
--------------------------------------------------

Possibile script unico:

    python3 tools/build_all.py

Che:
- genera epub
- genera preview locale
- copia assets
- crea zip finale del progetto
- aggiorna indice capitoli
- pubblica automaticamente su GitHub Pages

Per ora meglio tenere i tool separati.