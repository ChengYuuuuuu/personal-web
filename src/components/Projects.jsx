import { motion } from "framer-motion";
import Panel from "./Panel";

const ease = [0.22, 1, 0.36, 1];

const item = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-8% 0px" },
  transition: { duration: 0.7, ease },
};

function Row({ label, text }) {
  return (
    <div className="project-row">
      <span className="project-row__label">{label}</span>
      <span className="project-row__text">{text}</span>
    </div>
  );
}

export default function Projects({ projects, more }) {
  return (
    <Panel id="work" index={2}>
      <div className="sec-head">
        <span className="kicker">Selected Projects</span>
        <span className="arrow">↗</span>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="project-card"
            {...item}
            transition={{ ...item.transition, delay: (i % 2) * 0.08 }}
          >
            <header className="project-card__head">
              <span className="emo" aria-hidden>
                {p.emoji}
              </span>
              <div className="project-card__titles">
                <h3 className="project-card__title">{p.title}</h3>
                <span className="project-card__sub">{p.subtitle}</span>
              </div>
              <span className="project-card__meta">
                {p.client} · {p.year}
              </span>
            </header>
            <div className="project-card__rows">
              <Row label="Context" text={p.context} />
              <Row label="Role" text={p.role} />
              <Row label="Tech" text={p.tech} />
              <Row label="Result" text={p.result} />
            </div>
          </motion.article>
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
    </Panel>
  );
}
