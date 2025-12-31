import { useEffect, useMemo, useState } from "react";

export default function Slider() {
  const slides = useMemo(() => ([
    { src: "/slides/slide1.jpg", label: "Laadpaal voorbereiding" },
    { src: "/slides/slide2.jpg", label: "Verlichting (binnen/buiten)" },
    { src: "/slides/slide3.jpg", label: "Meterkast / groepenkas" }
  ]), []);

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(v => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  const prev = () => setIdx(v => (v - 1 + slides.length) % slides.length);
  const next = () => setIdx(v => (v + 1) % slides.length);

  return (
    <div className="card slider">
      <div className="sliderInner">
        <img className="slideImg" src={slides[idx].src} alt={slides[idx].label} />
        <div className="caption">{slides[idx].label}</div>

        <button className="navBtn left" onClick={prev} aria-label="Vorige">‹</button>
        <button className="navBtn right" onClick={next} aria-label="Volgende">›</button>

        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ga naar slide ${i + 1}`}
              className={"dotBtn" + (i === idx ? " active" : "")}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
