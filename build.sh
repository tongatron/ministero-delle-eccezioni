#!/usr/bin/env bash
# build.sh — Genera l'ePub (e opzionalmente HTML) da /capitoli
# Requisiti: pandoc >= 3.0
# Uso: ./build.sh [--html] [--open]

set -eo pipefail

# ---------- configurazione ----------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CAPITOLI_DIR="$SCRIPT_DIR/capitoli"
BUILD_DIR="$SCRIPT_DIR/build"
METADATA="$SCRIPT_DIR/metadata.yml"
CSS="$SCRIPT_DIR/assets/css/epub.css"
COVER="$SCRIPT_DIR/assets/copertina/copertina.jpg"
OUTPUT_EPUB="$BUILD_DIR/ministero-delle-eccezioni.epub"
OUTPUT_HTML="$BUILD_DIR/ministero-delle-eccezioni.html"

GENERA_HTML=false
APRI_DOPO=false

for arg in "$@"; do
  case $arg in
    --html)   GENERA_HTML=true ;;
    --open)   APRI_DOPO=true ;;
  esac
done

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
done < <(find "$CAPITOLI_DIR" -maxdepth 1 -name "*.md" | sort)

if [ ${#CAPITOLI[@]} -eq 0 ]; then
  echo "❌ Nessun file .md trovato in $CAPITOLI_DIR"
  exit 1
fi

echo "📚 Capitoli trovati:"
for f in "${CAPITOLI[@]}"; do
  echo "   • $(basename "$f")"
done

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
