import logo from "./logo.svg";
import "./App.css";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "bootstrap-italia/dist/js/bootstrap-italia.bundle.min.js";
import { useState } from "react";

function App() {
  const QRCODE_MESSAGE =
    "Scansiona il QR code per accedere alle informazioni della struttura.";

  // elenco uffici
  const uffici = [
    "Denominazione ufficio 1",
    "Denominazione ufficio 2",
    "Denominazione ufficio 3",
    "Denominazione ufficio 4",
    "Denominazione ufficio 5",
    "Denominazione ufficio 6",
  ];

  // stato per checkbox selezionate
  const [selezionati, setSelezionati] = useState([]);

  // gestore cambio checkbox
  const handleChange = (nome) => {
    setSelezionati((prev) =>
      prev.includes(nome)
        ? prev.filter((item) => item !== nome)
        : [...prev, nome]
    );
  };


    
  return (
    <main className="app-wrapper bg-lighter min-vh-100 py-4 px-2 px-sm-3 px-md-0">




      
      <div className="container shadow my-4 p-5 bg-white rounded-3">
        {/* Titolo principale (visivamente nascosto ma semantico) */}
        <h1 className="visually-hidden">Sezione Rappresentante Legale</h1>

        {/* Dati Rappresentante Legale */}
        <header className="mb-4">
          <div className="d-flex align-items-end gap-2 mb-5 rounded">
            <h2 className="h2 m-0">
              Benvenuto,{" "}
              <strong className="mb-1 titlename">Mario Rossi</strong>
            </h2>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Codice Fiscale:</strong> SHFGFJDK
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Email:</strong>{" "}
                <a href="mailto:mariorossi@gmail.com">mariorossi@gmail.com</a>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Telefono:</strong>{" "}
                <a href="tel:123457889">123457889</a>
              </p>
            </div>
          </div>
        </header>

        {/* Selezione struttura */}
        <section aria-labelledby="strutture-competenza">
          <h2 id="strutture-competenza" className=" fw-semibold h3">
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
    <option value="" disabled>
      Struttura di competenza
    </option>
    <option value="Value 1">Struttura 1</option>
    <option value="Value 2">Struttura 2</option>
    <option value="Value 3">Struttura 3</option>
  </select>
</div>

        </section>

        {/* Informazioni Struttura */}
        <section aria-labelledby="info-struttura" className="section-box rounded mb-4">
          <div className="d-flex align-items-center mb-4">
            <svg
              className="icon me-2 title coloricon"
              aria-hidden="true"
              focusable="false"
            >
              <use
                href={`${process.env.PUBLIC_URL}/svg/sprites.svg#it-pa`}
              ></use>
            </svg>
            <h2 id="info-struttura" className="fw-bold h3 mb-0">
              Informazioni Struttura
            </h2>
          </div>

          <h3 className="title mb-3 fw-semibold">Anagrafica</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Denominazione presidio:</strong>{" "}
                Presidio A
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Codice fiscale:</strong> Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Ragione sociale gestore:</strong>{" "}
                Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">P.IVA gestore:</strong> Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Indirizzo presidio:</strong> Lorem
                ipsum
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Numero civico:</strong> Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Località:</strong> Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">Provincia:</strong> Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <p>
                <strong className="title">CAP:</strong> Lorem ipsum
              </p>
            </div>
            <hr />
          </div>

          <h3 className="title mt-4 mb-3 fw-semibold">Riferimenti SSN</h3>
          <div className="row">
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">ASL di riferimento:</strong> ASL Roma
                Capitale 2
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Codice NSIS:</strong> Lorem ipsum
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <p>
                <strong className="title">Codice SIAS:</strong> Lorem ipsum
              </p>
            </div>
            <hr />
          </div>

          <h3 className="title mt-4 mb-3 fw-semibold">Contatti</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">PEC:</strong>{" "}
                <a href="mailto:pec@presidio.it">pec@presidio.it</a>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="title">E-mail:</strong>{" "}
                <a href="mailto:info@presidio.it">info@presidio.it</a>
              </p>
            </div>
          </div>
        </section>

        {/* Accreditamento */}
        <section aria-labelledby="accreditamento" className="section-box rounded mb-3">
          <div className="d-flex align-items-center mb-4">
            <svg
              className="icon me-2 title coloricon"
              aria-hidden="true"
              focusable="false"
            >
              <use
                href={`${process.env.PUBLIC_URL}/svg/sprites.svg#it-check-circle`}
              ></use>
            </svg>
            <h2 id="accreditamento" className="fw-semibold h3 mb-0">
              Accreditamento
            </h2>
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Tipologia Atto:</strong> Determina
                dirigenziale
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Numero provvedimento:</strong>{" "}
                Presidio A
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p>
                <strong className="title">Data provvedimento:</strong>{" "}
                12/02/2025
              </p>
            </div>

            <div className="col-12">
              <div
                className="d-flex flex-wrap align-items-center"
                role="list"
                aria-label="Elenco branche"
              >
                <p className="me-2 mb-0">
                  <strong className="title">Branche:</strong>
                </p>
                {Array.from({ length: 10 }, (_, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill bg-primary me-1 "
                    role="listitem"
                  >
                    Branca {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Segnalazioni Difformità */}
        <section aria-labelledby="segnalazioni" className="section-box rounded mb-3">
          <div className="d-flex align-items-center mb-4">
            <svg
              className="icon me-2 title coloricon"
              aria-hidden="true"
              focusable="false"
            >
              <use
                href={`${process.env.PUBLIC_URL}/svg/sprites.svg#it-warning-circle`}
              ></use>
            </svg>
            <h2 id="segnalazioni" className="fw-semibold h3 mb-0">
              Segnalazioni Difformità
            </h2>
          </div>

          <form aria-label="Modulo per inviare una segnalazione">
            <div className="form-group mb-3">
              <label htmlFor="exampleFormControlTextarea1">
                Inserisci segnalazione
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Invia Segnalazione
            </button>
          </form>
        </section>

        {/* Footer azioni */}
        <footer className="d-flex justify-content-between flex-wrap mt-5" aria-label="Azioni principali">
          <button className="btn btn-outline-secondary mt-2">Logout</button>

         <div className="d-flex flex-wrap justify-content-end">
  {/* Bottone Scarica PDF */}
  <button
    type="button"
    className="btn btn-outline-primary mt-2 me-2 d-flex align-items-center justify-content-between px-3"
    aria-label="Scarica documento in formato PDF"
  >
    {/* Immagine PNG a sinistra */}
    <img
      src={`${process.env.PUBLIC_URL}/QR1.png`}
      alt="Icona QR Code"
      width="24"
      height="24"
      className="me-2"
    />

    <span className="flex-grow-1 text-center">Scarica PDF</span>

    {/* Icona Bootstrap Italia a destra */}
      <img
     src={`${process.env.PUBLIC_URL}/PDF.png`} 
      alt="Icona PDF"
      width="24"
      height="24"
      className="me-2 "
    />
  </button>

  {/* Bottone Scarica JPG (QR Code) */}
  <button
    type="button"
    className="btn btn-primary mt-2 d-flex align-items-center justify-content-between px-3"
    aria-label="Scarica immagine QR Code in formato JPG"
  >
    {/* Immagine PNG a sinistra */}
    <img
      src={`${process.env.PUBLIC_URL}/QR.png`}
      alt="Icona QR Code"
      width="24"
      height="24"
      className="me-2"
    />

    <span className="flex-grow-1 text-center">Scarica JPG</span>

    {/* Icona Bootstrap Italia a destra */}
     <img
      src={`${process.env.PUBLIC_URL}/bi_filetype-png.png`}
      alt="Icona QR Code"
      width="24"
      height="24"
      className="me-2"
    />
  </button>
</div>

        </footer>
      


      </div>
    </main>
  );
}

export default App;
