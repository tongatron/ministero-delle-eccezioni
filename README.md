# Il Ministero delle Eccezioni

Romanzo satirico di fantascienza. Materiali di lavorazione.

## Struttura della cartella

```text
libro/
├── README.md
├── capitoli (V 1.0 Claude)/      # versione V1claude completa
├── capitoli (V 1.0 Codex)/       # versione V1Codex in lavorazione
├── progetto/                     # documenti di lavoro
├── assets/                       # css, copertina e asset tecnici
├── build/                        # output generati
├── build.sh
└── index.html                    # lettura online con selettore versione
```

## Versioni disponibili

### V1claude

0. [Introduzione](<capitoli (V 1.0 Claude)/00_introduzione.md>)
1. [Una convocazione cortese](<capitoli (V 1.0 Claude)/01_capitolo_1.md>)
2. [La città che non attraversa](<capitoli (V 1.0 Claude)/02_capitolo_2.md>)
3. [Otto colleghi, sette di troppo](<capitoli (V 1.0 Claude)/03_capitolo_3.md>)
4. [Lo scantinato](<capitoli (V 1.0 Claude)/04_capitolo_4.md>)
5. [Il sonno è una pratica non ottimizzata](<capitoli (V 1.0 Claude)/05_capitolo_5.md>)
6. [Una guerra in attesa di chiusura](<capitoli (V 1.0 Claude)/06_capitolo_6.md>)
7. [Il meteo censurato](<capitoli (V 1.0 Claude)/07_capitolo_7.md>)
8. [La regione che non c'è](<capitoli (V 1.0 Claude)/08_capitolo_8.md>)
9. [Greta dice tre parole](<capitoli (V 1.0 Claude)/09_capitolo_9.md>)
10. [Il servizio funerario predittivo](<capitoli (V 1.0 Claude)/10_capitolo_10.md>)
11. [Riunione interdicasteriale](<capitoli (V 1.0 Claude)/11_capitolo_11.md>)
12. [Bothwell racconta qualcosa](<capitoli (V 1.0 Claude)/12_capitolo_12.md>)
13. [Il distributore di caffè parla](<capitoli (V 1.0 Claude)/13_capitolo_13.md>)
14. [Ada dice no](<capitoli (V 1.0 Claude)/14_capitolo_14.md>)
15. [La verità su Bothwell](<capitoli (V 1.0 Claude)/15_capitolo_15.md>)
16. [L'audit arriva](<capitoli (V 1.0 Claude)/16_capitolo_16.md>)

### V1Codex

1. [Una convocazione cortese](<capitoli (V 1.0 Codex)/01_capitolo_1.md>)
2. [La città che non attraversa](<capitoli (V 1.0 Codex)/02_capitolo_2.md>)
3. [Otto colleghi, sette di troppo](<capitoli (V 1.0 Codex)/03_capitolo_3.md>)
4. [Lo scantinato](<capitoli (V 1.0 Codex)/04_capitolo_4.md>)
5. [Il sonno è una pratica non ottimizzata](<capitoli (V 1.0 Codex)/05_capitolo_5.md>)
6. [Una guerra in attesa di chiusura](<capitoli (V 1.0 Codex)/06_capitolo_6.md>)
7. [Il meteo censurato](<capitoli (V 1.0 Codex)/07_capitolo_7.md>)
8. [La regione che non c'è](<capitoli (V 1.0 Codex)/08_capitolo_8.md>)
9. [Greta dice tre parole](<capitoli (V 1.0 Codex)/09_capitolo_9.md>)
10. [Il servizio funerario predittivo](<capitoli (V 1.0 Codex)/10_capitolo_10.md>)
11. [Riunione interdicasteriale](<capitoli (V 1.0 Codex)/11_capitolo_11.md>)
12. [Bothwell racconta qualcosa](<capitoli (V 1.0 Codex)/12_capitolo_12.md>)
13. [Il distributore di caffè parla](<capitoli (V 1.0 Codex)/13_capitolo_13.md>)

## Scarica l'ePub

[ministero-delle-eccezioni.epub](https://github.com/tongatron/ministero-delle-eccezioni/raw/main/build/ministero-delle-eccezioni.epub) — versione V1claude completa, con copertina e titolo EPUB `Il Ministero delle Eccezioni (V1claude)`.

[ministero-delle-eccezioni-v1codex.epub](https://github.com/tongatron/ministero-delle-eccezioni/raw/main/build/ministero-delle-eccezioni-v1codex.epub) — versione V1Codex in lavorazione, aggiornata fino al capitolo 13.

Leggibile anche online su [tongatron.org/ministero-delle-eccezioni](https://tongatron.org/ministero-delle-eccezioni/), dove l'indice consente di scegliere tra V1claude e V1Codex.

## Build

```bash
./build.sh --version v1claude --output build/ministero-delle-eccezioni.epub
```

Il comando usa la copertina in `assets/copertina/copertina2.png` e imposta il titolo dell'EPUB con il suffisso della versione.

## Tono in una riga

Una commedia burocratica cosmica in cui la civiltà non è caduta: è solo bloccata in attesa di approvazione.
