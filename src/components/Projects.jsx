import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Panel from "./Panel";

const ease = [0.22, 1, 0.36, 1];

const item = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-8% 0px" },
  transition: { duration: 0.7, ease },
};

function LinkIcon({ icon }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </svg>
  );
}

export default function Projects({ projects, more }) {
  const [active, setActive] = useState(null);
  const current = active != null ? projects[active] : null;
  const pageRef = useRef(null);

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
    <Panel id="work" index={2}>
      <div className="sec-head">
        <span className="kicker">Selected Projects</span>
        <span className="arrow">↗</span>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => (
          <motion.button
            key={p.title}
            type="button"
            className="project-card"
            onClick={() => setActive(i)}
            {...item}
            transition={{ ...item.transition, delay: (i % 2) * 0.06 }}
            aria-label={`View ${p.title} project details`}
          >
            <span className="project-card__main">
              <span className="project-card__copy">
                <span className="project-card__number">0{i + 1}</span>
                <span className="project-card__titles">
                  <span className="project-card__title">{p.title}</span>
                  <span className="project-card__subtitle">{p.subtitle}</span>
                </span>
                <span className="project-card__open" aria-hidden>↗</span>
              </span>
              <span className="project-card__visual" aria-hidden="true">
                {p.video ? (
                  <video src={p.video} autoPlay muted loop playsInline />
                ) : p.cover ? (
                  <img src={p.cover} alt="" loading="lazy" />
                ) : p.images?.[0] ? (
                  <img src={p.images[0]} alt="" loading="lazy" />
                ) : (
                  <span className="project-card__visual-empty">Project documentation</span>
                )}
                {((p.video && p.images?.[0]) || (p.cover && p.images?.[0]) || p.images?.[1]) && (
                  <img
                    className="project-card__alternate"
                    src={p.video || p.cover ? p.images[0] : p.images[1]}
                    alt=""
                    loading="lazy"
                  />
                )}
              </span>
            </span>
            <span className="project-card__facts">
              <span className="project-card__fact"><span>Role</span><span>{p.role}</span></span>
              <span className="project-card__fact"><span>Year</span><span>{p.year}</span></span>
              <span className="project-card__fact"><span>Tools</span><span>{p.cardTools || p.tech}</span></span>
              <span className="project-card__fact"><span>Outcome</span><span>{p.result}</span></span>
            </span>
          </motion.button>
        ))}
      </div>

      <p className="projects-more">
        More —{" "}
        {more.map((m, i) => (
          <span key={m.name}>
            <a href={m.link}>{m.name}</a>
            {i < more.length - 1 && " · "}
          </span>
        ))}
      </p>

      {createPortal(
        <AnimatePresence>
          {current && (
            <motion.div
              className="exp-page"
              ref={pageRef}
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
                className="exp-page__inner exp-page__inner--wide"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 24, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="exp-page__meta">
                  {current.client} · {current.year}
                </span>
                <h2 className="exp-page__title">{current.title}</h2>
                <p className="exp-page__summary">{current.subtitle}</p>

                <div className="project-story">
                  <section className="project-story__hero" aria-label="Project hero media">
                    {current.video ? (
                      <video src={current.video} autoPlay muted loop playsInline controls />
                    ) : current.cover ? (
                      <img src={current.cover} alt={`${current.title} final prototype`} />
                    ) : current.images?.[0] ? (
                      <img src={current.images[0]} alt={`${current.title} project`} />
                    ) : null}
                  </section>

                  <section className="project-story__section">
                    <h3>Problem</h3>
                    <p>{current.context}</p>
                  </section>
                  <section className="project-story__section">
                    <h3>My role</h3>
                    <p>{current.role}</p>
                  </section>
                  <section className="project-story__section project-story__section--media">
                    <h3>Process</h3>
                    {current.images?.length > (current.video || current.cover ? 0 : 1) ? (
                      <div className="project-story__gallery">
                        {current.images.slice(current.video || current.cover ? 0 : 1).map((src, i) => (
                          <img key={src} src={src} alt={`${current.title} process view ${i + 1}`} loading="lazy" />
                        ))}
                      </div>
                    ) : (
                      <p className="project-story__placeholder">Process documentation will be added here.</p>
                    )}
                  </section>
                  <section className="project-story__section project-story__prototype">
                    <h3>Prototype</h3>
                    <div className="project-story__prototype-content">
                      <p>{current.prototype || "Prototype imagery and iteration notes will be added here."}</p>
                      {current.prototypeVideo && (
                        <video
                          className="project-story__prototype-media"
                          src={current.prototypeVideo}
                          poster={current.cover}
                          controls
                          playsInline
                          preload="metadata"
                        />
                      )}
                    </div>
                  </section>
                  <section className="project-story__section">
                    <h3>Engineering</h3>
                    <p>{current.tech}</p>
                  </section>
                  {current.technicalNote && (
                    <section className="project-story__section">
                      <h3>Build notes</h3>
                      <p>{current.technicalNote}</p>
                    </section>
                  )}
                  <section className="project-story__section">
                    <h3>Result</h3>
                    <p>{current.result}</p>
                  </section>

                  {current.links?.length > 0 && (
                    <div className="project-links">
                      {current.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                          <LinkIcon icon={l.icon} />
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Panel>
  );
}
