import { useEffect, useState } from "react";

export default function LogoStrip({ title = "Logo's", subtitle = "" }) {
  const [logos, setLogos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/logos")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          setLogos(Array.isArray(data?.logos) ? data.logos : []);
          setLoaded(true);
        }
      })
      .catch(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loaded && logos.length === 0) return null;

  return (
    <div className="logoSection">
      <div className="logoHeader">
        <h2>{title}</h2>
        {subtitle ? <p className="muted">{subtitle}</p> : null}
      </div>

      <div className="logoGrid" aria-label="Logo's">
        {logos.map((l) => (
          <div key={l.src} className="logoCard">
            <img className="logoImg" src={l.src} alt={l.name} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
