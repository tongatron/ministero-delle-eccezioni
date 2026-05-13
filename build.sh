#!/usr/bin/env bash
# build.sh — Genera l'ePub (e opzionalmente HTML) da una cartella capitoli
# Requisiti: pandoc >= 3.0
# Uso:
#   ./build.sh [--html] [--open]
#   ./build.sh --version v0.1.claude
#   ./build.sh --version v0.1.codex --output build/ministero-delle-eccezioni.epub

set -eo pipefail

# ---------- configurazione ----------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$SCRIPT_DIR/build"
METADATA="$SCRIPT_DIR/metadata.yml"
CSS="$SCRIPT_DIR/assets/css/epub.css"
COVER="$SCRIPT_DIR/assets/copertina/copertina.png"
BASE_TITLE="Il Ministero delle Eccezioni"
VERSION="v0.1.codex"
CAPITOLI_DIR=""
OUTPUT_EPUB=""
OUTPUT_HTML=""
TITLE_SUFFIX=""

GENERA_HTML=false
APRI_DOPO=false

while [ $# -gt 0 ]; do
  case "$1" in
    --html) GENERA_HTML=true; shift ;;
    --open) APRI_DOPO=true; shift ;;
    --version)
      VERSION="${2:-}"
      shift 2
      ;;
    --chapters)
      CAPITOLI_DIR="$SCRIPT_DIR/${2:-}"
      shift 2
      ;;
    --output)
      OUTPUT_EPUB="$SCRIPT_DIR/${2:-}"
      shift 2
      ;;
    --title-suffix)
      TITLE_SUFFIX="${2:-}"
      shift 2
      ;;
    *)
      echo "❌ Argomento non riconosciuto: $1"
      exit 1
      ;;
  esac
done

case "$VERSION" in
  v0.1.claude|V0.1.claude|v01claude|v1claude|V1claude)
    DEFAULT_CAPITOLI_DIR="$SCRIPT_DIR/capitoli (V0.1.claude)"
    DEFAULT_OUTPUT_EPUB="$BUILD_DIR/ministero-delle-eccezioni-v0.1.claude.epub"
    DEFAULT_OUTPUT_HTML="$BUILD_DIR/ministero-delle-eccezioni-v0.1.claude.html"
    DEFAULT_TITLE_SUFFIX="V0.1.claude"
    ;;
  v0.1.codex|V0.1.codex|v01codex|v1codex|V1Codex)
    DEFAULT_CAPITOLI_DIR="$SCRIPT_DIR/capitoli (V0.1.codex)"
    DEFAULT_OUTPUT_EPUB="$BUILD_DIR/ministero-delle-eccezioni-v0.1.codex.epub"
    DEFAULT_OUTPUT_HTML="$BUILD_DIR/ministero-delle-eccezioni-v0.1.codex.html"
    DEFAULT_TITLE_SUFFIX="V0.1.codex"
    ;;
  *)
    echo "❌ Versione non riconosciuta: $VERSION"
    exit 1
    ;;
esac

CAPITOLI_DIR="${CAPITOLI_DIR:-$DEFAULT_CAPITOLI_DIR}"
OUTPUT_EPUB="${OUTPUT_EPUB:-$DEFAULT_OUTPUT_EPUB}"
OUTPUT_HTML="${OUTPUT_HTML:-$DEFAULT_OUTPUT_HTML}"
TITLE_SUFFIX="${TITLE_SUFFIX:-$DEFAULT_TITLE_SUFFIX}"
BOOK_TITLE="$BASE_TITLE ($TITLE_SUFFIX)"

# ---------- controlli ----------
if ! command -v pandoc &>/dev/null; then
  echo "❌ Pandoc non trovato. Installalo con: brew install pandoc"
  exit 1
fi

PANDOC_VERSION=$(pandoc --version | head -1 | awk '{print $2}')
echo "✓ Pandoc $PANDOC_VERSION"

mkdir -p "$BUILD_DIR"

# ---------- raccolta capitoli ordinati ----------
CAPITOLI=()
while IFS= read -r f; do
  CAPITOLI+=("$f")
done < <(find "$CAPITOLI_DIR" -maxdepth 1 -type f \( -name "00_*.md" -o -name "[0-9][0-9]_capitolo_*.md" \) | sort)

if [ ${#CAPITOLI[@]} -eq 0 ]; then
  echo "❌ Nessun file .md trovato in $CAPITOLI_DIR"
  exit 1
fi

echo "📚 Capitoli trovati:"
for f in "${CAPITOLI[@]}"; do
  echo "   • $(basename "$f")"
done
echo "🏷  Titolo: $BOOK_TITLE"

# ---------- argomenti copertina (opzionale) ----------
COVER_ARG=()
if [ -f "$COVER" ]; then
  COVER_ARG=(--epub-cover-image="$COVER")
  echo "🖼  Copertina: $(basename "$COVER")"
else
  echo "⚠️  Copertina non trovata in assets/copertina/ — verrà omessa"
fi

# ---------- generazione ePub ----------
echo ""
echo "🔨 Generazione ePub…"

pandoc \
  --from markdown+smart+yaml_metadata_block \
  --to epub3 \
  --metadata-file="$METADATA" \
  --metadata=title:"$BOOK_TITLE" \
  --css="$CSS" \
  --toc \
  --toc-depth=1 \
  --split-level=1 \
  --standalone \
  "${COVER_ARG[@]}" \
  --output="$OUTPUT_EPUB" \
  "${CAPITOLI[@]}"

echo "✅ ePub generato: $OUTPUT_EPUB"

# ---------- generazione HTML (opzionale) ----------
if [ "$GENERA_HTML" = true ]; then
  echo ""
  echo "🔨 Generazione HTML…"
  pandoc \
    --from markdown+smart+yaml_metadata_block \
    --to html5 \
    --metadata-file="$METADATA" \
    --metadata=title:"$BOOK_TITLE" \
    --css="$CSS" \
    --toc \
    --toc-depth=1 \
    --standalone \
    --output="$OUTPUT_HTML" \
    "${CAPITOLI[@]}"
  echo "✅ HTML generato: $OUTPUT_HTML"
fi

# ---------- apertura automatica (macOS) ----------
if [ "$APRI_DOPO" = true ]; then
  if [ "$(uname)" = "Darwin" ]; then
    open "$OUTPUT_EPUB"
  fi
fi

echo ""
echo "🎉 Build completata."
