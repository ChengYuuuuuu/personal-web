import { useEffect, useRef } from "react";

export default function Marquee({ words }) {
  const trackRef = useRef(null);
  const items = [...words, ...words, ...words];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let x = 0;
    const speed = 0.35;
    const half = () => track.scrollWidth / 2;

    const tick = () => {
      x -= speed;
      const h = half();
      if (Math.abs(x) >= h) x += h;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="marquee">
      <div className="marquee__track" ref={trackRef}>
        {items.map((w, i) => (
          <div className="marquee__group" key={i}>
            <span>{w}</span>
            <span className="dot">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
