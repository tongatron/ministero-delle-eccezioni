@echo off
:: build.bat — Genera l'ePub della versione corrente su Windows
:: Requisiti: pandoc nel PATH (https://pandoc.org/installing.html)

setlocal enabledelayedexpansion

set SCRIPT_DIR=%~dp0
set CAPITOLI_DIR=%SCRIPT_DIR%capitoli (V0.1)
set BUILD_DIR=%SCRIPT_DIR%build
set METADATA=%SCRIPT_DIR%metadata.yml
set CSS=%SCRIPT_DIR%assets\css\epub.css
set COVER=%SCRIPT_DIR%assets\copertina\copertina.png
set OUTPUT=%BUILD_DIR%\ministero-delle-eccezioni-v0.1.epub

where pandoc >nul 2>&1
if errorlevel 1 (
    echo Errore: Pandoc non trovato. Scaricalo da https://pandoc.org/installing.html
    exit /b 1
)

if not exist "%BUILD_DIR%" mkdir "%BUILD_DIR%"

:: Raccoglie i capitoli in ordine
set FILES=
for /f "delims=" %%f in ('dir /b /o:n "%CAPITOLI_DIR%\??_*.md" 2^>nul') do (
    set FILES=!FILES! "%CAPITOLI_DIR%\%%f"
)

if "%FILES%"=="" (
    echo Errore: nessun file .md trovato in %CAPITOLI_DIR%
    exit /b 1
)

set COVER_ARG=
if exist "%COVER%" set COVER_ARG=--epub-cover-image="%COVER%"

echo Generazione ePub...
pandoc ^
  --from markdown+smart+yaml_metadata_block ^
  --to epub3 ^
  --metadata-file="%METADATA%" ^
  --css="%CSS%" ^
  --toc --toc-depth=1 ^
  --epub-chapter-level=1 ^
  --split-level=1 ^
  --standalone ^
  %COVER_ARG% ^
  --output="%OUTPUT%" ^
  %FILES%

if errorlevel 1 (
    echo Errore durante la generazione.
    exit /b 1
)

echo ePub generato: %OUTPUT%
