import Layout from "../components/Layout";
import Slider from "../components/Slider";

export default function Projecten() {
  return (
    <Layout title="Projecten | MH-Elektra" description="Projecten en voorbeelden van MH-Elektra met foto slider.">
      <section className="stack">
        <div className="card">
          <h1>Projecten</h1>
          <p className="muted">Plaats je klusfoto’s in <code>/public/slides/</code> als slide1.jpg, slide2.jpg, slide3.jpg</p>
        </div>

        <Slider />

        <div className="card">
          <h2>Wat klanten waarderen</h2>
          <div className="list">
            <div className="row"><span className="dot" /><div><strong>Netjes werken</strong><div className="muted">Strakke afwerking en schoon opleveren</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Meedenken</strong><div className="muted">Praktische oplossingen die veilig zijn</div></div></div>
            <div className="row"><span className="dot" /><div><strong>Snelle hulp</strong><div className="muted">Storingen? Bel of WhatsApp</div></div></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
