import Layout from "../components/Layout";

export default function Contact() {
  // VERVANG DIT MET JE PLAATS/REGIO:
  const mapsQuery = encodeURIComponent("MH Elektra Nederland");

  return (
    <Layout title="Contact | MH-Elektra" description="Contact met MH-Elektra. Bel, mail of WhatsApp. Inclusief locatiekaart.">
      <section className="stack">
        <div className="card">
          <h1>Contact</h1>
          <p className="muted">Stuur je vraag + locatie + (liefst) foto’s van de meterkast/klus.</p>

          <div className="actions">
            <a className="btn btnRed" href="tel:+31642884827">📞 +31 6 42 88 48 27</a>
            <a className="btn" href="mailto:michelhockx@ziggo.nl?subject=Offerte%20MH-Elektra">✉️ michelhockx@ziggo.nl</a>
            <a className="btn" target="_blank" rel="noopener" href="https://wa.me/31642884827?text=Hoi%20MH-Elektra%2C%20ik%20wil%20graag%20een%20offerte%20voor...">💬 WhatsApp offerte</a>
          </div>
        </div>

        <div className="card">
          <h2>Locatie / Werkgebied</h2>
          <p className="muted">Zet hier je plaats of regio. (Ik kan ’m ook precies instellen als je de plaats zegt.)</p>

          <div className="mapWrap">
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              aria-label="Google Maps"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
