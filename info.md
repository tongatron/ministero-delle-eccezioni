# Il Ministero delle Eccezioni

Romanzo satirico di fantascienza. Materiali di lavorazione.

## Struttura della cartella

```text
libro/
├── README.md
├── capitoli (V0.1.claude)/       # bozza Claude/reference fino al capitolo 16
├── capitoli (V0.1.codex)/        # bozza Codex in lavorazione fino al capitolo 13
├── progetto/                     # documenti di lavoro
├── assets/                       # css, copertina e asset tecnici
├── build/                        # output generati
├── build.sh
└── index.html                    # lettura online con selettore versione
```

## Versioni disponibili

### V0.1.claude

0. [Introduzione](<capitoli (V0.1.claude)/00_introduzione.md>)
1. [Una convocazione cortese](<capitoli (V0.1.claude)/01_capitolo_1.md>)
2. [La città che non attraversa](<capitoli (V0.1.claude)/02_capitolo_2.md>)
3. [Otto colleghi, sette di troppo](<capitoli (V0.1.claude)/03_capitolo_3.md>)
4. [Lo scantinato](<capitoli (V0.1.claude)/04_capitolo_4.md>)
5. [Il sonno è una pratica non ottimizzata](<capitoli (V0.1.claude)/05_capitolo_5.md>)
6. [Una guerra in attesa di chiusura](<capitoli (V0.1.claude)/06_capitolo_6.md>)
7. [Il meteo censurato](<capitoli (V0.1.claude)/07_capitolo_7.md>)
8. [La regione che non c'è](<capitoli (V0.1.claude)/08_capitolo_8.md>)
9. [Greta dice tre parole](<capitoli (V0.1.claude)/09_capitolo_9.md>)
10. [Il servizio funerario predittivo](<capitoli (V0.1.claude)/10_capitolo_10.md>)
11. [Riunione interdicasteriale](<capitoli (V0.1.claude)/11_capitolo_11.md>)
12. [Bothwell racconta qualcosa](<capitoli (V0.1.claude)/12_capitolo_12.md>)
13. [Il distributore di caffè parla](<capitoli (V0.1.claude)/13_capitolo_13.md>)
14. [Ada dice no](<capitoli (V0.1.claude)/14_capitolo_14.md>)
15. [La verità su Bothwell](<capitoli (V0.1.claude)/15_capitolo_15.md>)
16. [L'audit arriva](<capitoli (V0.1.claude)/16_capitolo_16.md>)

### V0.1.codex

0. [Introduzione](<capitoli (V0.1.codex)/00_introduzione.md>)
1. [Una convocazione cortese](<capitoli (V0.1.codex)/01_capitolo_1.md>)
2. [La città che non attraversa](<capitoli (V0.1.codex)/02_capitolo_2.md>)
3. [Otto colleghi, sette di troppo](<capitoli (V0.1.codex)/03_capitolo_3.md>)
4. [Lo scantinato](<capitoli (V0.1.codex)/04_capitolo_4.md>)
5. [Il sonno è una pratica non ottimizzata](<capitoli (V0.1.codex)/05_capitolo_5.md>)
6. [Una guerra in attesa di chiusura](<capitoli (V0.1.codex)/06_capitolo_6.md>)
7. [Il meteo censurato](<capitoli (V0.1.codex)/07_capitolo_7.md>)
8. [La regione che non c'è](<capitoli (V0.1.codex)/08_capitolo_8.md>)
9. [Greta dice tre parole](<capitoli (V0.1.codex)/09_capitolo_9.md>)
10. [Il servizio funerario predittivo](<capitoli (V0.1.codex)/10_capitolo_10.md>)
11. [Riunione interdicasteriale](<capitoli (V0.1.codex)/11_capitolo_11.md>)
12. [Bothwell racconta qualcosa](<capitoli (V0.1.codex)/12_capitolo_12.md>)
13. [Il distributore di caffè parla](<capitoli (V0.1.codex)/13_capitolo_13.md>)

## Scarica l'ePub

[ministero-delle-eccezioni-v0.1.claude.epub](https://github.com/tongatron/ministero-delle-eccezioni/raw/main/build/ministero-delle-eccezioni-v0.1.claude.epub) — bozza Claude/reference fino al capitolo 16, con titolo EPUB `Il Ministero delle Eccezioni (V0.1.claude)`.

[ministero-delle-eccezioni-v0.1.codex.epub](https://github.com/tongatron/ministero-delle-eccezioni/raw/main/build/ministero-delle-eccezioni-v0.1.codex.epub) — bozza Codex in lavorazione, aggiornata fino al capitolo 13.

Leggibile anche online su [tongatron.org/ministero-delle-eccezioni](https://tongatron.org/ministero-delle-eccezioni/), dove l'indice consente di scegliere tra V0.1.claude e V0.1.codex.

## Build

```bash
./build.sh --version v0.1.codex
```

Il comando usa la copertina in `assets/copertina/copertina.png` e imposta il titolo dell'EPUB con il suffisso della versione.

## Tono in una riga

Una commedia burocratica cosmica in cui la civiltà non è caduta: è solo bloccata in attesa di approvazione.
