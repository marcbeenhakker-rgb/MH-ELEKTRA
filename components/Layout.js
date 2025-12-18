import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title, description }) {
  const t = title || "MH-Elektra";
  const d = description || "MH-Elektra: storingen, meterkast/groepenkast, laadpaal en verlichting.";

  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="description" content={d} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="topbar">
        <div className="container nav">
          <Link href="/" aria-label="Home" className="brand">
            <img src="/logo.png" alt="MH-Elektra logo" className="logo" />
          </Link>

          <nav className="links" aria-label="Navigatie">
            <Link href="/">Home</Link>
            <Link href="/diensten">Diensten</Link>
            <Link href="/projecten">Projecten</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="navActions">
            <a className="btn" href="tel:+31642884827">📞 Bel</a>
            <Link className="btn btnRed" href="/contact">Offerte</Link>
          </div>
        </div>
      </header>

      <main className="container">
        {children}
      </main>

      <footer className="container footer">
        © {new Date().getFullYear()} MH-Elektra • mh-elektra.nl
      </footer>
    </>
  );
}
