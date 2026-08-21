import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Panel from "./Panel";

const ease = [0.22, 1, 0.36, 1];

const item = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-8% 0px" },
  transition: { duration: 0.7, ease },
};

export default function Experience({ id, index, kicker, groups }) {
  const [active, setActive] = useState(null);
  const flatItems = groups.flatMap((g) => g.items);
  const current = active != null ? flatItems[active] : null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (active != null) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <Panel id={id} index={index}>
      <div className="sec-head">
        <span className="kicker">{kicker}</span>
        <span className="arrow">↗</span>
      </div>
      <ul className="exp-groups">
        {groups.map((group, gi) => {
          const offset = groups.slice(0, gi).reduce((n, g) => n + g.items.length, 0);
          return (
            <li className="exp-group" key={group.label}>
              <span className="exp-group__label">{group.label}</span>
              <ul className="exp-list">
                {group.items.map((e, i) => (
                  <motion.li key={e.name} {...item} transition={{ ...item.transition, delay: i * 0.05 }}>
                    <button className="exp-row-btn" onClick={() => setActive(offset + i)} aria-haspopup="dialog">
                      <span className="exp-list__name">{e.name}</span>
                      <span className="exp-list__role">{e.role}</span>
                      <span className="exp-list__arrow" aria-hidden>
                        ↗
                      </span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>

      {createPortal(
        <AnimatePresence>
          {current && (
            <motion.div
              className="exp-page"
              data-lenis-prevent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              onClick={() => setActive(null)}
            >
              <button className="exp-page__close" onClick={() => setActive(null)}>
                CLOSE ✕
              </button>
              <motion.div
                className="exp-page__inner"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="exp-page__meta">
                  {current.years}
                  {current.location ? ` — ${current.location}` : ""}
                </span>
                <h2 className="exp-page__title">{current.name}</h2>
                <p className="exp-page__summary">{current.summary}</p>

                {current.blocks.map((b) => (
                  <div className="exp-page__block" key={b.title}>
                    <h3>{b.title}</h3>
                    <div className="exp-page__rows">
                      {b.rows.map((r) => (
                        <div className="exp-page__row" key={r.label}>
                          <span className="exp-page__row-label">{r.label}</span>
                          <span className="exp-page__row-text">{r.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Panel>
  );
}
