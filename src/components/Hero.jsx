import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1];
const EXPAND_TO = 0.12;
const TYPED_FROM = 0.05;
const TYPED_TO = 0.65;
const TILE_SPEED_MS = 20000;

function Chars({ text }) {
  return text.split("").map((c, i) => (
    <span className="intro-char" key={i}>
      {c}
    </span>
  ));
}

export default function Hero({ role, tagline, status, intro, cityImage }) {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const mask = section.querySelector(".hero__pin .mask");
    const chars = Array.from(section.querySelectorAll(".mask__intro .intro-char"));
    let prev = 0;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = section.getBoundingClientRect().height;
        const p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;

        const tv = 1 - Math.min(1, Math.max(0, p / EXPAND_TO));
        const s = tv * tv * (3 - 2 * tv);
        const tb = (s * 36).toFixed(2);
        const lr = (s * 30).toFixed(2);
        if (mask) mask.style.clipPath = `inset(${tb}% ${lr}% ${tb}% ${lr}% round 20px)`;

        const ratio = (p - TYPED_FROM) / (TYPED_TO - TYPED_FROM);
        const target = Math.round(Math.min(1, Math.max(0, ratio)) * chars.length);
        const n = Math.min(chars.length, Math.max(0, target));
        if (n > prev) {
          for (let i = prev; i < n; i++) chars[i].style.opacity = "1";
        } else if (n < prev) {
          for (let i = n; i < prev; i++) chars[i].style.opacity = "0";
        }
        prev = n;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const section = ref.current;
    const mask = section.querySelector(".hero__pin .mask");
    const bg = section.querySelector(".mask__bg");
    if (!mask || !bg) return;

    let ratio = 2432 / 1728;
    const img = new Image();
    img.onload = () => {
      if (img.naturalHeight) ratio = img.naturalHeight / img.naturalWidth;
    };
    img.src = cityImage;

    let raf = 0;
    let y = 0;
    let last = performance.now();
    const tick = (now) => {
      const dt = now - last;
      last = now;
      const w = mask.clientWidth || window.innerWidth;
      const tileH = w * ratio;
      if (tileH > 0) {
        y += (tileH * dt) / TILE_SPEED_MS;
        if (y >= tileH) y -= tileH;
        bg.style.backgroundPositionY = `${-y}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [cityImage]);

  return (
    <section ref={ref} className="panel hero" id="top" data-panel={0}>
      <div className="hero__home">
        <div className="hero__top">
          <span>( PORTFOLIO )</span>
          <span>©2026 — {new Date().getFullYear()}</span>
        </div>

        <div className="hero__side">
          <span className="hero__side-label">Portfolio of — Design Engineer</span>
          <h1 className="hero__side-name">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
            >
              Hi! I'm Chengyu
            </motion.span>
          </h1>
          <p className="hero__side-role">{role}</p>
          <p className="hero__side-status">{status}</p>
        </div>

        <div className="hero__bottom">
          <p className="hero__tag">{tagline}</p>
          <span className="hero__scroll">
            <motion.span
              className="line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease, delay: 1.1 }}
            />
            SCROLL
          </span>
        </div>
      </div>

      <div className="hero__pin">
        <div className="mask">
          <div className="mask__bg" style={{ backgroundImage: `url(${cityImage})` }} />
          <div className="mask__scrim" aria-hidden />
        </div>
      </div>

      <div className="mask__intro">
        <div className="mask__intro-inner">
          <span className="mask__intro-kicker">
            <Chars text="( Introduction )" />
          </span>
          {intro.map((p, i) => (
            <p key={i}>
              <Chars text={p} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
