import Layout from "../components/Layout";

export default function Diensten() {
  return (
    <Layout title="Diensten | MH-Elektra" description="Diensten van MH-Elektra: meterkast, storingen, laadpaal, verlichting en renovatie.">
      <section className="stack">
        <div className="card">
          <h1>Diensten</h1>
          <p className="muted">Korte lijst. Geen drukke blokken naast elkaar.</p>
        </div>

        <div className="card">
          <div className="list">
            <div className="row"><span className="dot" /><div><strong>Meterkast / Groepenkast</strong><div className="muted">Uitbreiden, vervangen, extra groepen, kookgroep, 3-fase.</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Storingen</strong><div className="muted">Kortsluiting opsporen, meten en veilig oplossen.</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Laadpaal</strong><div className="muted">Voorbereiding/aanleg + meterkast aanpassingen.</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Verlichting</strong><div className="muted">Binnen/buiten, spots, sensor, dimmers.</div></div></div>
            <div className="row"><span className="dot" /><div><strong>WCD’s & schakelaars</strong><div className="muted">Nieuwe punten, verplaatsen, uitbreiden.</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Renovatie / nieuwbouw</strong><div className="muted">Complete installatie, netjes afgewerkt.</div></div></div>
          </div>
        </div>

        <div className="card">
          <h2>Offerte</h2>
          <p className="muted">Stuur je vraag + locatie + foto’s (indien mogelijk).</p>
          <div className="actions">
            <a className="btn btnRed" href="tel:+31642884827">📞 Bel</a>
            <a className="btn" target="_blank" rel="noopener" href="https://wa.me/31642884827?text=Hoi%20MH-Elektra%2C%20ik%20wil%20graag%20een%20offerte%20voor...">💬 WhatsApp offerte</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
