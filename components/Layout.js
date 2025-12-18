import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img src="/logo.png" alt="MH-Elektra logo" />
            <a className="btn btn-red" href="tel:+31642884827">📞 Bel</a>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="container muted">
        © {new Date().getFullYear()} MH-Elektra
      </footer>
    </>
  );
}
