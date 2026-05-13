# Guida alla prosecuzione (per agenti AI)

Questo documento è la prima cosa che un agente AI dovrebbe leggere prima di scrivere un nuovo capitolo. Se ne hai tempo per leggerne uno solo, leggi questo.

## Stato corrente

- **Versione attiva**: `V0.1.codex`, in `capitoli (V0.1.codex)/`.
- **Bozza Codex**: introduzione + capitoli 1–15.
- **Bozza Claude/reference**: introduzione + capitoli 1–16, in `capitoli (V0.1.claude)/`.
- **Prossimo capitolo Codex da scrivere**: 16, *L'audit arriva*.
- **Capitoli Codex da scrivere**: 16–23 + epilogo.
- **Outline completo**: `01_outline.md`.
- **Voce e regole**: `10_regole_di_voce.md`.
- **Personaggi canone**: `02_personaggi.md`.
- **Fili narrativi attivi**: `11_continuita_e_fili.md` (leggi obbligatoria).

## Procedura per scrivere un nuovo capitolo

1. **Leggi obbligatoriamente** prima di partire:
   - `10_regole_di_voce.md` (per la voce);
   - `02_personaggi.md` (per i tic di ogni personaggio);
   - `11_continuita_e_fili.md` (per non contraddire le rivelazioni programmate);
   - `04_struttura_capitoli.md`, la sezione del capitolo che stai scrivendo (per la trama);
   - **il capitolo immediatamente precedente** in `capitoli (V0.1.codex)/` (per la voce attuale di Teo e gli stati emotivi correnti).

2. **Calibra l'apertura**:
   - Quasi sempre con una notifica o un piccolo dettaglio domestico (bonsai, bollitore, telefono).
   - Sempre passato remoto, sempre terza persona aderente a Teo.

3. **Costruisci il caso**:
   - Una situazione assurda, raccontata in due-tre paragrafi.
   - Un conflitto burocratico chiaro.
   - Almeno una clausola fittizia con anno e numero (es. *"clausola del 2058, lettera c, comma 4"*).

4. **Dosa l'umorismo**:
   - Una battuta a pagina, mai due.
   - La battuta arriva alla fine. Mai sottolinearla.
   - L'umorismo è secco, britannico, mai gridato.

5. **Inserisci il running joke**:
   - Almeno una notifica nuova nello stile canonico.
   - Almeno un richiamo a un running joke esistente (caramelle, sedia, bonsai, moquette salmone, *Cordialmente*).

6. **Tieni il filone**:
   - Se il capitolo è 7-15: lascia trapelare *senza spiegare* qualcosa di Vellario/Mottera/Sondrio.
   - Se il capitolo è 12-15: prepara la rivelazione su Bothwell (cap 15) e la sua morte (cap 21).
   - Se il capitolo è 16-22: il filone diventa centrale.

7. **Chiusura**:
   - Quasi sempre una notifica + una piccola immagine domestica (bonsai, telefono, una luce).
   - Mai morale, mai riassunto, mai climax di parole.

## Cosa NON fare mai

- **Non spiegare le battute**. Mai. Se hai scritto "ironicamente sorrise", riscrivi.
- **Non far diventare Teo un eroe**. Resta mediocre. Le sue intuizioni sono *involontariamente* utili.
- **Non rivelare in anticipo che Bothwell ha creato il Ministero**. È la rivelazione del cap 15.
- **Non far morire Bothwell prima del cap 21**.
- **Non sciogliere il mistero di Vellario in modo netto**. Resta sospeso. Il caso del cap 8 è una *prova generale*, non la conclusione.
- **Non risolvere il ticket #883**. Mistero parallelo deliberatamente irrisolto.
- **Non dare un nome di battesimo a Pisu**.
- **Non far parlare ARMSTRONG-Λ a voce**.
- **Non far perdere a Bothwell le parentesi quadre**.
- **Non aggiungere emoji al testo principale**. Le notifiche possono contenere, di rado, una piccola emoji vintage tipo girasole.
- **Non far comparire personaggi nuovi se ne esiste uno già canonico che potrebbe servire**.
- **Non riassumere i capitoli precedenti dentro il capitolo nuovo**. Se serve un richiamo, basta una frase.

## Cosa SÌ fare sempre

- Una notifica per capitolo, minimo.
- Una clausola fittizia con anno, minimo.
- Un richiamo a un running joke esistente.
- Una variazione tonale: comicità + inquietudine + tenerezza.
- Una citazione di moquette salmone (almeno una volta).
- Un *Cordialmente* fuori contesto.

## Domande di calibrazione da farsi prima di consegnare il capitolo

1. Suona come continuazione naturale del capitolo precedente?
2. Ogni AI parla con la propria voce stabilita?
3. Ogni personaggio umano fa il proprio tic?
4. C'è almeno una battuta che voglio rileggere?
5. C'è almeno una frase che voglio rileggere *per emozione*?
6. Ho aggiornato il telefono di Teo (notifiche)?
7. Ho rispettato il filone Vellario/Mottera/Bothwell senza accelerarlo?
8. Il capitolo si chiude su una piccola immagine concreta?

## Procedura tecnica

1. Crea il file `capitoli (V0.1.codex)/0X_capitolo_X.md`.
2. Apri con il titolo in `# Capitolo X — *Titolo*` (il sito strappa l'H1 prima del rendering).
3. Scrivi.
4. Aggiungi la voce della versione `V0.1.codex` in `assets/js/app.js`.
5. Aggiorna `info.md` e, se cambia la release pubblica, `README.md`.
6. Commit con messaggio: `Capitolo X: <titolo>`.
7. Push.
