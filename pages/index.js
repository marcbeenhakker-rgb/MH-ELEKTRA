import Layout from "../components/Layout";
import Link from "next/link";
import LogoStrip from "../components/LogoStrip";

export default function Home() {
  return (
    <Layout
      title="MH Elektra | Elektricien"
      description="MH-Elektra: storingen, meterkast/groepenkast, laadpalen en verlichting. Snel contact en duidelijke afspraken."
    >
      <section className="stack">
        <div className="hero card">
          <span className="kicker">Uw elektricien in Leiden en omstreken</span>
          <h1>Welkom bij MH Elektra</h1>

          <p className="muted">
            Of het nu gaat om een kleine klus of een groter project: ik sta voor u klaar.
            Met ruim 40 jaar ervaring in het vak en al 14 jaar als zelfstandig elektromonteur
            bent u verzekerd van vakmanschap en betrouwbaarheid.
          </p>

          <p>
            Mijn naam is <strong>Michel Hockx</strong>. Al van jongs af aan ben ik gefascineerd
            door het vak van elektricien. Bij elke klus luister ik goed naar uw wensen en
            denk ik met u mee. Ik doe meer dan alleen elektra aanleggen: ik geef advies,
            wijs op onveilige situaties en help u bij het maken van slimme, toekomstbestendige keuzes.
          </p>

          <div className="actions">
            <a className="btn btnRed" href="tel:+31642884827">📞 +31 6 42 88 48 27</a>
            <a
              className="btn"
              href="mailto:michelhockx@ziggo.nl?subject=Offerte%20MH-Elektra"
            >
              ✉️ Mail
            </a>
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/31642884827?text=Hoi%20MH-Elektra%2C%20ik%20heb%20een%20vraag%20over..."
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className="card">
          <h2>Waarom MH Elektra</h2>
          <div className="list">
            <div className="row">
              <span className="dot" />
              <div>
                <strong>Snel contact</strong>
                <div className="muted">Bel/WhatsApp en je krijgt vlot reactie</div>
              </div>
            </div>
            <div className="row">
              <span className="dot" />
              <div>
                <strong>Veilig & netjes</strong>
                <div className="muted">Correct gemonteerd en getest</div>
              </div>
            </div>
            <div className="row">
              <span className="dot" />
              <div>
                <strong>Transparant</strong>
                <div className="muted">Offerte of prijsafspraak vooraf</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Snel naar</h2>
          <p className="muted"></p>
          <div className="actions">
            <Link className="btn" href="/diensten">Diensten</Link>
            <Link className="btn" href="/projecten">Projecten + slider</Link>
            <Link className="btn btnRed" href="/contact">Contact + maps</Link>
          </div>
          <p className="muted small" style={{ marginTop: 10 }}>
            Tip: stuur foto’s van de meterkast/klus mee voor een snelle inschatting.
          </p>
      
        </div>
              {/* Merkenbalk onderaan */}
<div className="brandBar">
  <LogoStrip />
</div>
      </section>
    </Layout>
  );
}
