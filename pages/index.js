import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      <div className="card">
        <h1>Betrouwbare elektricien</h1>
        <p className="muted">
          MH-Elektra voor meterkasten, storingen, verlichting en laadpalen.
          Duidelijke afspraken en netjes werk.
        </p>

        <a className="btn btn-red" href="tel:+31642884827">
          📞 +31 6 42 88 48 27
        </a>
      </div>

      <div className="card">
        <h2>Diensten</h2>
        <ul>
          <li>Meterkast / groepenkast</li>
          <li>Storingen & kortsluiting</li>
          <li>Laadpaal voorbereiding</li>
          <li>Verlichting binnen & buiten</li>
        </ul>
      </div>

      <div className="card">
        <h2>Contact</h2>
        <p className="muted">Bel of WhatsApp voor snelle hulp</p>
        <a className="btn btn-red" href="https://wa.me/31642884827">
          💬 WhatsApp
        </a>
      </div>

      <div className="card">
        <h2>Locatie</h2>
        <iframe
          src="https://www.google.com/maps?q=MH+Elektra+Nederland&output=embed"
          width="100%"
          height="300"
          style={{border:0}}
          loading="lazy"
        />
      </div>
    </Layout>
  );
}

