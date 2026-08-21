import { useEffect, useState } from "react";

const sections = ["#top", "#experience", "#work", "#toolkit", "#contact"];
const labels = ["Hero", "Exp.", "Work", "Toolkit", "Contact"];

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function scrollTo(id) {
  if (window.__lenis) {
    window.__lenis.scrollTo(id, { offset: 0 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Nav({ brand }) {
  const time = useClock();
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sections.map((s) => document.querySelector(s)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(sections.indexOf(`#${entry.target.id}`));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav ${stuck ? "is-stuck" : ""}`}>
      <a
        className="nav__brand"
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("#top");
        }}
      >
        {brand}
      </a>

      <nav className="nav__center">
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(l.href);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav__right">
        <ul className="nav-dots">
          {sections.map((s, i) => (
            <li key={s} className={active === i ? "is-active" : ""} title={labels[i]}>
              <button
                aria-label={`Go to ${labels[i]}`}
                onClick={() => scrollTo(s)}
              />
            </li>
          ))}
        </ul>
        <span className="nav__time">{time}</span>
      </div>
    </header>
  );
}
