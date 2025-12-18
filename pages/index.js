import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="MH-Elektra | Elektricien" description="MH-Elektra: storingen, meterkast/groepenkast, laadpalen en verlichting. Snel contact en duidelijke afspraken.">
      <section className="stack">
        <div className="hero card">
          <span className="kicker">Uw elektricien in Leiden en omstreken </span>
          <h1>⚡ Welcome bij MH Elektra ⚡</h1>
          <p className="muted">
            Of het nu om een kleine klus of een groter project gaat, ik sta voor je klaar.
          </p>

          <div className="actions">
            <a className="btn btnRed" href="tel:+31642884827">📞 +31 6 42 88 48 27</a>
            <a className="btn" href="mailto:michelhockx@ziggo.nl?subject=Offerte%20MH-Elektra">✉️ Mail</a>
            <a className="btn" target="_blank" rel="noopener" href="https://wa.me/31642884827?text=Hoi%20MH-Elektra%2C%20ik%20heb%20een%20vraag%20over...">💬 WhatsApp</a>
          </div>
        </div>

        <div className="card">
          <h2>Waarom MH-Elektra</h2>
          <div className="list">
            <div className="row"><span className="dot" /><div><strong>Snel contact</strong><div className="muted">Bel/WhatsApp en je krijgt vlot reactie</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Veilig & netjes</strong><div className="muted">Correct gemonteerd en getest</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Transparant</strong><div className="muted">Offerte of prijsafspraak vooraf</div></div></div>
          </div>
        </div>

        <div className="card">
          <h2>Snel naar</h2>
          <p className="muted">Alles onder elkaar, simpel en duidelijk.</p>
          <div className="actions">
            <Link className="btn" href="/diensten">Diensten</Link>
            <Link className="btn" href="/projecten">Projecten + slider</Link>
            <Link className="btn btnRed" href="/contact">Contact + maps</Link>
          </div>
          <p className="muted small" style={{marginTop: 10}}>
            Tip: stuur foto’s van de meterkast/klus mee voor een snelle inschatting.
          </p>
        </div>
      </section>
    </Layout>
  );
}
