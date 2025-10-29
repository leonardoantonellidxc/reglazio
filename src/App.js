import "./App.css";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import { useEffect, useState } from "react";


function App() {
  const chips = ["Label 1", "Label 2", "Label 3", "Label 4"];
  const [activeChips, setActiveChips] = useState([]);

  // Funzione toggle chip
  const toggleChip = (label) => {
    setActiveChips((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  // ✅ Inizializza correttamente i componenti Bootstrap Italia al mount
useEffect(() => {
  const initBootstrapItalia = async () => {
    try {
      // Import dinamico: carica solo se serve
      await import("bootstrap-italia");

      // Attendi che window.bootstrap sia definito
      const waitForBootstrap = () =>
        new Promise((resolve) => {
          const check = () => {
            if (window.bootstrap && window.bootstrap.Collapse) resolve();
            else setTimeout(check, 50);
          };
          check();
        });

      await waitForBootstrap();

      // Ora inizializza i collapse
      document.querySelectorAll(".accordion-collapse").forEach((el) => {
        if (!window.bootstrap.Collapse.getInstance(el)) {
          new window.bootstrap.Collapse(el, { toggle: false });
        }
      });
    } catch (err) {
      console.error("Errore inizializzazione Bootstrap Italia:", err);
    }
  };

  initBootstrapItalia();
}, []);


  return (
    <main className="app-wrapper bg-lighter min-vh-100 py-4 px-2 px-sm-3 px-md-0">
      {/* ACCORDION CON CHIPS */}
      <div className="accordion" id="accordionChipsExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingChips">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseChips"
              aria-expanded="false"
              aria-controls="collapseChips"
            >
              Elenco Chip Attivabili
            </button>
          </h2>

          <div
            id="collapseChips"
            className="accordion-collapse collapse"
            aria-labelledby="headingChips"
            data-bs-parent="#accordionChipsExample"
          >
            <div className="accordion-body">
              {/* CHIP */}
              <div className="d-flex flex-wrap gap-2">
                {chips.map((label, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleChip(label)}
                    className={`chip chip-simple ${
                      activeChips.includes(label)
                        ? "bg-primary text-white border-primary"
                        : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      border: activeChips.includes(label)
                        ? "1px solid var(--bs-primary)"
                        : "1px solid #ccc",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <span
                      className="chip-label"
                      style={{
                        color: activeChips.includes(label) ? "#fff" : "inherit",
                      }}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-3">
                <strong>Chip attive:</strong>{" "}
                {activeChips.length > 0
                  ? activeChips.join(", ")
                  : "nessuna selezionata"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENUTO PRINCIPALE */}
      <div className="container shadow my-4 p-5 bg-white rounded-3">
        <h1 className="visually-hidden">Sezione Rappresentante Legale</h1>

        {/* DATI RAPPRESENTANTE LEGALE */}
        <header className="mb-4">
          <div className="d-flex align-items-end gap-2 mb-5 rounded">
            <h2 className="h2 m-0">
              Benvenuto, <strong className="mb-1 titlename">Mario Rossi</strong>
            </h2>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-md-4">
              <p><strong>Codice Fiscale:</strong> SHFGFJDK</p>
            </div>
            <div className="col-12 col-md-4">
              <p><strong>Email:</strong> <a href="mailto:mariorossi@gmail.com">mariorossi@gmail.com</a></p>
            </div>
            <div className="col-12 col-md-4">
              <p><strong>Telefono:</strong> <a href="tel:123457889">123457889</a></p>
            </div>
          </div>
        </header>

        {/* SELEZIONE STRUTTURA */}
        <section aria-labelledby="strutture-competenza">
          <h2 id="strutture-competenza" className="fw-semibold h3">
            Struttura di competenza
          </h2>
          <div className="select-wrapper col-6 mb-4">
            <label htmlFor="defaultSelect" className="visually-hidden">
              Nome della struttura di competenza
            </label>
            <select
              id="defaultSelect"
              name="struttura"
              defaultValue=""
              aria-label="Seleziona nome della struttura di competenza"
            >
              <option value="" disabled>Struttura di competenza</option>
              <option value="Value 1">Struttura 1</option>
              <option value="Value 2">Struttura 2</option>
              <option value="Value 3">Struttura 3</option>
            </select>
          </div>
        </section>

        {/* INFORMAZIONI STRUTTURA */}
        <section aria-labelledby="info-struttura" className="section-box rounded mb-4">
          <div className="d-flex align-items-center mb-4">
            <svg className="icon me-2" aria-hidden="true">
              <use href={`${process.env.PUBLIC_URL}/svg/sprites.svg#it-pa`}></use>
            </svg>
            <h2 id="info-struttura" className="fw-bold h3 mb-0">Informazioni Struttura</h2>
          </div>

          <h3 className="title mb-3 fw-semibold">Anagrafica</h3>
          <div className="row">
            <div className="col-12 col-md-6"><p><strong>Denominazione presidio:</strong> Presidio A</p></div>
            <div className="col-12 col-md-6"><p><strong>Codice fiscale:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6"><p><strong>Ragione sociale gestore:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6"><p><strong>P.IVA gestore:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6"><p><strong>Indirizzo presidio:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6"><p><strong>Numero civico:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6"><p><strong>Località:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6"><p><strong>Provincia:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-6 mb-4"><p><strong>CAP:</strong> Lorem ipsum</p></div>
            <hr />
          </div>

          <h3 className="title mt-4 mb-3 fw-semibold">Riferimenti SSN</h3>
          <div className="row">
            <div className="col-12 col-md-4"><p><strong>ASL di riferimento:</strong> ASL Roma Capitale 2</p></div>
            <div className="col-12 col-md-4"><p><strong>Codice NSIS:</strong> Lorem ipsum</p></div>
            <div className="col-12 col-md-4 mb-4"><p><strong>Codice SIAS:</strong> Lorem ipsum</p></div>
            <hr />
          </div>

          <h3 className="title mt-4 mb-3 fw-semibold">Contatti</h3>
          <div className="row">
            <div className="col-12 col-md-6"><p><strong>PEC:</strong> <a href="mailto:pec@presidio.it">pec@presidio.it</a></p></div>
            <div className="col-12 col-md-6"><p><strong>E-mail:</strong> <a href="mailto:info@presidio.it">info@presidio.it</a></p></div>
          </div>
        </section>

        {/* ACCREDITAMENTO */}
        <section aria-labelledby="accreditamento" className="section-box rounded mb-3">
          <div className="d-flex align-items-center mb-4">
            <svg className="icon me-2" aria-hidden="true">
              <use href={`${process.env.PUBLIC_URL}/svg/sprites.svg#it-check-circle`}></use>
            </svg>
            <h2 id="accreditamento" className="fw-semibold h3 mb-0">Accreditamento</h2>
          </div>

          <div className="row">
            <div className="col-12 col-md-4"><p><strong>Tipologia Atto:</strong> Determina dirigenziale</p></div>
            <div className="col-12 col-md-4"><p><strong>Numero provvedimento:</strong> Presidio A</p></div>
            <div className="col-12 col-md-4"><p><strong>Data provvedimento:</strong> 12/02/2025</p></div>

            <div className="col-12">
              <div className="d-flex flex-wrap align-items-center" role="list" aria-label="Elenco branche">
                <p className="me-2 mb-0"><strong>Branche:</strong></p>
                {Array.from({ length: 10 }, (_, i) => (
                  <span key={i} className="badge rounded-pill bg-primary me-1" role="listitem">
                    Branca {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEGNALAZIONI */}
        <section aria-labelledby="segnalazioni" className="section-box rounded mb-3">
          <div className="d-flex align-items-center mb-4">
            <svg className="icon me-2" aria-hidden="true">
              <use href={`${process.env.PUBLIC_URL}/svg/sprites.svg#it-warning-circle`}></use>
            </svg>
            <h2 id="segnalazioni" className="fw-semibold h3 mb-0">Segnalazioni Difformità</h2>
          </div>

        <form aria-label="Modulo per inviare una segnalazione">
  <div className="form-group mb-3">
    <div className="form-floating">
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        placeholder="Inserisci segnalazione"
        rows="3"
        style={{ height: "120px" }}
      ></textarea>
      <label htmlFor="exampleFormControlTextarea1">
        Inserisci segnalazione
      </label>
    </div>
  </div>

  <button type="submit" className="btn btn-outline-secondary">
    Invia Segnalazione
  </button>
</form>

        </section>

        {/* FOOTER */}
        <footer className="d-flex justify-content-between flex-wrap mt-5" aria-label="Azioni principali">
          <button className="btn btn-outline-secondary mt-2">Logout</button>

          <div className="d-flex flex-wrap justify-content-end">
            <button
              type="button"
              className="btn btn-outline-primary mt-2 me-2 d-flex align-items-center justify-content-between px-3"
              aria-label="Scarica documento in formato PDF"
            >
              <img src={`${process.env.PUBLIC_URL}/QR1.png`} alt="Icona QR" width="24" height="24" className="me-2" />
              <span className="flex-grow-1 text-center">Scarica PDF</span>
              <img src={`${process.env.PUBLIC_URL}/PDF.png`} alt="Icona PDF" width="24" height="24" className="me-2" />
            </button>

            <button
              type="button"
              className="btn btn-primary mt-2 d-flex align-items-center justify-content-between px-3"
              aria-label="Scarica immagine QR Code in formato JPG"
            >
              <img src={`${process.env.PUBLIC_URL}/QR.png`} alt="Icona QR" width="24" height="24" className="me-2" />
              <span className="flex-grow-1 text-center">Scarica JPG</span>
              <img src={`${process.env.PUBLIC_URL}/bi_filetype-png.png`} alt="Icona PNG" width="24" height="24" className="me-2" />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
